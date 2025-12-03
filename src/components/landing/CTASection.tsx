"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { useRef, MouseEvent } from "react";

function AnimatedBorderCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative group"
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(400px circle at ${x}px ${y}px, rgba(79, 70, 229, 0.3), transparent 40%)`
          ),
        }}
      />
      
      {/* Static gradient border */}
      <div className="absolute -inset-px rounded-[2rem] bg-linear-to-r from-primary via-purple-500 to-secondary opacity-20" />
      
      {/* Card content */}
      <div className="relative rounded-[2rem] bg-card p-1">
        <div className="rounded-[calc(2rem-4px)] bg-background">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function CTASection() {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <AnimatedBorderCard>
          <div className="p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                  </span>
                  Join 10,000+ users
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Start your{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">next</span>
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-3 bg-primary/30 rounded-sm"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </span>
                  {" "}collaboration today
                </h2>

                <p className="text-lg text-muted mb-8 leading-relaxed">
                  Join the platform that's revolutionizing how creators and brands work together. 
                  No hidden fees. No payment delays. Just secure, seamless partnerships.
                </p>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Shield className="w-4 h-4 text-primary" />
                    Bank-level security
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Zap className="w-4 h-4 text-secondary" />
                    24h average payout
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/register?role=sponsor"
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
                  >
                    {/* Shine effect */}
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <span className="relative flex items-center gap-2">
                      I'm a Sponsor
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>

                  <Link
                    href="/register?role=creator"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-foreground font-semibold rounded-xl border border-border transition-all duration-300 hover:border-secondary hover:text-secondary hover:shadow-lg hover:shadow-secondary/10"
                  >
                    I'm a Creator
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <p className="mt-6 text-sm text-muted">
                  Free to join • No credit card required
                </p>
              </motion.div>

              {/* Right content - Visual */}
              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative aspect-square max-w-[400px] mx-auto">
                  {/* Orbiting elements */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">💰</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute inset-8"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🤝</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute inset-16"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-linear-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">⭐</span>
                    </div>
                  </motion.div>

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-24 h-24 rounded-3xl bg-linear-to-br from-primary to-secondary flex items-center justify-center shadow-2xl"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Sparkles className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>

                  {/* Orbital rings */}
                  <div className="absolute inset-0 border border-border/30 rounded-full" />
                  <div className="absolute inset-8 border border-border/20 rounded-full" />
                  <div className="absolute inset-16 border border-border/10 rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedBorderCard>
      </div>
    </section>
  );
}
