import { ArrowRight, ArrowUpRight, BrainCircuit } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { realEstateServices, serviceNavAnchors, serviceSlugs } from '../data/services'
import { primaryButton } from '../components/ui'

const marqueeItems = [
  'Achat', 'Location', 'Vente', 'Investissement',
  'Gestion', 'Accompagnement', 'Bamako', 'ACI 2000',
  'Badalabougou', 'Sotuba', 'Kalaban-Coura', 'Mali',
]

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.hash])
  return (
    <div className="overflow-x-hidden">

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          HERO â€” typographie pure, sans image
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="px-6 pb-20 pt-20 lg:px-16 lg:pt-28 lg:pb-24">

        {/* Label editorial haut */}
        <div className="flex items-center justify-between border-b border-white/5 pb-6">
          <span className="label-mono">001 â€” Immobilier Mali</span>
          <span className="label-mono">2025</span>
        </div>

        {/* Titre principal */}
        <div className="mt-14 max-w-4xl">
          <h1 className="title-display title-3xl text-[#EDEAE4]">
            Votre partenaire<br />
            <span className="text-gold-gradient">immobilier</span><br />
            au Mali
          </h1>
        </div>

        {/* Ligne sous le titre : description + CTA */}
        <div className="mt-12 flex flex-col gap-8 border-t border-white/5 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-base leading-8 text-[#9E9A94]">
            DS Conseil vous accompagne dans vos projets d achat, de location,
            de vente et d investissement grace a une analyse claire, rapide et
            personnalisee.
          </p>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Link to="/pre-analysis" className={primaryButton}>
              Analyse gratuite
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link to="/#services"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium text-[#9E9A94] transition-all hover:border-[#C9A84C]/30 hover:text-[#EDEAE4]">
              Nos services
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/5 pt-10 sm:grid-cols-3 lg:max-w-lg">
          {[
            { v: '24h', l: 'Rappel prioritaire' },
            { v: '100', l: 'Score de maturite' },
            { v: '4+',  l: 'Services couverts' },
          ].map(({ v, l }) => (
            <div key={l}>
              <p className="title-display title-xl text-[#C9A84C]">{v}</p>
              <p className="mt-2 text-xs leading-5 text-[#5E5B56]">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          MARQUEE
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="overflow-hidden border-y border-white/5 py-4">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-5 label-mono">
              {item}
              <span className="h-1 w-1 rounded-full bg-[#C9A84C] opacity-50" />
            </span>
          ))}
        </div>
      </div>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          SERVICES â€” grille bento
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section id="services" className="scroll-mt-24 px-6 py-24 lg:px-16 lg:py-32">

        <div className="mb-14 flex items-end justify-between">
          <div>
            <span className="label-mono">002 â€” Services</span>
            <h2 className="title-display title-xl mt-4 text-[#EDEAE4]">
              Ce que nous faisons
            </h2>
          </div>
        </div>

        {/* Grille bento */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Grande cellule â€” col-span 2, row-span 2 */}
          <div
            id={serviceNavAnchors[realEstateServices[0].title]}
            className="bento-cell flex scroll-mt-28 flex-col justify-between p-8 sm:col-span-2 sm:row-span-2"
            style={{ minHeight: '340px' }}
          >
            <div>
              <span className="label-mono">01</span>
              <h3 className="title-display title-md mt-5 text-[#EDEAE4] lg:title-lg">
                {realEstateServices[0].title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#9E9A94]">
                {realEstateServices[0].description}
              </p>
            </div>
            <Link
              to={`/services/${serviceSlugs[realEstateServices[0].title]}`}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#C9A84C] px-5 py-2.5 text-sm font-semibold text-[#09090E] transition-all hover:bg-[#DDB96A]"
            >
              Decouvrir <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>

          {/* 4 petites cellules */}
          {realEstateServices.slice(1, 5).map((s, i) => {
            const slug = serviceSlugs[s.title] ?? s.title.toLowerCase().replace(/\s+/g, '-')
            return (
              <Link
                key={s.title}
                to={`/services/${slug}`}
                className="bento-cell flex flex-col justify-between p-6 scroll-mt-28"
                style={{ minHeight: '160px' }}
              >
                <div>
                  <span className="label-mono">0{i + 2}</span>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-[#EDEAE4]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#5E5B56] line-clamp-2">
                    {s.description}
                  </p>
                </div>
                <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#C9A84C]">
                  Decouvrir <ArrowRight size={12} strokeWidth={2.5} />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-20 flex flex-col border-t border-white/5 pt-16">
          <p className="mb-10 max-w-lg text-sm leading-7 text-[#9E9A94]">
            Cliquez sur un service pour decouvrir comment DS Conseil vous accompagne concretement.
          </p>
          {realEstateServices.map((service, i) => {
            const slug = serviceSlugs[service.title] ?? service.title.toLowerCase().replace(/\s+/g, '-')
            const anchor = serviceNavAnchors[service.title]
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                id={anchor}
                to={`/services/${slug}`}
                className="group flex scroll-mt-28 items-center justify-between border-b border-white/5 py-8 transition-all duration-200 hover:border-[#C9A84C]/20 lg:py-10"
              >
                <div className="flex items-start gap-6 lg:gap-12">
                  <span className="label-mono w-8 shrink-0 pt-1">0{i + 1}</span>
                  <div className="flex items-start gap-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#C9A84C]/8 text-[#C9A84C] transition-colors group-hover:bg-[#C9A84C]/15">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="title-display text-xl text-[#EDEAE4] transition-colors group-hover:text-[#C9A84C] lg:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-7 text-[#5E5B56]">{service.description}</p>
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.75}
                  className="shrink-0 text-[#5E5B56] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C9A84C]"
                />
              </Link>
            )
          })}
        </div>
      </section>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          ANALYSE IA
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="border-t border-white/5 px-6 py-24 lg:px-16 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Texte */}
          <div>
            <span className="label-mono">003 â€” Analyse IA</span>
            <h2 className="title-display title-xl mt-5 text-[#EDEAE4]">
              Un diagnostic,<br />
              <em className="not-italic text-gold-gradient">pas un formulaire.</em>
            </h2>
            <p className="mt-6 text-base leading-8 text-[#9E9A94]">
              DS Conseil transforme vos informations en score de maturite,
              niveau de priorite et prochaine action concrete.
            </p>

            <div className="mt-12 flex flex-col">
              {[
                { n: '01', t: 'Decrivez votre projet',   d: 'Achat, location, vente ou investissement : le parcours guide les informations utiles.' },
                { n: '02', t: 'Recevez un diagnostic',   d: 'Score, maturite, priorite et prochaine action recommandee par DS Conseil.' },
                { n: '03', t: 'Avancez sereinement',     d: 'Le prochain pas est lisible : rappel, complement de dossier ou prise de contact.' },
              ].map((step, i, arr) => (
                <div key={step.n}
                  className={'flex gap-6 ' + (i < arr.length - 1 ? 'mb-8 border-b border-white/5 pb-8' : '')}>
                  <span className="label-mono w-6 shrink-0 pt-0.5">{step.n}</span>
                  <div>
                    <p className="text-sm font-semibold leading-6 text-[#EDEAE4]">{step.t}</p>
                    <p className="mt-2 text-sm leading-7 text-[#5E5B56]">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/pre-analysis"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold text-[#09090E] transition-all hover:bg-[#DDB96A] hover:shadow-[0 4px 24px rgba(201,168,76,0.22)]">
              Lancer mon analyse
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Carte demo score */}
          <div className="flex items-start justify-center lg:items-center">
            <div className="w-full max-w-[380px]">
              <div className="rounded-[20px] p-7"
                style={{ background: '#0F0F16', border: '1px solid rgba(255,255,255,0.10)' }}>
                <div className="flex items-center justify-between">
                  <span className="label-mono">Analyse en cours</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500"
                    style={{ boxShadow: '0 0 8px rgba(52,199,123,0.6)' }} />
                </div>

                <div className="mt-8">
                  <p className="title-display title-2xl text-[#C9A84C]">82</p>
                  <p className="mt-2 text-xs text-[#5E5B56]">Score de maturite / 100</p>
                </div>

                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div className="progress-gold h-full rounded-full" style={{ width: '82%' }} />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['Dossier prioritaire', 'Achat', 'Bamako'].map((t) => (
                    <span key={t}
                      className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-[11px] text-[#9E9A94]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-[12px] p-4"
                  style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}>
                  <p className="label-mono text-[#C9A84C]/60">Prochaine action</p>
                  <p className="mt-2 text-sm leading-6 text-[#9E9A94]">
                    Rappel sous 24h â€” dossier complet, budget coherent avec le marche.
                  </p>
                </div>
              </div>

              <div className="ml-6 mt-3 rounded-[12px] p-4"
                style={{ background: '#1A1A24', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-3">
                  <BrainCircuit size={15} className="text-[#C9A84C]" strokeWidth={1.75} />
                  <p className="text-xs font-medium text-[#EDEAE4]">
                    Analyse generee en moins de 2 secondes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          CTA FINAL
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="border-t border-white/5 px-6 py-24 lg:px-16 lg:py-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="label-mono">004 â€” Commencer</span>
            <h2 className="title-display title-2xl mt-5 text-[#EDEAE4]">
              Pret a demarrer<br />
              <span className="text-gold-gradient">votre projet ?</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#9E9A94]">
              Commencez par une analyse gratuite. DS Conseil vous accompagne
              sur les points qui comptent vraiment.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link to="/pre-analysis"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A84C] px-8 py-4 text-sm font-semibold text-[#09090E] transition-all hover:bg-[#DDB96A] hover:shadow-[0 4px 24px rgba(201,168,76,0.22)]">
              Analyse gratuite <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-[#9E9A94] transition-all hover:border-[#C9A84C]/30 hover:text-[#EDEAE4]">
              Nous contacter
            </Link>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/5 pt-8">
          <span className="label-mono">DS Conseil Immobilier â€” Bamako, Mali</span>
          <span className="label-mono">2025</span>
        </div>
      </section>

    </div>
  )
}
