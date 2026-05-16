import {
  BUDGET_RANGES,
  MALI_LOCATION_GROUPS,
  MARITAL_OPTIONS,
  PROFESSION_OPTIONS,
  PROPERTY_TYPES,
  SURFACE_OPTIONS,
  withCurrentValue,
} from '../data/analysisFormOptions'
import { Select } from './ui'

type SelectFieldProps = {
  value: string
  onChange: (value: string) => void
  required?: boolean
  emptyLabel?: string
}

export function LocationSelect({
  value,
  onChange,
  required = false,
  emptyLabel = '-- Choisissez une localisation --',
}: SelectFieldProps) {
  const known = MALI_LOCATION_GROUPS.flatMap((group) => group.items)
  const showCurrent = value && !known.includes(value)

  return (
    <Select required={required} value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{emptyLabel}</option>
      {showCurrent && <option value={value}>{value}</option>}
      {MALI_LOCATION_GROUPS.map((group) => (
        <optgroup key={group.label} label={group.label}>
          {group.items.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </optgroup>
      ))}
    </Select>
  )
}

export function BudgetSelect({
  value,
  onChange,
  required = false,
  emptyLabel = '-- Selectionnez une tranche --',
}: SelectFieldProps) {
  const options = withCurrentValue(value, BUDGET_RANGES)

  return (
    <Select required={required} value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{emptyLabel}</option>
      {options.map((budget) => (
        <option key={budget} value={budget}>
          {budget}
        </option>
      ))}
    </Select>
  )
}

export function PropertyTypeSelect({
  value,
  onChange,
  required = false,
  emptyLabel = '-- Selectionnez un type --',
}: SelectFieldProps) {
  const options = withCurrentValue(value, PROPERTY_TYPES)

  return (
    <Select required={required} value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{emptyLabel}</option>
      {options.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </Select>
  )
}

export function SurfaceSelect({
  value,
  onChange,
  emptyLabel = '-- Non definie --',
}: Omit<SelectFieldProps, 'required'>) {
  const options = withCurrentValue(value, SURFACE_OPTIONS)

  return (
    <Select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{emptyLabel}</option>
      {options.map((surface) => (
        <option key={surface} value={surface}>
          {surface}
        </option>
      ))}
    </Select>
  )
}

export function ProfessionSelect({
  value,
  onChange,
  emptyLabel = '-- Non renseigne --',
}: Omit<SelectFieldProps, 'required'>) {
  const options = withCurrentValue(value, PROFESSION_OPTIONS)

  return (
    <Select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{emptyLabel}</option>
      {options.map((profession) => (
        <option key={profession} value={profession}>
          {profession}
        </option>
      ))}
    </Select>
  )
}

export function MaritalStatusSelect({
  value,
  onChange,
  emptyLabel = '-- Non renseigne --',
}: Omit<SelectFieldProps, 'required'>) {
  const options = withCurrentValue(value, MARITAL_OPTIONS)

  return (
    <Select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="">{emptyLabel}</option>
      {options.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </Select>
  )
}
