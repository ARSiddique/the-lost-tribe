"use client";
import { motion } from "framer-motion";

export const FadeIn = ({ delay = 0, y = 16, children, as = "div" }) => {
  const M = motion[as] ?? motion.div;
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </M>
  );
};
