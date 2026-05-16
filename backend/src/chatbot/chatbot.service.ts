import { Injectable } from '@nestjs/common';
import { ChatbotMessageDto } from './dto/chatbot-message.dto';

type Intent =
  | 'BUY'
  | 'RENT'
  | 'SELL'
  | 'INVEST'
  | 'DOCUMENTS'
  | 'PRICE'
  | 'CONTACT'
  | 'PRE_ANALYSIS'
  | 'FINANCING'
  | 'LEGAL_SECURITY'
  | 'AREA'
  | 'GENERAL';

type IntentRule = {
  intent: Intent;
  label: string;
  keywords: Record<string, number>;
  phrases?: Record<string, number>;
};

type MessageSignals = {
  normalizedMessage: string;
  normalizedContext: string;
  tokens: string[];
  contextTokens: string[];
  city?: string;
  budget?: string;
  delay?: string;
  propertyType?: string;
};

type RankedIntent = {
  intent: Intent;
  label: string;
  score: number;
};

const INTENT_RULES: IntentRule[] = [
  {
    intent: 'BUY',
    label: 'achat',
    keywords: {
      acheter: 8,
      achat: 8,
      acquerir: 7,
      acquisition: 7,
      terrain: 5,
      maison: 4,
      villa: 4,
      appartement: 4,
      parcelle: 5,
      titre: 3,
      proprietaire: 2,
      proprietaires: 2,
      achater: 6,
      achete: 6,
    },
    phrases: {
      'je veux acheter': 12,
      'cherche a acheter': 10,
      'acheter un terrain': 12,
      'acheter une maison': 10,
    },
  },
  {
    intent: 'RENT',
    label: 'location',
    keywords: {
      louer: 8,
      location: 8,
      loyer: 7,
      locatif: 4,
      locataire: 5,
      bail: 4,
      mensuel: 3,
      chambre: 3,
      chambres: 3,
      appartement: 3,
      appartements: 3,
      maison: 3,
      maisons: 3,
      louerai: 5,
    },
    phrases: {
      'je cherche une location': 12,
      'maison en location': 10,
      'appartement en location': 10,
    },
  },
  {
    intent: 'SELL',
    label: 'vente',
    keywords: {
      vente: 8,
      estimation: 6,
      estimer: 6,
      prix: 4,
      acheteur: 4,
      mandat: 3,
      valoriser: 3,
      vendre: 8,
      vends: 7,
      vend: 6,
    },
    phrases: {
      'je veux vendre': 12,
      'mettre en vente': 10,
      'estimer mon bien': 10,
    },
  },
  {
    intent: 'INVEST',
    label: 'investissement',
    keywords: {
      investir: 8,
      investissement: 8,
      rendement: 7,
      rentabilite: 7,
      locatif: 6,
      revenu: 4,
      rapport: 4,
      opportunite: 3,
      patrimoine: 3,
      investire: 6,
    },
    phrases: {
      'investir dans le locatif': 12,
      'projet investissement': 10,
      'rendement locatif': 10,
    },
  },
  {
    intent: 'DOCUMENTS',
    label: 'documents',
    keywords: {
      document: 8,
      documents: 8,
      papier: 6,
      papiers: 6,
      dossier: 5,
      piece: 4,
      pieces: 4,
      justificatif: 5,
      justificatifs: 5,
      titre: 5,
      permis: 4,
      plan: 3,
      plans: 3,
    },
    phrases: {
      'documents necessaires': 12,
      'pieces a fournir': 12,
      'papier a verifier': 10,
    },
  },
  {
    intent: 'PRICE',
    label: 'prix',
    keywords: {
      prix: 8,
      budget: 7,
      cout: 7,
      frais: 6,
      estimation: 5,
      estimer: 5,
      valeur: 5,
      cher: 3,
      combien: 6,
      tarif: 6,
      tarifs: 6,
    },
    phrases: {
      'combien ca coute': 12,
      'quel budget': 10,
      'estimation prix': 10,
    },
  },
  {
    intent: 'CONTACT',
    label: 'contact',
    keywords: {
      contact: 8,
      appeler: 7,
      appel: 7,
      telephone: 7,
      rendez: 5,
      rdv: 5,
      conseiller: 5,
      agence: 4,
      whatsapp: 6,
      mail: 4,
      email: 4,
    },
    phrases: {
      'prendre rendez vous': 12,
      'etre rappele': 10,
      'contacter ds conseil': 10,
    },
  },
  {
    intent: 'PRE_ANALYSIS',
    label: 'pre-analyse',
    keywords: {
      analyse: 8,
      preanalyse: 8,
      pre: 2,
      diagnostic: 7,
      score: 6,
      maturite: 5,
      formulaire: 4,
      priorite: 4,
      qualification: 4,
    },
    phrases: {
      'faire une pre analyse': 12,
      'lancer mon analyse': 10,
      'analyse dossier': 10,
    },
  },
  {
    intent: 'FINANCING',
    label: 'financement',
    keywords: {
      financer: 8,
      financement: 8,
      credit: 7,
      banque: 6,
      apport: 5,
      pret: 7,
      prets: 7,
      mensualite: 5,
      emprunt: 6,
    },
    phrases: {
      'besoin de financement': 12,
      'credit immobilier': 10,
      'pret bancaire': 10,
    },
  },
  {
    intent: 'LEGAL_SECURITY',
    label: 'securite juridique',
    keywords: {
      securiser: 8,
      securite: 7,
      juridique: 7,
      litige: 7,
      notaire: 6,
      titre: 6,
      foncier: 6,
      arnaque: 7,
      verifier: 5,
      verification: 5,
      controle: 4,
    },
    phrases: {
      'verifier un titre': 12,
      'securiser achat': 10,
      'eviter arnaque': 10,
    },
  },
  {
    intent: 'AREA',
    label: 'quartier',
    keywords: {
      quartier: 8,
      zone: 7,
      ville: 5,
      bamako: 5,
      localisation: 7,
      emplacement: 7,
      secteur: 5,
      aci: 4,
      sotuba: 4,
      badalabougou: 4,
      kalaban: 4,
    },
    phrases: {
      'quel quartier': 12,
      'meilleure zone': 10,
      'ou acheter': 9,
    },
  },
];

const CITY_ALIASES = [
  'bamako',
  'aci 2000',
  'badalabougou',
  'sotuba',
  'kalaban coura',
  'kati',
  'sebenikoro',
  'magnambougou',
  'hamdallaye',
  'lafiabougou',
];

const PROPERTY_TYPES = [
  'terrain',
  'parcelle',
  'maison',
  'villa',
  'appartement',
  'bureau',
  'local',
  'immeuble',
];

const STOP_WORDS = new Set([
  'a',
  'au',
  'aux',
  'avec',
  'ce',
  'ces',
  'dans',
  'de',
  'des',
  'du',
  'en',
  'et',
  'est',
  'je',
  'la',
  'le',
  'les',
  'ma',
  'me',
  'mes',
  'mon',
  'nous',
  'pour',
  'que',
  'qui',
  'sur',
  'un',
  'une',
  'vous',
  'veux',
  'voudrais',
]);

const OUT_OF_SCOPE_KEYWORDS = [
  'football',
  'recette',
  'cuisine',
  'code',
  'programmation',
  'musique',
  'film',
  'politique',
  'meteo',
  'sante',
];

@Injectable()
export class ChatbotService {
  reply(dto: ChatbotMessageDto) {
    const signals = this.extractSignals(dto.message, dto.context);
    const scores = this.scoreIntents(signals);
    const rankedIntents = this.rankIntents(scores);
    const intent = this.pickIntent(rankedIntents, signals);
    const reply = this.buildReply(intent, signals, rankedIntents);

    return {
      reply,
      intent,
      confidence: rankedIntents[0]?.score ?? 0,
      signals: {
        city: signals.city,
        budget: signals.budget,
        delay: signals.delay,
        propertyType: signals.propertyType,
      },
      suggestions: this.getIntentSuggestions(intent),
      topIntents: rankedIntents.slice(0, 3),
    };
  }

  getSuggestions() {
    return {
      suggestions: [
        'Je veux acheter un terrain a Bamako',
        'Quels documents verifier avant un achat ?',
        'Je veux estimer le prix de mon bien',
        'Je souhaite investir dans le locatif',
        'Je cherche une maison en location',
        'Je veux prendre rendez-vous',
      ],
    };
  }

  private extractSignals(message: string, context?: string): MessageSignals {
    const normalizedMessage = this.normalize(message);
    const normalizedContext = this.normalize(context ?? '');
    const tokens = this.tokenize(normalizedMessage);
    const contextTokens = this.tokenize(normalizedContext);
    const searchableText = `${normalizedMessage} ${normalizedContext}`.trim();
    const city = CITY_ALIASES.find((item) =>
      searchableText.includes(this.normalize(item)),
    );
    const propertyType = PROPERTY_TYPES.find((item) =>
      [...tokens, ...contextTokens].includes(this.normalize(item)),
    );
    const budget = this.extractBudget(normalizedMessage);
    const delay = this.extractDelay(normalizedMessage);

    return {
      normalizedMessage,
      normalizedContext,
      tokens,
      contextTokens,
      city,
      budget,
      delay,
      propertyType,
    };
  }

  private scoreIntents(signals: MessageSignals) {
    const messageTokens = signals.tokens;
    const contextTokens = signals.contextTokens;
    const scores = INTENT_RULES.reduce<Record<Intent, number>>(
      (acc, rule) => {
        acc[rule.intent] = 0;

        acc[rule.intent] += this.scoreTokens(messageTokens, rule.keywords, 1);
        acc[rule.intent] += this.scoreTokens(
          contextTokens,
          rule.keywords,
          0.35,
        );

        for (const [phrase, weight] of Object.entries(rule.phrases ?? {})) {
          if (signals.normalizedMessage.includes(this.normalize(phrase))) {
            acc[rule.intent] += weight;
          }

          if (signals.normalizedContext.includes(this.normalize(phrase))) {
            acc[rule.intent] += Math.floor(weight * 0.35);
          }
        }

        return acc;
      },
      {} as Record<Intent, number>,
    );

    if (signals.budget) {
      scores.PRICE += 3;
      scores.BUY += 1;
      scores.RENT += 1;
      scores.INVEST += 1;
    }

    if (signals.city) {
      scores.AREA += 2;
      scores.BUY += 1;
      scores.RENT += 1;
      scores.INVEST += 1;
    }

    if (signals.propertyType) {
      scores.BUY += 2;
      scores.RENT += 1;
      scores.SELL += 1;
    }

    return scores;
  }

  private scoreTokens(
    tokens: string[],
    keywords: Record<string, number>,
    multiplier: number,
  ) {
    return tokens.reduce((total, token) => {
      const directScore =
        keywords[token] ?? keywords[this.singularize(token)] ?? 0;
      if (directScore > 0) {
        return total + Math.ceil(directScore * multiplier);
      }

      const fuzzyScore = Object.entries(keywords).reduce(
        (sum, [keyword, weight]) => {
          if (keyword.length < 5 || token.length < 5) return sum;
          if (token.includes(keyword) || keyword.includes(token)) {
            return sum + Math.max(1, Math.floor((weight * multiplier) / 2));
          }

          const distance = this.levenshtein(token, keyword);
          const allowedDistance = keyword.length >= 8 ? 2 : 1;

          return distance <= allowedDistance
            ? sum + Math.max(1, Math.floor((weight * multiplier) / 2))
            : sum;
        },
        0,
      );

      return total + fuzzyScore;
    }, 0);
  }

  private rankIntents(scores: Record<Intent, number>): RankedIntent[] {
    return INTENT_RULES.map((rule) => ({
      intent: rule.intent,
      label: rule.label,
      score: scores[rule.intent] ?? 0,
    })).sort((a, b) => b.score - a.score);
  }

  private pickIntent(
    rankedIntents: RankedIntent[],
    signals: MessageSignals,
  ): Intent {
    const best = rankedIntents[0];
    const second = rankedIntents[1];

    if (!best || best.score < 4) {
      return this.isOutOfScope(signals) ? 'GENERAL' : 'GENERAL';
    }

    if (second && second.score >= 6 && best.score - second.score <= 2) {
      return 'GENERAL';
    }

    return best.intent;
  }

  private buildReply(
    intent: Intent,
    signals: MessageSignals,
    rankedIntents: RankedIntent[],
  ) {
    const confidence = rankedIntents[0]?.score ?? 0;
    const context = this.buildContextLine(signals);
    const action = this.buildActionLine(intent);
    const missingInfo = this.buildMissingInfoLine(intent, signals);
    const ambiguity = this.buildAmbiguityLine(intent, rankedIntents);
    const precision =
      confidence >= 12
        ? 'Votre demande est assez claire.'
        : 'Je peux affiner si vous me donnez la ville, le budget et le delai.';

    const replies: Record<Intent, string> = {
      BUY: [
        'Pour un achat, il faut cadrer 4 points : budget reel, quartier vise, type de bien et securite du dossier.',
        context,
        missingInfo,
        'DS Conseil peut ensuite verifier la coherence du projet et orienter vers les biens les plus adaptes.',
        precision,
        action,
      ].join('\n'),
      RENT: [
        "Pour une location, les criteres prioritaires sont le loyer mensuel, le quartier, la duree souhaitee et le niveau d'urgence.",
        context,
        missingInfo,
        'Je vous conseille aussi de preciser le nombre de pieces, le type de bien et les contraintes importantes.',
        precision,
        action,
      ].join('\n'),
      SELL: [
        "Pour une vente, la premiere etape est d'estimer le bien, verifier les documents, puis preparer une presentation claire pour les acheteurs serieux.",
        context,
        missingInfo,
        'Un prix trop haut bloque les visites, un prix trop bas fait perdre de la valeur : il faut cadrer avec le marche local.',
        action,
      ].join('\n'),
      INVEST: [
        'Pour un investissement, on regarde surtout le rendement potentiel, la demande locative, le risque du quartier et la facilite de revente.',
        context,
        missingInfo,
        'Le meilleur projet n est pas seulement le moins cher : c est celui qui garde une demande stable et un dossier securise.',
        action,
      ].join('\n'),
      DOCUMENTS: [
        'Les documents a verifier dependent du projet, mais les bases sont : identite du proprietaire, titre ou justificatif foncier, plan, historique du bien et conditions de vente ou location.',
        'Avant de payer, il faut verifier la coherence entre le vendeur, le bien et les papiers presentes.',
        action,
      ].join('\n'),
      PRICE: [
        'Pour parler prix, il faut au minimum la ville, le quartier, la surface, le type de bien et l etat general.',
        context,
        "Je peux vous aider a cadrer une fourchette, mais l'estimation fiable demande une analyse du marche local.",
        action,
      ].join('\n'),
      CONTACT: [
        'Vous pouvez passer par le formulaire de contact pour transmettre votre demande a DS Conseil.',
        'Pour aller plus vite, indiquez votre objectif, votre ville, votre budget et votre delai.',
        action,
      ].join('\n'),
      PRE_ANALYSIS: [
        "L'Analyse Dossier sert a qualifier votre projet : score de maturite, priorite commerciale, informations manquantes et prochaine action.",
        'Elle est utile si vous voulez que DS Conseil comprenne rapidement votre besoin avant un rappel.',
        action,
      ].join('\n'),
      FINANCING: [
        'Pour le financement, il faut distinguer budget souhaite, apport disponible, capacite mensuelle et frais annexes.',
        context,
        'Si le financement n est pas encore valide, l analyse peut aider a cadrer un projet realiste avant la recherche.',
        action,
      ].join('\n'),
      LEGAL_SECURITY: [
        "Pour securiser un projet immobilier, ne vous limitez pas a la visite : verifiez le proprietaire, les documents, l'historique du bien et les conditions de paiement.",
        'En cas de doute sur un titre, un plan ou un intermediaire, il faut faire controler avant tout engagement.',
        action,
      ].join('\n'),
      AREA: [
        'Le choix du quartier depend de votre objectif : habiter, louer, revendre ou investir.',
        context,
        'A Bamako, il faut comparer accessibilite, demande, budget, securite du dossier et potentiel de valorisation.',
        action,
      ].join('\n'),
      GENERAL: [
        ambiguity,
        "Je peux vous aider sur un projet d'achat, location, vente, investissement, documents, prix, financement ou securite juridique.",
        'Donnez-moi votre objectif, la ville ou le quartier, le budget et le delai pour une reponse plus precise.',
        action,
      ]
        .filter(Boolean)
        .join('\n'),
    };

    return replies[intent];
  }

  private buildContextLine(signals: MessageSignals) {
    const details = [
      signals.propertyType ? `type de bien : ${signals.propertyType}` : null,
      signals.city ? `zone : ${signals.city}` : null,
      signals.budget ? `budget : ${signals.budget}` : null,
      signals.delay ? `delai : ${signals.delay}` : null,
    ].filter(Boolean);

    return details.length > 0
      ? `Elements compris : ${details.join(', ')}.`
      : 'Elements a preciser : ville/quartier, budget, type de bien et delai.';
  }

  private buildActionLine(intent: Intent) {
    if (intent === 'CONTACT') {
      return 'Prochaine action : ouvrez la page Contact pour envoyer votre demande.';
    }

    if (intent === 'GENERAL') {
      return 'Prochaine action : vous pouvez poser une question precise ou lancer une Analyse Dossier.';
    }

    return 'Prochaine action : lancez une Analyse Dossier pour obtenir une qualification plus complete.';
  }

  private buildMissingInfoLine(intent: Intent, signals: MessageSignals) {
    const requiredByIntent: Partial<
      Record<Intent, Array<keyof MessageSignals>>
    > = {
      BUY: ['city', 'budget', 'propertyType'],
      RENT: ['city', 'budget', 'propertyType', 'delay'],
      SELL: ['city', 'propertyType'],
      INVEST: ['city', 'budget', 'propertyType'],
      PRICE: ['city', 'propertyType'],
      FINANCING: ['budget'],
      AREA: ['city'],
    };
    const labels: Record<string, string> = {
      budget: 'budget',
      city: 'ville/quartier',
      delay: 'delai',
      propertyType: 'type de bien',
    };
    const missing = (requiredByIntent[intent] ?? []).filter(
      (key) => !signals[key],
    );

    return missing.length > 0
      ? `A completer : ${missing.map((key) => labels[key]).join(', ')}.`
      : 'Les informations principales sont presentes.';
  }

  private buildAmbiguityLine(intent: Intent, rankedIntents: RankedIntent[]) {
    if (intent !== 'GENERAL') return '';

    const [first, second] = rankedIntents;
    if (
      first?.score &&
      second?.score &&
      first.score >= 6 &&
      second.score >= 6
    ) {
      return `Je detecte plusieurs sujets possibles : ${first.label} et ${second.label}.`;
    }

    return '';
  }

  private getIntentSuggestions(intent: Intent) {
    const suggestions: Record<Intent, string[]> = {
      BUY: [
        'Quel budget minimum pour acheter ?',
        'Quels documents verifier avant achat ?',
        'Lancer une Analyse Dossier',
      ],
      RENT: [
        'Quels criteres donner pour une location ?',
        'Je cherche a louer rapidement',
        'Contacter DS Conseil',
      ],
      SELL: [
        'Comment estimer mon bien ?',
        'Quels documents pour vendre ?',
        'Contacter DS Conseil',
      ],
      INVEST: [
        'Comment evaluer le rendement ?',
        'Quel quartier pour investir ?',
        'Lancer une Analyse Dossier',
      ],
      DOCUMENTS: [
        'Documents pour acheter un terrain',
        'Comment verifier un titre ?',
        'Contacter DS Conseil',
      ],
      PRICE: [
        'Comment estimer le prix ?',
        'Quel budget prevoir ?',
        'Lancer une Analyse Dossier',
      ],
      CONTACT: [
        'Je veux etre rappele',
        'Lancer une Analyse Dossier',
        'Question sur mon projet',
      ],
      PRE_ANALYSIS: [
        'Lancer une Analyse Dossier',
        'Que contient le diagnostic ?',
        'Contacter DS Conseil',
      ],
      FINANCING: [
        'Quel apport prevoir ?',
        'Comment cadrer mon budget ?',
        'Lancer une Analyse Dossier',
      ],
      LEGAL_SECURITY: [
        'Comment eviter une arnaque ?',
        'Quels papiers verifier ?',
        'Contacter DS Conseil',
      ],
      AREA: [
        'Quel quartier choisir ?',
        'Acheter ou louer a Bamako ?',
        'Lancer une Analyse Dossier',
      ],
      GENERAL: ['Je veux acheter', 'Je veux vendre', 'Je veux investir'],
    };

    return suggestions[intent];
  }

  private extractBudget(message: string) {
    const match = message.match(
      /(\d+(?:[\s.,]\d+)*)\s*(million|millions|m|fcfa|f|cfa|xof)?/,
    );

    if (!match) return undefined;

    const amount = match[1].replace(/\s/g, '');
    const unit = match[2] ? ` ${match[2]}` : '';

    return `${amount}${unit}`.trim();
  }

  private extractDelay(message: string) {
    if (/(urgent|rapidement|vite|immediat|maintenant)/.test(message)) {
      return 'urgent';
    }

    const match = message.match(
      /(dans|sous)\s+(\d+)\s+(jour|jours|semaine|semaines|mois|an|ans)/,
    );

    return match ? `${match[2]} ${match[3]}` : undefined;
  }

  private tokenize(value: string) {
    return value
      .split(/\s+/)
      .map((token) => token.trim())
      .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
  }

  private singularize(token: string) {
    if (token.length > 4 && token.endsWith('s')) return token.slice(0, -1);
    return token;
  }

  private isOutOfScope(signals: MessageSignals) {
    return OUT_OF_SCOPE_KEYWORDS.some((keyword) =>
      signals.normalizedMessage.includes(keyword),
    );
  }

  private levenshtein(a: string, b: string) {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
      Array.from({ length: b.length + 1 }, (_, j) =>
        i === 0 ? j : j === 0 ? i : 0,
      ),
    );

    for (let i = 1; i <= a.length; i += 1) {
      for (let j = 1; j <= b.length; j += 1) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost,
        );
      }
    }

    return matrix[a.length][b.length];
  }

  private normalize(value: string) {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
