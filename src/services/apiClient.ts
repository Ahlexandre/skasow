/**
 * Client HTTP partage pour toutes les requetes authentifiees vers le backend.
 * Lit le token JWT depuis le localStorage et l'injecte dans chaque requete.
 */

export const API_URL =
  (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') ?? ''

const SESSION_KEY = 'ds-current-user'
const TOKENS_KEY = 'ds-auth-tokens'

type StoredTokens = {
  accessToken: string
  refreshToken: string
}

type RefreshResponse = StoredTokens & {
  user?: {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
    role: 'USER' | 'ADMIN' | 'user' | 'admin'
    createdAt: string
    updatedAt?: string
  }
}

function getStoredTokens(): StoredTokens | null {
  try {
    const raw = localStorage.getItem(TOKENS_KEY)
    if (!raw) return null
    const tokens = JSON.parse(raw) as StoredTokens
    return tokens.accessToken && tokens.refreshToken ? tokens : null
  } catch {
    return null
  }
}

function buildJsonHeaders(init: RequestInit, token?: string) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(init.headers as Record<string, string>),
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

function buildFormHeaders(init: RequestInit, token?: string) {
  const headers: Record<string, string> = {
    ...(init.headers as Record<string, string>),
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

async function refreshTokens(): Promise<StoredTokens | null> {
  const tokens = getStoredTokens()
  if (!tokens?.refreshToken) return null

  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken: tokens.refreshToken }),
  })

  if (!response.ok) {
    localStorage.removeItem(TOKENS_KEY)
    localStorage.removeItem(SESSION_KEY)
    return null
  }

  const session = (await response.json()) as RefreshResponse
  const nextTokens = {
    accessToken: session.accessToken,
    refreshToken: session.refreshToken,
  }

  localStorage.setItem(TOKENS_KEY, JSON.stringify(nextTokens))
  if (session.user) {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        ...session.user,
        phone: session.user.phone ?? '',
        role: session.user.role === 'ADMIN' ? 'admin' : 'user',
      }),
    )
  }

  return nextTokens
}

async function sendJsonRequest(path: string, init: RequestInit, token?: string) {
  return fetch(`${API_URL}${path}`, {
    ...init,
    headers: buildJsonHeaders(init, token),
  })
}

async function sendFormRequest(path: string, init: RequestInit, token?: string) {
  return fetch(`${API_URL}${path}`, {
    ...init,
    headers: buildFormHeaders(init, token),
  })
}

async function parseApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => null)
    const message = Array.isArray(error?.message)
      ? error.message.join(' ')
      : (error?.message as string | undefined)

    throw new Error(message ?? `Erreur ${response.status}`)
  }

  if (response.status === 204) return undefined as T

  return response.json() as Promise<T>
}

export async function apiRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const tokens = getStoredTokens()
  let response = await sendJsonRequest(path, init, tokens?.accessToken)

  if (response.status === 401 && tokens?.refreshToken) {
    const refreshed = await refreshTokens()
    if (refreshed?.accessToken) {
      response = await sendJsonRequest(path, init, refreshed.accessToken)
    }
  }

  return parseApiResponse<T>(response)
}

export async function apiFormRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const tokens = getStoredTokens()
  let response = await sendFormRequest(path, init, tokens?.accessToken)

  if (response.status === 401 && tokens?.refreshToken) {
    const refreshed = await refreshTokens()
    if (refreshed?.accessToken) {
      response = await sendFormRequest(path, init, refreshed.accessToken)
    }
  }

  return parseApiResponse<T>(response)
}
