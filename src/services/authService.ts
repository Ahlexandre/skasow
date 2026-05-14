import type { AuthSession, LoginInput, RegisterInput, User } from '../types/user'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

type ApiUser = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  role: 'USER' | 'ADMIN'
  createdAt: string
  updatedAt?: string
}

type AuthResponse = {
  accessToken: string
  refreshToken: string
  user: ApiUser
}

function mapUser(user: ApiUser): User {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone ?? '',
    role: user.role === 'ADMIN' ? 'admin' : 'user',
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}

async function request<T>(path: string, init: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  })

  if (!response.ok) {
    const error = await response.json().catch(() => null)
    const message = Array.isArray(error?.message)
      ? error.message.join(' ')
      : error?.message

    throw new Error(message ?? 'Requête impossible.')
  }

  return response.json() as Promise<T>
}

export async function loginUser(input: LoginInput): Promise<AuthSession> {
  const response = await request<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: input.email.trim().toLowerCase(),
      password: input.password,
    }),
  })

  return {
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
    user: mapUser(response.user),
  }
}

export async function registerUser(input: RegisterInput): Promise<AuthSession> {
  if (input.password !== input.confirmPassword) {
    throw new Error('Les mots de passe ne correspondent pas.')
  }

  const response = await request<AuthResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      firstName: input.firstName.trim(),
      lastName: input.lastName.trim(),
      email: input.email.trim().toLowerCase(),
      phone: input.phone.trim(),
      password: input.password,
    }),
  })

  return {
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
    user: mapUser(response.user),
  }
}

export async function logoutUser(refreshToken?: string): Promise<void> {
  await request<{ success: boolean }>('/auth/logout', {
    method: 'POST',
    body: JSON.stringify({ refreshToken }),
  }).catch(() => undefined)
}
