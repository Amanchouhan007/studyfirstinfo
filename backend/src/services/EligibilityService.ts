/**
 * Eligibility Service Boundary
 * 
 * IMPORTANT: Final business matching rules are NOT implemented in this foundation.
 * This class establishes the architectural boundary for future rule implementation.
 */

interface ProfileInput {
  studyLevel: string;
  academicScore: number;
  englishTestType?: string;
  englishScore?: string;
  budget?: string;
  preferredCountry?: string;
}

export class EligibilityService {
  /**
   * Evaluate a student profile against the country/university rule engine
   */
  public evaluateProfile(profile: ProfileInput) {
    // Forward to the abstract RuleProvider
    const ruleProvider = new RuleProvider();
    return ruleProvider.executeRules(profile);
  }
}

/**
 * RuleProvider acts as the strategy context for executing dynamic rules.
 * Currently it explicitly returns a "rules not configured" state as per Phase 4 requirements.
 */
class RuleProvider {
  public executeRules(profile: ProfileInput) {
    // DO NOT INVENT BUSINESS RULES HERE (GPA/IELTS/Budget)
    // Awaiting client-approved business rules
    
    return {
      status: "PENDING_BUSINESS_RULES",
      message: "The eligibility rule engine has not been configured with client data.",
      inputProfile: profile,
      matchedUniversities: [],
      alternativePathways: []
    };
  }
}
