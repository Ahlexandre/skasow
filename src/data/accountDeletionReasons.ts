export type AccountDeletionReasonId =
  | 'bad_service'
  | 'no_longer_using'
  | 'privacy'
  | 'project_completed'
  | 'too_many_communications'
  | 'other'

export const accountDeletionReasons: Array<{
  id: AccountDeletionReasonId
  label: string
}> = [
  { id: 'bad_service', label: 'Mauvais service' },
  { id: 'no_longer_using', label: "Je n'utilise plus le service" },
  { id: 'privacy', label: 'Protection de mes donnees personnelles' },
  { id: 'project_completed', label: 'Mon projet immobilier est termine' },
  { id: 'too_many_communications', label: 'Trop de sollicitations' },
  { id: 'other', label: 'Autre' },
]

export function buildAccountDeletionReason(
  reasonId: AccountDeletionReasonId,
  otherDetail?: string,
): string {
  const option = accountDeletionReasons.find((entry) => entry.id === reasonId)
  if (reasonId === 'other') {
    const detail = otherDetail?.trim()
    return detail ? `Autre : ${detail}` : 'Autre'
  }
  return option?.label ?? reasonId
}
