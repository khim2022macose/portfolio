"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Download,
  Mail,
  Megaphone,
  Monitor,
  Palette,
  Share2,
  Video,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

/* =========================================================
   FOCUS AREAS
========================================================= */

const focusAreas = [
  {
    title: "Creative",
    description:
      "Content creation, graphic design, short-form video, and branded marketing materials.",
    icon: Palette,
  },
  {
    title: "Marketing",
    description:
      "Social media, email campaigns, lead generation, promotional content, and campaign support.",
    icon: Megaphone,
  },
  {
    title: "Systems",
    description:
      "GoHighLevel workflows, funnels, CRM organization, automations, and digital processes.",
    icon: Workflow,
  },
  {
    title: "Operations",
    description:
      "Scheduling, communication, coordination, documentation, and day-to-day digital support.",
    icon: BriefcaseBusiness,
  },
];

/* =========================================================
   WORK AREAS
========================================================= */

const workAreas = [
  {
    title: "Social Media Management",
    icon: Share2,
  },
  {
    title: "Graphic Design & Content",
    icon: Palette,
  },
  {
    title: "Short-Form Video Editing",
    icon: Video,
  },
  {
    title: "GoHighLevel Operations",
    icon: Workflow,
  },
  {
    title: "Email Marketing",
    icon: Mail,
  },
  {
    title: "Websites & Funnels",
    icon: Monitor,
  },
];

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="min-h-screen font-(family-name:--font-body) selection:bg-[#4F8CFF] selection:text-white">
      <SiteHeader />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#07111F] px-5 pb-24 pt-36 text-white md:px-8 md:pb-32 md:pt-40 lg:px-10 lg:pb-36">
        {/* GRID */}

        <div
          className="
            pointer-events-none absolute inset-0 opacity-60
            bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        {/* GLOWS */}

        <div className="pointer-events-none absolute -left-60 -top-60 h-175 w-175 rounded-full bg-[#4F8CFF]/13 blur-[190px]" />

        <div className="pointer-events-none absolute -bottom-60 right-[-10%] h-150 w-150 rounded-full bg-[#94A3B8]/7 blur-[170px]" />

        <div className="relative mx-auto grid max-w-360 items-center gap-16 lg:grid-cols-[1fr_0.75fr] lg:gap-20 xl:gap-28">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#4F8CFF]/25 bg-[#4F8CFF]/10 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#79A8FF]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.21em] text-[#B8D2FF]">
                About Khim
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="font-(family-name:--font-display) max-w-4xl text-[clamp(3.2rem,5vw,5.75rem)] font-semibold leading-[0.92] tracking-tighter"
            >
              Creative execution
              <br />
              meets{" "}
              <span className="text-[#79A8FF]">
                digital systems.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.12,
              }}
              className="mt-8 max-w-2xl text-base leading-8 text-[#A8B3C4] md:text-lg"
            >
              I&apos;m Khimberlie D. Macose, a Creative
              Digital Marketing & Operations Specialist
              supporting businesses with content,
              marketing systems, digital platforms, and
              organized day-to-day execution.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/Khimberlie-D-Macose-CV.pdf"
                download
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#4F8CFF] px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(79,140,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#79A8FF]"
              >
                <Download size={17} />

                Download CV
              </a>

              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-[#2B3A50] bg-[#132033] px-6 py-4 text-sm font-semibold text-[#A8B3C4] transition-all duration-300 hover:-translate-y-1 hover:border-[#4F8CFF]/50 hover:bg-[#19283D] hover:text-white"
              >
                View My Work

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* =================================================
              KHIM IMAGE FRAME
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="relative mx-auto w-full max-w-105"
          >
            {/* BACK DECORATION */}

            <div className="absolute -right-7 -top-7 h-full w-full rounded-[34px] border border-[#4F8CFF]/15" />

            <div className="absolute -bottom-6 -left-6 h-full w-full rounded-[34px] border border-white/5" />

            {/* IMAGE FRAME */}

            <div className="relative aspect-4/5 overflow-hidden rounded-[34px] border border-white/10 bg-[#101C2C] shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
              {/* EMPTY FRAME ONLY */}

              <div className="absolute inset-0 bg-linear-to-br from-[#132033] via-[#0D1826] to-[#07111F]" />

              {/* VERY SUBTLE INNER FRAME */}

              <div className="absolute inset-4 rounded-[26px] border border-white/5" />
            </div>

            {/* SMALL DECORATIVE DOT */}

            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute -bottom-3 right-10 h-3 w-3 rounded-full bg-[#4F8CFF] shadow-[0_0_20px_rgba(79,140,255,0.7)]"
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ABOUT INTRO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10">
        <div className="mx-auto max-w-360">
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:gap-24"
          >
            {/* HEADING */}

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                About Me
              </p>

              <h2 className="font-(family-name:--font-display) mt-6 max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
                Helping digital work feel{" "}

                <span className="text-[#4F8CFF]">
                  organized and intentional.
                </span>
              </h2>
            </div>

            {/* PARAGRAPHS */}

            <div className="space-y-6 text-sm leading-7 text-[#667085] md:text-base md:leading-8 lg:pt-8">
              <p>
                My work sits at the intersection of
                creative content, marketing systems,
                and digital operations.
              </p>

              <p>
                I support businesses with the pieces
                that keep their online presence and
                marketing activity moving — from
                social media and content production to
                CRM workflows, email campaigns,
                websites, funnels, scheduling, and
                operational support.
              </p>

              <p>
                The goal is to keep creative work,
                marketing activity, and digital
                operations connected rather than
                treating each one as a separate task.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MY FOCUS
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#E9EEF5] px-5 py-28 text-[#101828] md:px-8 md:py-36 lg:px-10">
        {/* GLOW */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-150 w-150 rounded-full bg-[#4F8CFF]/5 blur-[170px]" />

        <div className="relative mx-auto max-w-360">
          {/* HEADING */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-4xl"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
              My Focus
            </p>

            <h2 className="font-(family-name:--font-display) mt-6 text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
              Creative thinking backed by{" "}

              <span className="text-[#4F8CFF]">
                organized execution.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#667085] md:text-base md:leading-8">
              My work combines four areas that help
              support a business&apos;s digital presence,
              marketing activity, and day-to-day
              operations.
            </p>
          </motion.div>

          {/* CARDS */}

          <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map(
              (
                area,
                index,
              ) => {
                const Icon = area.icon;

                return (
                  <motion.article
                    key={area.title}
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
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      y: -7,
                    }}
                    className="group relative min-h-72 overflow-hidden rounded-4xl border border-[#D2DBE6] bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#4F8CFF]/40 hover:shadow-[0_22px_55px_rgba(79,140,255,0.1)]"
                  >
                    {/* GLOW */}

                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#4F8CFF]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#4F8CFF]/12" />

                    {/* ICON */}

                    <motion.div
                      whileHover={{
                        rotate: -7,
                        scale: 1.08,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                      }}
                      className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#4F8CFF]"
                    >
                      <Icon size={19} />
                    </motion.div>

                    <h3 className="font-(family-name:--font-display) relative mt-10 text-2xl font-semibold tracking-tight">
                      {area.title}
                    </h3>

                    <p className="relative mt-5 text-sm leading-7 text-[#667085]">
                      {area.description}
                    </p>
                  </motion.article>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT I WORK ON
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10">
        <div className="mx-auto max-w-360">
          {/* HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-end lg:gap-20"
          >
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                What I Work On
              </p>

              <h2 className="font-(family-name:--font-display) mt-6 max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
                Support across the{" "}

                <span className="text-[#4F8CFF]">
                  digital workflow.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#667085] md:text-base md:leading-8 lg:pb-1">
              From creative production to marketing
              systems and business support, I work
              across the areas that help digital work
              move forward.
            </p>
          </motion.div>

          {/* WORK AREA LIST */}

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {workAreas.map(
              (
                item,
                index,
              ) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-[#D8E0EA] bg-[#F8FAFC] p-5 transition-all duration-300 hover:border-[#4F8CFF]/35 hover:bg-white hover:shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#4F8CFF]">
                      <Icon size={17} />
                    </div>

                    <span className="font-(family-name:--font-display) text-sm font-semibold text-[#27364A] md:text-base">
                      {item.title}
                    </span>

                    <Check
                      size={15}
                      className="ml-auto text-[#4F8CFF]"
                    />
                  </motion.div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CV SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0D1826] px-5 py-24 text-white md:px-8 md:py-28 lg:px-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-[#4F8CFF]/10 blur-[150px]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative mx-auto max-w-360 overflow-hidden rounded-4xl border border-white/10 bg-[#132033]/75 p-7 backdrop-blur-xl md:p-10 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* TEXT */}

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#79A8FF]">
                Curriculum Vitae
              </p>

              <h2 className="font-(family-name:--font-display) mt-5 max-w-3xl text-3xl font-semibold tracking-tighter md:text-5xl">
                Want a closer look at my work
                background?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8">
                Download my CV or continue exploring
                selected work across my portfolio.
              </p>
            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="/Khimberlie-D-Macose-CV.pdf"
                download
                className="group inline-flex items-center gap-3 rounded-xl bg-[#4F8CFF] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#79A8FF]"
              >
                <Download size={16} />

                Download CV
              </a>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-[#D8E0EA] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                View Portfolio

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-28 text-center md:px-8 md:py-36 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-4xl"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4F8CFF]">
            Work Together
          </p>

          <h2 className="font-(family-name:--font-display) mt-6 text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter text-[#101828]">
            Have something you&apos;d like to{" "}

            <span className="text-[#4F8CFF]">
              build together?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#667085] md:text-base md:leading-8">
            Tell me about the project, what kind of
            support you need, and what you&apos;re
            trying to accomplish.
          </p>

          <Link
            href="/contact#contact-form"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#07111F] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#132033]"
          >
            Start a Project

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </section>

      <SiteFooter />
    </main>
  );
}