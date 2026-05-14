import type { LucideIcon } from 'lucide-react'
import { IconBadge } from './ui'
import { cn } from '../utils/cn'

type StatCardProps = {
  icon: LucideIcon
  label: string
  value: string
  detail: string
  tone?: 'default' | 'accent' | 'dark'
}

export default function StatCard({
  icon: Icon,
  label,
  value,
  detail,
  tone = 'default',
}: StatCardProps) {
  return (
    <article
      className={cn(
        'rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-0.5',
        tone === 'dark'
          ? 'border-white/10 bg-[#111111] text-white'
          : tone === 'accent'
            ? 'border-[#EAE4D8] bg-[#F5F5F3]'
            : 'border-neutral-200 bg-white',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <p
          className={cn(
            'text-sm font-medium',
            tone === 'dark' ? 'text-white/65' : 'text-[#6B7280]',
          )}
        >
          {label}
        </p>
        <IconBadge icon={Icon} tone={tone === 'dark' ? 'dark' : 'light'} />
      </div>
      <p
        className={cn(
          'mt-6 text-3xl font-semibold',
          tone === 'dark' ? 'text-white' : 'text-[#111111]',
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          'mt-2 text-sm leading-6',
          tone === 'dark' ? 'text-white/60' : 'text-[#6B7280]',
        )}
      >
        {detail}
      </p>
    </article>
  )
}
