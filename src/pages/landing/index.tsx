import { Container } from "@mantine/core";
import { FeaturesSection } from "./features-section/FeaturesSection";
import { HeroSection } from "./hero-section/HeroSection";
import { GoalsSection } from './goals-section';
import { TechStackSection } from './tech-stack-section';
import { TimelineSection } from './timeline-section';
import { TeamSection } from './team-section';

const LandingPage = () => {
  return (
    <Container size="xl">
      <HeroSection />
      <FeaturesSection />
      <GoalsSection />
      <TechStackSection />
      <TimelineSection />
      <TeamSection />
    </Container>
  );
};

export default LandingPage;
