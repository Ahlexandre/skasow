import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { SectionHeader, narrowShell } from '../components/ui'
import { faqItems } from '../data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={narrowShell}>
      <SectionHeader
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Les réponses clés pour rassurer les visiteurs avant une demande de contact ou une pré-analyse."
        centered
      />

      <div className="mt-14 space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <article
              key={item.question}
              className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#111111] transition hover:bg-[#F5F5F3] focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/10"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {item.question}
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[#6B7280] transition ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <p className="border-t border-neutral-200 px-6 py-5 text-sm leading-7 text-[#6B7280]">
                  {item.answer}
                </p>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
