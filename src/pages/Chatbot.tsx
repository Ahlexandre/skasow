import { Bot, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  IconBadge,
  SectionHeader,
  inputClass,
  narrowShell,
} from '../components/ui'
import {
  requestChatbotReply,
  type ChatMessage,
} from '../services/chatbotService'

const suggestions = [
  'Je veux acheter',
  'Je veux louer',
  'Quels documents sont nécessaires ?',
  'Contacter DS Conseil',
]

const initialMessages: ChatMessage[] = [
  {
    role: 'assistant',
    content:
      'Bonjour, je suis l’assistant DS Conseil. Je peux vous orienter sur un projet immobilier au Mali.',
  },
]

export default function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (message: string) => {
    const trimmedMessage = message.trim()
    if (!trimmedMessage) {
      return
    }

    setMessages((current) => [
      ...current,
      { role: 'user', content: trimmedMessage },
    ])
    setInputValue('')
    setIsLoading(true)
    const reply = await requestChatbotReply(trimmedMessage)
    setMessages((current) => [...current, { role: 'assistant', content: reply }])
    setIsLoading(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void sendMessage(inputValue)
  }

  return (
    <section className={narrowShell}>
      <SectionHeader
        eyebrow="Chatbot"
        title="Assistant immobilier DS Conseil"
        description="Une interface minimaliste pour répondre aux questions simples et orienter les prospects sans créer de compte."
        centered
      />

      <div className="mt-14 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex items-center gap-4 border-b border-neutral-200 bg-[#FAFAF8] p-6">
          <IconBadge icon={Bot} />
          <div>
            <h2 className="font-bold text-[#111111]">
              Conseiller virtuel
            </h2>
            <p className="text-sm text-[#6B7280]">Orientation rapide</p>
          </div>
        </div>

        <div className="max-h-[560px] min-h-96 space-y-5 overflow-y-auto bg-[#F5F5F3] p-5 sm:p-8">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-6 sm:max-w-[72%] ${
                  message.role === 'user'
                    ? 'bg-[#1E5E52] text-white'
                    : 'border border-neutral-200 bg-white text-[#111111] shadow-sm'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="text-sm font-medium text-[#6B7280]">
              L’assistant prépare une réponse...
            </div>
          )}
        </div>

        <div className="border-t border-neutral-200 p-5 sm:p-6">
          <div className="mb-4 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-[#111111] transition duration-300 hover:border-[#1E5E52]/30 hover:bg-[#F5F5F3]"
                onClick={() => void sendMessage(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className={`${inputClass} flex-1`}
              placeholder="Écrivez votre question..."
            />
            <button
              type="submit"
              aria-label="Envoyer"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1E5E52] text-white transition hover:bg-[#17483f]"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
