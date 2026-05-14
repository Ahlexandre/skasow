import { useState } from 'react'
import { faqItems } from '../data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="px-6 py-20 lg:px-16 lg:py-28">
      <div className="mb-16 border-b border-white/5 pb-12">
        <span className="label-mono">Questions frequentes</span>
        <h1 className="title-display title-2xl mt-5 text-[#EDEAE4]">FAQ</h1>
        <p className="mt-5 max-w-lg text-base leading-8 text-[#9E9A94]">
          Les reponses cles pour avancer sereinement avant une demande de contact ou une pre-analyse.
        </p>
      </div>

      <div className="mx-auto max-w-3xl flex flex-col">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={i}
              className={'border-b transition-colors duration-200 ' + (isOpen ? 'border-[#C9A84C]/15' : 'border-white/5')}>
              <button type="button"
                className="flex w-full items-start justify-between gap-8 py-7 text-left focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : i)}>
                <div className="flex items-start gap-6">
                  <span className="label-mono w-6 shrink-0 pt-1">0{i + 1}</span>
                  <span className={'text-base font-medium leading-7 transition-colors ' + (isOpen ? 'text-[#C9A84C]' : 'text-[#EDEAE4]')}>
                    {item.question}
                  </span>
                </div>
                <span className={'shrink-0 text-xl leading-none transition-all duration-300 ' + (isOpen ? 'rotate-45 text-[#C9A84C]' : 'text-[#5E5B56]')}>
                  +
                </span>
              </button>
              {isOpen && (
                <div className="anim-slide-down pb-7 pl-12">
                  <p className="text-sm leading-8 text-[#9E9A94]">{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
