import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  ClipboardCheck,
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
    title: 'Gestion immobilière',
    description:
      'Suivi administratif, relation locataire, maintenance de premier niveau et reporting simple pour les propriétaires.',
    icon: ClipboardCheck,
  },
  {
    title: 'Accompagnement administratif',
    description:
      'Orientation sur les pièces, étapes et contrôles à prévoir avant de s’engager dans une transaction immobilière.',
    icon: FileText,
  },
]
