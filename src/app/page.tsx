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
    <main className="bg-background overflow-x-hidden">
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
