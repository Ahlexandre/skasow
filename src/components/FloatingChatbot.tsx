import { Bot, MessageCircle, Minus, Send, X } from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { requestChatbotReply, type ChatMessage } from '../services/chatbotService'

const suggestions = ['Je veux acheter','Pre-analyse','Documents','Contact']

export default function FloatingChatbot() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
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
    const reply = await requestChatbotReply(trimmed)
    setIsTyping(false)
    setMessages((c) => [...c, { role: 'assistant', content: reply }])
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); void sendMessage(inputValue) }

  const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user')?.content.toLowerCase()
  const showAnalysisLink = lastUserMsg?.includes('analyse')
  const showContactLink  = lastUserMsg?.includes('contact')

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:inset-x-auto sm:bottom-6 sm:right-6">
      {isOpen && !isMinimized && (
        <div className="anim-scale-in w-full max-w-[22rem] overflow-hidden rounded-[24px]"
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
          <div className="max-h-[20rem] flex flex-col gap-3 overflow-y-auto p-4" style={{ background: '#0A0A0F' }}>
            {messages.map((msg, i) => (
              <div key={i} className={"flex " + (msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                <div className={"max-w-[85%] rounded-[16px] px-4 py-3 text-sm leading-6 " + (
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
              <button key={s} type="button" onClick={() => void sendMessage(s)}
                className="shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#6B6760] transition hover:text-[#C9A84C]"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex gap-2 p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}
              className="input-dark flex-1 rounded-full py-2 text-sm"
              placeholder="Votre question..." />
            <button type="submit" disabled={!inputValue.trim()}
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
