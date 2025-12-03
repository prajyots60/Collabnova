"use client";

import { motion } from "framer-motion";

export function HeroHeadline() {
  const words = ["Creators", "&", "Sponsors"];
  
  return (
    <motion.h1
      className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated words */}
      <span className="inline-flex flex-wrap justify-center gap-x-4">
        {words.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 40, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </span>
      
      {/* Divider line */}
      <motion.span
        className="block my-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <span className="block w-24 h-1 mx-auto bg-linear-to-r from-primary via-secondary to-primary rounded-full" />
      </motion.span>
      
      {/* Gradient animated text */}
      <motion.span
        className="relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <span className="relative">
          <span 
            className="bg-linear-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient"
          >
            Working Together
          </span>
        </span>
      </motion.span>
      
      {/* Securely with lock icon effect */}
      <motion.span
        className="block mt-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <span className="relative inline-flex items-center gap-3">
          <span className="text-foreground">Securely</span>
          <motion.span
            className="inline-block w-2 h-2 rounded-full bg-secondary"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </span>
      </motion.span>
    </motion.h1>
  );
}
