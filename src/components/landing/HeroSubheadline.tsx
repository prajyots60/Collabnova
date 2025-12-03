"use client";

import { motion } from "framer-motion";

export function HeroSubheadline() {
  return (
    <motion.p
      className="text-lg sm:text-xl text-muted max-w-[600px] leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.15,
        ease: "easeOut",
      }}
    >
      A secure marketplace where creators collaborate with sponsors using
      escrow-protected payments.
    </motion.p>
  );
}
