"use client";

import { HeroBackground } from "./HeroBackground";
import { HeroHeadline } from "./HeroHeadline";
import { HeroSubheadline } from "./HeroSubheadline";
import { HeroCTAButtons } from "./HeroCTAButtons";
import { HeroSearchBar } from "./HeroSearchBar";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const handleSearch = (query: string) => {
    if (onSearch) {
      onSearch(query);
    } else {
      // Default behavior: navigate to search results
      window.location.href = `/creators?search=${encodeURIComponent(query)}`;
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-[120px] px-4 overflow-hidden">
      {/* Background Visual */}
      <HeroBackground />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto flex flex-col items-center text-center gap-8">
        {/* Headline */}
        <HeroHeadline />

        {/* Subheadline */}
        <HeroSubheadline />

        {/* CTA Buttons */}
        <HeroCTAButtons />

        {/* Search Bar */}
        <HeroSearchBar onSearch={handleSearch} />
      </div>
    </section>
  );
}
