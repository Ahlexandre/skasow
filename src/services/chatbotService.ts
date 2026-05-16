export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const API_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') ?? ''

export type ChatbotResponse = {
  reply: string
  intent?: string
  confidence?: number
  suggestions?: string[]
}

export function buildChatContext(messages: ChatMessage[]) {
  return messages
    .slice(-8)
    .map((message) => `${message.role}: ${message.content}`)
    .join('\n')
}

export async function requestChatbotResponse(
  message: string,
  context?: string,
): Promise<ChatbotResponse> {
  const response = await fetch(`${API_URL}/chatbot/message`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, context }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => null)
    const detail = Array.isArray(error?.message)
      ? error.message.join(' ')
      : (error?.message as string | undefined)

    throw new Error(detail ?? 'Réponse chatbot impossible.')
  }

  return response.json() as Promise<ChatbotResponse>
}

export async function requestChatbotReply(
  message: string,
  context?: string,
): Promise<string> {
  const payload = await requestChatbotResponse(message, context)
  return payload.reply
}
