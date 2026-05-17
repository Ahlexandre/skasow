export function digitsOnly(value: string) {
  return value.replace(/\D/g, '')
}

export function toMaliPhone(value: string) {
  const digits = digitsOnly(value)
  return digits ? `+223 ${digits}` : ''
}

export const numericPhoneInputProps = {
  inputMode: 'numeric',
  pattern: '[0-9]*',
} as const
