import { ArrowRight, Building2, History, Home, LayoutDashboard, LogOut, Menu, MessageCircle, Phone, Shield, ShieldCheck, User, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { publicNavLinks, secondaryNavLinks } from '../data/services'
import { useAuth } from '../contexts/useAuth'

function navLinkClass(active: boolean) {
  return (
    'whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors duration-150 ' +
    (active ? 'text-[#C9A84C]' : 'text-[#5E5B56] hover:text-[#EDEAE4]')
  )
}

function mobileNavLinkClass(active: boolean) {
  return (
    'py-4 text-2xl font-medium transition-colors border-b border-white/5 ' +
    (active ? 'text-[#C9A84C]' : 'text-[#EDEAE4]')
  )
}

const sidebarLinks = [
  { label: 'Vue globale', to: '/admin/dashboard', icon: LayoutDashboard, adminOnly: true },
  { label: 'Annonces', to: '/admin/annonces', icon: Building2, adminOnly: true },
  { label: 'Historique', to: '/admin/historique', icon: History, adminOnly: true },
  { label: 'Mon espace', to: '/mon-espace', icon: User },
  { label: 'Mes donnees', to: '/mes-donnees', icon: Shield, userOnly: true },
  { label: 'Utilisateurs', to: '/admin/users',      icon: ShieldCheck, adminOnly: true },
  { label: 'Chatbot',     to: '/chatbot',           icon: MessageCircle },
  { label: 'Contact',     to: '/contact',           icon: Phone },
]

type NavbarProps = { sidebar?: boolean }

export default function Navbar({ sidebar = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, isAdmin, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const visibleSecondaryNavLinks = currentUser
    ? secondaryNavLinks
    : secondaryNavLinks.filter((link) => link.to !== '/pre-analysis')

  const handleLogout = async () => { await logout(); setIsOpen(false); navigate('/') }

  const isHomeLinkActive = (hash: string | null) => {
    if (location.pathname !== '/') return false
    const currentHash = location.hash.replace('#', '')
    if (hash === null) return !currentHash
    return currentHash === hash
  }

  const renderHomeNavLink = (link: (typeof publicNavLinks)[number], mobile = false) => {
    const active = isHomeLinkActive(link.hash)
    return (
      <Link
        key={link.label}
        to={link.to}
        className={mobile ? mobileNavLinkClass(active) : navLinkClass(active)}
        onClick={mobile ? () => setIsOpen(false) : undefined}
      >
        {link.label}
      </Link>
    )
  }

  /* Sidebar dashboard */
  if (sidebar) {
    return (
      <aside className="hidden w-[210px] shrink-0 flex-col border-r border-white/5 bg-[#09090E] lg:flex" style={{ minHeight: '100vh' }}>
        <Link to="/" className="mx-3 mt-4 flex justify-center transition-opacity hover:opacity-85" aria-label="DS Conseil Immobilier">
          <img
            src="/logo_ds_conseil.png"
            alt="DS Conseil Immobilier"
            className="h-20 w-auto max-w-[150px] rounded-[10px] object-contain"
          />
        </Link>
        <Link
          to="/"
          className="mx-3 mb-4 mt-3 flex items-center justify-center gap-2 rounded-[10px] border border-white/8 bg-white/[0.03] px-3 py-2.5 text-sm font-medium text-[#EDEAE4] transition hover:border-[#C9A84C]/25 hover:bg-[#C9A84C]/8 hover:text-[#C9A84C]"
        >
          <Home size={15} strokeWidth={1.9} />
          Retour à l'accueil
        </Link>
        <div className="h-px bg-white/5" />
        <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4">
          {sidebarLinks
            .filter((link) => {
              if (link.adminOnly && !isAdmin) return false
              if ('userOnly' in link && link.userOnly && isAdmin) return false
              return true
            })
            .map(({ label, to, icon: Icon }) => {
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
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-6 py-3 lg:px-8 2xl:px-16">

        <Link to="/" className="group flex shrink-0 items-center" onClick={() => setIsOpen(false)} aria-label="DS Conseil Immobilier">
          <img
            src="/logo_ds_conseil.png"
            alt="DS Conseil Immobilier"
            className="h-14 w-auto max-w-[150px] rounded-[8px] object-contain transition-opacity group-hover:opacity-85"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-white/6 bg-white/[0.02] px-5 py-2 xl:flex">
          {publicNavLinks.map((link) => renderHomeNavLink(link))}
          {visibleSecondaryNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => navLinkClass(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-3 xl:flex">
          {currentUser ? (
            <>
              <NavLink to={isAdmin ? '/admin/dashboard' : '/mon-espace'}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-[#5E5B56] transition-colors hover:text-[#EDEAE4]">
                {isAdmin ? 'Admin' : 'Mon espace'}
              </NavLink>
              <button type="button" onClick={handleLogout}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-[#5E5B56] transition-colors hover:text-red-400">
                Deconnexion
              </button>
            </>
          ) : (
            <>
              <NavLink to="/auth" className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-[#5E5B56] transition-colors hover:text-[#EDEAE4]">
                Connexion
              </NavLink>
              <Link to="/pre-analysis"
                className="inline-flex min-h-[42px] items-center gap-2 whitespace-nowrap rounded-full bg-[#C9A84C] px-4 py-2 text-sm font-semibold text-[#09090E] transition-all hover:bg-[#DDB96A] hover:shadow-[0_4px_24px_rgba(201,168,76,0.22)]">
                Analyse gratuite <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </>
          )}
        </div>

        <button type="button" aria-label="Menu"
          className="ml-auto flex h-9 w-9 items-center justify-center text-[#9E9A94] transition hover:text-[#EDEAE4] xl:hidden"
          onClick={() => setIsOpen((v) => !v)}>
          {isOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[81px] z-50 xl:hidden">
          <div className="absolute inset-0 bg-[#09090E]/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div
            className="relative mx-3 mt-3 flex max-h-[calc(100vh-6.5rem)] flex-col overflow-y-auto rounded-[22px] border border-[#C9A84C]/18 bg-[#111118] px-5 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
            style={{ backgroundImage: 'linear-gradient(145deg, rgba(201,168,76,0.10), rgba(17,17,24,0.98) 34%, rgba(15,15,22,0.98))' }}
          >
          <nav className="flex flex-col gap-1">
            {publicNavLinks.map((link) => renderHomeNavLink(link, true))}
            {visibleSecondaryNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => mobileNavLinkClass(isActive)}
                onClick={() => setIsOpen(false)}
              >
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
        </div>
      )}
    </header>
  )
}
