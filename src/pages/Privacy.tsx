import {
  Bot,
  Clock,
  Cookie,
  Database,
  FileText,
  Lock,
  Mail,
  Scale,
  Shield,
  ShieldCheck,
  Trash2,
  UserCheck,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type PrivacySection = {
  id: string
  icon: LucideIcon
  title: string
  content: ReactNode
}

const retentionRows = [
  { label: 'Compte utilisateur actif', value: 'Conserve tant que le compte existe' },
  { label: 'Pre-analyses immobilieres', value: '12 mois' },
  { label: 'Logs techniques', value: '30 jours' },
  { label: 'Conversations chatbot', value: 'Non conservees' },
] as const

const userRights = [
  'Droit d acces a vos donnees',
  'Droit de rectification',
  'Droit de suppression',
  'Droit d opposition',
  'Droit a la limitation du traitement',
] as const

const sections: PrivacySection[] = [
  {
    id: 'introduction',
    icon: FileText,
    title: 'Introduction',
    content: (
      <p>
        DS Conseil Immobilier collecte uniquement les donnees necessaires a l accompagnement des
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
      <>
        <p>
          Nous appliquons le principe de minimisation : seules les donnees utiles a votre
          accompagnement sont collectees, notamment :
        </p>
        <ul className="privacy-list">
          <li>Identite (nom, prenom)</li>
          <li>Coordonnees (email, telephone)</li>
          <li>Type de projet immobilier</li>
          <li>Budget et surface recherchees</li>
          <li>Localisation visee (ville, quartier)</li>
          <li>Informations necessaires a la pre-analyse de votre projet</li>
        </ul>
        <p className="privacy-note">
          Aucune donnee sensible n est demandee dans la pre-analyse : pas de donnees bancaires, pas
          de donnees de sante, pas de piece d identite.
        </p>
      </>
    ),
  },
  {
    id: 'consentement',
    icon: ShieldCheck,
    title: 'Consentement explicite',
    content: (
      <>
        <p>
          Avant l envoi de vos donnees a DS Conseil, vous devez donner votre accord explicite via la
          case de consentement du formulaire concerne.
        </p>
        <p>
          Cette case n est jamais cochee par defaut : vous choisissez librement de valider le
          traitement de vos informations.
        </p>
      </>
    ),
  },
  {
    id: 'conservation',
    icon: Clock,
    title: 'Duree de conservation',
    content: (
      <div className="privacy-retention">
        {retentionRows.map((row) => (
          <div key={row.label} className="privacy-retention-row">
            <span className="privacy-retention-label">{row.label}</span>
            <span className="privacy-retention-value">{row.value}</span>
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
      <>
        <p>
          Vous pouvez demander ou effectuer la suppression de votre compte et de vos donnees
          personnelles a tout moment.
        </p>
        <p>
          La suppression est possible depuis votre espace utilisateur (section « Mes donnees ») ou
          en adressant une demande a DS Conseil via la page Contact.
        </p>
      </>
    ),
  },
  {
    id: 'securisation',
    icon: Lock,
    title: 'Securisation des donnees',
    content: (
      <>
        <p>Nous mettons en oeuvre des mesures techniques et organisationnelles adaptees :</p>
        <ul className="privacy-list">
          <li>Mots de passe hashes (jamais stockes en clair)</li>
          <li>Acces proteges par authentification</li>
          <li>API securisee avec validation des donnees cote backend</li>
          <li>HTTPS en production pour chiffrer les echanges</li>
          <li>Variables d environnement pour les secrets et parametres sensibles</li>
        </ul>
      </>
    ),
  },
  {
    id: 'acces',
    icon: Users,
    title: 'Gestion des acces',
    content: (
      <>
        <p>Les droits d acces sont strictement encadres :</p>
        <ul className="privacy-list">
          <li>
            Un utilisateur connecte ne peut consulter que ses propres pre-analyses et son profil.
          </li>
          <li>
            Un administrateur DS Conseil peut consulter les dossiers transmis pour assurer le suivi
            commercial.
          </li>
          <li>
            Les acces sont separes par roles <strong>USER</strong> et <strong>ADMIN</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'chatbot',
    icon: Bot,
    title: 'Chatbot et donnees personnelles',
    content: (
      <>
        <p>Le chatbot DS Conseil est un outil d orientation, pas un espace de stockage :</p>
        <ul className="privacy-list">
          <li>Les conversations ne sont pas conservees.</li>
          <li>Le chatbot sert uniquement a orienter l utilisateur vers les bons services.</li>
          <li>
            Nous vous invitons a ne pas saisir de donnees sensibles (sante, finances, pieces
            d identite) dans le chatbot.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookie',
    icon: Cookie,
    title: 'Cookie refresh token securise',
    content: (
      <>
        <p>
          Pour maintenir votre session de maniere securisee, le refresh token est stocke dans un
          cookie dedie aux caracteristiques suivantes :
        </p>
        <ul className="privacy-list">
          <li>Cookie securise (attribut <strong>Secure</strong> en production)</li>
          <li>Cookie <strong>httpOnly</strong> : inaccessible directement par JavaScript</li>
          <li>Attribut <strong>SameSite</strong> regle sur Lax ou Strict selon le contexte</li>
          <li>Le token n est pas expose dans le code front accessible au navigateur</li>
        </ul>
      </>
    ),
  },
  {
    id: 'droits',
    icon: Scale,
    title: 'Vos droits',
    content: (
      <>
        <p>Conformement au RGPD, vous disposez notamment des droits suivants :</p>
        <ul className="privacy-list">
          {userRights.map((right) => (
            <li key={right}>{right}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'contact',
    icon: Mail,
    title: 'Contact',
    content: (
      <>
        <p>
          Pour toute demande liee a vos donnees personnelles (acces, rectification, suppression,
          opposition ou limitation), contactez DS Conseil via la page dediee.
        </p>
        <Link to="/contact" className="privacy-cta">
          Acceder a la page Contact
        </Link>
      </>
    ),
  },
]

function PrivacySectionCard({ section }: { section: PrivacySection }) {
  const Icon = section.icon
  return (
    <article id={section.id} className="privacy-card">
      <div className="privacy-card-header">
        <span className="privacy-icon" aria-hidden="true">
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <h2 className="privacy-card-title">{section.title}</h2>
      </div>
      <div className="privacy-card-body">{section.content}</div>
    </article>
  )
}

export default function Privacy() {
  return (
    <div className="privacy-page">
      <header className="privacy-hero">
        <div className="privacy-hero-inner">
          <span className="privacy-eyebrow">
            <Shield size={14} strokeWidth={1.75} aria-hidden="true" />
            Donnees personnelles
          </span>
          <h1 className="privacy-title">Politique de confidentialite</h1>
          <p className="privacy-lead">
            Transparence sur la collecte, l utilisation et la protection de vos informations chez DS
            Conseil Immobilier.
          </p>
          <p className="privacy-updated">Derniere mise a jour : mai 2026</p>
        </div>
      </header>

      <div className="privacy-layout">
        <nav className="privacy-toc" aria-label="Sommaire">
          <p className="privacy-toc-label">Sommaire</p>
          <ol className="privacy-toc-list">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="privacy-toc-link">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="privacy-sections">
          {sections.map((section) => (
            <PrivacySectionCard key={section.id} section={section} />
          ))}
        </div>
      </div>

      <footer className="privacy-footer">
        <UserCheck size={20} strokeWidth={1.75} className="text-[#9A7B2E]" aria-hidden="true" />
        <p>
          Une question sur vos donnees ?{' '}
          <Link to="/contact" className="privacy-inline-link">
            Contactez DS Conseil
          </Link>
          .
        </p>
      </footer>
    </div>
  )
}
