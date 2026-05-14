import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type ServiceCardProps = { icon: LucideIcon; title: string; description: string }

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const slug = title.toLowerCase().replace(/\s+/g, '-')
  return (
    <Link to={'/services/' + slug}
      className="group flex h-full flex-col rounded-[18px] border border-[rgba(255,255,255,0.06)] bg-[#1A1A24] p-6 transition-all duration-250 hover:-translate-y-1 hover:border-[#C9A84C]/22 hover:bg-[#20202C]">
      <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#C9A84C]/8 text-[#C9A84C] transition-colors group-hover:bg-[#C9A84C]/15">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 text-base font-semibold leading-snug text-[#EDEAE4]">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-[#5E5B56]">{description}</p>
      <span className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#C9A84C] transition-all group-hover:gap-2.5">
        Decouvrir <ArrowUpRight size={13} strokeWidth={2.5} />
      </span>
    </Link>
  )
}
