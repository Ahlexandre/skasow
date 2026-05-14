/**
 * Client HTTP partagé pour toutes les requêtes authentifiées vers le backend.
 * Lit le token JWT depuis le localStorage et l'injecte dans chaque requête.
 */

const API_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') ?? ''

const TOKENS_KEY = 'ds-auth-tokens'

type StoredTokens = {
  accessToken: string
  refreshToken: string
}

function getAccessToken(): string | null {
  try {
    const raw = localStorage.getItem(TOKENS_KEY)
    if (!raw) return null
    const tokens = JSON.parse(raw) as StoredTokens
    return tokens.accessToken ?? null
  } catch {
    return null
  }
}

export async function apiRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const token = getAccessToken()

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(init.headers as Record<string, string>),
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => null)
    const message = Array.isArray(error?.message)
      ? error.message.join(' ')
      : (error?.message as string | undefined)

    throw new Error(message ?? `Erreur ${response.status}`)
  }

  // 204 No Content : pas de corps à parser
  if (response.status === 204) return undefined as T

  return response.json() as Promise<T>
}
