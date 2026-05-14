import { Injectable } from '@nestjs/common';
import { ChatbotMessageDto } from './dto/chatbot-message.dto';

@Injectable()
export class ChatbotService {
  reply(dto: ChatbotMessageDto) {
    const message = dto.message.toLowerCase();

    if (message.includes('acheter') || message.includes('achat')) {
      return {
        reply:
          'Pour un achat, je peux vous orienter sur le budget, la localisation et le type de bien. Une pre-analyse permettra a DS Conseil de qualifier votre projet.',
        intent: 'BUY',
      };
    }

    if (message.includes('louer') || message.includes('location')) {
      return {
        reply:
          'Pour une location, indiquez la ville, le quartier, le budget mensuel et le delai souhaite afin de recevoir une orientation pertinente.',
        intent: 'RENT',
      };
    }

    if (message.includes('invest')) {
      return {
        reply:
          'Pour un investissement, le rendement potentiel, la demande locative et le quartier cible sont les premiers criteres a analyser.',
        intent: 'INVEST',
      };
    }

    if (message.includes('vendre') || message.includes('vente')) {
      return {
        reply:
          'Pour une vente, DS Conseil peut vous aider a cadrer le prix, valoriser le bien et identifier les acheteurs les plus serieux.',
        intent: 'SELL',
      };
    }

    return {
      reply:
        'Je peux vous aider sur un projet d achat, de location, de vente ou d investissement immobilier au Mali. Precisez votre objectif pour continuer.',
      intent: 'GENERAL',
    };
  }

  getSuggestions() {
    return {
      suggestions: [
        'Je veux acheter un terrain a Bamako',
        'Je cherche une maison en location',
        'Je veux vendre un bien',
        'Je souhaite investir dans le locatif',
      ],
    };
  }
}
