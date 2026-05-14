import { useState, type FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Input, labelClass, primaryButton } from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import type { LoginInput, RegisterInput } from '../types/user'
import { cn } from '../utils/cn'

type AuthMode = 'login' | 'register'
const initialRegister: RegisterInput = { firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' }
const initialLogin: LoginInput = { email: '', password: '' }

export default function Auth() {
  const { login, register } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [mode, setMode] = useState<AuthMode>('login')
  const [loginForm, setLoginForm] = useState(initialLogin)
  const [registerForm, setRegisterForm] = useState(initialRegister)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const from = typeof location.state === 'object' && location.state && 'from' in location.state && typeof location.state.from === 'string' ? location.state.from : ''

  const redirectAfterAuth = (role: string) => {
    navigate(role === 'admin' ? '/admin/dashboard' : (from || '/mon-espace'), { replace: true })
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setError(''); setIsSubmitting(true)
    try { const user = await login(loginForm); redirectAfterAuth(user.role) }
    catch (err) { setError(err instanceof Error ? err.message : 'Connexion impossible.') }
    finally { setIsSubmitting(false) }
  }

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setError(''); setIsSubmitting(true)
    try { const user = await register(registerForm); redirectAfterAuth(user.role) }
    catch (err) { setError(err instanceof Error ? err.message : 'Inscription impossible.') }
    finally { setIsSubmitting(false) }
  }

  return (
    <div className="flex min-h-[calc(100vh-57px)]">
      {/* Panneau gauche — editorial */}
      <div className="hidden flex-col justify-between p-16 lg:flex lg:w-1/2"
        style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>
        <div>
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#6B6760] uppercase">Acces securise</span>
          <h1 className="mt-8 font-display text-5xl leading-[1.0] tracking-[-0.04em] text-[#F0EDE8] xl:text-6xl">
            {mode === 'login' ? 'Retrouvez vos analyses.' : 'Rejoignez DS Conseil.'}
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-8 text-[#6B6760]">
            Un espace simple pour centraliser vos pre-analyses et suivre vos demandes immobilieres au Mali.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {['Retrouvez vos analyses immobilieres', 'Suivez l avancement de vos demandes', 'Echangez plus facilement avec DS Conseil'].map((b) => (
            <div key={b} className="flex items-center gap-3 border-b border-white/5 pb-4">
              <span className="h-1 w-4 rounded-full bg-[#C9A84C]" />
              <span className="text-sm text-[#A8A49E]">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Panneau droit — formulaire */}
      <div className="flex flex-1 flex-col justify-center px-6 py-16 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          {/* Toggle */}
          <div className="mb-10 flex gap-6 border-b border-white/5 pb-6">
            {(['login', 'register'] as AuthMode[]).map((m) => (
              <button key={m} type="button"
                onClick={() => { setMode(m); setError('') }}
                className={cn(
                  'font-display text-2xl tracking-[-0.03em] transition-colors',
                  mode === m ? 'text-[#F0EDE8]' : 'text-[#6B6760] hover:text-[#A8A49E]'
                )}>
                {m === 'login' ? 'Connexion' : 'Inscription'}
              </button>
            ))}
          </div>

          {mode === 'login' ? (
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <label className={labelClass}>Email<Input required type="email" value={loginForm.email} onChange={(e) => setLoginForm((c) => ({ ...c, email: e.target.value }))} placeholder="vous@email.com" /></label>
              <label className={labelClass}>Mot de passe<Input required type="password" value={loginForm.password} onChange={(e) => setLoginForm((c) => ({ ...c, password: e.target.value }))} placeholder="Votre mot de passe" /></label>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button type="submit" className={primaryButton + " mt-2"} disabled={isSubmitting}>
                {isSubmitting ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>Prenom<Input required value={registerForm.firstName} onChange={(e) => setRegisterForm((c) => ({ ...c, firstName: e.target.value }))} placeholder="Prenom" /></label>
                <label className={labelClass}>Nom<Input required value={registerForm.lastName} onChange={(e) => setRegisterForm((c) => ({ ...c, lastName: e.target.value }))} placeholder="Nom" /></label>
              </div>
              <label className={labelClass}>Email<Input required type="email" value={registerForm.email} onChange={(e) => setRegisterForm((c) => ({ ...c, email: e.target.value }))} placeholder="vous@email.com" /></label>
              <label className={labelClass}>
                Telephone
                <div className="flex">
                  <span className="flex items-center rounded-l-[14px] border border-r-0 border-white/12 bg-white/5 px-3 text-sm text-[#6B6760] whitespace-nowrap">+223</span>
                  <Input
                    required
                    value={registerForm.phone.replace(/^\+223\s?/, '')}
                    onChange={(e) => setRegisterForm((c) => ({ ...c, phone: e.target.value ? '+223 ' + e.target.value : '' }))}
                    placeholder="7X XX XX XX"
                    className="rounded-l-none"
                  />
                </div>
                <span className="text-[10px] text-[#6B6760]">Indicatif Mali (+223) deja inclus.</span>
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>Mot de passe<Input required type="password" value={registerForm.password} onChange={(e) => setRegisterForm((c) => ({ ...c, password: e.target.value }))} /></label>
                <label className={labelClass}>Confirmation<Input required type="password" value={registerForm.confirmPassword} onChange={(e) => setRegisterForm((c) => ({ ...c, confirmPassword: e.target.value }))} /></label>
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button type="submit" className={primaryButton + " mt-2"} disabled={isSubmitting}>
                {isSubmitting ? 'Creation...' : 'Creer mon compte'}
              </button>
            </form>
          )}

          <button type="button" onClick={() => navigate(from || '/')}
            className="mt-6 text-sm text-[#6B6760] transition-colors hover:text-[#A8A49E]">
            {from ? 'Retour' : 'Retour a l accueil'}
          </button>
        </div>
      </div>
    </div>
  )
}
