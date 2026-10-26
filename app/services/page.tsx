"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Palette,
  Rocket,
  Search,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Social Media Management",
    description:
      "Ongoing social media support focused on keeping content organized, consistent, and ready for publishing across the platforms your business uses.",
    relatedWork: "/work/social-media",
    features: [
      "Content planning & scheduling",
      "Content calendar organization",
      "Captions & calls to action",
      "Publishing support",
      "Brand consistency",
    ],
  },

  {
    number: "02",
    title: "Graphic Design & Content Creation",
    description:
      "Branded creative support for social media, promotions, campaigns, educational content, and everyday digital marketing materials.",
    relatedWork: "/work/graphic-design",
    features: [
      "Social media graphics",
      "Branded templates",
      "Carousel content",
      "Promotional materials",
      "Educational & quote graphics",
    ],
  },

  {
    number: "03",
    title: "Short-Form Video Editing",
    description:
      "Short-form video content prepared for social platforms with clean pacing, captions, text overlays, and platform-ready vertical formatting.",
    relatedWork: "/work/video-editing",
    features: [
      "Reels & TikTok editing",
      "Captions & text overlays",
      "Vertical video formatting",
      "Social-ready exports",
      "CapCut editing",
    ],
  },

  {
    number: "04",
    title: "GoHighLevel Marketing Operations",
    description:
      "Marketing operations support inside GoHighLevel for organizing funnels, contacts, forms, campaigns, workflows, scheduling, and lead follow-up.",
    relatedWork: "/work/gohighlevel",
    features: [
      "Funnels & landing pages",
      "CRM contacts & tags",
      "Workflow automation",
      "Forms & appointment scheduling",
      "Campaign & follow-up support",
    ],
  },

  {
    number: "05",
    title: "Email Marketing",
    description:
      "Email marketing support for newsletters, promotions, follow-ups, and lead nurturing with clear formatting and organized campaign communication.",
    relatedWork: "/work/email-marketing",
    features: [
      "Email campaigns",
      "Newsletter preparation",
      "Follow-up emails",
      "Lead nurturing support",
      "Campaign formatting",
    ],
  },

  {
    number: "06",
    title: "Virtual & Executive Support",
    description:
      "Administrative and operational support for scheduling, communication, coordination, documentation, and the day-to-day digital work behind a business.",
    relatedWork: "/work/virtual-assistance",
    features: [
      "Calendar & scheduling support",
      "Client communication",
      "Task coordination",
      "Document preparation",
      "Administrative support",
    ],
  },

  {
    number: "07",
    title: "Websites, Landing Pages & Funnels",
    description:
      "Digital page and funnel support focused on clear structure, responsive presentation, calls to action, lead forms, and an easier customer journey.",
    relatedWork: "/portfolio",
    features: [
      "Website content updates",
      "Landing page support",
      "Lead forms & calls to action",
      "GoHighLevel funnels",
      "WordPress & Shopify support",
    ],
  },

  {
    number: "08",
    title: "Digital Marketing & Lead Generation",
    description:
      "Marketing support that connects promotional content, lead follow-up, campaign materials, and digital operations into a more organized workflow.",
    relatedWork: "/portfolio",
    features: [
      "Campaign support",
      "Lead follow-up",
      "Promotional content",
      "Marketing coordination",
      "Brand consistency",
    ],
  },
];

/* =========================================================
   PROCESS
   Same content/style direction as Home page Process
========================================================= */

const process = [
  {
    title: "Understand",
    description:
      "Clarify the goal, audience, requirements, and priorities before the work begins.",
    icon: Search,
  },
  {
    title: "Plan",
    description:
      "Organize the timeline, workflow, resources, content, and required deliverables.",
    icon: CalendarDays,
  },
  {
    title: "Create",
    description:
      "Produce the required creative, content, messaging, or digital assets.",
    icon: Palette,
  },
  {
    title: "Build",
    description:
      "Implement campaigns, workflows, funnels, pages, and digital systems.",
    icon: Workflow,
  },
  {
    title: "Review",
    description:
      "Check branding, functionality, messaging, links, and final details.",
    icon: Check,
  },
  {
    title: "Deliver",
    description:
      "Prepare the completed work for publishing, launch, or final handoff.",
    icon: Rocket,
  },
];

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-(family-name:--font-body) text-[#101828] selection:bg-[#4F8CFF] selection:text-white">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <SiteHeader />

      {/* =====================================================
          HERO
          Same structural hierarchy as reference:
          label / heading / description
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#07111F] px-5 pb-20 pt-36 text-white md:px-8 md:pb-24 md:pt-40 lg:px-10">
        {/* GRID */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-45
            bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        {/* GLOW */}

        <div className="pointer-events-none absolute -left-50 -top-40 h-150 w-150 rounded-full bg-[#4F8CFF]/12 blur-[190px]" />

        <div className="pointer-events-none absolute -bottom-50 right-[-10%] h-125 w-125 rounded-full bg-[#79A8FF]/6 blur-[170px]" />

        <div className="relative mx-auto max-w-360">
          {/* LABEL */}

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]"
          >
            Services
          </motion.p>

          {/* TITLE + DESCRIPTION */}

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.55fr] lg:items-end lg:gap-20">
            <motion.h1
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
              }}
              className="font-(family-name:--font-display) max-w-5xl text-[clamp(3.2rem,5vw,5.6rem)] font-semibold leading-[0.92] tracking-tighter"
            >
              Digital support built
              <br />

              <span className="text-[#79A8FF]">
                around your work.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.12,
                duration: 0.55,
              }}
              className="max-w-lg text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8"
            >
              Flexible creative, marketing, and
              operational support across content,
              social media, GoHighLevel, email,
              websites, funnels, and digital
              business operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
          
          REFERENCE STRUCTURE ON DESKTOP:
          
          NUMBER
          |
          SERVICE TITLE / DESCRIPTION / ACTIONS
          |
          INCLUDED FEATURES
      ====================================================== */}

      <section className="bg-white px-5 md:px-8 lg:px-10">
        <div className="mx-auto max-w-360">
          {services.map(
            (
              service,
              index,
            ) => (
              <motion.article
                key={
                  service.number
                }
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,
                }}
                className={`
                  grid
                  gap-8
                  border-b
                  border-[#D8E0EA]
                  py-16

                  md:py-20

                  lg:grid-cols-[90px_minmax(0,1.1fr)_minmax(280px,0.7fr)]
                  lg:gap-12
                  lg:py-24

                  xl:grid-cols-[110px_minmax(0,1.1fr)_minmax(320px,0.65fr)]
                  xl:gap-16

                  ${
                    index === 0
                      ? "border-t"
                      : ""
                  }
                `}
              >
                {/* ===========================================
                    COLUMN 1
                    NUMBER
                ============================================ */}

                <div>
                  <span className="font-(family-name:--font-display) text-sm font-semibold tracking-tight text-[#4F8CFF]">
                    {
                      service.number
                    }
                  </span>
                </div>

                {/* ===========================================
                    COLUMN 2
                    SERVICE DETAILS
                ============================================ */}

                <div>
                  {/* TITLE */}

                  <h2 className="font-(family-name:--font-display) max-w-2xl text-[clamp(2rem,3vw,3.35rem)] font-semibold leading-[1] tracking-tighter text-[#101828]">
                    {
                      service.title
                    }
                  </h2>

                  {/* DESCRIPTION */}

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#667085]">
                    {
                      service.description
                    }
                  </p>

                  {/* ACTIONS */}

                  <div className="mt-8 flex flex-wrap gap-3">
                    {/* GET A QUOTE */}

                    <Link
                      href="/contact#contact-form"
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-[#07111F]
                        px-5
                        py-3.5
                        text-sm
                        font-semibold
                        text-white

                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:bg-[#4F8CFF]
                      "
                    >
                      Get a Quote

                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>

                    {/* RELATED WORK */}

                    <Link
                      href={
                        service.relatedWork
                      }
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-[#D8E0EA]
                        bg-white
                        px-5
                        py-3.5
                        text-sm
                        font-semibold
                        text-[#344054]

                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:border-[#4F8CFF]/40
                        hover:text-[#4F8CFF]
                      "
                    >
                      Explore Related Work

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>

                {/* ===========================================
                    COLUMN 3
                    INCLUDED FEATURES
                ============================================ */}

                <div className="lg:border-l lg:border-[#E4E7EC] lg:pl-10 xl:pl-12">
                  {/* LABEL */}

                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#98A2B3]">
                    What&apos;s Included
                  </p>

                  {/* FEATURES */}

                  <div className="mt-5 space-y-4">
                    {service.features.map(
                      (
                        feature,
                      ) => (
                        <div
                          key={
                            feature
                          }
                          className="flex items-start gap-3"
                        >
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[#4F8CFF]">
                            <Check
                              size={
                                11
                              }
                              strokeWidth={
                                2.5
                              }
                            />
                          </div>

                          <span className="text-sm leading-6 text-[#475467]">
                            {
                              feature
                            }
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </div>
      </section>

      {/* =====================================================
          HOW I WORK

          SAME VISUAL STRUCTURE AS HOME PAGE PROCESS
      ====================================================== */}

      <section
        id="process"
        className="relative overflow-hidden bg-[#F8FAFC] px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10"
      >
        {/* BACKGROUND GLOWS */}

        <div className="pointer-events-none absolute -left-40 top-20 h-125 w-125 rounded-full bg-[#4F8CFF]/6 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-[#79A8FF]/6 blur-[150px]" />

        <div className="relative mx-auto max-w-360">
          {/* =================================================
              HEADING
              Same Home Process layout
          ================================================= */}

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
            className="grid gap-8 lg:grid-cols-[0.28fr_1fr] lg:gap-12"
          >
            {/* LABEL */}

            <div className="pt-2">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#4F8CFF]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                  How I Work
                </p>
              </div>
            </div>

            {/* TITLE + DESCRIPTION */}

            <div className="grid gap-7 xl:grid-cols-[1fr_0.55fr] xl:items-end">
              <h2 className="font-(family-name:--font-display) max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
                A simple path from{" "}

                <span className="text-[#4F8CFF]">
                  idea to delivery.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-[#667085] xl:justify-self-end xl:text-base xl:leading-8">
                Every project moves through a clear
                workflow so the work stays organized,
                focused, and easy to follow.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              PROCESS JOURNEY
          ================================================= */}

          <div className="relative mt-28">
            {/* =================================================
                DESKTOP CURVED PATH
            ================================================= */}

            <div className="pointer-events-none absolute left-[4%] right-[4%] top-1/2 hidden -translate-y-1/2 xl:block">
              <svg
                viewBox="0 0 1200 360"
                className="h-90 w-full"
                preserveAspectRatio="none"
              >
                {/* BASE PATH */}

                <path
                  d="
                    M 40 180
                    C 130 180, 135 65, 225 65
                    C 315 65, 315 295, 405 295
                    C 495 295, 495 65, 585 65
                    C 675 65, 675 295, 765 295
                    C 855 295, 855 65, 945 65
                    C 1035 65, 1040 180, 1160 180
                  "
                  fill="none"
                  stroke="#D8E0EA"
                  strokeWidth="2"
                />

                {/* ANIMATED BLUE PATH */}

                <motion.path
                  d="
                    M 40 180
                    C 130 180, 135 65, 225 65
                    C 315 65, 315 295, 405 295
                    C 495 295, 495 65, 585 65
                    C 675 65, 675 295, 765 295
                    C 855 295, 855 65, 945 65
                    C 1035 65, 1040 180, 1160 180
                  "
                  fill="none"
                  stroke="#4F8CFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </div>

            {/* =================================================
                PROCESS ITEMS
            ================================================= */}

            <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-6 xl:gap-4">
              {process.map(
                (
                  step,
                  index,
                ) => {
                  const Icon =
                    step.icon;

                  const raised =
                    index % 2 ===
                    0;

                  return (
                    <motion.article
                      key={
                        step.title
                      }
                      initial={{
                        opacity: 0,
                        y: raised
                          ? 35
                          : -35,
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
                        duration: 0.55,
                        delay:
                          index *
                          0.09,
                      }}
                      className={`
                        group
                        relative

                        ${
                          raised
                            ? "xl:-translate-y-14"
                            : "xl:translate-y-14"
                        }
                      `}
                    >
                      {/* =====================================
                          PROCESS CARD
                      ====================================== */}

                      <motion.div
                        whileHover={{
                          y: -8,
                          scale:
                            1.015,
                        }}
                        transition={{
                          type: "spring",
                          stiffness:
                            240,
                          damping:
                            18,
                        }}
                        className="
                          relative
                          min-h-72
                          overflow-hidden
                          rounded-4xl
                          border
                          border-[#D8E0EA]
                          bg-white
                          p-6

                          shadow-[0_12px_40px_rgba(15,23,42,0.045)]

                          transition-all
                          duration-300

                          group-hover:border-[#4F8CFF]/45
                          group-hover:shadow-[0_22px_55px_rgba(79,140,255,0.12)]
                        "
                      >
                        {/* TOP ACCENT */}

                        <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-[#4F8CFF] transition-transform duration-500 group-hover:scale-x-100" />

                        {/* GLOW */}

                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#4F8CFF]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#4F8CFF]/12" />

                        <div className="relative">
                          {/* ICON */}

                          <motion.div
                            whileHover={{
                              rotate:
                                -8,
                              scale:
                                1.08,
                            }}
                            transition={{
                              type: "spring",
                              stiffness:
                                250,
                              damping:
                                17,
                            }}
                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#4F8CFF]"
                          >
                            <Icon
                              size={
                                18
                              }
                            />
                          </motion.div>

                          {/* TITLE */}

                          <h3 className="font-(family-name:--font-display) mt-8 text-2xl font-semibold tracking-tight text-[#101828]">
                            {
                              step.title
                            }
                          </h3>

                          {/* DESCRIPTION */}

                          <p className="mt-4 text-sm leading-7 text-[#667085]">
                            {
                              step.description
                            }
                          </p>
                        </div>

                        {/* PULSE */}

                        <motion.span
                          animate={{
                            scale: [
                              1,
                              1.5,
                              1,
                            ],
                            opacity: [
                              0.5,
                              1,
                              0.5,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat:
                              Infinity,
                            delay:
                              index *
                              0.15,
                          }}
                          className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-[#4F8CFF]"
                        />
                      </motion.div>

                      {/* =====================================
                          MOBILE / TABLET CONNECTOR
                      ====================================== */}

                      {index <
                        process.length -
                          1 && (
                        <div className="flex justify-center py-3 xl:hidden">
                          <motion.div
                            animate={{
                              y: [
                                0,
                                5,
                                0,
                              ],
                            }}
                            transition={{
                              duration:
                                1.5,
                              repeat:
                                Infinity,
                            }}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8E0EA] bg-white text-[#4F8CFF]"
                          >
                            <ArrowRight
                              size={
                                14
                              }
                              className="rotate-90 md:rotate-0"
                            />
                          </motion.div>
                        </div>
                      )}
                    </motion.article>
                  );
                },
              )}
            </div>

            {/* =================================================
                STRUCTURED WORKFLOW BADGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.6,
              }}
              className="relative mx-auto mt-16 flex w-fit items-center gap-3 rounded-full border border-[#D8E0EA] bg-white px-5 py-3 shadow-[0_8px_25px_rgba(15,23,42,0.05)] xl:mt-24"
            >
              <span className="relative flex h-2.5 w-2.5">
                <motion.span
                  animate={{
                    scale: [
                      1,
                      1.9,
                      1,
                    ],
                    opacity: [
                      0.45,
                      0,
                      0.45,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat:
                      Infinity,
                  }}
                  className="absolute inset-0 rounded-full bg-[#4F8CFF]"
                />

                <span className="relative m-auto h-2 w-2 rounded-full bg-[#4F8CFF]" />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#667085]">
                Structured Workflow
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          Reference ends after process → footer
      ====================================================== */}

      <SiteFooter />
    </main>
  );
}