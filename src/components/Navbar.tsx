import { ArrowRight, Building2, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/useAuth'
import { primaryButton, secondaryButton } from './ui'

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Pré-analyse IA', to: '/pre-analysis' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-full px-4 py-2 text-sm font-medium transition duration-300',
    isActive
      ? 'bg-white text-[#111111] shadow-sm'
      : 'text-[#6B7280] hover:bg-white/80 hover:text-[#111111]',
  ].join(' ')

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, isAdmin, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    setIsOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-[#FAFAF8]/85 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-7xl grid-cols-2 items-center px-6 py-4 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#1E5E52] text-white shadow-sm">
            <Building2 size={18} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-[#111111]">
              DS Conseil
            </span>
            <span className="block truncate text-xs font-medium text-[#6B7280]">
              Immobilier Mali
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-neutral-200 bg-[#F5F5F3]/80 p-1 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden justify-end gap-2 lg:flex">
          <NavLink
            to={currentUser ? (isAdmin ? '/admin/dashboard' : '/mon-espace') : '/auth'}
            className={secondaryButton}
          >
            {currentUser ? (isAdmin ? 'Admin' : 'Mon espace') : 'Connexion'}
          </NavLink>
          {currentUser ? (
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#111111] px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#1E5E52] focus:outline-none focus:ring-4 focus:ring-[#111111]/10"
            >
              <LogOut size={16} aria-hidden="true" />
              Déconnexion
            </button>
          ) : (
            <Link to="/pre-analysis" className={primaryButton}>
              Pré-analyse
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          )}
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#111111] shadow-sm transition hover:bg-[#F5F5F3] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-neutral-200 bg-[#FAFAF8]/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to={currentUser ? (isAdmin ? '/admin/dashboard' : '/mon-espace') : '/auth'}
              className="mt-2 rounded-full border border-neutral-200 bg-white px-4 py-3 text-center text-sm font-semibold text-[#111111]"
              onClick={() => setIsOpen(false)}
            >
              {currentUser ? (isAdmin ? 'Dashboard admin' : 'Mon espace') : 'Connexion'}
            </NavLink>
            {!currentUser && (
              <NavLink
                to="/pre-analysis"
                className="rounded-full bg-[#1E5E52] px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Faire une pré-analyse
              </NavLink>
            )}
            {currentUser && (
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-4 py-3 text-sm font-semibold text-white"
              >
                <LogOut size={16} aria-hidden="true" />
                Déconnexion
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
