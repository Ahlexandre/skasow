import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { realEstateServices } from '../data/services'

const slugs: Record<string, string> = {
  'Achat': 'achat', 'Location': 'location', 'Vente': 'vente',
  'Investissement': 'investissement',
  'Gestion immobiliere': 'gestion-immobiliere',
  'Accompagnement administratif': 'accompagnement-administratif',
}

export default function Services() {
  return (
    <div className="px-6 py-20 lg:px-16 lg:py-28">
      <div className="mb-16 border-b border-white/5 pb-12">
        <span className="label-mono">002 — Services</span>
        <h1 className="title-display title-2xl mt-5 text-[#EDEAE4]">Services</h1>
        <p className="mt-5 max-w-lg text-base leading-8 text-[#9E9A94]">
          Cliquez sur un service pour decouvrir comment DS Conseil vous accompagne concretement.
        </p>
      </div>

      <div className="flex flex-col">
        {realEstateServices.map((service, i) => {
          const slug = slugs[service.title] || service.title.toLowerCase().replace(/\s+/g, '-')
          const Icon = service.icon
          return (
            <Link key={service.title} to={'/services/' + slug}
              className="group flex items-center justify-between border-b border-white/5 py-8 transition-all duration-200 hover:border-[#C9A84C]/20 lg:py-10">
              <div className="flex items-start gap-6 lg:gap-12">
                <span className="label-mono w-8 shrink-0 pt-1">0{i + 1}</span>
                <div className="flex items-start gap-5">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#C9A84C]/8 text-[#C9A84C] transition-colors group-hover:bg-[#C9A84C]/15">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="title-display text-xl text-[#EDEAE4] transition-colors group-hover:text-[#C9A84C] lg:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 max-w-lg text-sm leading-7 text-[#5E5B56]">{service.description}</p>
                  </div>
                </div>
              </div>
              <ArrowUpRight size={18} strokeWidth={1.75}
                className="shrink-0 text-[#5E5B56] transition-all group-hover:text-[#C9A84C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
