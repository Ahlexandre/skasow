import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { realEstateServices } from '../data/services'

/* Contenu detaille par service */
const serviceContent: Record<string, {
  slug: string
  tagline: string
  intro: string
  howWeHelp: { title: string; desc: string }[]
  whatYouGet: string[]
  forWho: string
  cta: string
}> = {
  achat: {
    slug: 'achat',
    tagline: 'Trouvez le bien qui correspond vraiment a votre projet.',
    intro: 'Acheter un bien immobilier au Mali est une decision importante. DS Conseil vous accompagne de la definition de votre besoin jusqu a la signature, en vous evitant les pieges courants du marche local.',
    howWeHelp: [
      { title: 'Cadrage de votre projet', desc: 'Nous analysons votre budget, votre localisation cible et vos criteres non negociables pour definir un perimetre de recherche realiste.' },
      { title: 'Verification des biens', desc: 'Avant toute visite, nous verifions la coherence du prix avec le marche, la disponibilite reelle du bien et les documents de base du vendeur.' },
      { title: 'Accompagnement aux visites', desc: 'Nous vous guidons lors des visites avec une grille d evaluation : etat du bien, environnement, acces, risques potentiels.' },
      { title: 'Securisation de la transaction', desc: 'Nous vous orientons sur les documents a exiger, les etapes notariales et les points de vigilance avant tout engagement financier.' },
    ],
    whatYouGet: [
      'Un score de maturite de votre dossier achat',
      'Une liste de biens correspondant a vos criteres',
      'Un rapport de coherence budget / marche local',
      'Un accompagnement jusqu a la signature',
      'Des conseils sur les documents a verifier',
    ],
    forWho: 'Particuliers, expatries maliens, investisseurs etrangers souhaitant acquerir un bien a Bamako ou dans les grandes villes du Mali.',
    cta: 'Demarrer mon projet achat',
  },
  location: {
    slug: 'location',
    tagline: 'Trouvez le logement ou local adapte, sans mauvaise surprise.',
    intro: 'La location a Bamako peut etre complexe : offres peu fiables, prix variables, conditions floues. DS Conseil structure votre recherche et vous met en relation avec des offres verifiees.',
    howWeHelp: [
      { title: 'Definition du besoin', desc: 'Nous clarifions vos criteres : type de bien, quartier, budget mensuel, duree, usage (habitation ou professionnel).' },
      { title: 'Identification des offres', desc: 'Nous selectionnons des biens correspondant a votre profil et verifions la fiabilite des proprietaires ou agences.' },
      { title: 'Negociation des conditions', desc: 'Nous vous conseillons sur les conditions habituelles du marche : caution, avance, charges, clauses du bail.' },
      { title: 'Suivi de la prise en charge', desc: 'Nous vous accompagnons lors de l etat des lieux et verifions que les conditions convenues sont respectees.' },
    ],
    whatYouGet: [
      'Une selection de biens verifies selon vos criteres',
      'Un conseil sur les prix du marche par quartier',
      'Une aide a la negociation des conditions',
      'Un modele de bail adapte au contexte malien',
      'Un suivi jusqu a votre installation',
    ],
    forWho: 'Particuliers, familles, professionnels et entreprises cherchant un logement ou un local a louer au Mali.',
    cta: 'Demarrer ma recherche location',
  },
  vente: {
    slug: 'vente',
    tagline: 'Vendez votre bien au bon prix, avec les bons acheteurs.',
    intro: 'Vendre un bien immobilier au Mali necessite une preparation rigoureuse. DS Conseil vous aide a structurer votre dossier, estimer votre bien et qualifier les acheteurs serieux.',
    howWeHelp: [
      { title: 'Estimation du bien', desc: 'Nous realisons une estimation indicative basee sur les prix du marche local, la localisation, l etat et les caracteristiques du bien.' },
      { title: 'Preparation du dossier', desc: 'Nous vous guidons sur les documents a reunir : titre foncier, plan, identite, historique du bien, autorisations eventuelles.' },
      { title: 'Qualification des acheteurs', desc: 'Nous filtrons les contacts pour ne vous mettre en relation qu avec des acheteurs ayant un projet serieux et un budget coherent.' },
      { title: 'Accompagnement a la transaction', desc: 'Nous vous conseillons sur les etapes de la vente, les points de vigilance juridiques et les pratiques du marche malien.' },
    ],
    whatYouGet: [
      'Une estimation indicative de votre bien',
      'Une liste des documents a preparer',
      'Une mise en relation avec des acheteurs qualifies',
      'Des conseils sur la negociation et la transaction',
      'Un suivi jusqu a la finalisation de la vente',
    ],
    forWho: 'Proprietaires souhaitant vendre un bien immobilier au Mali, qu il s agisse d une maison, d un terrain ou d un local commercial.',
    cta: 'Estimer et vendre mon bien',
  },
  investissement: {
    slug: 'investissement',
    tagline: 'Investissez intelligemment dans l immobilier malien.',
    intro: 'L immobilier au Mali offre des opportunites reelles, mais aussi des risques specifiques. DS Conseil vous aide a evaluer le potentiel d un investissement avant de vous engager.',
    howWeHelp: [
      { title: 'Analyse du potentiel locatif', desc: 'Nous estimons le rendement locatif potentiel selon le quartier, le type de bien et la demande locale.' },
      { title: 'Etude du quartier', desc: 'Nous analysons le dynamisme du secteur : infrastructures, projets en cours, evolution des prix, securite.' },
      { title: 'Evaluation des risques', desc: 'Nous identifions les risques specifiques : titre foncier, litiges potentiels, contraintes administratives, liquidite du marche.' },
      { title: 'Structuration de l investissement', desc: 'Nous vous conseillons sur la meilleure approche : achat direct, construction, renovation ou acquisition de terrain.' },
    ],
    whatYouGet: [
      'Un rapport d analyse du potentiel d investissement',
      'Une estimation du rendement locatif brut',
      'Une evaluation des risques specifiques au bien',
      'Des recommandations sur la strategie d investissement',
      'Un accompagnement dans la prise de decision',
    ],
    forWho: 'Investisseurs maliens et etrangers, diaspora souhaitant placer des fonds dans l immobilier au Mali.',
    cta: 'Analyser mon projet investissement',
  },
  'gestion-immobiliere': {
    slug: 'gestion-immobiliere',
    tagline: 'Confiez la gestion de votre bien a des professionnels.',
    intro: 'Gerer un bien immobilier a distance ou en parallele d une activite professionnelle est complexe. DS Conseil prend en charge le suivi administratif et la relation avec vos locataires.',
    howWeHelp: [
      { title: 'Suivi administratif', desc: 'Nous gerons les documents, les echeances et les obligations liees a votre bien : baux, quittances, declarations.' },
      { title: 'Relation locataire', desc: 'Nous sommes l interlocuteur de vos locataires pour les demandes courantes, les reclamations et les renouvellements de bail.' },
      { title: 'Maintenance de premier niveau', desc: 'Nous coordonnons les interventions de maintenance courante et vous alertons sur les travaux necessaires.' },
      { title: 'Reporting proprietaire', desc: 'Vous recevez un rapport regulier sur l etat de votre bien, les paiements recus et les actions en cours.' },
    ],
    whatYouGet: [
      'Une gestion complete de votre bien sans stress',
      'Un reporting mensuel clair et structure',
      'Une relation locataire professionnelle',
      'Une coordination des interventions de maintenance',
      'Une disponibilite pour vos questions a tout moment',
    ],
    forWho: 'Proprietaires bailleurs, expatries, investisseurs souhaitant deleger la gestion de leur patrimoine immobilier au Mali.',
    cta: 'Confier la gestion de mon bien',
  },
  'accompagnement-administratif': {
    slug: 'accompagnement-administratif',
    tagline: 'Naviguez sereinement dans les demarches immobilieres maliennes.',
    intro: 'Les demarches administratives liees a l immobilier au Mali peuvent etre longues et complexes. DS Conseil vous oriente sur les etapes, les documents et les interlocuteurs a solliciter.',
    howWeHelp: [
      { title: 'Identification des documents', desc: 'Nous vous listons precisement les pieces a reunir selon votre situation : achat, vente, location, construction ou regularisation.' },
      { title: 'Orientation sur les procedures', desc: 'Nous vous expliquons les etapes administratives : enregistrement, titre foncier, permis de construire, mutation.' },
      { title: 'Verification des documents', desc: 'Nous verifions la conformite et la coherence des documents fournis avant toute transaction.' },
      { title: 'Mise en relation', desc: 'Nous vous orientons vers les notaires, geometres, services fonciers et autres interlocuteurs competents.' },
    ],
    whatYouGet: [
      'Une liste claire des documents necessaires a votre situation',
      'Un guide des etapes administratives a suivre',
      'Une verification de la conformite de vos documents',
      'Une mise en relation avec les professionnels competents',
      'Un suivi de l avancement de vos demarches',
    ],
    forWho: 'Toute personne engagee dans une transaction immobiliere au Mali souhaitant securiser ses demarches administratives.',
    cta: 'Securiser mes demarches',
  },
}

const slugMap: Record<string, string> = {
  achat: 'Achat',
  location: 'Location',
  vente: 'Vente',
  investissement: 'Investissement',
  'gestion-immobiliere': 'Gestion immobiliere',
  'accompagnement-administratif': 'Accompagnement administratif',
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const content = slug ? serviceContent[slug] : null
  const service = realEstateServices.find((s) => s.title === (slug ? slugMap[slug] : ''))

  if (!content || !service) {
    return (
      <div className="px-6 py-24 text-center lg:px-16">
        <p className="font-display text-2xl text-[#F0EDE8]">Service introuvable.</p>
        <Link to="/#services" className="mt-6 inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:underline">
          <ArrowLeft size={14} /> Retour aux services
        </Link>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="px-6 py-16 lg:px-16 lg:py-24">
      {/* Retour */}
      <Link to="/#services" className="mb-10 inline-flex items-center gap-2 text-sm text-[#6B6760] transition-colors hover:text-[#C9A84C]">
        <ArrowLeft size={14} strokeWidth={2} /> Tous les services
      </Link>

      {/* En-tete */}
      <div className="mb-16 border-b border-white/5 pb-12">
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-[#C9A84C]/12 text-[#C9A84C]">
            <Icon size={26} strokeWidth={1.75} />
          </div>
          <div>
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6B6760] uppercase">Service DS Conseil</span>
            <h1 className="mt-2 font-display text-4xl tracking-[-0.04em] text-[#F0EDE8] lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#A8A49E]">{content.tagline}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        {/* Colonne principale */}
        <div>
          {/* Intro */}
          <p className="text-base leading-9 text-[#A8A49E]">{content.intro}</p>

          {/* Comment DS Conseil vous aide */}
          <div className="mt-14">
            <h2 className="font-display text-2xl tracking-[-0.03em] text-[#F0EDE8]">
              Comment DS Conseil vous accompagne
            </h2>
            <div className="mt-8 flex flex-col">
              {content.howWeHelp.map((item, i, arr) => (
                <div key={item.title}
                  className={"flex gap-7 " + (i < arr.length - 1 ? "pb-9 border-b border-white/5 mb-9" : "")}>
                  <span className="font-mono text-xs text-[#6B6760] pt-1 w-6 shrink-0">0{i + 1}</span>
                  <div>
                    <p className="font-semibold leading-6 text-[#F0EDE8]">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-[#6B6760]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pour qui */}
          <div className="mt-14 rounded-[16px] p-6" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.12)' }}>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#C9A84C]/60 uppercase">Pour qui ?</span>
            <p className="mt-3 text-sm leading-7 text-[#A8A49E]">{content.forWho}</p>
          </div>
        </div>

        {/* Colonne laterale */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          {/* Ce que vous obtenez */}
          <div className="rounded-[20px] p-7" style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)' }}>
            <h3 className="font-display text-xl text-[#F0EDE8]">Ce que vous obtenez</h3>
            <div className="mt-6 flex flex-col gap-4">
              {content.whatYouGet.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#C9A84C]" strokeWidth={2} />
                  <p className="text-sm leading-6 text-[#A8A49E]">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 border-t border-white/5 pt-8">
              <Link
                to={"/contact?service=" + (slug || '')}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3.5 text-sm font-semibold text-[#0A0A0F] transition-all hover:bg-[#E2C47A] hover:shadow-[0_4px_20px_rgba(201,168,76,0.4)]"
              >
                {content.cta}
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
              <Link
                to="/pre-analysis"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#F0EDE8] transition-all hover:border-[#C9A84C]/30 hover:bg-white/4"
              >
                Faire une pre-analyse gratuite
              </Link>
            </div>
          </div>

          {/* Autres services */}
          <div className="mt-5 rounded-[16px] p-5" style={{ background: '#1C1C27', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-[10px] font-mono tracking-[0.2em] text-[#6B6760] uppercase">Autres services</p>
            <div className="mt-4 flex flex-col gap-2">
              {Object.entries(slugMap)
                .filter(([s]) => s !== slug)
                .slice(0, 4)
                .map(([s, label]) => (
                  <Link key={s} to={"/services/" + s}
                    className="flex items-center justify-between rounded-[10px] px-3 py-2.5 text-sm text-[#6B6760] transition-colors hover:bg-white/4 hover:text-[#C9A84C]">
                    {label}
                    <ArrowRight size={13} strokeWidth={2} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
