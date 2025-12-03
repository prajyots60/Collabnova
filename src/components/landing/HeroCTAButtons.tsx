"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroCTAButtons() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 sm:gap-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Primary CTA - Find Creators */}
      <Link
        href="/creators"
        aria-label="Find Creators - Browse our creator marketplace"
        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Sparkles className="w-5 h-5" />
        Find Creators
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>

      {/* Secondary CTA - Start Earning */}
      <Link
        href="/register"
        aria-label="Start Earning - Sign up as a creator"
        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-foreground font-semibold rounded-xl border border-border transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Start Earning
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
