import type { LucideIcon } from 'lucide-react'
import { Check } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../utils/cn'

/* ── Shells ── */
export const pageShell  = 'px-4 py-14 sm:px-6 sm:py-18 lg:px-10 lg:py-20 2xl:px-16 2xl:py-28'
export const narrowShell = 'mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-18 lg:px-10 lg:py-20 2xl:px-16 2xl:py-28'

/* ── Primitives ── */
export const labelClass =
  'flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#5E5B56]'

export const inputClass  = 'input-dark'
export const selectClass = 'input-dark appearance-none cursor-pointer'
export const textareaClass = 'input-dark resize-none leading-7'

export const primaryButton =
  'inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-5 py-2.5 text-center text-sm font-semibold text-[#09090E] transition-all duration-200 hover:bg-[#DDB96A] hover:shadow-[0_4px_24px_rgba(201,168,76,0.22)] hover:-translate-y-px active:translate-y-0 focus:outline-none focus:shadow-[0_0_0_3px_rgba(201,168,76,0.25)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none sm:px-6'

export const secondaryButton =
  'inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-center text-sm font-medium text-[#9E9A94] transition-all duration-200 hover:border-[#C9A84C]/30 hover:text-[#EDEAE4] hover:-translate-y-px active:translate-y-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40 sm:px-6'

export const ghostButton =
  'inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-[#5E5B56] transition-all duration-200 hover:bg-white/5 hover:text-[#EDEAE4] focus:outline-none'

/* ── Button ── */
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
}
export function Button({ variant = 'primary', className, type = 'button', ...props }: ButtonProps) {
  const v =
    variant === 'secondary' ? secondaryButton
    : variant === 'ghost'   ? ghostButton
    : variant === 'danger'  ? 'inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-full border border-red-500/25 bg-red-500/8 px-6 py-2.5 text-sm font-medium text-red-400 transition-all hover:bg-red-500/15 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40'
    : primaryButton
  return <button type={type} className={cn(v, className)} {...props} />
}

/* ── Card ── */
type CardProps = ComponentPropsWithoutRef<'div'> & {
  tone?: 'default' | 'muted' | 'gold' | 'dark'
}
export function Card({ tone = 'default', className, ...props }: CardProps) {
  const base =
    tone === 'gold'  ? 'rounded-[20px] border border-[#C9A84C]/18 bg-[#C9A84C]/5 p-6 sm:p-8'
    : tone === 'muted' ? 'rounded-[20px] border border-white/5 bg-white/[0.025] p-6 sm:p-8'
    : tone === 'dark'  ? 'rounded-[20px] border border-white/5 bg-[#0F0F16] p-6 sm:p-8'
    : 'rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[#1A1A24] p-6 sm:p-8'
  return <div className={cn(base, className)} {...props} />
}

/* ── Badge ── */
type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  tone?: 'neutral' | 'gold' | 'success' | 'warning' | 'danger'
}
export function Badge({ tone = 'neutral', className, ...props }: BadgeProps) {
  const t =
    tone === 'gold'    ? 'bg-[#C9A84C]/10 border border-[#C9A84C]/25 text-[#DDB96A]'
    : tone === 'success' ? 'bg-emerald-500/10 border border-emerald-500/22 text-emerald-400'
    : tone === 'warning' ? 'bg-amber-500/10 border border-amber-500/22 text-amber-400'
    : tone === 'danger'  ? 'bg-red-500/10 border border-red-500/22 text-red-400'
    : 'bg-white/5 border border-white/8 text-[#5E5B56]'
  return (
    <span className={cn('inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.04em]', t, className)} {...props} />
  )
}

/* ── Form primitives ── */
export function Input({ className, ...props }: ComponentPropsWithoutRef<'input'>) {
  return <input className={cn(inputClass, className)} {...props} />
}
export function Select({ className, ...props }: ComponentPropsWithoutRef<'select'>) {
  return <select className={cn(selectClass, className)} {...props} />
}
export function Textarea({ className, ...props }: ComponentPropsWithoutRef<'textarea'>) {
  return <textarea className={cn(textareaClass, className)} {...props} />
}

/* ── SectionHeader ── */
type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}
export function SectionHeader({ eyebrow, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
      {eyebrow && (
        <p className="label-mono mb-4">{eyebrow}</p>
      )}
      <h1 className="title-display title-xl break-words text-[#EDEAE4]">{title}</h1>
      {description && (
        <p className="mt-5 text-base leading-8 text-[#9E9A94]">{description}</p>
      )}
    </div>
  )
}

/* ── IconBadge ── */
type IconBadgeProps = { icon: LucideIcon; tone?: 'gold' | 'dark' | 'muted'; size?: 'sm' | 'md' | 'lg' }
export function IconBadge({ icon: Icon, tone = 'gold', size = 'md' }: IconBadgeProps) {
  const sz = size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-14 w-14' : 'h-11 w-11'
  const ic = size === 'sm' ? 15 : size === 'lg' ? 24 : 20
  const cl =
    tone === 'dark'  ? 'bg-[#C9A84C] text-[#09090E] shadow-[0 4px 24px rgba(201,168,76,0.22)]'
    : tone === 'muted' ? 'bg-white/5 border border-white/8 text-[#5E5B56]'
    : 'bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C]'
  return (
    <span className={cn('flex shrink-0 items-center justify-center rounded-[12px]', sz, cl)}>
      <Icon size={ic} strokeWidth={1.75} />
    </span>
  )
}

/* ── ButtonLink ── */
type ButtonLinkProps = { to: string; variant?: 'primary' | 'secondary'; children: ReactNode; className?: string }
export function ButtonLink({ to, variant = 'primary', children, className }: ButtonLinkProps) {
  return (
    <Link to={to} className={cn(variant === 'primary' ? primaryButton : secondaryButton, className)}>
      {children}
    </Link>
  )
}

/* ── EmptyState ── */
type EmptyStateProps = { title: string; description: string; action?: ReactNode }
export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-[20px] border border-dashed border-white/8 bg-white/[0.02] p-6 text-center sm:p-12">
      <p className="text-base font-semibold text-[#EDEAE4]">{title}</p>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#5E5B56]">{description}</p>
      {action && <div className="mt-6 flex justify-center">{action}</div>}
    </div>
  )
}

/* ── ProgressSteps ── */
type ProgressStepsProps = { steps: string[]; currentStep: number }
export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="glass rounded-[14px] p-2">
      <div className="tabs-scroll flex gap-1.5 overflow-x-auto">
        {steps.map((step, i) => {
          const isActive   = i === currentStep
          const isComplete = i < currentStep
          return (
            <div key={step}
              className={cn(
                'flex min-w-[8rem] flex-1 items-center gap-2 rounded-[10px] px-3 py-2.5 text-xs font-medium transition-all duration-250',
                isActive   ? 'bg-[#C9A84C] text-[#09090E] shadow-[0 4px 24px rgba(201,168,76,0.22)]'
                : isComplete ? 'bg-[#C9A84C]/12 text-[#C9A84C]'
                : 'text-[#5E5B56]',
              )}>
              <span className={cn(
                'flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold',
                isActive   ? 'bg-[#09090E]/20 text-[#09090E]'
                : isComplete ? 'bg-[#C9A84C]/25 text-[#C9A84C]'
                : 'bg-white/5 text-[#5E5B56]',
              )}>
                {isComplete ? <Check size={10} strokeWidth={3} /> : i + 1}
              </span>
              <span className="truncate">{step}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Divider ── */
export function Divider({ className }: { className?: string }) {
  return <div className={cn('divider', className)} />
}
