import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, IconBadge } from './ui'

type ServiceCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <IconBadge icon={Icon} />
      <h3 className="mt-8 text-xl font-semibold text-[#111111]">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[#6B7280]">{description}</p>
      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1E5E52] transition hover:text-[#17483f]"
      >
        Demander un accompagnement
        <ArrowRight size={16} />
      </Link>
    </Card>
  )
}
