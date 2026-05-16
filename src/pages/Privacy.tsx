import {
  Bot,
  BriefcaseBusiness,
  Building2,
  Clock,
  Database,
  FileText,
  Image,
  KeyRound,
  Lock,
  Mail,
  MessageSquareText,
  Mic,
  Scale,
  ShieldCheck,
  Star,
  Trash2,
  UserCheck,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ButtonLink, IconBadge } from '../components/ui'

type PrivacySection = {
  id: string
  icon: LucideIcon
  title: string
  content: ReactNode
}

const retentionRows = [
  { label: 'Compte utilisateur actif', value: 'Conservé tant que le compte existe' },
  { label: 'Pré-analyses immobilières', value: '24 mois après la dernière mise à jour' },
  {
    label: 'Historique après suppression du compte',
    value: '3 ans, en accès admin restreint, puis suppression définitive',
  },
  { label: 'Avis utilisateur', value: "Jusqu'à suppression par l'utilisateur ou suppression du compte" },
  { label: 'Annonces immobilières', value: "Tant que l'annonce est utile au suivi commercial" },
  { label: 'Candidatures et intérêts sur annonces', value: 'Pendant le suivi du dossier, puis 3 ans maximum' },
  { label: "Images d'annonces", value: "Tant que l'annonce existe ou jusqu'à suppression par un admin" },
  { label: 'Logs techniques', value: '30 jours maximum' },
  { label: 'Messages chatbot', value: 'Non conservés en base par le service chatbot' },
  { label: 'Transcription vocale', value: 'Non conservée avant envoi volontaire du message' },
] as const

const userRights = [
  "Droit d'accès à vos données",
  'Droit de rectification',
  "Droit à l'effacement",
  "Droit d'opposition",
  'Droit à la limitation du traitement',
  'Droit à la portabilité lorsque ce droit est applicable',
  'Droit de retirer votre consentement lorsque le traitement repose sur celui-ci',
] as const

const listClass = 'mt-3 flex flex-col gap-2 pl-5 text-sm leading-7 text-[#9E9A94] [&_li]:list-disc'
const bodyText = 'text-sm leading-7 text-[#9E9A94]'
const bodyGap = 'flex flex-col gap-3'

const sections: PrivacySection[] = [
  {
    id: 'introduction',
    icon: FileText,
    title: 'Introduction',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          DS Conseil Immobilier collecte et utilise des données personnelles pour permettre la création
          de compte, la pré-analyse de projets immobiliers, la gestion des avis, la publication
          d'annonces, le suivi des candidatures et l'orientation via le chatbot.
        </p>
        <p className={bodyText}>
          Cette politique explique quelles données sont traitées, pourquoi, pendant combien de temps,
          qui peut y accéder et comment exercer vos droits.
        </p>
      </div>
    ),
  },
  {
    id: 'donnees',
    icon: Database,
    title: 'Données traitées',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>Selon les services utilisés, nous pouvons traiter les données suivantes :</p>
        <ul className={listClass}>
          <li>Identité et compte : nom, prénom, email, téléphone, rôle utilisateur et mot de passe hashé.</li>
          <li>Connexion : jetons de session, dates de création et de mise à jour du compte.</li>
          <li>
            Pré-analyse : type de projet, budget, surface, localisation, type de bien, situation
            familiale, métier, commentaire et résultats d'analyse.
          </li>
          <li>Avis : note, commentaire, auteur et date de publication.</li>
          <li>
            Annonces : informations du bien, images, prix, surface, localisation, statut et description.
          </li>
          <li>
            Candidatures : budget, métier, situation familiale, message optionnel et statut de suivi.
          </li>
          <li>Chatbot : message envoyé volontairement et court contexte nécessaire à la réponse.</li>
        </ul>
        <p className="rounded-[12px] border border-[#C9A84C]/20 bg-[#C9A84C]/8 px-4 py-3 text-sm leading-7 text-[#DDB96A]">
          Aucune donnée bancaire, donnée de santé ou pièce d'identité n'est demandée dans la
          pré-analyse, les avis ou les candidatures.
        </p>
      </div>
    ),
  },
  {
    id: 'finalites',
    icon: BriefcaseBusiness,
    title: 'Finalités',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>Les données sont utilisées pour des objectifs limités et identifiés :</p>
        <ul className={listClass}>
          <li>Créer et sécuriser les comptes utilisateur et administrateur.</li>
          <li>Permettre aux utilisateurs de modifier leurs informations personnelles.</li>
          <li>Évaluer un projet immobilier via la pré-analyse et faciliter le suivi par DS Conseil.</li>
          <li>Afficher les avis publics notés 4 ou 5 étoiles et laisser l'utilisateur modifier ou supprimer son avis.</li>
          <li>Publier des annonces immobilières et permettre aux utilisateurs intéressés de candidater.</li>
          <li>Afficher aux administrateurs la liste des personnes intéressées par une annonce.</li>
          <li>Orienter les visiteurs avec le chatbot et la reconnaissance vocale côté navigateur.</li>
          <li>Assurer la sécurité, la traçabilité et la gestion des demandes de suppression.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'bases-legales',
    icon: Scale,
    title: 'Bases légales',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>Les traitements reposent sur les bases légales suivantes :</p>
        <ul className={listClass}>
          <li>Exécution du service demandé pour le compte, la pré-analyse, les annonces et les candidatures.</li>
          <li>Consentement lorsque vous envoyez volontairement un formulaire, un avis ou un message.</li>
          <li>Intérêt légitime pour le suivi commercial, la sécurité, la prévention des abus et la traçabilité.</li>
          <li>Obligation légale ou défense de droits lorsque certaines données doivent être archivées temporairement.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'compte-session',
    icon: KeyRound,
    title: 'Compte et session',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Le compte utilisateur permet d'accéder à l'espace personnel, aux pré-analyses, aux avis et
          aux candidatures. Les mots de passe sont hashés et ne sont jamais stockés en clair.
        </p>
        <p className={bodyText}>
          L'application conserve actuellement les jetons de session dans le stockage local du
          navigateur afin de maintenir la connexion. Ces jetons doivent être protégés par HTTPS en
          production et par les mesures de sécurité du navigateur.
        </p>
        <p className={bodyText}>
          Pour renforcer encore la sécurité, une évolution future recommandée consiste à utiliser des
          cookies sécurisés et <strong className="text-[#EDEAE4]">httpOnly</strong> pour le refresh token.
        </p>
      </div>
    ),
  },
  {
    id: 'pre-analyse',
    icon: ShieldCheck,
    title: 'Pré-analyse',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          La pré-analyse calcule des indicateurs internes comme un score, un niveau de maturité, une
          priorité et des recommandations. Ces résultats servent à orienter le suivi commercial et à
          mieux comprendre le projet immobilier transmis.
        </p>
        <p className={bodyText}>
          Cette analyse ne produit pas de décision juridique, bancaire ou financière automatique. Un
          administrateur DS Conseil peut consulter le dossier pour assurer le suivi.
        </p>
      </div>
    ),
  },
  {
    id: 'avis',
    icon: Star,
    title: 'Avis publics',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Les utilisateurs connectés peuvent créer, modifier ou supprimer leur avis. Les avis notés 4
          ou 5 étoiles peuvent être affichés publiquement sur la page d'accueil et dans la page Avis.
        </p>
        <p className={bodyText}>
          Les avis notés en dessous de 4 étoiles sont conservés dans le compte de l'utilisateur mais
          ne sont pas affichés publiquement sur le site.
        </p>
      </div>
    ),
  },
  {
    id: 'annonces',
    icon: Building2,
    title: 'Annonces et candidatures',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Les administrateurs peuvent créer, modifier et supprimer des annonces immobilières. Les
          visiteurs connectés peuvent indiquer leur intérêt pour une annonce et envoyer une
          candidature.
        </p>
        <p className={bodyText}>
          La candidature peut contenir un budget, un métier, une situation familiale et un message
          optionnel. Les caractéristiques principales du bien proviennent de l'annonce elle-même.
        </p>
        <p className={bodyText}>
          Les administrateurs peuvent consulter la liste des personnes intéressées et suivre le statut
          de chaque candidature.
        </p>
      </div>
    ),
  },
  {
    id: 'images',
    icon: Image,
    title: 'Images',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Les images d'annonces sont ajoutées par les administrateurs et peuvent être visibles
          publiquement avec l'annonce correspondante. Elles ne doivent pas contenir de documents
          personnels, de justificatifs ou d'informations sensibles.
        </p>
        <p className={bodyText}>
          Une image supprimée d'une annonce n'est plus destinée à être affichée sur le site. Les
          fichiers techniques résiduels doivent être purgés lors des opérations de maintenance si
          nécessaire.
        </p>
      </div>
    ),
  },
  {
    id: 'chatbot',
    icon: Bot,
    title: 'Chatbot',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Le chatbot DS Conseil est un outil d'orientation. Il traite le message envoyé afin de
          proposer une réponse et de rediriger vers les services adaptés du site.
        </p>
        <ul className={listClass}>
          <li>Les messages chatbot ne sont pas conservés en base par le service chatbot.</li>
          <li>Un court contexte de conversation peut être envoyé pour améliorer la réponse immédiate.</li>
          <li>Il ne faut pas saisir de données sensibles dans le chatbot.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'vocal',
    icon: Mic,
    title: 'Reconnaissance vocale',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          La reconnaissance vocale du chatbot utilise les fonctionnalités disponibles dans le
          navigateur de l'utilisateur lorsque celles-ci sont prises en charge.
        </p>
        <p className={bodyText}>
          La parole est transformée en texte côté navigateur. Le texte n'est transmis à DS Conseil que
          lorsque l'utilisateur choisit d'envoyer le message au chatbot.
        </p>
      </div>
    ),
  },
  {
    id: 'conservation',
    icon: Clock,
    title: 'Durée de conservation',
    content: (
      <div className="mt-1 flex flex-col gap-2">
        {retentionRows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 rounded-[12px] border border-white/6 bg-white/[0.02] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-sm font-medium text-[#EDEAE4]">{row.label}</span>
            <span className="text-sm text-[#9E9A94]">{row.value}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'suppression',
    icon: Trash2,
    title: 'Suppression',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Vous pouvez demander ou effectuer la suppression de votre compte et de vos données depuis
          votre espace utilisateur ou via la page Contact.
        </p>
        <p className={bodyText}>
          Après suppression du compte, DS Conseil conserve un historique interne structuré pendant 3
          ans afin d'assurer la traçabilité des demandes, le suivi administratif et la protection en
          cas de contestation. Cet historique est réservé aux administrateurs autorisés.
        </p>
        <p className={bodyText}>
          L'interface admin indique le temps restant avant suppression définitive et permet la
          suppression définitive manuelle des données historisées.
        </p>
      </div>
    ),
  },
  {
    id: 'destinataires',
    icon: Users,
    title: 'Destinataires',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>Les données sont accessibles uniquement aux personnes et services nécessaires :</p>
        <ul className={listClass}>
          <li>L'utilisateur connecté pour ses propres données, avis, pré-analyses et candidatures.</li>
          <li>Les administrateurs DS Conseil pour le suivi commercial et administratif.</li>
          <li>Les prestataires techniques strictement nécessaires à l'hébergement, la base de données et la maintenance.</li>
        </ul>
        <p className={bodyText}>
          Les données ne sont pas vendues. Toute transmission à un tiers doit rester limitée à la
          finalité annoncée ou à une obligation légale.
        </p>
      </div>
    ),
  },
  {
    id: 'securite',
    icon: Lock,
    title: 'Sécurité',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>DS Conseil met en œuvre des mesures techniques et organisationnelles adaptées :</p>
        <ul className={listClass}>
          <li>Mots de passe hashés et jamais stockés en clair.</li>
          <li>Accès protégés par authentification et rôles USER / ADMIN.</li>
          <li>Validation des données côté backend.</li>
          <li>Restrictions d'accès aux espaces admin et aux données historisées.</li>
          <li>HTTPS à utiliser en production pour chiffrer les échanges.</li>
          <li>Variables d'environnement pour les secrets et paramètres sensibles.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'droits',
    icon: MessageSquareText,
    title: 'Vos droits',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>Conformément au RGPD, vous disposez notamment des droits suivants :</p>
        <ul className={listClass}>
          {userRights.map((right) => (
            <li key={right}>{right}</li>
          ))}
        </ul>
        <p className={bodyText}>
          DS Conseil répond aux demandes dans les délais prévus par le RGPD. Vous pouvez également
          introduire une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas
          respectés.
        </p>
      </div>
    ),
  },
  {
    id: 'contact',
    icon: Mail,
    title: 'Contact',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Pour toute demande liée à vos données personnelles (accès, rectification, suppression,
          opposition, limitation, portabilité ou retrait du consentement), contactez DS Conseil via la
          page dédiée.
        </p>
        <ButtonLink to="/contact" variant="secondary" className="mt-2 w-fit">
          Accéder à la page Contact
        </ButtonLink>
      </div>
    ),
  },
]

function PrivacySectionCard({ section }: { section: PrivacySection }) {
  return (
    <article
      id={section.id}
      className="scroll-mt-28 rounded-[20px] border border-white/6 p-6 sm:p-8"
      style={{ background: '#111118' }}
    >
      <div className="mb-5 flex items-center gap-4">
        <IconBadge icon={section.icon} size="sm" />
        <h2 className="font-display text-xl text-[#EDEAE4]">{section.title}</h2>
      </div>
      <div>{section.content}</div>
    </article>
  )
}

export default function Privacy() {
  return (
    <div className="px-6 py-20 lg:px-16 lg:py-28">
      <header className="mb-16 max-w-3xl border-b border-white/5 pb-12">
        <span className="label-mono">Données personnelles</span>
        <h1 className="title-display title-2xl mt-5 text-[#EDEAE4]">Politique de confidentialité</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#9E9A94]">
          Transparence sur la collecte, l'utilisation, la conservation et la protection de vos
          informations chez DS Conseil Immobilier.
        </p>
        <p className="mt-3 font-mono text-[10px] tracking-[0.12em] text-[#5E5B56] uppercase">
          Dernière mise à jour : mai 2026
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[14rem_1fr] lg:gap-14">
        <nav
          className="rounded-[16px] border border-white/6 p-5 lg:sticky lg:top-28 lg:self-start"
          style={{ background: '#111118' }}
          aria-label="Sommaire"
        >
          <p className="label-mono">Sommaire</p>
          <ol className="mt-4 flex flex-col gap-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block py-1.5 text-sm text-[#9E9A94] transition-colors hover:text-[#C9A84C]"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex flex-col gap-5">
          {sections.map((section) => (
            <PrivacySectionCard key={section.id} section={section} />
          ))}
        </div>
      </div>

      <footer className="mt-14 flex max-w-2xl items-start gap-4 border-t border-white/5 pt-10">
        <UserCheck size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-[#C9A84C]" aria-hidden="true" />
        <p className="text-sm leading-7 text-[#9E9A94]">
          Une question sur vos données ?{' '}
          <Link to="/contact" className="font-medium text-[#C9A84C] underline-offset-2 hover:underline">
            Contactez DS Conseil
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}
