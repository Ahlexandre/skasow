import {
  Bot,
  Clock,
  Cookie,
  Database,
  FileText,
  Lock,
  Mail,
  Scale,
  ShieldCheck,
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
  { label: 'Compte utilisateur actif', value: 'Conserve tant que le compte existe' },
  { label: 'Pre-analyses immobilieres', value: '24 mois' },
  { label: 'Logs techniques', value: '30 jours' },
  { label: 'Conversations chatbot', value: 'Non conservees' },
] as const

const userRights = [
  "Droit d'acces a vos donnees",
  'Droit de rectification',
  'Droit de suppression',
  "Droit d'opposition",
  'Droit a la limitation du traitement',
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
      <p className={bodyText}>
        DS Conseil Immobilier collecte uniquement les donnees necessaires a l'accompagnement des
        prospects dans leur projet immobilier. Cette politique explique quelles informations sont
        traitees, pourquoi, pendant combien de temps et quels sont vos droits.
      </p>
    ),
  },
  {
    id: 'minimisation',
    icon: Database,
    title: 'Principe de minimisation',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Nous appliquons le principe de minimisation : seules les donnees utiles a votre
          accompagnement sont collectees, notamment :
        </p>
        <ul className={listClass}>
          <li>Identite (nom, prenom)</li>
          <li>Coordonnees (email, telephone)</li>
          <li>Type de projet immobilier</li>
          <li>Budget et surface recherchees</li>
          <li>Localisation visee (ville, quartier)</li>
          <li>Informations necessaires a la pre-analyse de votre projet</li>
        </ul>
        <p className="rounded-[12px] border border-[#C9A84C]/20 bg-[#C9A84C]/8 px-4 py-3 text-sm leading-7 text-[#DDB96A]">
          Aucune donnee sensible n'est demandee dans la pre-analyse : pas de donnees bancaires, pas
          de donnees de sante, pas de piece d'identite.
        </p>
      </div>
    ),
  },
  {
    id: 'consentement',
    icon: ShieldCheck,
    title: 'Consentement explicite',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Avant l'envoi de vos donnees à DS Conseil, vous devez donner votre accord explicite via la
          case de consentement du formulaire concerne.
        </p>
        <p className={bodyText}>
          Cette case n'est jamais cochee par defaut : vous choisissez librement de valider le
          traitement de vos informations.
        </p>
      </div>
    ),
  },
  {
    id: 'conservation',
    icon: Clock,
    title: 'Duree de conservation',
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
    title: 'Droit de suppression',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Vous pouvez demander ou effectuer la suppression de votre compte et de vos donnees
          personnelles a tout moment.
        </p>
        <p className={bodyText}>
          La suppression'est possible depuis votre espace utilisateur (section « Mes donnees ») ou
          en adressant une demande à DS Conseil via la page Contact.
        </p>
      </div>
    ),
  },
  {
    id: 'securisation',
    icon: Lock,
    title: 'Securisation des donnees',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>Nous mettons en oeuvre des mesures techniques et organisationnelles adaptees :</p>
        <ul className={listClass}>
          <li>Mots de passe hashes (jamais stockes en clair)</li>
          <li>Acces proteges par authentification</li>
          <li>API securisee avec validation des donnees cote backend</li>
          <li>HTTPS en production pour chiffrer les echanges</li>
          <li>Variables d'environnement pour les secrets et parametres sensibles</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'acces',
    icon: Users,
    title: 'Gestion des acces',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>Les droits d'acces sont strictement encadres :</p>
        <ul className={listClass}>
          <li>
            Un utilisateur connecte ne peut consulter que ses propres pre-analyses et son profil.
          </li>
          <li>
            Un administrateur DS Conseil peut consulter les dossiers transmis pour assurer le suivi
            commercial.
          </li>
          <li>
            Les acces sont separes par roles <strong className="text-[#EDEAE4]">USER</strong> et{' '}
            <strong className="text-[#EDEAE4]">ADMIN</strong>.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'chatbot',
    icon: Bot,
    title: 'Chatbot et donnees personnelles',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>Le chatbot DS Conseil est un outil d'orientation, pas un espace de stockage :</p>
        <ul className={listClass}>
          <li>Les conversations ne sont pas conservees.</li>
          <li>Le chatbot sert uniquement à orienter l'utilisateur vers les bons services.</li>
          <li>
            Nous vous invitons a ne pas saisir de donnees sensibles (sante, finances, pieces
            d'identite) dans le chatbot.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cookie',
    icon: Cookie,
    title: 'Cookie refresh token securise',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>
          Pour maintenir votre session de maniere securisee, le refresh token'est stocke dans un
          cookie dedie aux caracteristiques suivantes :
        </p>
        <ul className={listClass}>
          <li>
            Cookie securise (attribut <strong className="text-[#EDEAE4]">Secure</strong> en production)
          </li>
          <li>
            Cookie <strong className="text-[#EDEAE4]">httpOnly</strong> : inaccessible directement par
            JavaScript
          </li>
          <li>
            Attribut <strong className="text-[#EDEAE4]">SameSite</strong> regle sur Lax ou Strict selon
            le contexte
          </li>
          <li>Le token n'est pas expose dans le code front accessible au navigateur</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'droits',
    icon: Scale,
    title: 'Vos droits',
    content: (
      <div className={bodyGap}>
        <p className={bodyText}>Conformement au RGPD, vous disposez notamment des droits suivants :</p>
        <ul className={listClass}>
          {userRights.map((right) => (
            <li key={right}>{right}</li>
          ))}
        </ul>
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
          Pour toute demande liee a vos donnees personnelles (acces, rectification, suppression,
          opposition ou limitation), contactez DS Conseil via la page dediee.
        </p>
        <ButtonLink to="/contact" variant="secondary" className="mt-2 w-fit">
          Acceder a la page Contact
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
        <span className="label-mono">Donnees personnelles</span>
        <h1 className="title-display title-2xl mt-5 text-[#EDEAE4]">Politique de confidentialite</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#9E9A94]">
          Transparence sur la collecte, l'utilisation et la protection de vos informations chez DS
          Conseil Immobilier.
        </p>
        <p className="mt-3 font-mono text-[10px] tracking-[0.12em] text-[#5E5B56] uppercase">
          Derniere mise a jour : mai 2026
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
          Une question sur vos donnees ?{' '}
          <Link to="/contact" className="font-medium text-[#C9A84C] underline-offset-2 hover:underline">
            Contactez DS Conseil
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}
