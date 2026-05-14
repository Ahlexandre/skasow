import type { LucideIcon } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../utils/cn'

export const pageShell = 'mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20'
export const narrowShell = 'mx-auto max-w-4xl px-6 py-16 lg:px-12 lg:py-20'
export const card =
  'rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 sm:p-8'
export const mutedCard = 'rounded-3xl border border-neutral-200 bg-[#F5F5F3] p-6 sm:p-8'
export const labelClass = 'grid gap-2 text-sm font-semibold text-[#111111]'
export const inputClass =
  'min-h-12 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-normal text-[#111111] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#1E5E52] focus:ring-4 focus:ring-[#1E5E52]/10 disabled:cursor-not-allowed disabled:bg-[#F5F5F3] disabled:text-[#6B7280]'
export const selectClass = `${inputClass} appearance-none`
export const textareaClass = `${inputClass} resize-none leading-6`
export const primaryButton =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1E5E52] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#17483f] focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/15 disabled:cursor-not-allowed disabled:bg-[#B8C2BD]'
export const secondaryButton =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-6 py-3 text-sm font-semibold text-[#111111] transition duration-300 hover:border-[#1E5E52]/30 hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/10 disabled:cursor-not-allowed disabled:text-[#9CA3AF]'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark'
}

export function Button({
  variant = 'primary',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  const variantClass =
    variant === 'secondary'
      ? secondaryButton
      : variant === 'ghost'
        ? 'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#6B7280] transition duration-300 hover:bg-[#F5F5F3] hover:text-[#111111] focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/10'
        : variant === 'dark'
          ? 'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#1E5E52] focus:outline-none focus:ring-4 focus:ring-[#111111]/10 disabled:cursor-not-allowed disabled:bg-[#B8C2BD]'
          : primaryButton

  return <button type={type} className={cn(variantClass, className)} {...props} />
}

type CardProps = ComponentPropsWithoutRef<'div'> & {
  tone?: 'default' | 'muted' | 'dark'
}

export function Card({ tone = 'default', className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        tone === 'dark'
          ? 'rounded-3xl border border-white/10 bg-[#111111] p-6 text-white shadow-sm sm:p-8'
          : tone === 'muted'
            ? mutedCard
            : card,
        className,
      )}
      {...props}
    />
  )
}

type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'dark'
}

export function Badge({ tone = 'neutral', className, ...props }: BadgeProps) {
  const toneClass =
    tone === 'accent'
      ? 'bg-[#EAE4D8] text-[#1E5E52]'
      : tone === 'success'
        ? 'bg-[#16A34A]/10 text-[#166534]'
        : tone === 'warning'
          ? 'bg-[#D97706]/10 text-[#92400E]'
          : tone === 'danger'
            ? 'bg-[#DC2626]/10 text-[#991B1B]'
            : tone === 'dark'
              ? 'bg-[#111111] text-white'
              : 'bg-[#F5F5F3] text-[#6B7280]'

  return (
    <span
      className={cn(
        'inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold',
        toneClass,
        className,
      )}
      {...props}
    />
  )
}

export function Input({ className, ...props }: ComponentPropsWithoutRef<'input'>) {
  return <input className={cn(inputClass, className)} {...props} />
}

export function Select({ className, ...props }: ComponentPropsWithoutRef<'select'>) {
  return <select className={cn(selectClass, className)} {...props} />
}

export function Textarea({
  className,
  ...props
}: ComponentPropsWithoutRef<'textarea'>) {
  return <textarea className={cn(textareaClass, className)} {...props} />
}

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1E5E52]">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-lg leading-8 text-[#6B7280]">{description}</p>
      )}
    </div>
  )
}

type IconBadgeProps = {
  icon: LucideIcon
  tone?: 'light' | 'dark'
}

export function IconBadge({ icon: Icon, tone = 'light' }: IconBadgeProps) {
  return (
    <span
      className={
        tone === 'dark'
          ? 'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1E5E52] text-white'
          : 'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAE4D8] text-[#1E5E52]'
      }
    >
      <Icon size={22} />
    </span>
  )
}

type ButtonLinkProps = {
  to: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export function ButtonLink({
  to,
  variant = 'primary',
  children,
}: ButtonLinkProps) {
  return (
    <Link to={to} className={variant === 'primary' ? primaryButton : secondaryButton}>
      {children}
    </Link>
  )
}

type EmptyStateProps = {
  title: string
  description: string
  action?: ReactNode
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-neutral-200 bg-white p-8 text-center shadow-sm">
      <p className="text-lg font-semibold text-[#111111]">
        {title}
      </p>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#6B7280]">
        {description}
      </p>
      {action && <div className="mt-6 flex justify-center">{action}</div>}
    </div>
  )
}

type ProgressStepsProps = {
  steps: string[]
  currentStep: number
}

export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex gap-2 overflow-x-auto">
        {steps.map((step, index) => {
          const isActive = index === currentStep
          const isComplete = index < currentStep

          return (
            <div
              key={step}
              className={cn(
                'flex min-w-[11rem] flex-1 items-center gap-3 rounded-2xl px-3 py-3 text-sm transition',
                isActive
                  ? 'bg-[#1E5E52] text-white'
                  : isComplete
                    ? 'bg-[#EAE4D8] text-[#1E5E52]'
                    : 'bg-[#F5F5F3] text-[#6B7280]',
              )}
            >
              <span
                className={cn(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                  isActive
                    ? 'bg-white text-[#1E5E52]'
                    : isComplete
                      ? 'bg-white/80 text-[#1E5E52]'
                      : 'bg-white text-[#6B7280]',
                )}
              >
                {index + 1}
              </span>
              <span className="font-semibold">{step}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
