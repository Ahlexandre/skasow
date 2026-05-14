import ServiceCard from '../components/ServiceCard'
import { SectionHeader, pageShell } from '../components/ui'
import { realEstateServices } from '../data/services'

export default function Services() {
  return (
    <section className={pageShell}>
      <SectionHeader
        eyebrow="Services"
        title="Services immobiliers pour prospects, propriétaires et investisseurs"
        description="Des services lisibles pour orienter rapidement chaque visiteur vers le bon accompagnement, sans compte obligatoire."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {realEstateServices.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}
