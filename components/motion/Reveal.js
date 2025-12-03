// components/motion/Reveal.js
"use client";
import { motion } from "framer-motion";

export const FadeIn = ({
  as: Tag = "div",
  delay = 0,
  duration = 0.6,
  y = 20,
  children,
  className = "",
}) => {
  const MotionTag = motion(Tag);            // ✅ dynamic motion component
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export const Stagger = ({ items = [], render, delay = 0, className = "" }) => (
  <div className={className}>
    {items.map((item, i) => (
      <FadeIn key={i} delay={delay + i * 0.08}>
        {render(item, i)}
      </FadeIn>
    ))}
  </div>
);
