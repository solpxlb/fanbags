import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import InsightSection from '../components/sections/InsightSection';
import SolutionSection from '../components/sections/SolutionSection';
import UtilitySection from '../components/sections/UtilitySection';
import GrowthFlywheelSection from '../components/sections/GrowthFlywheelSection';
import InfrastructureSection from '../components/sections/InfrastructureSection';
import RevenueModelSection from '../components/sections/RevenueModelSection';
import AudienceSection from '../components/sections/AudienceSection';
import ComparisonSection from '../components/sections/ComparisonSection';
import VisionSection from '../components/sections/VisionSection';
import GrantProposalSection from '../components/sections/GrantProposalSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <InsightSection />
        <SolutionSection />
        <UtilitySection />
        <GrowthFlywheelSection />
        <InfrastructureSection />
        <RevenueModelSection />
        <AudienceSection />
        <ComparisonSection />
        <VisionSection />
        <GrantProposalSection />
      </main>
      <Footer />
    </div>
  );
}
