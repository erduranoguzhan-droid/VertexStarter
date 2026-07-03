"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { HeroActions } from "@/components/hero-actions";

export function HeroContent({
  eyebrow,
  titleA,
  titleAccent,
  subtitle,
  primary,
  secondary,
}: {
  eyebrow: string;
  titleA: string;
  titleAccent: string;
  subtitle: string;
  primary: string;
  secondary: string;
}) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-3xl"
    >
      <motion.span
        variants={item}
        className="inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 font-mono text-xs tracking-[0.18em] text-accent ring-line"
      >
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
        </span>
        {eyebrow}
      </motion.span>

      <motion.h1
        variants={item}
        className="mt-7 text-5xl leading-[1.02] tracking-tight sm:text-7xl"
      >
        {titleA} <span className="italic text-accent">{titleAccent}</span>
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
      >
        {subtitle}
      </motion.p>

      <motion.div variants={item} className="mt-9">
        <HeroActions primary={primary} secondary={secondary} />
      </motion.div>
    </motion.div>
  );
}
