"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Briefcase, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Active Creators",
    description: "Verified and ready",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Briefcase,
    value: 2500,
    suffix: "+",
    label: "Brand Partners",
    description: "Startup to Fortune 500",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    value: 50000,
    suffix: "+",
    label: "Deals Completed",
    description: "Successful collabs",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: DollarSign,
    value: 15,
    suffix: "M+",
    label: "Paid to Creators",
    description: "And counting...",
    color: "from-amber-500 to-orange-500",
  },
];

function AnimatedNumber({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value >= 1000) {
      return Math.round(latest).toLocaleString();
    }
    return Math.round(latest);
  });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });
      
      const unsubscribe = rounded.on("change", (v) => setDisplayValue(String(v)));
      
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, value, duration, count, rounded]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Background glow */}
      <div className={`absolute inset-0 bg-linear-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative p-8 rounded-3xl bg-card border border-border group-hover:border-transparent transition-all duration-300 overflow-hidden">
        {/* Animated corner accent */}
        <motion.div 
          className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-linear-to-br ${stat.color} opacity-20`}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Icon */}
        <div className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${stat.color} p-0.5 mb-6`}>
          <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
            <stat.icon className="w-6 h-6 text-foreground" />
          </div>
        </div>
        
        {/* Number */}
        <div className="mb-2">
          <span className={`text-4xl sm:text-5xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </span>
        </div>
        
        {/* Label */}
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {stat.label}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted">
          {stat.description}
        </p>
        
        {/* Bottom progress bar */}
        <motion.div 
          className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${stat.color}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <motion.div
            className="absolute inset-0 rounded-full border border-border/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-12 rounded-full border border-border/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-24 rounded-full border border-border/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-4 h-4" />
            Growing Every Day
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by the{" "}
            <span className="relative">
              <span className="relative z-10 text-primary">best</span>
            </span>
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Numbers that speak louder than words
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom trust badges */}
        <motion.div 
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-sm">🔒 Bank-level security</span>
          <span className="text-sm">⚡ 24h average payout</span>
          <span className="text-sm">🌍 Available in 50+ countries</span>
        </motion.div>
      </div>
    </section>
  );
}
