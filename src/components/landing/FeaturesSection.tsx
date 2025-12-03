"use client";

import { motion } from "framer-motion";
import { Shield, Wallet, BarChart3, Users, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Escrow Protection",
    description:
      "Payments are held securely until work is approved. Both parties are protected.",
  },
  {
    icon: Wallet,
    title: "Secure Payments",
    description:
      "Fast, reliable payouts with multiple payment methods and transparent fees.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track campaign performance, engagement metrics, and ROI in real-time.",
  },
  {
    icon: Users,
    title: "Verified Profiles",
    description:
      "All creators and sponsors go through verification for trust and safety.",
  },
  {
    icon: Zap,
    title: "Quick Matching",
    description:
      "AI-powered matching connects you with the perfect collaborators instantly.",
  },
  {
    icon: Lock,
    title: "Contract Management",
    description:
      "Built-in contracts and agreements to protect your collaborations.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-primary">Collaborate Securely</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Our platform provides all the tools sponsors and creators need for
            successful, protected partnerships.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
