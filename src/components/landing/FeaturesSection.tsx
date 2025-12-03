"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Shield,
  Zap,
  BarChart3,
  BadgeCheck,
  Sparkles,
  FileText,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Escrow Protection",
    description: "Funds held securely until work is approved",
    details: "Your money stays protected in our secure escrow system. Funds are only released when both parties confirm deliverables are complete. Zero risk of non-payment or disputes.",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Get paid within hours of approval",
    details: "No more waiting weeks for payments. Once work is approved, funds hit your account within hours. Support for bank transfers, PayPal, and crypto.",
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-amber-500/10",
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    description: "Real-time campaign performance tracking",
    details: "Track impressions, engagement, conversions in real-time. AI-powered insights help optimize campaigns on the fly. Beautiful dashboards you'll actually use.",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
  },
  {
    icon: BadgeCheck,
    title: "Verified Profiles",
    description: "Work with authenticated creators only",
    details: "Every creator goes through verification. We check audience authenticity, engagement rates, and past performance. No bots, no fake followers.",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
  },
  {
    icon: Sparkles,
    title: "AI Matching",
    description: "Find perfect partnerships automatically",
    details: "Our AI analyzes 50+ data points to match brands with ideal creators. Better matches mean better results. Average 3x improvement in campaign ROI.",
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
  },
  {
    icon: FileText,
    title: "Smart Contracts",
    description: "Auto-generated legal agreements",
    details: "Professional contracts generated instantly. Clear deliverables, timelines, and payment terms. Legally binding and customizable to your needs.",
    gradient: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-500/10",
  },
];

function FeatureCard({ feature, index, isActive, onClick }: {
  feature: typeof features[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`relative cursor-pointer group ${isActive ? "md:col-span-2" : ""}`}
    >
      <div className={`
        relative h-full p-6 rounded-2xl border transition-all duration-300
        ${isActive 
          ? "bg-card border-primary/30 shadow-lg shadow-primary/5" 
          : "bg-card/50 border-border/50 hover:bg-card hover:border-border"
        }
      `}>
        {/* Icon */}
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center mb-4
          bg-gradient-to-br ${feature.gradient}
        `}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3">
          {feature.description}
        </p>

        {/* Expanded content */}
        <motion.div
          initial={false}
          animate={{ 
            height: isActive ? "auto" : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-foreground/80 text-sm leading-relaxed pt-2 border-t border-border/50">
            {feature.details}
          </p>
          <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            Learn more <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Click indicator */}
        {!isActive && (
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs text-muted-foreground">Click to expand</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4"
          >
            Why CollabNova
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Everything you need to{" "}
            <span className="text-primary">succeed</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            Built by creators and brands who understand the pain points. 
            Every feature designed to make collaborations seamless.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border/50"
        >
          {[
            { value: "50K+", label: "Active Creators" },
            { value: "$12M+", label: "Paid to Creators" },
            { value: "98%", label: "Success Rate" },
            { value: "4.9/5", label: "Platform Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
