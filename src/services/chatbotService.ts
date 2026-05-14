export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

export async function requestChatbotReply(message: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 350))
  return buildMockChatbotReply(message)
}

function buildMockChatbotReply(message: string) {
  const normalizedMessage = message.toLowerCase()

  if (normalizedMessage.includes('acheter')) {
    return 'Pour un achat, DS Conseil peut vous aider à cadrer le budget, choisir les quartiers pertinents et préparer les vérifications documentaires.'
  }

  if (normalizedMessage.includes('louer')) {
    return 'Pour une location, commencez par préciser le quartier, le budget mensuel, le nombre de pièces et la date souhaitée d’entrée.'
  }

  if (normalizedMessage.includes('documents')) {
    return 'Les documents dépendent du projet. Pour une transaction, il faut vérifier les pièces d’identité, les titres ou justificatifs du bien, et les accords écrits.'
  }

  if (normalizedMessage.includes('contact')) {
    return 'Vous pouvez laisser vos coordonnées sur la page Contact. Un conseiller DS Conseil pourra ensuite vous rappeler.'
  }

  if (normalizedMessage.includes('analyse')) {
    return 'Vous pouvez lancer une pré-analyse depuis le formulaire. La connexion sera demandée uniquement au moment d’obtenir le résultat complet.'
  }

  return 'Je peux vous orienter sur l’achat, la location, la vente, l’investissement ou les documents à prévoir pour un projet immobilier au Mali.'
}
