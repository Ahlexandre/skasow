import { Bot, Maximize2, MessageCircle, Mic, MicOff, Minimize2, Minus, Send, X } from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  buildChatContext,
  requestChatbotResponse,
  type ChatMessage,
} from '../services/chatbotService'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition'

const initialSuggestions = ['Acheter', 'Documents', 'Estimation', 'Investir', 'Contact']

export default function FloatingChatbot() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState(initialSuggestions)
  const [lastIntent, setLastIntent] = useState<string | null>(null)
  const speech = useSpeechRecognition()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Bonjour ! Je suis l'assistant DS Conseil. Comment puis-je vous aider ?" },
  ])

  const shouldHide = location.pathname === '/auth' || location.pathname.startsWith('/admin') || location.pathname === '/chatbot'

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  if (shouldHide) return null

  const sendMessage = async (message: string) => {
    const trimmed = message.trim()
    if (!trimmed) return
    setMessages((c) => [...c, { role: 'user', content: trimmed }])
    setInputValue('')
    setIsTyping(true)
    try {
      const response = await requestChatbotResponse(trimmed, buildChatContext(messages))
      setMessages((c) => [...c, { role: 'assistant', content: response.reply }])
      setLastIntent(response.intent ?? null)
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

  const showAnalysisLink = Boolean(lastIntent && lastIntent !== 'CONTACT')
  const showContactLink = lastIntent === 'CONTACT' || lastIntent === 'GENERAL'
  const panelSizeClass = isExpanded
    ? 'w-full sm:w-[42rem] sm:max-w-[calc(100vw-3rem)]'
    : 'w-full max-w-[22rem]'
  const messagesSizeClass = isExpanded
    ? 'h-[52vh] min-h-[20rem] max-h-[32rem]'
    : 'max-h-[20rem]'

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:inset-x-auto sm:bottom-6 sm:right-6">
      {isOpen && !isMinimized && (
        <div className={`anim-scale-in max-h-[calc(100vh-6rem)] overflow-hidden rounded-[24px] ${panelSizeClass}`}
          style={{ background: 'rgba(17,17,24,0.97)', backdropFilter: 'blur(24px)', border: '1px solid rgba(201,168,76,0.15)', boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 40px rgba(201,168,76,0.06)' }}>

          {/* Header */}
          <div className="flex items-center justify-between p-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#C9A84C]/15 text-[#C9A84C]">
                <Bot size={18} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#F0EDE8]">Assistant DS</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <p className="text-[11px] text-[#6B6760]">En ligne</p>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <button type="button" aria-label={isExpanded ? 'Reduire la fenetre' : 'Agrandir la fenetre'}
                className="rounded-full p-2 text-[#6B6760] transition hover:bg-white/5 hover:text-[#F0EDE8]"
                onClick={() => setIsExpanded((current) => !current)}>
                {isExpanded ? <Minimize2 size={15} strokeWidth={2} /> : <Maximize2 size={15} strokeWidth={2} />}
              </button>
              <button type="button" aria-label="Reduire"
                className="rounded-full p-2 text-[#6B6760] transition hover:bg-white/5 hover:text-[#F0EDE8]"
                onClick={() => setIsMinimized(true)}>
                <Minus size={15} strokeWidth={2} />
              </button>
              <button type="button" aria-label="Fermer"
                className="rounded-full p-2 text-[#6B6760] transition hover:bg-white/5 hover:text-[#F0EDE8]"
                onClick={() => setIsOpen(false)}>
                <X size={15} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className={`flex flex-col gap-3 overflow-y-auto p-4 ${messagesSizeClass}`} style={{ background: '#0A0A0F' }}>
            {messages.map((msg, i) => (
              <div key={i} className={"flex " + (msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                <div className={"max-w-[90%] whitespace-pre-line break-words rounded-[16px] px-4 py-3 text-sm leading-6 [overflow-wrap:anywhere] sm:max-w-[85%] " + (
                  msg.role === 'user' ? 'text-[#0A0A0F]' : 'text-[#A8A49E]'
                )}
                style={msg.role === 'user'
                  ? { background: 'linear-gradient(135deg, #C9A84C, #E2C47A)', borderRadius: '16px 16px 4px 16px' }
                  : { background: '#1C1C27', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px 16px 16px 4px' }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-[16px] px-4 py-3" style={{ background: '#1C1C27', border: '1px solid rgba(255,255,255,0.07)' }}>
                  {[0,1,2].map((i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]"
                      style={{ animation: 'float 1.2s ease-in-out ' + (i * 0.2) + 's infinite' }} />
                  ))}
                </div>
              </div>
            )}
            {(showAnalysisLink || showContactLink) && (
              <div className="flex flex-wrap gap-2">
                {showAnalysisLink && (
                  <Link to="/pre-analysis" onClick={() => setIsOpen(false)}
                    className="rounded-full px-3 py-1.5 text-xs font-semibold text-[#C9A84C] transition hover:bg-[#C9A84C]/10"
                    style={{ border: '1px solid rgba(201,168,76,0.25)' }}>
                    Lancer la pre-analyse
                  </Link>
                )}
                {showContactLink && (
                  <Link to="/contact" onClick={() => setIsOpen(false)}
                    className="rounded-full px-3 py-1.5 text-xs font-semibold text-[#C9A84C] transition hover:bg-[#C9A84C]/10"
                    style={{ border: '1px solid rgba(201,168,76,0.25)' }}>
                    Aller au contact
                  </Link>
                )}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="flex gap-1.5 overflow-x-auto px-4 py-2.5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            {suggestions.map((s) => (
              <button key={s} type="button" onClick={() => void sendMessage(s)} disabled={isTyping}
                className="shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#6B6760] transition hover:text-[#C9A84C] disabled:opacity-40"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-end gap-2 p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleInputKeyDown}
              rows={isExpanded ? 2 : 1}
              className="input-dark max-h-28 min-h-10 flex-1 resize-y rounded-[16px] py-2 text-sm leading-6 [overflow-wrap:anywhere]"
              placeholder="Votre question..." />
            <button
              type="button"
              aria-label={speech.isListening ? 'Arreter le micro' : 'Parler au chatbot'}
              title={speech.error || (speech.isSupported ? 'Parler au chatbot' : 'Reconnaissance vocale indisponible')}
              disabled={!speech.isSupported || isTyping}
              onClick={toggleVoiceInput}
              className={
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition disabled:opacity-40 ' +
                (speech.isListening
                  ? 'border-red-500/30 bg-red-500/10 text-red-300'
                  : 'border-white/10 bg-white/[0.04] text-[#6B6760] hover:border-[#C9A84C]/35 hover:text-[#C9A84C]')
              }
            >
              {speech.isListening ? <MicOff size={15} strokeWidth={2} /> : <Mic size={15} strokeWidth={2} />}
            </button>
            <button type="submit" disabled={!inputValue.trim() || isTyping}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A84C] text-[#0A0A0F] transition hover:bg-[#E2C47A] disabled:opacity-40">
              <Send size={15} strokeWidth={2} />
            </button>
          </form>
        </div>
      )}

      {/* Trigger */}
      <button type="button" aria-label="Ouvrir le chatbot"
        className="chatbot-trigger flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[#0A0A0F] transition-all duration-300 hover:-translate-y-1 focus:outline-none"
        style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C47A)', boxShadow: '0 4px 20px rgba(201,168,76,0.5)' }}
        onClick={() => { setIsOpen(true); setIsMinimized(false) }}>
        {isOpen ? <X size={22} strokeWidth={2} /> : <MessageCircle size={22} strokeWidth={1.75} />}
      </button>
    </div>
  )
}
