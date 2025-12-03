"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote, Verified } from "lucide-react";
import { useRef } from "react";

type Testimonial = {
  name: string;
  role: string;
  handle: string;
  avatar: string;
  verified: boolean;
  rating: number;
  text: string;
  metrics: { deals: number; earned?: string; invested?: string };
  gradient: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    handle: "@sarahcreates",
    avatar: "SC",
    verified: true,
    rating: 5,
    text: "The escrow system changed everything. I used to chase payments for weeks. Now I just focus on creating great content.",
    metrics: { deals: 47, earned: "$24K" },
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Marcus Johnson",
    role: "Marketing Director",
    handle: "@techflow_marcus",
    avatar: "MJ",
    verified: true,
    rating: 5,
    text: "We went from spending 3 weeks finding creators to 3 days. The ROI tracking alone saved our Q3 campaign.",
    metrics: { deals: 23, invested: "$180K" },
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Lifestyle Influencer",
    handle: "@em_lifestyle",
    avatar: "ER",
    verified: true,
    rating: 5,
    text: "Finally a platform that respects creators. Fair rates, protected payments, and brands that actually care about quality.",
    metrics: { deals: 89, earned: "$67K" },
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "David Park",
    role: "Brand Manager",
    handle: "@wellness_dave",
    avatar: "DP",
    verified: true,
    rating: 5,
    text: "The verification system saved us from what would've been a PR nightmare. Worth every penny.",
    metrics: { deals: 34, invested: "$95K" },
    gradient: "from-emerald-500 to-green-500",
  },
  {
    name: "Aisha Thompson",
    role: "YouTube Creator",
    handle: "@aisha_creates",
    avatar: "AT",
    verified: true,
    rating: 5,
    text: "Went from 2 brand deals a year to 2 a month. The platform handles all the awkward money conversations.",
    metrics: { deals: 31, earned: "$42K" },
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "James Mitchell",
    role: "Startup CEO",
    handle: "@startupx_james",
    avatar: "JM",
    verified: true,
    rating: 5,
    text: "Scaled our influencer marketing 3x while cutting costs. The analytics dashboard is a game-changer.",
    metrics: { deals: 67, invested: "$340K" },
    gradient: "from-cyan-500 to-teal-500",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      className="shrink-0 w-[400px] mx-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group relative h-full">
        {/* Card */}
        <div className="relative h-full p-6 rounded-3xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/30">
          {/* Quote accent */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${testimonial.gradient} opacity-5 blur-2xl`} />
          
          {/* Quote icon */}
          <Quote className={`w-10 h-10 mb-4 opacity-20 text-foreground`} />
          
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-500 text-yellow-500"
              />
            ))}
          </div>

          {/* Text */}
          <p className="text-foreground text-lg leading-relaxed mb-6">
            "{testimonial.text}"
          </p>

          {/* Metrics */}
          <div className="flex gap-6 mb-6 pb-6 border-b border-border">
            <div>
              <p className="text-2xl font-bold text-foreground">{testimonial.metrics.deals}</p>
              <p className="text-xs text-muted">Deals</p>
            </div>
            <div>
              <p className={`text-2xl font-bold bg-linear-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                {testimonial.metrics.earned || testimonial.metrics.invested}
              </p>
              <p className="text-xs text-muted">{testimonial.metrics.earned ? "Earned" : "Invested"}</p>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full bg-linear-to-br ${testimonial.gradient} p-0.5`}>
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-foreground font-semibold">
                {testimonial.avatar}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                {testimonial.verified && (
                  <Verified className="w-4 h-4 text-primary fill-primary/20" />
                )}
              </div>
              <p className="text-sm text-muted">{testimonial.handle}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MarqueeRow({ items, direction = 1 }: { items: Testimonial[]; direction?: number }) {
  return (
    <div className="flex overflow-hidden py-4 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex"
        animate={{ x: direction === 1 ? [0, -2400] : [-2400, 0] }}
        transition={{
          x: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items].map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} index={index % items.length} />
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-20 md:py-28 relative overflow-hidden">
      <motion.div style={{ opacity }}>
        <div className="max-w-6xl mx-auto px-4 mb-16">
          {/* Section Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Star className="w-4 h-4 fill-amber-500" />
              4.9/5 Average Rating
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Real stories from{" "}
              <span className="relative">
                <span className="relative z-10">real users</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 right-0 h-4 bg-amber-500/20 z-0 rounded-sm"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Join thousands who've transformed their collaborations
            </p>
          </motion.div>
        </div>

        {/* Testimonial Marquees */}
        <div className="space-y-4">
          <MarqueeRow items={testimonials.slice(0, 3)} direction={1} />
          <MarqueeRow items={testimonials.slice(3, 6)} direction={-1} />
        </div>

        {/* Bottom social proof */}
        <motion.div 
          className="max-w-6xl mx-auto px-4 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["SC", "MJ", "ER", "DP"].map((initials, i) => (
                  <div key={initials} className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-xs font-medium">
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-sm">+10,000 happy users</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
