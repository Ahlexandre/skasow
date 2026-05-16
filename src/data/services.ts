import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  FileText,
  Handshake,
  Home,
  KeyRound,
} from 'lucide-react'

export type RealEstateService = {
  title: string
  description: string
  icon: LucideIcon
}

export const serviceSlugs: Record<string, string> = {
  Achat: 'achat',
  Location: 'location',
  Vente: 'vente',
  Investissement: 'investissement',
  'Accompagnement administratif': 'accompagnement-administratif',
}

/** Ancres sur la page d'accueil (barre de navigation) */
export const serviceNavAnchors: Record<string, string> = {
  Achat: 'acheter',
  Location: 'louer',
  Vente: 'vendre',
  Investissement: 'investir',
}

export const publicNavLinks = [
  { label: 'Accueil', to: '/', hash: null as string | null },
  { label: 'Acheter', to: '/#acheter', hash: 'acheter' },
  { label: 'Vendre', to: '/#vendre', hash: 'vendre' },
  { label: 'Louer', to: '/#louer', hash: 'louer' },
  { label: 'Investir', to: '/#investir', hash: 'investir' },
] as const

export const secondaryNavLinks = [
  { label: 'Analyse IA', to: '/pre-analysis' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
] as const

export const realEstateServices: RealEstateService[] = [
  {
    title: 'Achat',
    description:
      'Identification de biens adaptés, vérification des critères clés et orientation vers les meilleures opportunités à Bamako et dans les zones en développement.',
    icon: Home,
  },
  {
    title: 'Location',
    description:
      'Recherche de logements ou locaux professionnels, qualification du besoin et mise en relation avec des offres fiables.',
    icon: KeyRound,
  },
  {
    title: 'Vente',
    description:
      'Aide à la structuration de la mise en vente, estimation indicative et préparation des informations utiles aux prospects.',
    icon: Handshake,
  },
  {
    title: 'Investissement',
    description:
      'Lecture du potentiel locatif, analyse du quartier, niveau de risque et pistes pour sécuriser une décision patrimoniale.',
    icon: Building2,
  },
  {
    title: 'Accompagnement administratif',
    description:
      'Orientation sur les pièces, étapes et contrôles à prévoir avant de s’engager dans une transaction immobilière.',
    icon: FileText,
  },
]
