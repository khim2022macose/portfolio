"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function HomeProjectCTA() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] px-5 py-28 text-white md:px-8 md:py-36 lg:px-10 lg:py-40">
      {/* BACKGROUND GRID */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-40
          bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]
          bg-size-[72px_72px]
        "
      />

      {/* BLUE GLOWS */}

      <div className="pointer-events-none absolute -left-50 top-[-40%] h-150 w-150 rounded-full bg-[#4F8CFF]/10 blur-[180px]" />

      <div className="pointer-events-none absolute -right-50 bottom-[-60%] h-150 w-150 rounded-full bg-[#79A8FF]/8 blur-[180px]" />

      {/* CONTENT */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.65,
        }}
        className="relative mx-auto max-w-360 text-center"
      >
        {/* EYEBROW */}

        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#4F8CFF]" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#79A8FF]">
            Have a Project in Mind?
          </p>

          <span className="h-px w-10 bg-[#4F8CFF]" />
        </div>

        {/* TITLE */}

        <h2 className="font-(family-name:--font-display) mx-auto mt-8 max-w-4xl text-[clamp(3rem,4.5vw,5.2rem)] font-semibold leading-[0.96] tracking-tighter">
          Let&apos;s build something
          <br />

          <span>
            that{" "}
            <span className="text-[#79A8FF]">
              works.
            </span>
          </span>
        </h2>

        {/* DESCRIPTION */}

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8">
          Whether you need creative content,
          marketing support, CRM workflows,
          websites, funnels, or digital operations,
          let&apos;s talk about what you&apos;re
          building.
        </p>

        {/* BUTTONS */}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact#contact-form"
            className="group inline-flex min-w-55 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#07111F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B8D2FF]"
          >
            Start a Project

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/contact#contact-form"
            className="group inline-flex min-w-55 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
          >
            <MessageCircle size={15} />

            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}