import type { LucideIcon } from 'lucide-react'
import { cn } from '../utils/cn'

type StatCardProps = { icon: LucideIcon; label: string; value: string; detail: string; tone?: 'default' | 'accent' | 'dark' }

export default function StatCard({ icon: Icon, label, value, detail, tone = 'default' }: StatCardProps) {
  return (
    <article className={cn(
      'rounded-[18px] border p-6 transition-all duration-250 hover:-translate-y-0.5',
      tone === 'dark'   ? 'border-[#C9A84C]/18 bg-[#C9A84C]/6'
      : tone === 'accent' ? 'border-[#C9A84C]/12 bg-[#C9A84C]/4'
      : 'border-[rgba(255,255,255,0.06)] bg-[#1A1A24]',
    )}>
      <div className="flex items-start justify-between gap-4">
        <span className="label-mono">{label}</span>
        <span className={cn(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px]',
          tone !== 'default' ? 'bg-[#C9A84C]/15 text-[#C9A84C]' : 'bg-white/5 text-[#5E5B56]',
        )}>
          <Icon size={16} strokeWidth={1.75} />
        </span>
      </div>
      <p className={cn('title-display mt-5 text-3xl', tone !== 'default' ? 'text-[#C9A84C]' : 'text-[#EDEAE4]')}>
        {value}
      </p>
      <p className="mt-1.5 text-xs leading-5 text-[#5E5B56]">{detail}</p>
    </article>
  )
}
