import { CheckCircle2, LockKeyhole, UserPlus } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Badge,
  Button,
  Card,
  IconBadge,
  Input,
  labelClass,
  pageShell,
  primaryButton,
} from '../components/ui'
import { useAuth } from '../contexts/useAuth'
import type { LoginInput, RegisterInput } from '../types/user'
import { cn } from '../utils/cn'

type AuthMode = 'login' | 'register'

const initialRegister: RegisterInput = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
}

const initialLogin: LoginInput = {
  email: '',
  password: '',
}

const benefits = [
  'Retrouvez vos analyses immobilières',
  'Suivez l’avancement de vos demandes',
  'Échangez plus facilement avec DS Conseil',
]

export default function Auth() {
  const { login, register } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [mode, setMode] = useState<AuthMode>('login')
  const [loginForm, setLoginForm] = useState(initialLogin)
  const [registerForm, setRegisterForm] = useState(initialRegister)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const from =
    typeof location.state === 'object' &&
    location.state &&
    'from' in location.state &&
    typeof location.state.from === 'string'
      ? location.state.from
      : ''

  const redirectAfterAuth = (role: string) => {
    if (role === 'admin') {
      navigate('/admin/dashboard', { replace: true })
      return
    }

    navigate(from || '/mon-espace', { replace: true })
  }

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const user = await login(loginForm)
      redirectAfterAuth(user.role)
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Connexion impossible.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const user = await register(registerForm)
      redirectAfterAuth(user.role)
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Inscription impossible.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={pageShell}>
      <div className="grid overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm lg:grid-cols-[0.92fr_1.08fr]">
        <div className="bg-[#111111] p-8 text-white sm:p-10 lg:p-12">
          <Badge tone="dark" className="bg-white/10 text-white">
            Accès sécurisé
          </Badge>
          <h1 className="mt-8 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
            {mode === 'login'
              ? 'Retrouvez vos analyses immobilières'
              : 'Créez votre espace DS Conseil'}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/65">
            Un espace simple pour centraliser vos pré-analyses, clarifier les
            prochaines actions et suivre vos demandes immobilières.
          </p>

          <div className="mt-10 grid gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#EAE4D8]" />
                <span className="text-sm font-medium text-white/80">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">DS Conseil Immobilier</p>
            <p className="mt-2 text-sm leading-7 text-white/60">
              Une expérience sobre, professionnelle et centrée sur la confiance
              pour vos projets au Mali.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-12">
          <IconBadge icon={mode === 'login' ? LockKeyhole : UserPlus} />
          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1E5E52]">
              Accès DS Conseil
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#111111]">
              {mode === 'login' ? 'Connexion' : 'Inscription'}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B7280]">
              Le formulaire reste volontairement court. Les informations utiles
              au dossier sont collectées dans la pré-analyse.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 rounded-full bg-[#F5F5F3] p-1">
            <button
              type="button"
              onClick={() => {
                setMode('login')
                setError('')
              }}
              className={cn(
                'rounded-full px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/10',
                mode === 'login' ? 'bg-white text-[#111111] shadow-sm' : 'text-[#6B7280]',
              )}
            >
              Connexion
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register')
                setError('')
              }}
              className={cn(
                'rounded-full px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/10',
                mode === 'register' ? 'bg-white text-[#111111] shadow-sm' : 'text-[#6B7280]',
              )}
            >
              Inscription
            </button>
          </div>

          {mode === 'login' ? (
            <form onSubmit={handleLogin} className="mt-8 grid gap-5">
              <label className={labelClass}>
                Email
                <Input
                  required
                  type="email"
                  value={loginForm.email}
                  onChange={(event) =>
                    setLoginForm((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="vous@email.com"
                />
              </label>
              <label className={labelClass}>
                Mot de passe
                <Input
                  required
                  type="password"
                  value={loginForm.password}
                  onChange={(event) =>
                    setLoginForm((current) => ({ ...current, password: event.target.value }))
                  }
                  placeholder="Votre mot de passe"
                />
              </label>
              {error && (
                <Card tone="muted" className="border-[#DC2626]/20 p-4">
                  <p className="text-sm font-semibold text-[#DC2626]">{error}</p>
                </Card>
              )}
              <button type="submit" className={primaryButton} disabled={isSubmitting}>
                {isSubmitting ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Prénom
                  <Input
                    required
                    value={registerForm.firstName}
                    onChange={(event) =>
                      setRegisterForm((current) => ({
                        ...current,
                        firstName: event.target.value,
                      }))
                    }
                    placeholder="Prénom"
                  />
                </label>
                <label className={labelClass}>
                  Nom
                  <Input
                    required
                    value={registerForm.lastName}
                    onChange={(event) =>
                      setRegisterForm((current) => ({
                        ...current,
                        lastName: event.target.value,
                      }))
                    }
                    placeholder="Nom"
                  />
                </label>
              </div>
              <label className={labelClass}>
                Email
                <Input
                  required
                  type="email"
                  value={registerForm.email}
                  onChange={(event) =>
                    setRegisterForm((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder="vous@email.com"
                />
              </label>
              <label className={labelClass}>
                Téléphone
                <Input
                  required
                  value={registerForm.phone}
                  onChange={(event) =>
                    setRegisterForm((current) => ({ ...current, phone: event.target.value }))
                  }
                  placeholder="+223..."
                />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Mot de passe
                  <Input
                    required
                    type="password"
                    value={registerForm.password}
                    onChange={(event) =>
                      setRegisterForm((current) => ({
                        ...current,
                        password: event.target.value,
                      }))
                    }
                  />
                </label>
                <label className={labelClass}>
                  Confirmation
                  <Input
                    required
                    type="password"
                    value={registerForm.confirmPassword}
                    onChange={(event) =>
                      setRegisterForm((current) => ({
                        ...current,
                        confirmPassword: event.target.value,
                      }))
                    }
                  />
                </label>
              </div>
              {error && (
                <Card tone="muted" className="border-[#DC2626]/20 p-4">
                  <p className="text-sm font-semibold text-[#DC2626]">{error}</p>
                </Card>
              )}
              <button type="submit" className={primaryButton} disabled={isSubmitting}>
                {isSubmitting ? 'Création...' : 'Créer mon compte'}
              </button>
            </form>
          )}

          <Button
            variant="ghost"
            className="mt-6 w-full"
            onClick={() => navigate('/pre-analysis')}
          >
            Revenir à la pré-analyse
          </Button>
        </div>
      </div>
    </section>
  )
}
