import { Bot, MessageCircle, Minus, Send, X } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { requestChatbotReply, type ChatMessage } from '../services/chatbotService'
import { inputClass } from './ui'

const suggestions = [
  'Je veux acheter',
  'Faire une pré-analyse',
  'Documents nécessaires',
  'Contacter DS Conseil',
]

export default function FloatingChatbot() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Bonjour, je suis l’assistant DS Conseil. Je peux vous orienter vers le bon parcours immobilier.',
    },
  ])

  const shouldHide =
    location.pathname === '/auth' || location.pathname.startsWith('/admin')

  if (shouldHide) {
    return null
  }

  const sendMessage = async (message: string) => {
    const trimmedMessage = message.trim()
    if (!trimmedMessage) return

    setMessages((current) => [
      ...current,
      { role: 'user', content: trimmedMessage },
    ])
    setInputValue('')

    const reply = await requestChatbotReply(trimmedMessage)
    setMessages((current) => [...current, { role: 'assistant', content: reply }])
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void sendMessage(inputValue)
  }

  const lastUserMessage = [...messages]
    .reverse()
    .find((message) => message.role === 'user')?.content.toLowerCase()
  const showAnalysisLink = lastUserMessage?.includes('analyse')
  const showContactLink = lastUserMessage?.includes('contact')

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 flex justify-end sm:inset-x-auto sm:bottom-6 sm:right-6">
      {isOpen && !isMinimized && (
        <div className="mb-4 w-full max-w-[24rem] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-neutral-200 bg-[#FAFAF8] p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1E5E52] text-white">
                <Bot size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#111111]">Assistant DS</p>
                <p className="text-xs text-[#6B7280]">Orientation immédiate</p>
              </div>
            </div>
            <div className="flex gap-1">
              <button
                type="button"
                aria-label="Réduire"
                className="rounded-full p-2 text-[#6B7280] transition hover:bg-[#F5F5F3] focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/10"
                onClick={() => setIsMinimized(true)}
              >
                <Minus size={17} />
              </button>
              <button
                type="button"
                aria-label="Fermer"
                className="rounded-full p-2 text-[#6B7280] transition hover:bg-[#F5F5F3] focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/10"
                onClick={() => setIsOpen(false)}
              >
                <X size={17} />
              </button>
            </div>
          </div>

          <div className="max-h-[22rem] space-y-3 overflow-y-auto bg-[#F5F5F3] p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[84%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                    message.role === 'user'
                      ? 'bg-[#1E5E52] text-white'
                      : 'border border-neutral-200 bg-white text-[#111111]'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {(showAnalysisLink || showContactLink) && (
              <div className="flex flex-wrap gap-2">
                {showAnalysisLink && (
                  <Link
                    to="/pre-analysis"
                    className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#1E5E52]"
                    onClick={() => setIsOpen(false)}
                  >
                    Lancer la pré-analyse
                  </Link>
                )}
                {showContactLink && (
                  <Link
                    to="/contact"
                    className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#1E5E52]"
                    onClick={() => setIsOpen(false)}
                  >
                    Aller au contact
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className="border-t border-neutral-200 p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  className="shrink-0 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-[#111111] transition hover:border-[#1E5E52]/30 hover:bg-[#F5F5F3]"
                  onClick={() => void sendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                aria-label="Question pour l’assistant"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                className={`${inputClass} min-h-11 flex-1 rounded-full py-2`}
                placeholder="Votre question..."
              />
              <button
                type="submit"
                aria-label="Envoyer"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E5E52] text-white transition hover:bg-[#17483f] focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/15"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Ouvrir le chatbot"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1E5E52] text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#17483f] focus:outline-none focus:ring-4 focus:ring-[#1E5E52]/15"
        onClick={() => {
          setIsOpen(true)
          setIsMinimized(false)
        }}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  )
}
