import { createContext } from 'react'
import type { LoginInput, RegisterInput, User } from '../types/user'

export type AuthContextValue = {
  currentUser: User | null
  login: (input: LoginInput) => Promise<User>
  register: (input: RegisterInput) => Promise<User>
  logout: () => Promise<void>
  isAdmin: boolean
}

export const AuthContext = createContext<AuthContextValue | null>(null)
