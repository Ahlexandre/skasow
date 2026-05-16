import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { realEstateServices, serviceNavAnchors, serviceSlugs } from '../data/services'

export default function HomeServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-24 lg:px-16 lg:py-32">
      <div className="mb-14">
        <span className="label-mono">002 — Services</span>
        <h2 className="title-display title-xl mt-4 text-[#EDEAE4]">Ce que nous faisons</h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#9E9A94]">
          Chaque bloc correspond a un accompagnement DS Conseil. Cliquez pour en savoir plus ou lancez une pre-analyse.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {realEstateServices.map((service, index) => {
          const slug = serviceSlugs[service.title] ?? service.title.toLowerCase().replace(/\s+/g, '-')
          const anchor = serviceNavAnchors[service.title]
          const Icon = service.icon
          const isFeatured = index === 0

          return (
            <Link
              key={service.title}
              id={anchor}
              to={`/services/${slug}`}
              className={
                'group bento-cell flex scroll-mt-28 flex-col justify-between p-7 transition-all duration-200 hover:border-[#C9A84C]/25 hover:shadow-[0_8px_40px_rgba(201,168,76,0.08)] ' +
                (isFeatured ? 'sm:col-span-2 sm:min-h-[280px]' : 'min-h-[220px]')
              }
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="label-mono">0{index + 1}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#C9A84C]/10 text-[#C9A84C] transition-colors group-hover:bg-[#C9A84C]/18">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="title-display mt-5 text-xl text-[#EDEAE4] transition-colors group-hover:text-[#C9A84C] lg:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#9E9A94]">{service.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C]">
                Decouvrir
                <ArrowUpRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          to="/pre-analysis"
          className="inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#09090E] transition-all hover:bg-[#DDB96A]"
        >
          Lancer une pre-analyse <ArrowRight size={14} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  )
}
