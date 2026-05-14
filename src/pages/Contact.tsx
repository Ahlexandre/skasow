import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Input, Select, Textarea, labelClass } from '../components/ui'

const NEEDS = ['Achat', 'Location', 'Vente', 'Investissement', 'Gestion immobiliere', 'Accompagnement administratif', 'Autre']
const slugToLabel: Record<string, string> = {
  achat: 'Achat', location: 'Location', vente: 'Vente',
  investissement: 'Investissement', 'gestion-immobiliere': 'Gestion immobiliere',
  'accompagnement-administratif': 'Accompagnement administratif',
}

export default function Contact() {
  const [isSent, setIsSent] = useState(false)
  const [searchParams] = useSearchParams()
  const preselectedService = slugToLabel[searchParams.get('service') || ''] || ''
  const [selectedNeed, setSelectedNeed] = useState(preselectedService)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setIsSent(true) }

  return (
    <div className="px-6 py-20 lg:px-16 lg:py-28">
      <div className="mb-16 border-b border-white/5 pb-12">
        <span className="label-mono">Contact</span>
        <h1 className="title-display title-2xl mt-5 text-[#EDEAE4]">
          Parlons de<br />votre projet.
        </h1>
      </div>

      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
        {/* Infos */}
        <div>
          <p className="text-base leading-8 text-[#9E9A94]">
            Laissez une demande structuree pour etre oriente vers le service le plus pertinent.
            DS Conseil vous recontacte sous 24h.
          </p>
          <div className="mt-12 flex flex-col gap-0">
            {[
              ['Adresse', 'Bamako, Mali'],
              ['Email', 'contact@dsconseil-immo.ml'],
              ['Telephone', '+223 70 00 00 00'],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1.5 border-b border-white/5 py-6">
                <span className="label-mono">{label}</span>
                <span className="text-sm font-medium text-[#EDEAE4]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelClass}>
              Nom complet
              <Input required placeholder="Votre nom" />
            </label>
            <label className={labelClass}>
              Email
              <Input required type="email" placeholder="vous@email.com" />
            </label>
            <label className={labelClass}>
              Telephone
              <div className="flex">
                <span className="flex items-center rounded-l-[14px] border border-r-0 border-white/10 bg-white/5 px-3 text-sm text-[#5E5B56] whitespace-nowrap">
                  +223
                </span>
                <Input placeholder="7X XX XX XX" className="rounded-l-none" />
              </div>
              <span className="text-[10px] leading-5 text-[#5E5B56]">
                Indicatif Mali (+223) deja inclus — saisissez uniquement votre numero local.
              </span>
            </label>
            <label className={labelClass}>
              Type de besoin
              <Select value={selectedNeed} onChange={(e) => setSelectedNeed(e.target.value)}>
                <option value="">-- Selectionnez --</option>
                {NEEDS.map((n) => <option key={n}>{n}</option>)}
              </Select>
              {preselectedService && (
                <span className="text-[10px] leading-5 text-[#C9A84C]">
                  Pre-rempli : {preselectedService}
                </span>
              )}
            </label>
          </div>

          <label className={labelClass}>
            Message
            <Textarea required rows={5} placeholder="Presentez brievement votre projet, vos contraintes et vos attentes." />
          </label>

          <label className="flex items-start gap-3 text-sm leading-7 text-[#5E5B56]">
            <input required type="checkbox" className="mt-1 h-4 w-4 accent-[#C9A84C]" />
            J accepte que DS Conseil utilise ces informations pour repondre a ma demande.
          </label>

          {isSent ? (
            <div className="rounded-[14px] border border-emerald-500/20 bg-emerald-500/8 p-5">
              <p className="text-sm font-semibold text-emerald-400">
                Demande envoyee. DS Conseil vous recontacte sous 24h.
              </p>
            </div>
          ) : (
            <button type="submit"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C9A84C] px-8 py-3.5 text-sm font-semibold text-[#09090E] transition-all hover:bg-[#DDB96A] hover:shadow-[0 4px 24px rgba(201,168,76,0.22)]">
              Envoyer la demande
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
