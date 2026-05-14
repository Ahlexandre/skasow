import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  IconBadge,
  SectionHeader,
  Card,
  Input,
  Select,
  Textarea,
  labelClass,
  pageShell,
  primaryButton,
} from '../components/ui'

export default function Contact() {
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSent(true)
  }

  return (
    <section className={pageShell}>
      <SectionHeader
        eyebrow="Contact"
        title="Parlez de votre projet à DS Conseil"
        description="Laissez une demande structurée pour être orienté vers le service le plus pertinent."
        centered
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <div className="space-y-5">
            <div className="flex gap-4">
              <IconBadge icon={MapPin} />
              <p className="pt-3 text-sm leading-6 text-[#6B7280]">
                Avenue fictive de l’Indépendance, Bamako, Mali
              </p>
            </div>
            <div className="flex gap-4">
              <IconBadge icon={Phone} />
              <p className="pt-3 text-sm leading-6 text-[#6B7280]">+223 70 00 00 00</p>
            </div>
            <div className="flex gap-4">
              <IconBadge icon={Mail} />
              <p className="pt-3 text-sm leading-6 text-[#6B7280]">
                contact@dsconseil-immo.ml
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-3xl bg-[#F5F5F3] p-6">
            <p className="text-sm font-bold text-[#111111]">Réponse orientée</p>
            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Votre demande est préparée côté interface. Elle pourra
              être reliée plus tard à un backend de suivi commercial.
            </p>
          </div>
        </Card>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass}>
              Nom
              <Input
                required
                placeholder="Votre nom"
              />
            </label>
            <label className={labelClass}>
              Email
              <Input
                required
                type="email"
                placeholder="vous@email.com"
              />
            </label>
            <label className={labelClass}>
              Téléphone
              <Input placeholder="+223..." />
            </label>
            <label className={labelClass}>
              Type de besoin
              <Select>
                <option>Achat</option>
                <option>Location</option>
                <option>Vente</option>
                <option>Investissement</option>
                <option>Gestion immobilière</option>
                <option>Administratif</option>
              </Select>
            </label>
          </div>
          <label className={labelClass}>
            Message
            <Textarea
              required
              rows={6}
              placeholder="Présentez brièvement votre projet."
            />
          </label>
          <label className="flex items-start gap-3 rounded-3xl bg-[#F5F5F3] p-5 text-sm leading-6 text-[#6B7280]">
            <input required type="checkbox" className="mt-1 h-4 w-4 accent-[#1E5E52]" />
            J’accepte que DS Conseil utilise ces informations pour répondre à ma
            demande.
          </label>
          <button
            type="submit"
            className={primaryButton}
          >
            Envoyer la demande
          </button>
          {isSent && (
            <p className="rounded-3xl bg-[#16A34A]/10 p-5 text-sm font-semibold text-[#166534]">
              Demande enregistrée dans l’interface. DS Conseil pourra la traiter dès la connexion backend.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
