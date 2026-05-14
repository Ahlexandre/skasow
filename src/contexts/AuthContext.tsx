import { useMemo, useState, type ReactNode } from 'react'
import { loginUser, logoutUser, registerUser } from '../services/authService'
import type { AuthSession, User } from '../types/user'
import { readStorage, removeStorage, writeStorage } from '../utils/storage'
import { AuthContext, type AuthContextValue } from './auth'

const SESSION_KEY = 'ds-current-user'
const TOKENS_KEY = 'ds-auth-tokens'

type StoredTokens = Pick<AuthSession, 'accessToken' | 'refreshToken'>

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(() =>
    readStorage<User | null>(SESSION_KEY, null),
  )

  const persistSession = (session: AuthSession) => {
    setCurrentUser(session.user)
    writeStorage(SESSION_KEY, session.user)
    writeStorage<StoredTokens>(TOKENS_KEY, {
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
    })
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      currentUser,
      isAdmin: currentUser?.role === 'admin',
      login: async (input) => {
        const session = await loginUser(input)
        persistSession(session)
        return session.user
      },
      register: async (input) => {
        const session = await registerUser(input)
        persistSession(session)
        return session.user
      },
      logout: async () => {
        const tokens = readStorage<StoredTokens | null>(TOKENS_KEY, null)
        await logoutUser(tokens?.refreshToken)
        setCurrentUser(null)
        removeStorage(SESSION_KEY)
        removeStorage(TOKENS_KEY)
      },
    }),
    [currentUser],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
