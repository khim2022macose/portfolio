"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

/* =========================================================
   TOOL DATA
========================================================= */

const mobileTools = [
  {
    name: "GoHighLevel",
    domain: "gohighlevel.com",
  },
  {
    name: "Canva",
    domain: "canva.com",
  },
  {
    name: "CapCut",
    domain: "capcut.com",
  },
  {
    name: "Metricool",
    domain: "metricool.com",
  },
  {
    name: "WordPress",
    domain: "wordpress.org",
  },
  {
    name: "Shopify",
    domain: "shopify.com",
  },
];

/* =========================================================
   TOOL BADGE
========================================================= */

function ToolBadge({
  name,
  domain,
  className,
  iconOnly = false,
  delay = 0,
}: {
  name: string;
  domain: string;
  className: string;
  iconOnly?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`
        absolute
        z-30
        hidden
        xl:flex

        items-center
        justify-center
        gap-3

        border
        border-[#4F8CFF]/40

        bg-[#0B1728]/95

        shadow-[0_14px_35px_rgba(0,0,0,0.28),0_0_20px_rgba(79,140,255,0.10)]

        backdrop-blur-xl

        transition-all
        duration-300

        hover:scale-[1.04]
        hover:border-[#79A8FF]/75

        ${
          iconOnly
            ? "h-21 w-21 rounded-2xl"
            : "h-16 min-w-40 rounded-2xl px-4"
        }

        ${className}
      `}
    >
      {/* LOGO */}

      <div
        className={`
          flex
          shrink-0
          items-center
          justify-center

          ${
            iconOnly
              ? "h-11 w-11"
              : "h-8 w-8"
          }
        `}
      >
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
          alt={`${name} logo`}
          className="h-full w-full object-contain"
        />
      </div>

      {/* TEXT */}

      {!iconOnly && (
        <span className="whitespace-nowrap text-xs font-semibold text-white">
          {name}
        </span>
      )}
    </motion.div>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-(family-name:--font-body) text-[#101828]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <SiteHeader />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#07111F]

          px-5
          pb-24
          pt-36

          text-white

          md:px-8
          md:pb-28
          md:pt-40

          lg:px-10
        "
      >
        {/* BACKGROUND GRID */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-45

            bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        {/* BACKGROUND GLOWS */}

        <div className="pointer-events-none absolute -left-60 -top-40 h-175 w-175 rounded-full bg-[#4F8CFF]/10 blur-[180px]" />

        <div className="pointer-events-none absolute -bottom-60 right-[-10%] h-150 w-150 rounded-full bg-[#79A8FF]/6 blur-[170px]" />

        <div
          className="
            relative
            mx-auto

            grid
            max-w-360
            gap-16

            lg:grid-cols-[1fr_0.85fr]
            lg:items-center

            xl:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>
            {/* LABEL */}

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
                duration: 0.45,
              }}
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-3

                  rounded-full

                  border
                  border-[#4F8CFF]/20

                  bg-[#4F8CFF]/8

                  px-4
                  py-2
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#79A8FF]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#B8D2FF]">
                  About Khim
                </span>
              </div>
            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
              }}
              className="
                font-(family-name:--font-display)

                mt-8
                max-w-4xl

                text-[clamp(3.2rem,5.3vw,6rem)]

                font-semibold
                leading-[0.92]
                tracking-tighter
              "
            >
              Creative execution
              <br />

              meets{" "}

              <span className="text-[#79A8FF]">
                digital systems.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

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
                duration: 0.55,
              }}
              className="
                mt-8
                max-w-2xl

                text-base
                leading-8
                text-[#A8B3C4]

                md:text-lg
                md:leading-9
              "
            >
              I support businesses with social media,
              content creation, GoHighLevel, email
              marketing, websites, funnels, and digital
              operations — combining creative work with
              organized systems that help projects move
              forward.
            </motion.p>

            {/* ACTIONS */}

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
                duration: 0.55,
              }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="/Khimberlie-D-Macose-CV.pdf"
                download
                className="
                  group
                  inline-flex
                  items-center
                  gap-3

                  rounded-xl
                  bg-white

                  px-6
                  py-4

                  text-sm
                  font-semibold
                  text-[#07111F]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                "
              >
                Download CV

                <Download
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>

              <Link
                href="/services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3

                  rounded-xl

                  border
                  border-white/15

                  bg-white/5

                  px-6
                  py-4

                  text-sm
                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#79A8FF]/40
                  hover:bg-white/10
                "
              >
                View My Services

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.12,
              duration: 0.7,
            }}
            className="
              relative

              mx-auto

              w-full
              max-w-145

              lg:mx-0
              lg:ml-auto
            "
          >
            {/* =================================================
                SOFT BACK GLOW
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute

                left-1/2
                top-1/2

                h-[75%]
                w-[65%]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-[#4F8CFF]/10

                blur-[90px]
              "
            />

            {/* =================================================
                NATURAL PORTRAIT FRAME
            ================================================= */}

            <div className="relative z-20 mx-auto w-full max-w-110">
              {/* SINGLE OUTER FRAME */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-3

                  rounded-[34px]

                  border
                  border-[#4F8CFF]/14
                "
              />

              {/* PORTRAIT */}

              <div
                className="
                  group
                  relative

                  overflow-hidden

                  rounded-[30px]

                  border
                  border-[#4F8CFF]/18

                  bg-[#0D1826]

                  p-1.5

                  shadow-[0_25px_70px_rgba(0,0,0,0.32)]
                "
              >
                <div
                  className="
                    relative

                    aspect-[4/4.8]

                    overflow-hidden

                    rounded-[25px]

                    bg-[#132033]
                  "
                >
                  {/* INNER GLOW */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0

                      bg-[radial-gradient(circle_at_50%_32%,rgba(79,140,255,0.14),transparent_58%)]
                    "
                  />

                  {/* KHIM */}

                  <Image
                    src="/images/Headshot.png"
                    alt="Khimberlie D. Macose"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 440px"
                    className="
                      relative
                      z-10

                      object-cover
                      object-top

                      transition-transform
                      duration-700

                      group-hover:scale-[1.012]
                    "
                  />

                  {/* BOTTOM FADE */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      z-20

                      h-20

                      bg-linear-to-t
                      from-[#07111F]/18
                      to-transparent
                    "
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                LEFT LOGOS
            ================================================= */}

            <ToolBadge
              name="GoHighLevel"
              domain="gohighlevel.com"
              delay={0}
              className="left-0 top-[13%]"
            />

            <ToolBadge
              name="Canva"
              domain="canva.com"
              iconOnly
              delay={0.3}
              className="left-2 top-[42%]"
            />

            <ToolBadge
              name="CapCut"
              domain="capcut.com"
              delay={0.6}
              className="left-0 bottom-[12%]"
            />

            {/* =================================================
                RIGHT LOGOS
            ================================================= */}

            <ToolBadge
              name="Metricool"
              domain="metricool.com"
              delay={0.15}
              className="right-0 top-[13%]"
            />

            <ToolBadge
              name="WordPress"
              domain="wordpress.org"
              iconOnly
              delay={0.45}
              className="right-2 top-[42%]"
            />

            <ToolBadge
              name="Shopify"
              domain="shopify.com"
              delay={0.75}
              className="right-0 bottom-[12%]"
            />

            {/* =================================================
                MOBILE / TABLET LOGOS
            ================================================= */}

            <div
              className="
                relative
                z-30

                mx-auto
                mt-6

                grid
                max-w-110
                grid-cols-2
                gap-3

                sm:grid-cols-3

                xl:hidden
              "
            >
              {mobileTools.map(
                (
                  tool,
                  index,
                ) => (
                  <motion.div
                    key={
                      tool.name
                    }
                    initial={{
                      opacity: 0,
                      y: 12,
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
                    className="
                      flex
                      min-h-17
                      items-center
                      gap-2.5

                      rounded-xl

                      border
                      border-[#4F8CFF]/20

                      bg-[#0D1826]

                      px-3
                      py-3

                      shadow-[0_10px_25px_rgba(0,0,0,0.16)]
                    "
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`}
                      alt={`${tool.name} logo`}
                      className="h-7 w-7 shrink-0 object-contain"
                    />

                    <span className="text-[10px] font-semibold text-white">
                      {tool.name}
                    </span>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHAT I DO
      ====================================================== */}

      <section className="bg-white px-5 py-28 md:px-8 md:py-36 lg:px-10">
        <div className="mx-auto max-w-360">
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
            className="
              grid
              gap-12

              lg:grid-cols-[0.55fr_1fr]
              lg:gap-24
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#4F8CFF]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                  What I Do
                </p>
              </div>
            </div>

            <div>
              <h2
                className="
                  font-(family-name:--font-display)

                  max-w-4xl

                  text-[clamp(2.5rem,4vw,4.5rem)]

                  font-semibold
                  leading-[0.98]
                  tracking-tighter

                  text-[#101828]
                "
              >
                Supporting the
                creative{" "}

                <span className="text-[#4F8CFF]">
                  and operational
                </span>{" "}

                side of digital
                work.
              </h2>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <p className="text-sm leading-7 text-[#667085] md:text-base md:leading-8">
                  My work spans
                  social media
                  management,
                  graphic design,
                  short-form video
                  editing, email
                  marketing, and
                  digital marketing
                  support.
                </p>

                <p className="text-sm leading-7 text-[#667085] md:text-base md:leading-8">
                  I also support
                  GoHighLevel systems,
                  websites, funnels,
                  scheduling,
                  communication,
                  lead follow-up, and
                  virtual or executive
                  operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SUPPORT AREAS
      ====================================================== */}

      <section className="bg-[#F8FAFC] px-5 py-28 md:px-8 md:py-36 lg:px-10">
        <div className="mx-auto max-w-360">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title:
                  "Creative Support",
                description:
                  "Social graphics, branded content, short-form video, promotional materials, and content preparation.",
              },

              {
                number: "02",
                title:
                  "Marketing Operations",
                description:
                  "GoHighLevel, campaigns, email marketing, CRM organization, workflows, and lead follow-up.",
              },

              {
                number: "03",
                title:
                  "Business Support",
                description:
                  "Scheduling, communication, task coordination, documentation, and day-to-day virtual support.",
              },
            ].map(
              (
                item,
                index,
              ) => (
                <motion.article
                  key={
                    item.title
                  }
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    min-h-80

                    rounded-4xl

                    border
                    border-[#D8E0EA]

                    bg-white

                    p-7

                    shadow-[0_12px_40px_rgba(15,23,42,0.035)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#4F8CFF]/30

                    md:p-8
                  "
                >
                  <span className="font-(family-name:--font-display) text-sm font-semibold text-[#4F8CFF]">
                    {
                      item.number
                    }
                  </span>

                  <h3 className="font-(family-name:--font-display) mt-14 text-2xl font-semibold tracking-tight text-[#101828]">
                    {
                      item.title
                    }
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#667085]">
                    {
                      item.description
                    }
                  </p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden

          bg-[#07111F]

          px-5
          py-24

          text-white

          md:px-8
          md:py-28

          lg:px-10
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-40

            bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        <div
          className="
            relative
            mx-auto

            grid
            max-w-360
            gap-10

            lg:grid-cols-[1fr_auto]
            lg:items-end
          "
        >
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
              Work With Me
            </p>

            <h2
              className="
                font-(family-name:--font-display)

                mt-5
                max-w-4xl

                text-[clamp(2.8rem,4.5vw,4.9rem)]

                font-semibold
                leading-[0.96]
                tracking-tighter
              "
            >
              Need creative or
              digital{" "}

              <span className="text-[#79A8FF]">
                support?
              </span>
            </h2>
          </div>

          <Link
            href="/contact#contact-form"
            className="
              group
              inline-flex
              items-center
              gap-3

              rounded-xl
              bg-white

              px-6
              py-4

              text-sm
              font-semibold
              text-[#07111F]

              transition-transform
              duration-300

              hover:-translate-y-1
            "
          >
            Start a Project

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <SiteFooter />
    </main>
  );
}