"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    avatar: "SC",
    rating: 5,
    text: "CollabNova changed how I work with brands. The escrow system gives me peace of mind, and I've never had a payment issue since joining.",
  },
  {
    name: "Marcus Johnson",
    role: "Marketing Director at TechFlow",
    avatar: "MJ",
    rating: 5,
    text: "Finding authentic creators used to take weeks. Now we can discover, vet, and partner with influencers in days. The ROI tracking is incredible.",
  },
  {
    name: "Emily Rodriguez",
    role: "Lifestyle Influencer",
    avatar: "ER",
    rating: 5,
    text: "I've completed over 50 campaigns through CollabNova. The contract management and secure payments make everything so professional.",
  },
  {
    name: "David Park",
    role: "Brand Manager at Wellness Co",
    avatar: "DP",
    rating: 5,
    text: "The verification system ensures we only work with legitimate creators. It's saved us from potential PR disasters and fake engagement.",
  },
  {
    name: "Aisha Thompson",
    role: "YouTube Creator",
    avatar: "AT",
    rating: 5,
    text: "Finally, a platform that respects creators. Fair negotiations, protected payments, and a supportive community. Highly recommend!",
  },
  {
    name: "James Mitchell",
    role: "CEO at StartupX",
    avatar: "JM",
    rating: 5,
    text: "We've scaled our influencer marketing 3x using CollabNova. The analytics help us understand exactly what's working.",
  },
];

export function TestimonialsSection() {
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
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            See what creators and sponsors are saying about their experience
            with CollabNova.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

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
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
