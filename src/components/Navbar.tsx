import { ArrowRight, Building2, LayoutDashboard, LogOut, Menu, MessageCircle, Phone, Settings, User, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/useAuth'

const publicLinks = [
  { label: 'Services',   to: '/services' },
  { label: 'Analyse IA', to: '/pre-analysis' },
  { label: 'FAQ',        to: '/faq' },
  { label: 'Contact',    to: '/contact' },
]

const sidebarLinks = [
  { label: 'Vue globale', to: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Mon espace',  to: '/mon-espace',       icon: User },
  { label: 'Chatbot',     to: '/chatbot',           icon: MessageCircle },
  { label: 'Contact',     to: '/contact',           icon: Phone },
  { label: 'Parametres',  to: '/admin/dashboard',   icon: Settings },
]

type NavbarProps = { sidebar?: boolean }

export default function Navbar({ sidebar = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, isAdmin, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = async () => { await logout(); setIsOpen(false); navigate('/') }

  /* Sidebar dashboard */
  if (sidebar) {
    return (
      <aside className="hidden w-[210px] shrink-0 flex-col border-r border-white/5 bg-[#09090E] lg:flex" style={{ minHeight: '100vh' }}>
        <Link to="/" className="flex items-center gap-3 px-5 py-6 transition-opacity hover:opacity-70">
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#C9A84C] text-[#09090E]">
            <Building2 size={15} strokeWidth={2} />
          </span>
          <span className="text-sm font-semibold text-[#EDEAE4]">DS Conseil</span>
        </Link>
        <div className="h-px bg-white/5" />
        <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4">
          {sidebarLinks.map(({ label, to, icon: Icon }) => {
            const active = location.pathname === to
            return (
              <Link key={label} to={to}
                className={'flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-sm transition-all duration-150 ' + (
                  active ? 'bg-[#C9A84C]/10 text-[#C9A84C] font-medium' : 'text-[#5E5B56] hover:bg-white/4 hover:text-[#9E9A94]'
                )}>
                <Icon size={15} strokeWidth={active ? 2 : 1.75} />
                {label}
              </Link>
            )
          })}
        </nav>
        <div className="h-px bg-white/5" />
        <div className="px-3 py-4">
          {currentUser && (
            <div className="mb-2 rounded-[10px] bg-white/3 px-3 py-3">
              <p className="text-xs font-semibold text-[#EDEAE4]">{currentUser.firstName} {currentUser.lastName}</p>
              <p className="mt-0.5 truncate text-[10px] text-[#5E5B56]">{currentUser.email}</p>
            </div>
          )}
          <button type="button" onClick={handleLogout}
            className="flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-sm text-[#5E5B56] transition hover:bg-red-500/8 hover:text-red-400">
            <LogOut size={14} strokeWidth={1.75} /> Deconnexion
          </button>
        </div>
      </aside>
    )
  }

  /* Top bar public */
  return (
    <header className="sticky top-0 z-40"
      style={{ background: 'rgba(9,9,14,0.88)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-16">

        <Link to="/" className="group flex items-baseline gap-2.5" onClick={() => setIsOpen(false)}>
          <span className="title-display text-lg text-[#EDEAE4] transition-colors group-hover:text-[#C9A84C]">DS</span>
          <span className="text-sm text-[#5E5B56]">Conseil Immobilier</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {publicLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}
              className={({ isActive }) =>
                'text-sm transition-colors duration-150 ' + (isActive ? 'text-[#C9A84C]' : 'text-[#5E5B56] hover:text-[#EDEAE4]')
              }>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          {currentUser ? (
            <>
              <NavLink to={isAdmin ? '/admin/dashboard' : '/mon-espace'}
                className="text-sm text-[#5E5B56] transition-colors hover:text-[#EDEAE4]">
                {isAdmin ? 'Admin' : 'Mon espace'}
              </NavLink>
              <button type="button" onClick={handleLogout}
                className="text-sm text-[#5E5B56] transition-colors hover:text-red-400">
                Deconnexion
              </button>
            </>
          ) : (
            <>
              <NavLink to="/auth" className="text-sm text-[#5E5B56] transition-colors hover:text-[#EDEAE4]">
                Connexion
              </NavLink>
              <Link to="/pre-analysis"
                className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-5 py-2.5 text-sm font-semibold text-[#09090E] transition-all hover:bg-[#DDB96A] hover:shadow-[0 4px 24px rgba(201,168,76,0.22)]">
                Analyse gratuite <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </>
          )}
        </div>

        <button type="button" aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center text-[#9E9A94] transition hover:text-[#EDEAE4] lg:hidden"
          onClick={() => setIsOpen((v) => !v)}>
          {isOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[57px] z-50 flex flex-col px-6 py-10 lg:hidden"
          style={{ background: '#09090E' }}>
          <nav className="flex flex-col gap-1">
            {publicLinks.map((link) => (
              <NavLink key={link.to} to={link.to}
                className={({ isActive }) =>
                  'py-4 text-2xl font-medium transition-colors border-b border-white/5 ' + (isActive ? 'text-[#C9A84C]' : 'text-[#EDEAE4]')
                }
                onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            {currentUser ? (
              <button type="button" onClick={handleLogout}
                className="rounded-full border border-red-500/20 bg-red-500/8 py-3 text-sm font-medium text-red-400">
                Deconnexion
              </button>
            ) : (
              <>
                <NavLink to="/auth" onClick={() => setIsOpen(false)}
                  className="rounded-full border border-white/10 py-3 text-center text-sm font-medium text-[#EDEAE4]">
                  Connexion
                </NavLink>
                <NavLink to="/pre-analysis" onClick={() => setIsOpen(false)}
                  className="rounded-full bg-[#C9A84C] py-3 text-center text-sm font-semibold text-[#09090E]">
                  Analyse gratuite
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
