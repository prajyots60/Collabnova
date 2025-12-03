import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  TestimonialsSection,
  StatsSection,
  CTASection,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
