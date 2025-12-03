"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Active Creators",
    description: "Verified and ready to collaborate",
  },
  {
    value: 2500,
    suffix: "+",
    label: "Brand Partners",
    description: "From startups to Fortune 500",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Deals Completed",
    description: "Successful collaborations",
  },
  {
    value: 15,
    suffix: "M+",
    label: "Paid Out",
    prefix: "$",
    description: "To creators worldwide",
  },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
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
            The Numbers <span className="text-primary">Speak</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Join thousands of creators and brands already growing together on
            CollabNova.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-xl font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
