type RangeDefinition = {
  label: string;
  min?: number;
  max?: number;
};

const BUDGET_RANGE_DEFINITIONS: RangeDefinition[] = [
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
];

const SURFACE_RANGE_DEFINITIONS: RangeDefinition[] = [
  { max: 50, label: 'Moins de 50 m²' },
  { min: 50, max: 100, label: '50 — 100 m²' },
  { min: 100, max: 200, label: '100 — 200 m²' },
  { min: 200, max: 300, label: '200 — 300 m²' },
  { min: 300, max: 500, label: '300 — 500 m²' },
  { min: 500, max: 1_000, label: '500 — 1 000 m²' },
  { min: 1_000, label: 'Plus de 1 000 m²' },
  { label: 'A definir avec DS Conseil' },
];

function extractNumbers(value: string) {
  return value
    .match(/\d[\d\s]*/g)
    ?.map((item) => Number(item.replace(/\s/g, '')))
    .filter((item) => Number.isFinite(item) && item > 0);
}

function resolveRangeNumericValue(range: RangeDefinition) {
  if (range.min !== undefined && range.max !== undefined) {
    return Math.round((range.min + range.max) / 2);
  }
  if (range.max !== undefined) return Math.max(0, range.max - 1);
  if (range.min !== undefined) return range.min;
  return undefined;
}

function parseRangeLabel(value: string | undefined, definitions: RangeDefinition[]) {
  const label = value?.trim();
  if (!label) return undefined;

  const exact = definitions.find((item) => item.label === label);
  if (exact) {
    if (exact.min === undefined && exact.max === undefined) return undefined;
    return resolveRangeNumericValue(exact);
  }

  const numbers = extractNumbers(label);
  if (!numbers?.length) return undefined;
  if (numbers.length === 1) return numbers[0];
  return Math.round((numbers[0] + numbers[1]) / 2);
}

export function parseBudgetRangeLabel(value?: string) {
  return parseRangeLabel(value, BUDGET_RANGE_DEFINITIONS);
}

export function parseSurfaceRangeLabel(value?: string) {
  return parseRangeLabel(value, SURFACE_RANGE_DEFINITIONS);
}

export function resolveBudgetRange(
  budgetRange?: string,
  budget?: number,
): { budgetRange: string | null; budget: number | undefined } {
  const label = budgetRange?.trim() || null;
  const numeric = budget ?? parseBudgetRangeLabel(label ?? undefined);
  return { budgetRange: label, budget: numeric };
}

export function resolveSurfaceRange(
  surfaceRange?: string,
  surface?: number,
): { surfaceRange: string | null; surface: number | undefined } {
  const label = surfaceRange?.trim() || null;
  const numeric = surface ?? parseSurfaceRangeLabel(label ?? undefined);
  return { surfaceRange: label, surface: numeric };
}
