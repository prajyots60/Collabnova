"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Handshake, CreditCard, Star, Check } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "Browse verified creators or campaigns that match your goals",
    details: ["AI-powered recommendations", "Advanced filters", "Portfolio previews"],
    accent: "from-blue-500 to-indigo-500",
  },
  {
    icon: Handshake,
    step: "02",
    title: "Connect",
    description: "Send proposals and negotiate terms directly on platform",
    details: ["In-app messaging", "Contract templates", "Rate negotiation"],
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Secure",
    description: "Funds held in escrow until deliverables are approved",
    details: ["Bank-level security", "Milestone payments", "Dispute protection"],
    accent: "from-emerald-500 to-green-500",
  },
  {
    icon: Star,
    step: "04",
    title: "Deliver",
    description: "Complete the work, get paid, build your reputation",
    details: ["One-click approval", "Instant payout", "Review system"],
    accent: "from-amber-500 to-orange-500",
  },
];

function StepCard({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [index % 2 === 0 ? -50 : 50, 0, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      style={{ opacity, scale, x }}
    >
      {/* Connector line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px">
          <motion.div 
            className={`h-full bg-linear-to-r ${step.accent}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          />
        </div>
      )}
      
      <div className="group relative h-full">
        {/* Glow effect */}
        <div className={`absolute -inset-px rounded-3xl bg-linear-to-r ${step.accent} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
        
        {/* Card */}
        <div className="relative h-full p-8 rounded-3xl bg-card border border-border group-hover:border-transparent transition-colors duration-300">
          {/* Step number - floating */}
          <motion.div 
            className={`absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-linear-to-br ${step.accent} flex items-center justify-center shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <span className="text-white font-bold text-sm">{step.step}</span>
          </motion.div>

          {/* Icon */}
          <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.accent} p-0.5 mb-6`}>
            <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
              <step.icon className="w-7 h-7 text-foreground" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-muted mb-6 leading-relaxed">
            {step.description}
          </p>

          {/* Details list */}
          <ul className="space-y-2">
            {step.details.map((detail, i) => (
              <motion.li
                key={detail}
                className="flex items-center gap-2 text-sm text-muted"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Check className="w-4 h-4 text-secondary shrink-0" />
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 relative overflow-hidden bg-muted/30">
      {/* Animated background shape */}
      <motion.div 
        className="absolute top-1/4 -left-64 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        style={{ y: backgroundY }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            Simple 4-Step Process
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From discovery to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">payment</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <motion.path
                  d="M2 10C50 4 150 4 198 10"
                  stroke="url(#underline-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="#10b981" />
                    <stop offset="1" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We've stripped away the complexity. Get matched, agree on terms, and get paid—all in one place.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <StepCard
              key={step.step}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted mb-4">Average time from signup to first deal:</p>
          <div className="inline-flex items-baseline gap-1">
            <span className="text-5xl font-bold text-primary">48</span>
            <span className="text-xl text-muted">hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
