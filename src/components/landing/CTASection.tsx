"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center p-12 rounded-3xl bg-card border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Start Collaborating?
          </h2>

          <p className="text-lg text-muted max-w-xl mx-auto mb-8">
            Join thousands of creators and sponsors who are building successful
            partnerships on CollabNova. Sign up today — it's free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register?role=sponsor"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25"
            >
              I'm a Sponsor
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/register?role=creator"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-secondary/25"
            >
              I'm a Creator
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted">
            No credit card required • Free to join • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
