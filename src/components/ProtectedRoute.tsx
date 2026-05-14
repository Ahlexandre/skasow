import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/useAuth'

type ProtectedRouteProps = {
  children: ReactNode
  adminOnly?: boolean
}

export default function ProtectedRoute({
  children,
  adminOnly = false,
}: ProtectedRouteProps) {
  const { currentUser, isAdmin } = useAuth()
  const location = useLocation()

  if (!currentUser) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/mon-espace" replace />
  }

  return children
}
