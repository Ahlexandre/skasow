import type { MaritalStatusLabel } from '../types/analysis'

export const MARITAL_OPTIONS: MaritalStatusLabel[] = [
  'Célibataire',
  'Marié(e)',
  'En couple',
  'Divorcé(e)',
  'Veuf(ve)',
  'Je préfère ne pas répondre',
]

export const PROFESSION_OPTIONS = [
  'Fonctionnaire',
  'Commerçant(e)',
  'Entrepreneur / Chef d\'entreprise',
  'Salarié(e) du privé',
  'Profession libérale',
  'Militaire / Forces de sécurité',
  'Enseignant(e)',
  'Artisan',
  'Étudiant(e)',
  'Retraité(e)',
  'Autre',
]

export const MALI_LOCATIONS = [
  'Bamako — Commune I (Djélibougou, Boulkassoumbougou)',
  'Bamako — Commune II (Niarela, Quinzambougou, TSF)',
  'Bamako — Commune III (Bamako-Coura, Médina-Coura, Missira)',
  'Bamako — Commune IV (Lafiabougou, Taliko, Sikoroni)',
  'Bamako — Commune V (Badalabougou, Kalaban-Coura, Sabalibougou)',
  'Bamako — Commune VI (Sogoniko, Magnambougou, Niamakoro)',
  'ACI 2000 (Hamdallaye)',
  'Badalabougou',
  'Kalaban-Coura',
  'Kalaban-Coura Extension',
  'Sotuba',
  'Sotuba ACI',
  'Missabougou',
  'Sénou',
  'Yirimadio',
  'Faladiè',
  'Sabalibougou',
  'Magnambougou',
  'Niamakoro',
  'Banconi',
  'Sikoroni',
  'Lafiabougou',
  'Djicoroni Para',
  'Garantibougou',
  'Korofina',
  'Niarela',
  'Quinzambougou',
  'Hippodrome',
  'Point G',
  'Boulkassoumbougou',
  'Titibougou',
  'Dialakorodji',
  'Mountougoula',
  'Kabala',
  'Sikasso',
  'Mopti',
  'Ségou',
  'Kayes',
  'Koutiala',
  'Gao',
  'Tombouctou',
  'Kidal',
  'San',
  'Bougouni',
  'Kati',
  'Kolokani',
  'Niono',
  'Markala',
  'Dioïla',
  'Fana',
  'Kangaba',
  'Yanfolila',
  'Kolondiéba',
]

export const MALI_LOCATION_GROUPS = [
  { label: 'Bamako — Communes', items: MALI_LOCATIONS.slice(0, 6) },
  { label: 'Bamako — Quartiers', items: MALI_LOCATIONS.slice(6, 32) },
  { label: 'Autres villes du Mali', items: MALI_LOCATIONS.slice(32) },
]

type RangeDefinition = {
  label: string
  min?: number
  max?: number
}

export const BUDGET_RANGE_DEFINITIONS: RangeDefinition[] = [
  { max: 5_000_000, label: 'Moins de 5 000 000 FCFA' },
  { min: 5_000_000, max: 10_000_000, label: '5 000 000 — 10 000 000 FCFA' },
  { min: 10_000_000, max: 20_000_000, label: '10 000 000 — 20 000 000 FCFA' },
  { min: 20_000_000, max: 35_000_000, label: '20 000 000 — 35 000 000 FCFA' },
  { min: 35_000_000, max: 50_000_000, label: '35 000 000 — 50 000 000 FCFA' },
  { min: 50_000_000, max: 75_000_000, label: '50 000 000 — 75 000 000 FCFA' },
  { min: 75_000_000, max: 100_000_000, label: '75 000 000 — 100 000 000 FCFA' },
  { min: 100_000_000, max: 150_000_000, label: '100 000 000 — 150 000 000 FCFA' },
  { min: 150_000_000, max: 250_000_000, label: '150 000 000 — 250 000 000 FCFA' },
  { min: 250_000_000, label: 'Plus de 250 000 000 FCFA' },
  { label: 'Budget à définir avec DS Conseil' },
]

export const BUDGET_RANGES = BUDGET_RANGE_DEFINITIONS.map((item) => item.label)

export const PROPERTY_TYPES = [
  'Maison individuelle',
  'Villa',
  'Appartement',
  'Studio',
  'Terrain nu',
  'Terrain viabilisé',
  'Local commercial',
  'Bureau',
  'Entrepôt / Hangar',
  'Immeuble de rapport',
  'Duplex',
  'Autre',
]

export const SURFACE_RANGE_DEFINITIONS: RangeDefinition[] = [
  { max: 50, label: 'Moins de 50 m²' },
  { min: 50, max: 100, label: '50 — 100 m²' },
  { min: 100, max: 200, label: '100 — 200 m²' },
  { min: 200, max: 300, label: '200 — 300 m²' },
  { min: 300, max: 500, label: '300 — 500 m²' },
  { min: 500, max: 1_000, label: '500 — 1 000 m²' },
  { min: 1_000, label: 'Plus de 1 000 m²' },
  { label: 'A definir avec DS Conseil' },
]

export const SURFACE_OPTIONS = SURFACE_RANGE_DEFINITIONS.map((item) => item.label)

function extractNumbers(value: string) {
  return value
    .match(/\d[\d\s]*/g)
    ?.map((item) => Number(item.replace(/\s/g, '')))
    .filter((item) => Number.isFinite(item) && item > 0)
}

export function parseRangeLabel(value: string, definitions: RangeDefinition[]) {
  const label = value.trim()
  if (!label) return undefined

  const exact = definitions.find((item) => item.label === label)
  if (exact) {
    if (exact.min === undefined && exact.max === undefined) return undefined
    return resolveRangeNumericValue(exact)
  }

  const numbers = extractNumbers(label)
  if (!numbers?.length) return undefined
  if (numbers.length === 1) return numbers[0]
  return Math.round((numbers[0] + numbers[1]) / 2)
}

function resolveRangeNumericValue(range: RangeDefinition) {
  if (range.min !== undefined && range.max !== undefined) {
    return Math.round((range.min + range.max) / 2)
  }
  if (range.max !== undefined) return Math.max(0, range.max - 1)
  if (range.min !== undefined) return range.min
  return undefined
}

export function parseBudgetRangeLabel(value: string) {
  return parseRangeLabel(value, BUDGET_RANGE_DEFINITIONS)
}

export function parseSurfaceRangeLabel(value: string) {
  return parseRangeLabel(value, SURFACE_RANGE_DEFINITIONS)
}

export function formatNumericToRangeLabel(
  value: number | null | undefined,
  definitions: RangeDefinition[],
) {
  if (value === null || value === undefined || value < 0) return ''

  const openEnded = definitions.find((item) => item.min === undefined && item.max === undefined)
  const matched = definitions.find((item) => {
    if (item.min === undefined && item.max === undefined) return false
    if (item.min === undefined && item.max !== undefined) return value < item.max
    if (item.max === undefined && item.min !== undefined) return value >= item.min
    return item.min !== undefined && item.max !== undefined && value >= item.min && value <= item.max
  })

  return matched?.label ?? openEnded?.label ?? ''
}

export function formatBudgetFromNumber(value?: number | null) {
  return formatNumericToRangeLabel(value, BUDGET_RANGE_DEFINITIONS)
}

export function formatSurfaceFromNumber(value?: number | null) {
  return formatNumericToRangeLabel(value, SURFACE_RANGE_DEFINITIONS)
}

export function withCurrentValue(value: string, options: readonly string[]) {
  if (!value || options.includes(value)) return options
  return [value, ...options]
}
