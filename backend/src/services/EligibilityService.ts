import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface ProfileInput {
  userId?: string;
  name?: string;
  email?: string;
  phone?: string;
  studyLevel?: string;
  academicScore?: string;
  englishTestType?: string;
  englishScore?: string;
  budget?: string;
  preferredCountry?: string;
  source?: string;
}

export class EligibilityService {
  public async evaluateProfile(profile: ProfileInput) {
    // Forward to the abstract RuleProvider
    const ruleProvider = new RuleProvider();
    const evaluation = ruleProvider.executeRules(profile);

    // 1. Persist the Lead (evaluation request)
    const lead = await prisma.lead.create({
      data: {
        userId: profile.userId,
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        studyLevel: profile.studyLevel,
        academicScore: profile.academicScore,
        englishScore: profile.englishScore,
        budget: profile.budget,
        preferredCountry: profile.preferredCountry,
        source: profile.source || 'EVALUATION_FLOW',
        eligibilityStatus: evaluation.status
      }
    });

    // 2. Client rules are missing. Return PENDING_BUSINESS_RULES safely.
    // Do not invent fake eligibility.
    return {
      leadId: lead.id,
      status: evaluation.status,
      recommendedCountry: null,
      recommendedUniversity: null,
      alternativePathway: null,
      message: evaluation.message
    };
  }
}

class RuleProvider {
  public executeRules(profile: ProfileInput) {
    // DO NOT INVENT BUSINESS RULES HERE (GPA/IELTS/Budget)
    // Awaiting client-approved business rules
    
    return {
      status: "PENDING_BUSINESS_RULES",
      message: "Your profile has been submitted for evaluation. Final eligibility depends on configured university and destination requirements.",
      inputProfile: profile,
      matchedUniversities: [],
      alternativePathways: []
    };
  }
}
