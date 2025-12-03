"use client";

import { motion } from "framer-motion";
import { Search, Handshake, CreditCard, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "Browse verified creators or campaigns that match your goals and audience.",
    forSponsor: "Find creators who align with your brand values and target audience.",
    forCreator: "Explore campaigns from brands looking for authentic partnerships.",
  },
  {
    icon: Handshake,
    step: "02",
    title: "Connect",
    description:
      "Send proposals, negotiate terms, and agree on deliverables securely.",
    forSponsor: "Review creator portfolios and send collaboration requests.",
    forCreator: "Receive offers and negotiate fair terms for your work.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Secure Payment",
    description:
      "Funds are held in escrow until both parties approve the deliverables.",
    forSponsor: "Your payment is protected until you're satisfied with the work.",
    forCreator: "Get guaranteed payment once your work is approved.",
  },
  {
    icon: Star,
    step: "04",
    title: "Deliver & Review",
    description:
      "Complete the work, get paid, and build your reputation with reviews.",
    forSponsor: "Approve deliverables and leave a review for future reference.",
    forCreator: "Submit your work and receive payment instantly upon approval.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4">
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
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Get started in minutes. Our streamlined process makes collaboration
            simple and secure.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <span className="text-sm font-semibold text-primary mb-2 block">
                    Step {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
