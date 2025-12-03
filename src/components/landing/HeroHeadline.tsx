"use client";

import { motion } from "framer-motion";

export function HeroHeadline() {
  return (
    <motion.h1
      className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      Creators & Sponsors —{" "}
      <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
        Working Together
      </span>{" "}
      Securely.
    </motion.h1>
  );
}
