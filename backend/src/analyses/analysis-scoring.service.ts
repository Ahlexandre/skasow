import {
  CommercialPriority,
  MaturityLevel,
  ProjectType,
  Urgency,
} from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateAnalysisDto } from './dto/create-analysis.dto';

type ContactInfo = {
  email?: string | null;
  phone?: string | null;
};

@Injectable()
export class AnalysisScoringService {
  generate(dto: CreateAnalysisDto, contact: ContactInfo) {
    const score = this.calculateScore(dto, contact);
    const maturityLevel = this.getLevel(score);
    const commercialPriority = this.getPriority(score);
    const profileType = this.getProfileType(dto);
    const recommendedService = this.getRecommendedService(dto.projectType);
    const missingInfo = this.getMissingInfo(dto, contact);

    return {
      score,
      maturityLevel,
      commercialPriority,
      profileType,
      recommendedService,
      strengths: this.getStrengths(dto, contact, score),
      missingInfo,
      recommendations: this.getRecommendations(dto, missingInfo),
      nextAction: this.getNextAction(commercialPriority, missingInfo),
    };
  }

  private calculateScore(dto: CreateAnalysisDto, contact: ContactInfo) {
    let score = 0;

    if (dto.budget && dto.budget > 0) score += 20;
    if (contact.phone?.trim()) score += 15;
    if (contact.email?.trim()) score += 10;
    if (dto.urgency === Urgency.HIGH) score += 20;
    if (
      dto.projectType === ProjectType.BUY ||
      dto.projectType === ProjectType.INVEST
    )
      score += 15;
    if (dto.city.trim() || dto.district?.trim()) score += 10;
    if ((dto.surface && dto.surface > 0) || dto.propertyType?.trim())
      score += 10;

    return Math.min(score, 100);
  }

  private getLevel(score: number): MaturityLevel {
    if (score >= 75) return MaturityLevel.HIGH;
    if (score >= 45) return MaturityLevel.MEDIUM;
    return MaturityLevel.LOW;
  }

  private getPriority(score: number): CommercialPriority {
    if (score >= 75) return CommercialPriority.HIGH;
    if (score >= 45) return CommercialPriority.MEDIUM;
    return CommercialPriority.LOW;
  }

  private getProfileType(dto: CreateAnalysisDto) {
    if (dto.objective?.toLowerCase().includes('bureau')) return 'Professionnel';

    const profiles: Record<ProjectType, string> = {
      BUY: 'Acheteur residentiel',
      RENT: 'Locataire',
      SELL: 'Vendeur',
      INVEST: 'Investisseur',
    };

    return profiles[dto.projectType];
  }

  private getRecommendedService(projectType: ProjectType) {
    const services: Record<ProjectType, string> = {
      BUY: 'Achat',
      RENT: 'Location',
      SELL: 'Vente',
      INVEST: 'Investissement',
    };

    return services[projectType];
  }

  private getStrengths(
    dto: CreateAnalysisDto,
    contact: ContactInfo,
    score: number,
  ) {
    const strengths: string[] = [];

    if (dto.city.trim()) strengths.push('Ville cible renseignee');
    if (dto.district?.trim()) strengths.push('Quartier cible renseigne');
    if (dto.budget && dto.budget > 0) strengths.push('Budget communique');
    if (contact.email?.trim() && contact.phone?.trim())
      strengths.push('Coordonnees completes');
    if (score >= 75) strengths.push('Dossier a fort potentiel commercial');

    return strengths.length ? strengths : ['Intention immobiliere exprimee'];
  }

  private getMissingInfo(dto: CreateAnalysisDto, contact: ContactInfo) {
    const missingInfo: string[] = [];

    if (!contact.phone?.trim())
      missingInfo.push('Telephone manquant pour rappel rapide');
    if (!contact.email?.trim()) missingInfo.push('Email manquant');
    if (!dto.budget || dto.budget <= 0) missingInfo.push('Budget a cadrer');
    if (!dto.district?.trim()) missingInfo.push('Quartier a preciser');
    if (!dto.propertyType?.trim()) missingInfo.push('Type de bien a confirmer');
    if (!dto.surface || dto.surface <= 0)
      missingInfo.push('Surface souhaitee a preciser');

    return missingInfo.length
      ? missingInfo
      : ['Aucun point bloquant identifie'];
  }

  private getRecommendations(dto: CreateAnalysisDto, missingInfo: string[]) {
    const recommendations = [
      'Verifier la coherence entre budget, quartier et type de bien cible.',
      'Comparer le quartier cible avec au moins deux alternatives proches.',
    ];

    if (dto.projectType === ProjectType.INVEST) {
      recommendations.unshift(
        'Estimer le rendement locatif potentiel avant visite.',
      );
    }

    if (
      missingInfo.length > 0 &&
      missingInfo[0] !== 'Aucun point bloquant identifie'
    ) {
      recommendations.push(
        'Completer les informations manquantes avant priorisation definitive.',
      );
    }

    return recommendations;
  }

  private getNextAction(priority: CommercialPriority, missingInfo: string[]) {
    if (priority === CommercialPriority.HIGH) {
      return 'Planifier un rappel prioritaire sous 24 heures.';
    }

    if (
      missingInfo.length > 0 &&
      missingInfo[0] !== 'Aucun point bloquant identifie'
    ) {
      return 'Demander les informations manquantes puis proposer un echange.';
    }

    return 'Envoyer une premiere orientation et suivre le dossier.';
  }
}
