// Small presets we’ll reuse everywhere
export const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeIn = (d = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: d } },
});

export const scaleIn = {
  hidden: { scale: 0.96, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};
