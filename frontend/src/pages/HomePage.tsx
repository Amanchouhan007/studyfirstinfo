import Hero from '../components/sections/Hero';
import RegionGrid from '../components/sections/RegionGrid';
import SocialProof from '../components/sections/SocialProof';
import EligibilityMatcher from '../components/sections/EligibilityMatcher';
import Services from '../components/sections/Services';
import JourneyTimeline from '../components/sections/JourneyTimeline';
import Mentors from '../components/sections/Mentors';
import LeadMagnet from '../components/sections/LeadMagnet';
import StudentVideos from '../components/sections/StudentVideos';
import UrgentCTA from '../components/sections/UrgentCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <RegionGrid />
      <SocialProof />
      <EligibilityMatcher />
      <Services />
      <JourneyTimeline />
      <Mentors />
      <LeadMagnet />
      <StudentVideos />
      <UrgentCTA />
    </main>
  );
}
