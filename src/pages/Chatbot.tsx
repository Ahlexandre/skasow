import { Bot, Mic, MicOff, Send } from 'lucide-react'
import { useRef, useState, type FormEvent } from 'react'
import {
  buildChatContext,
  requestChatbotResponse,
  type ChatMessage,
} from '../services/chatbotService'
import { SectionHeader, narrowShell } from '../components/ui'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition'

const initialSuggestions = [
  'Je veux acheter',
  'Documents necessaires',
  'Estimer un bien',
  'Investir dans le locatif',
  'Contacter DS Conseil',
]

export default function Chatbot() {
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState(initialSuggestions)
  const speech = useSpeechRecognition()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Bonjour ! Je suis l'assistant DS Conseil. Je peux vous orienter vers le bon parcours immobilier." },
  ])

  const sendMessage = async (message: string) => {
    const trimmed = message.trim()
    if (!trimmed) return
    setMessages((c) => [...c, { role: 'user', content: trimmed }])
    setInputValue('')
    setIsTyping(true)
    try {
      const response = await requestChatbotResponse(trimmed, buildChatContext(messages))
      setMessages((c) => [...c, { role: 'assistant', content: response.reply }])
      if (response.suggestions?.length) setSuggestions(response.suggestions)
    } catch {
      setMessages((c) => [
        ...c,
        {
          role: 'assistant',
          content: 'Le service chatbot est momentanement indisponible.',
        },
      ])
    } finally {
      setIsTyping(false)
    }
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); void sendMessage(inputValue) }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      void sendMessage(inputValue)
    }
  }

  const toggleVoiceInput = () => {
    if (speech.isListening) {
      speech.stop()
      return
    }

    speech.start((transcript) => setInputValue(transcript))
  }

  return (
    <section className={narrowShell}>
      <SectionHeader eyebrow="Chatbot" title="Assistant immobilier DS Conseil" description="Posez vos questions, obtenez des orientations rapides et lancez votre pre-analyse quand vous etes pret." centered />

      <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-[24px]" style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#1C1C27', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
        {/* Header */}
        <div className="flex items-center gap-3 p-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#111118' }}>
          <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#C9A84C]/15 text-[#C9A84C]">
            <Bot size={20} strokeWidth={1.75} />
          </span>
          <div>
            <p className="font-semibold text-[#F0EDE8]">Assistant DS</p>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(46,204,113,0.6)]" />
              <p className="text-xs text-[#6B6760]">En ligne</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex h-[420px] flex-col gap-3 overflow-y-auto p-5" style={{ background: '#0A0A0F' }}>
          {messages.map((msg, i) => (
            <div key={i} className={"flex " + (msg.role === 'user' ? 'justify-end' : 'justify-start')}>
              <div className={"max-w-[90%] whitespace-pre-line break-words rounded-[18px] px-4 py-3 text-sm leading-6 [overflow-wrap:anywhere] sm:max-w-[80%] " + (
                msg.role === 'user'
                  ? 'text-[#0A0A0F]'
                  : 'text-[#A8A49E]'
              )}
              style={msg.role === 'user'
                ? { background: 'linear-gradient(135deg, #C9A84C, #E2C47A)', borderRadius: '18px 18px 4px 18px' }
                : { background: '#1C1C27', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px 18px 18px 4px' }}>
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-[18px] px-4 py-3" style={{ background: '#1C1C27', border: '1px solid rgba(255,255,255,0.07)' }}>
                {[0,1,2].map((i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]"
                    style={{ animation: 'float 1.2s ease-in-out ' + (i * 0.2) + 's infinite' }} />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        <div className="flex gap-2 overflow-x-auto px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {suggestions.map((s) => (
            <button key={s} type="button" onClick={() => void sendMessage(s)} disabled={isTyping}
              className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-[#A8A49E] transition-all hover:text-[#C9A84C]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex items-end gap-3 p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#111118' }}>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleInputKeyDown}
            rows={2}
            className="input-dark max-h-32 min-h-12 flex-1 resize-y rounded-[18px] py-3 leading-6 [overflow-wrap:anywhere]"
            placeholder="Votre question..."
          />
          <button
            type="button"
            aria-label={speech.isListening ? 'Arreter le micro' : 'Parler au chatbot'}
            title={speech.error || (speech.isSupported ? 'Parler au chatbot' : 'Reconnaissance vocale indisponible')}
            disabled={!speech.isSupported || isTyping}
            onClick={toggleVoiceInput}
            className={
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition disabled:opacity-40 ' +
              (speech.isListening
                ? 'border-red-500/30 bg-red-500/10 text-red-300'
                : 'border-white/10 bg-white/[0.04] text-[#A8A49E] hover:border-[#C9A84C]/35 hover:text-[#C9A84C]')
            }
          >
            {speech.isListening ? <MicOff size={17} strokeWidth={2} /> : <Mic size={17} strokeWidth={2} />}
          </button>
          <button type="submit" disabled={!inputValue.trim() || isTyping}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A84C] text-[#0A0A0F] shadow-[0_4px_16px_rgba(201,168,76,0.35)] transition-all hover:bg-[#E2C47A] disabled:opacity-40">
            <Send size={17} strokeWidth={2} />
          </button>
        </form>
      </div>
    </section>
  )
}
