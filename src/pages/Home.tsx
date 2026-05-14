import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import ServiceCard from '../components/ServiceCard'
import {
  Badge,
  ButtonLink,
  Card,
  IconBadge,
  SectionHeader,
  pageShell,
  primaryButton,
  secondaryButton,
} from '../components/ui'
import { realEstateServices } from '../data/services'

const trustSignals = [
  'Achat',
  'Location',
  'Vente',
  'Investissement',
  'Accompagnement administratif',
]

const advantages = [
  {
    icon: ShieldCheck,
    title: 'Conseil rassurant',
    text: 'Un cadrage clair avant toute décision pour réduire les zones d’incertitude.',
  },
  {
    icon: BrainCircuit,
    title: 'Préqualification IA',
    text: 'Une première lecture du besoin pour préparer un échange plus précis avec DS Conseil.',
  },
  {
    icon: ClipboardCheck,
    title: 'Suivi structuré',
    text: 'Chaque dossier est lisible: urgence, maturité, budget, localisation et prochaine action.',
  },
]

const steps = [
  {
    title: 'Décrivez votre projet',
    text: 'Achat, location, vente ou investissement: le parcours guide les informations utiles.',
  },
  {
    title: 'Recevez un diagnostic clair',
    text: 'Score, maturité, points forts, points à clarifier et recommandation commerciale.',
  },
  {
    title: 'Avancez avec DS Conseil',
    text: 'Le prochain pas est lisible: rappel, complément de dossier ou prise de contact.',
  },
]

export default function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-neutral-200 bg-[#FAFAF8]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.03fr_0.97fr] lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <Badge tone="accent" className="px-4 py-2 text-sm">
              <Sparkles size={16} />
              Immobilier intelligent au Mali
            </Badge>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] text-[#111111] sm:text-6xl lg:text-7xl">
              Votre partenaire immobilier intelligent au Mali
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">
              DS Conseil vous accompagne dans vos projets d’achat, location,
              vente et investissement grâce à une analyse claire, rapide et
              personnalisée.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/pre-analysis" className={primaryButton}>
                Faire une pré-analyse
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className={secondaryButton}>
                Découvrir les services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {trustSignals.map((signal) => (
                <Badge key={signal}>{signal}</Badge>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <img
                src={heroImage}
                alt="Résidence moderne présentée par DS Conseil Immobilier"
                className="h-72 w-full object-cover sm:h-96"
              />
              <div className="grid gap-4 p-5 sm:grid-cols-3">
                {[
                  ['24h', 'Rappel prioritaire'],
                  ['100', 'Score de maturité'],
                  ['4', 'Services majeurs'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-[#F5F5F3] p-4">
                    <p className="text-2xl font-semibold text-[#111111]">
                      {value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-[#6B7280]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="mt-5 lg:absolute lg:-bottom-8 lg:-left-8 lg:max-w-sm">
              <div className="flex items-start gap-4">
                <IconBadge icon={MapPin} tone="dark" />
                <div>
                  <p className="text-sm font-bold text-[#111111]">Marché local</p>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    Bamako, ACI 2000, Badalabougou, Sotuba et quartiers en
                    développement.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className={pageShell}>
        <div className="grid gap-6 md:grid-cols-3">
          {advantages.map((advantage) => (
            <Card key={advantage.title}>
              <IconBadge icon={advantage.icon} />
              <h2 className="mt-8 text-xl font-semibold text-[#111111]">
                {advantage.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                {advantage.text}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white/70">
        <div className={pageShell}>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeader
              eyebrow="Services"
              title="Une offre claire pour chaque projet immobilier"
              description="DS Conseil couvre les besoins essentiels du marché malien avec une lecture simple du dossier et du prochain pas."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {realEstateServices.slice(0, 4).map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={pageShell}>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Card tone="dark" className="min-h-full">
            <IconBadge icon={BrainCircuit} />
            <h2 className="mt-8 max-w-xl text-3xl font-semibold text-white sm:text-4xl">
              Une pré-analyse IA pensée comme un diagnostic, pas comme un formulaire.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/65">
              Le prospect renseigne son projet étape par étape, confirme
              l’envoi de ses données, puis reçoit une analyse lisible et
              actionnable.
            </p>
            <Link
              to="/pre-analysis"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#EAE4D8]"
            >
              Lancer le diagnostic
              <ArrowRight size={18} />
            </Link>
          </Card>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="flex gap-5 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAE4D8] text-sm font-bold text-[#1E5E52]">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-lg font-semibold text-[#111111]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-[#F5F5F3]">
        <div className={pageShell}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <IconBadge icon={Bot} tone="dark" />
              <h2 className="mt-8 text-3xl font-semibold text-[#111111] sm:text-4xl">
                Un assistant discret pour orienter sans interrompre.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#6B7280]">
                Le chatbot répond aux premières questions, propose des
                suggestions rapides et renvoie vers la pré-analyse quand le
                besoin devient concret.
              </p>
              <Link to="/chatbot" className={`${secondaryButton} mt-8`}>
                Ouvrir l’assistant
                <MessageCircle size={18} />
              </Link>
            </div>
            <Card className="bg-white">
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-5">
                <IconBadge icon={Building2} />
                <div>
                  <p className="font-semibold text-[#111111]">Assistant DS</p>
                  <p className="text-sm text-[#6B7280]">Orientation immobilière</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <p className="max-w-[82%] rounded-3xl bg-[#F5F5F3] px-5 py-4 text-sm leading-6 text-[#111111]">
                  Je peux vous aider à cadrer achat, location, vente ou
                  investissement.
                </p>
                <p className="ml-auto max-w-[82%] rounded-3xl bg-[#1E5E52] px-5 py-4 text-sm leading-6 text-white">
                  Je cherche une maison à Bamako avec un budget à valider.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge tone="accent">Pré-analyse IA</Badge>
                  <Badge>Documents</Badge>
                  <Badge>Contact</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className={pageShell}>
        <Card tone="muted" className="text-center">
          <CheckCircle2 className="mx-auto text-[#1E5E52]" size={32} />
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold text-[#111111]">
            Prêt à cadrer votre projet immobilier ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#6B7280]">
            Commencez par une pré-analyse claire, puis avancez avec DS Conseil
            sur les points qui comptent vraiment.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/pre-analysis">Faire une pré-analyse</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Contacter DS Conseil
            </ButtonLink>
          </div>
        </Card>
      </section>
    </>
  )
}
