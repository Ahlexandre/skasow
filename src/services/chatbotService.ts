export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const API_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') ?? ''

type ChatbotResponse = {
  reply: string
  intent?: string
}

export async function requestChatbotReply(message: string): Promise<string> {
  const response = await fetch(`${API_URL}/chatbot/message`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => null)
    const detail = Array.isArray(error?.message)
      ? error.message.join(' ')
      : (error?.message as string | undefined)

    throw new Error(detail ?? 'Réponse chatbot impossible.')
  }

  const payload = (await response.json()) as ChatbotResponse
  return payload.reply
}
