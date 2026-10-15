"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleCheck,
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
   SERVICES
========================================================= */

const services = [
  {
    title: "Social Media Management",
    category: "Social & Content",
    description:
      "Consistent social media support built around planning, publishing, organization, and brand presentation.",
    icon: Share2,
    href: "/work/social-media",
    bullets: [
      "Content planning and scheduling",
      "Captions and calls to action",
      "Publishing and content organization",
      "Brand consistency across platforms",
    ],
  },
  {
    title: "Graphic Design & Content Creation",
    category: "Creative",
    description:
      "Branded visual content designed to support social media, promotions, campaigns, and everyday marketing.",
    icon: Palette,
    href: "/work/graphic-design",
    bullets: [
      "Social media graphics",
      "Promotional materials",
      "Branded templates",
      "Carousels and educational content",
    ],
  },
  {
    title: "Short-Form Video Editing",
    category: "Video Content",
    description:
      "Short-form content prepared for modern social platforms with clear formatting, captions, and visual structure.",
    icon: Video,
    href: "/work/video-editing",
    bullets: [
      "Reels and TikTok content",
      "Text overlays and captions",
      "Vertical video formatting",
      "Content organization and review",
    ],
  },
  {
    title: "GoHighLevel Marketing Operations",
    category: "CRM & Automation",
    description:
      "Support across GoHighLevel funnels, workflows, contacts, campaigns, forms, and follow-up systems.",
    icon: Workflow,
    href: "/work/gohighlevel",
    bullets: [
      "Funnels and landing page updates",
      "Workflow and automation support",
      "Contacts, tags, and organization",
      "Forms and lead follow-up",
    ],
  },
  {
    title: "Email Marketing & Newsletter Support",
    category: "Email",
    description:
      "Email campaign support focused on organization, presentation, follow-up, and consistent communication.",
    icon: Mail,
    href: "/work/email-marketing",
    bullets: [
      "Newsletter preparation",
      "Campaign formatting",
      "Lead nurture and follow-up",
      "Promotional email support",
    ],
  },
  {
    title: "Virtual & Executive Support",
    category: "Operations",
    description:
      "Reliable operational support for scheduling, communication, documentation, coordination, and daily digital tasks.",
    icon: BriefcaseBusiness,
    href: "/work/virtual-assistance",
    bullets: [
      "Calendar and meeting scheduling",
      "Client communication and follow-ups",
      "Task and project coordination",
      "Documents and presentations",
    ],
  },
  {
    title: "Website, Landing Page & Funnel Support",
    category: "Web",
    description:
      "Digital page support focused on content, layout, lead generation, forms, calls to action, and conversion flow.",
    icon: Monitor,
    href: "/portfolio",
    bullets: [
      "Website content updates",
      "Landing pages and funnels",
      "Lead forms and calls to action",
      "Promotional page support",
    ],
  },
  {
    title: "Digital Marketing & Lead Generation",
    category: "Marketing",
    description:
      "Marketing support that helps keep campaigns, promotional content, leads, and follow-up activity organized.",
    icon: Megaphone,
    href: "/portfolio",
    bullets: [
      "Campaign support",
      "Promotional content",
      "Lead follow-up organization",
      "Marketing coordination",
    ],
  },
];

/* =========================================================
   SUPPORT GROUPS
========================================================= */

const creativeSupport = [
  "Social Media Management",
  "Graphic Design",
  "Content Creation",
  "Short-Form Video",
  "Email Campaigns",
  "Promotional Content",
];

const systemSupport = [
  "GoHighLevel",
  "CRM Workflows",
  "Landing Pages",
  "Funnels",
  "Lead Follow-Up",
  "Virtual Assistance",
];

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function ServicesPage() {
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

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-60 -top-60 h-175 w-175 rounded-full bg-[#4F8CFF]/13 blur-[190px]"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-60 right-[-10%] h-150 w-150 rounded-full bg-[#94A3B8]/7 blur-[170px]"
        />

        <div className="relative mx-auto grid max-w-360 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =================================================
              LEFT
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
              <span className="relative flex h-2 w-2">
                <motion.span
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-full bg-[#79A8FF]"
                />

                <span className="relative h-2 w-2 rounded-full bg-[#79A8FF]" />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.21em] text-[#B8D2FF]">
                Services
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
              Creative support.
              <br />

              Marketing systems.
              <br />

              <span className="text-[#79A8FF]">
                Digital execution.
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
              Flexible digital support across content,
              marketing, websites, CRM systems, and
              day-to-day operations — built to help
              businesses keep their digital work moving.
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
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[#4F8CFF] px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(79,140,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#79A8FF]"
              >
                Start a Project

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 rounded-2xl border border-[#2B3A50] bg-[#132033] px-6 py-4 text-sm font-semibold text-[#A8B3C4] transition-all duration-300 hover:-translate-y-1 hover:border-[#4F8CFF]/50 hover:bg-[#19283D] hover:text-white"
              >
                View Portfolio

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* =================================================
              HERO VISUAL
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
              duration: 0.9,
            }}
            className="relative mx-auto w-full max-w-125"
          >
            {/* BACK FRAME */}

            <div className="absolute -right-6 -top-6 h-full w-full rounded-[36px] border border-[#4F8CFF]/15" />

            {/* MAIN VISUAL */}

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0D1826]/95 p-5 shadow-[0_35px_120px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-7">
              {/* INNER GLOW */}

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F8CFF]/12 blur-[90px]" />

              {/* TOP */}

              <div className="relative flex items-center justify-between border-b border-white/8 pb-5">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#79A8FF]">
                    Digital Support
                  </p>

                  <p className="font-(family-name:--font-display) mt-2 text-lg font-semibold">
                    Creative + Systems
                  </p>
                </div>

                <motion.span
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4F8CFF]/25 bg-[#4F8CFF]/10 text-[#79A8FF]"
                >
                  <Workflow size={16} />
                </motion.span>
              </div>

              {/* VISUAL CARDS */}

              <div className="relative mt-5 grid grid-cols-2 gap-3">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-3xl border border-white/8 bg-[#132033] p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F8CFF]/12 text-[#79A8FF]">
                    <Share2 size={16} />
                  </div>

                  <p className="mt-6 text-xs font-semibold">
                    Social Media
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-[#6E7C90]">
                    Content & publishing
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-3xl border border-white/8 bg-[#132033] p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F8CFF]/12 text-[#79A8FF]">
                    <Palette size={16} />
                  </div>

                  <p className="mt-6 text-xs font-semibold">
                    Creative
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-[#6E7C90]">
                    Design & content
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 6, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-3xl border border-white/8 bg-[#132033] p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F8CFF]/12 text-[#79A8FF]">
                    <Workflow size={16} />
                  </div>

                  <p className="mt-6 text-xs font-semibold">
                    Automation
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-[#6E7C90]">
                    CRM & workflows
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-3xl border border-white/8 bg-[#132033] p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F8CFF]/12 text-[#79A8FF]">
                    <BriefcaseBusiness size={16} />
                  </div>

                  <p className="mt-6 text-xs font-semibold">
                    Operations
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-[#6E7C90]">
                    Support & execution
                  </p>
                </motion.div>
              </div>

              {/* BOTTOM STATUS */}

              <div className="relative mt-5 flex items-center gap-3 rounded-2xl border border-white/8 bg-[#101C2C] px-4 py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <motion.span
                    animate={{
                      scale: [1, 1.9, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 rounded-full bg-[#4F8CFF]"
                  />

                  <span className="relative m-auto h-2 w-2 rounded-full bg-[#4F8CFF]" />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A8B3C4]">
                  Built around your digital workflow
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES INTRO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-5 pb-12 pt-28 text-[#101828] md:px-8 md:pb-16 md:pt-40 lg:px-10">
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
            className="grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end lg:gap-20"
          >
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                Services
              </p>

              <h2 className="font-(family-name:--font-display) mt-6 max-w-4xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
                Support built around{" "}

                <span className="text-[#4F8CFF]">
                  real digital work.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#667085] md:text-base md:leading-8 lg:pb-1">
              From creative production to marketing
              systems and daily operations, each service
              can work independently or as part of a
              larger digital workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICE GRID
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-5 pb-28 text-[#101828] md:px-8 md:pb-40 lg:px-10">
        <div className="pointer-events-none absolute -right-40 top-1/3 h-125 w-125 rounded-full bg-[#4F8CFF]/5 blur-[150px]" />

        <div className="relative mx-auto max-w-360">
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map(
              (
                service,
                index,
              ) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
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
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.55,
                      delay:
                        (index % 2) *
                        0.06,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group relative overflow-hidden rounded-4xl border border-[#D8E0EA] bg-[#F8FAFC] p-6 transition-all duration-500 hover:border-[#4F8CFF]/40 hover:bg-white hover:shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:p-8"
                  >
                    {/* TOP LINE */}

                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#4F8CFF] to-[#79A8FF] transition-transform duration-500 group-hover:scale-x-100" />

                    {/* GLOW */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#4F8CFF]/0 blur-[80px] transition-all duration-500 group-hover:bg-[#4F8CFF]/10" />

                    {/* WATERMARK ICON */}

                    <Icon
                      size={150}
                      strokeWidth={0.7}
                      className="pointer-events-none absolute -bottom-8 -right-8 text-[#101828]/2.5 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:text-[#4F8CFF]/5"
                    />

                    <div className="relative">
                      {/* TOP */}

                      <div className="flex items-start justify-between gap-5">
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
                          className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[#D8E0EA] bg-white text-[#4F8CFF] shadow-[0_8px_25px_rgba(15,23,42,0.05)]"
                        >
                          <Icon size={19} />
                        </motion.div>

                        <span className="rounded-full border border-[#D8E0EA] bg-white px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#667085]">
                          {service.category}
                        </span>
                      </div>

                      {/* TITLE */}

                      <h3 className="font-(family-name:--font-display) mt-9 max-w-lg text-2xl font-semibold leading-tight tracking-tight md:text-[28px]">
                        {service.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p className="mt-5 max-w-xl text-sm leading-7 text-[#667085]">
                        {service.description}
                      </p>

                      {/* DIVIDER */}

                      <div className="my-7 h-px bg-[#DDE4ED]" />

                      {/* BULLETS */}

                      <div className="grid gap-3 sm:grid-cols-2">
                        {service.bullets.map(
                          (
                            bullet,
                            bulletIndex,
                          ) => (
                            <motion.div
                              key={bullet}
                              initial={{
                                opacity: 0,
                                x: -10,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                delay:
                                  bulletIndex *
                                  0.04,
                              }}
                              className="flex items-start gap-3"
                            >
                              <CircleCheck
                                size={16}
                                className="mt-1 shrink-0 text-[#4F8CFF]"
                              />

                              <span className="text-xs leading-6 text-[#475467]">
                                {bullet}
                              </span>
                            </motion.div>
                          ),
                        )}
                      </div>

                      {/* LINK */}

                      <div className="mt-8">
                        <Link
                          href={service.href}
                          className="group/link inline-flex items-center gap-2 text-xs font-semibold text-[#344054]"
                        >
                          Explore Related Work

                          <ArrowRight
                            size={14}
                            className="text-[#4F8CFF] transition-transform duration-300 group-hover/link:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW SERVICES CONNECT
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#E9EEF5] px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10">
        {/* BACKGROUND */}

        <div
          className="
            pointer-events-none absolute inset-0 opacity-50
            bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        <div className="pointer-events-none absolute -left-40 -top-40 h-150 w-150 rounded-full bg-white/70 blur-[170px]" />

        <div className="relative mx-auto max-w-360">
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
            className="max-w-4xl"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
              Connected Support
            </p>

            <h2 className="font-(family-name:--font-display) mt-6 text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
              Creative work and systems{" "}

              <span className="text-[#4F8CFF]">
                working together.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#667085] md:text-base md:leading-8">
              Digital work often overlaps. Content needs
              publishing, campaigns need follow-up, and
              funnels need systems behind them. The
              services can connect where needed.
            </p>
          </motion.div>

          {/* TWO PANELS */}

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {/* CREATIVE */}

            <motion.article
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-4xl border border-[#D2DBE6] bg-white p-7 shadow-[0_15px_45px_rgba(15,23,42,0.04)] md:p-9"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4F8CFF]/8 blur-[90px]" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#4F8CFF]">
                  <Palette size={21} />
                </div>

                <p className="mt-10 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4F8CFF]">
                  Creative & Growth
                </p>

                <h3 className="font-(family-name:--font-display) mt-4 text-3xl font-semibold tracking-tighter md:text-4xl">
                  Content that supports the message.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#667085]">
                  Creative support helps turn ideas,
                  promotions, and campaigns into
                  consistent digital content.
                </p>

                {/* TAGS */}

                <div className="mt-9 flex flex-wrap gap-2">
                  {creativeSupport.map(
                    (
                      item,
                      index,
                    ) => (
                      <motion.span
                        key={item}
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay:
                            index *
                            0.04,
                        }}
                        className="rounded-full border border-[#D8E0EA] bg-[#F8FAFC] px-4 py-2 text-[10px] font-medium text-[#475467]"
                      >
                        {item}
                      </motion.span>
                    ),
                  )}
                </div>
              </div>
            </motion.article>

            {/* SYSTEMS */}

            <motion.article
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-4xl border border-[#1C2B3E] bg-[#0D1826] p-7 text-white shadow-[0_25px_70px_rgba(15,23,42,0.16)] md:p-9"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4F8CFF]/14 blur-[90px]" />

              <div
                className="
                  pointer-events-none absolute inset-0 opacity-25
                  bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)]
                  bg-size-[34px_34px]
                "
              />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4F8CFF]/20 bg-[#4F8CFF]/10 text-[#79A8FF]">
                  <Workflow size={21} />
                </div>

                <p className="mt-10 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#79A8FF]">
                  Systems & Operations
                </p>

                <h3 className="font-(family-name:--font-display) mt-4 text-3xl font-semibold tracking-tighter md:text-4xl">
                  Systems that support the work.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#A8B3C4]">
                  CRM, workflows, funnels, follow-up,
                  scheduling, and operations help turn
                  digital activity into an organized
                  process.
                </p>

                {/* TAGS */}

                <div className="mt-9 flex flex-wrap gap-2">
                  {systemSupport.map(
                    (
                      item,
                      index,
                    ) => (
                      <motion.span
                        key={item}
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay:
                            index *
                            0.04,
                        }}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-medium text-[#B8C3D1]"
                      >
                        {item}
                      </motion.span>
                    ),
                  )}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKING STYLE
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10">
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
            className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start lg:gap-24"
          >
            {/* LEFT */}

            <div className="lg:sticky lg:top-32">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                Working Style
              </p>

              <h2 className="font-(family-name:--font-display) mt-6 max-w-xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
                Clear support without the{" "}

                <span className="text-[#4F8CFF]">
                  unnecessary complexity.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#667085] md:text-base md:leading-8">
                The focus is on keeping digital tasks
                organized, maintaining consistency, and
                moving projects from idea to execution.
              </p>
            </div>

            {/* RIGHT */}

            <div className="space-y-4">
              {[
                {
                  title: "Organized Execution",
                  text:
                    "Clear tasks, priorities, files, content, and project details so work is easier to manage.",
                },
                {
                  title: "Creative Consistency",
                  text:
                    "Content and marketing materials that stay visually aligned with the business and its message.",
                },
                {
                  title: "Connected Systems",
                  text:
                    "CRM, websites, funnels, email, and follow-up activity organized around the larger workflow.",
                },
                {
                  title: "Flexible Support",
                  text:
                    "Support can focus on one specific area or connect multiple parts of a digital project.",
                },
              ].map(
                (
                  item,
                  index,
                ) => (
                  <motion.article
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index *
                        0.06,
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    className="group flex gap-5 rounded-3xl border border-[#D8E0EA] bg-[#F8FAFC] p-6 transition-all duration-300 hover:border-[#4F8CFF]/35 hover:bg-white hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:p-7"
                  >
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[#4F8CFF]">
                      <CircleCheck size={16} />
                    </div>

                    <div>
                      <h3 className="font-(family-name:--font-display) text-lg font-semibold tracking-tight md:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-[#667085]">
                        {item.text}
                      </p>
                    </div>
                  </motion.article>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#07111F] px-5 py-28 text-white md:px-8 md:py-36 lg:px-10">
        {/* GLOW */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-[#4F8CFF]/13 blur-[180px]" />

        {/* GRID */}

        <div
          className="
            pointer-events-none absolute inset-0 opacity-35
            bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

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
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#4F8CFF]/25 bg-[#4F8CFF]/10 text-[#79A8FF]"
          >
            <BriefcaseBusiness size={20} />
          </motion.div>

          <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#79A8FF]">
            Have a Project in Mind?
          </p>

          <h2 className="font-(family-name:--font-display) mt-6 text-[clamp(3rem,4.5vw,5.2rem)] font-semibold leading-[0.95] tracking-tighter">
            Let&apos;s turn the work into{" "}

            <span className="text-[#79A8FF]">
              something useful.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8">
            Tell me what you&apos;re working on, where
            you need support, and what needs to get
            done.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-3 rounded-2xl bg-[#4F8CFF] px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(79,140,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#79A8FF]"
            >
              Start a Project

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-[#D8E0EA] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
            >
              Explore My Work

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </main>
  );
}