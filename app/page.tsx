"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  Menu,
  Monitor,
  Palette,
  Play,
  Sparkles,
  Video,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Graphic Design",
    description:
      "Clean, intentional visual design built around clarity, branding, and strong communication.",
    icon: Palette,
  },
  {
    number: "02",
    title: "GHL Website Building",
    description:
      "Responsive GoHighLevel websites and landing pages designed to look polished and convert.",
    icon: Monitor,
  },
  {
    number: "03",
    title: "Video Editing",
    description:
      "Engaging edits for promotional, social, and branded video content with purposeful pacing.",
    icon: Video,
  },
  {
    number: "04",
    title: "Calendar Management",
    description:
      "Organized appointment management designed to keep schedules clear, efficient, and reliable.",
    icon: CalendarDays,
  },
  {
    number: "05",
    title: "Scheduling",
    description:
      "Structured scheduling support that keeps tasks, meetings, and client activity moving smoothly.",
    icon: Clock3,
  },
];

const projects = [
  {
    number: "01",
    title: "Brand & Visual Design",
    type: "Graphic Design",
  },
  {
    number: "02",
    title: "Conversion Websites",
    type: "GoHighLevel",
  },
  {
    number: "03",
    title: "Motion & Content",
    type: "Video Editing",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-slate-50">
      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="site-grid absolute inset-0 opacity-70" />

        <div className="hero-noise absolute inset-0 opacity-25" />

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-15%] top-[-25%] h-150 w-150 rounded-full bg-blue-600/20 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-15%] top-[5%] h-150 w-150 rounded-full bg-slate-500/10 blur-[180px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#07111f_90%)]" />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto max-w-360 px-4 pt-4 md:px-8 lg:px-10">
          <motion.nav
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-18 items-center justify-between rounded-2xl border border-slate-400/10 bg-[#081321]/80 px-5 shadow-2xl backdrop-blur-2xl md:px-7"
          >
            {/* BRAND */}

            <a href="#" className="group flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-blue-400/20 bg-blue-500/10">
                <span className="font-display relative z-10 text-xs font-bold">
                  KM
                </span>

                <div className="absolute inset-0 translate-y-full bg-blue-500 transition-transform duration-300 group-hover:translate-y-0" />

                <span className="font-display absolute z-20 translate-y-10 text-xs font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                  KM
                </span>
              </div>

              <div className="hidden sm:block">
                <p className="font-display text-sm font-semibold tracking-tight">
                  Khimberlie D. Macose
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                  Creative Digital Specialist
                </p>
              </div>
            </a>

            {/* NAVIGATION */}

            <div className="hidden items-center gap-8 lg:flex">
              {navigation.slice(0, 3).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA */}

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="group hidden items-center gap-2 rounded-xl bg-slate-50 px-5 py-3 text-xs font-bold text-[#07111f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 md:flex"
              >
                Let&apos;s Work

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-400/15 bg-white/5 lg:hidden"
              >
                {menuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </motion.nav>

          {/* MOBILE MENU */}

          <motion.div
            initial={false}
            animate={{
              height: menuOpen ? "auto" : 0,
              opacity: menuOpen ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mt-2 rounded-2xl border border-slate-400/10 bg-[#081321]/95 p-3 backdrop-blur-2xl">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display block border-b border-white/5 px-4 py-4 text-xl font-medium text-slate-300 last:border-none"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative z-10 flex min-h-screen items-center pt-28">
        <div className="mx-auto grid w-full max-w-360 items-center gap-16 px-5 py-20 md:px-8 lg:grid-cols-[1.18fr_0.82fr] lg:px-10">
          {/* LEFT */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/5 px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200/70">
                Available for creative projects
              </span>
            </motion.div>

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
                delay: 0.1,
                duration: 0.6,
              }}
              className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.23em] text-slate-500"
            >
              <Sparkles size={14} />

              Design · Digital · Organization
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display max-w-225 text-[clamp(3.5rem,7.5vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
            >
              I shape ideas into{" "}
              <span className="blue-text">
                digital experiences.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="mt-8 max-w-167.5 text-base leading-8 text-slate-400 md:text-lg"
            >
              I&apos;m{" "}
              <span className="font-semibold text-slate-100">
                Khimberlie D. Macose
              </span>
              , a creative digital specialist combining visual design, website
              building, video editing, calendar management, and scheduling to
              create polished digital experiences.
            </motion.p>

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
                delay: 0.5,
                duration: 0.7,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Explore My Work

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-3 rounded-xl border border-slate-400/15 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
              >
                <Mail size={16} />
                Get In Touch
              </a>
            </motion.div>

            {/* SKILLS */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.75,
              }}
              className="mt-14 grid max-w-167.5 grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-400/10 bg-slate-400/10 sm:grid-cols-3"
            >
              {[
                "Graphic Design",
                "GHL Websites",
                "Video Editing",
                "Calendar Management",
                "Scheduling",
                "Digital Support",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-[#0a1625] px-4 py-4 text-[11px] font-medium text-slate-400 transition-colors duration-300 hover:bg-blue-500/10 hover:text-blue-200"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              x: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-125"
          >
            <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-[100px]" />

            {/* LARGE CARD */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative overflow-hidden rounded-4xl border border-slate-400/15 bg-[#0b1727]/80 p-3 shadow-[0_40px_100px_rgba(0,0,0,.35)] backdrop-blur-xl"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-white/5 bg-[#081321]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(79,140,255,.22),transparent_36%)]" />

                <div className="site-grid absolute inset-0 opacity-50" />

                {/* TOP */}

                <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-6">
                  <span className="rounded-full border border-blue-400/15 bg-blue-500/5 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-200/60">
                    Portfolio · 2026
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Sparkles size={14} />
                  </span>
                </div>

                {/* CENTER */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex h-60 w-60 items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 rounded-full border border-dashed border-slate-500/20"
                    />

                    <motion.div
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-7 rounded-full border border-blue-400/20"
                    >
                      <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(96,165,250,.9)]" />
                    </motion.div>

                    <div className="relative flex h-38 w-38 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 shadow-[0_0_60px_rgba(59,130,246,.12)] backdrop-blur-xl">
                      <span className="font-display text-5xl font-semibold tracking-tighter">
                        KM
                      </span>
                    </div>
                  </div>
                </div>

                {/* BOTTOM */}

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="rounded-2xl border border-slate-400/10 bg-[#07111f]/80 p-5 backdrop-blur-xl">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
                          Creative Digital Specialist
                        </p>

                        <p className="font-display mt-2 text-xl font-semibold leading-snug">
                          Design.
                          <br />
                          Build. Organize.
                        </p>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 text-white">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING DESIGN */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 top-20 hidden rounded-2xl border border-slate-400/15 bg-[#0a1625]/90 p-3.5 shadow-xl backdrop-blur-xl sm:flex sm:items-center sm:gap-3 lg:-left-10"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                <Palette size={16} />
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.15em] text-slate-500">
                  Creative
                </p>

                <p className="mt-1 text-xs font-semibold">
                  Graphic Design
                </p>
              </div>
            </motion.div>

            {/* FLOATING VIDEO */}

            <motion.div
              animate={{
                y: [0, 9, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 bottom-30 rounded-2xl border border-slate-400/15 bg-[#0a1625]/90 p-3.5 shadow-xl backdrop-blur-xl sm:-right-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-500/15 text-slate-300">
                  <Play size={15} fill="currentColor" />
                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.15em] text-slate-500">
                    Content
                  </p>

                  <p className="mt-1 text-xs font-semibold">
                    Video Editing
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 xl:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.2em]">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px bg-linear-to-b from-blue-400/60 to-transparent"
          />
        </motion.a>
      </section>

      {/* =====================================================
          MOVING STRIP
      ====================================================== */}

      <section className="relative z-10 overflow-hidden border-y border-slate-400/10 bg-[#0a1625] py-5">
        <div className="marquee flex w-max items-center">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center"
            >
              {[
                "GRAPHIC DESIGN",
                "GHL WEBSITE BUILDING",
                "VIDEO EDITING",
                "CALENDAR MANAGEMENT",
                "SCHEDULING",
              ].map((item) => (
                <div
                  key={`${group}-${item}`}
                  className="flex items-center"
                >
                  <span className="font-display mx-8 text-xl font-medium tracking-tight text-slate-300 md:text-2xl">
                    {item}
                  </span>

                  <span className="text-blue-400">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="relative z-10 px-5 py-28 md:px-8 md:py-40"
      >
        <div className="mx-auto max-w-360">
          <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                01 / About
              </p>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.8,
              }}
            >
              <h2 className="font-display max-w-5xl text-4xl font-medium leading-[1.02] tracking-tighter text-slate-100 md:text-6xl lg:text-7xl">
                Creativity is stronger when{" "}
                <span className="text-blue-400">
                  design and organization
                </span>{" "}
                work together.
              </h2>

              <p className="mt-10 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                My work combines visual thinking with practical digital
                execution. Whether I&apos;m designing graphics, building a GHL
                website, editing video, or managing schedules, my focus is
                always clarity, consistency, and a polished end result.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="relative z-10 border-y border-slate-400/10 bg-[#091523] px-5 py-28 md:px-8 md:py-36"
      >
        <div className="mx-auto max-w-360">
          <div className="mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
              02 / Capabilities
            </p>

            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tighter md:text-6xl">
              What I can bring
              <br />
              to your project.
            </h2>
          </div>

          <div>
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="service-row group grid gap-5 border-t border-slate-400/10 px-2 py-8 md:grid-cols-[70px_1fr_1fr_auto] md:items-center"
                >
                  <span className="text-xs text-slate-600">
                    {service.number}
                  </span>

                  <h3 className="font-display text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="max-w-md text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-400/15 text-slate-400 transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white">
                    <Icon size={17} />
                  </div>
                </motion.div>
              );
            })}

            <div className="border-t border-slate-400/10" />
          </div>
        </div>
      </section>

      {/* =====================================================
          WORK
      ====================================================== */}

      <section
        id="work"
        className="relative z-10 px-5 py-28 md:px-8 md:py-40"
      >
        <div className="mx-auto max-w-360">
          <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                03 / Selected Work
              </p>

              <h2 className="font-display mt-5 text-4xl font-semibold tracking-tighter md:text-6xl">
                Work that speaks
                <br />
                through detail.
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-slate-500">
              Selected projects will showcase design, websites, video work, and
              digital support.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="project-card group overflow-hidden rounded-3xl border border-slate-400/10 bg-[#0a1625] p-4"
              >
                <div className="relative flex aspect-4/5 flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#081321] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(79,140,255,.18),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-[10px] text-slate-600">
                      {project.number}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                    />
                  </div>

                  <div className="relative">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-blue-400">
                      {project.type}
                    </span>

                    <h3 className="font-display mt-3 text-3xl font-medium tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="relative z-10 overflow-hidden border-t border-slate-400/10 bg-[#0a1625] px-5 py-28 md:px-8 md:py-36"
      >
        <div className="absolute right-[-10%] top-[-40%] h-125 w-125 rounded-full bg-blue-600/15 blur-[160px]" />

        <div className="relative mx-auto max-w-360">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
            04 / Contact
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display max-w-5xl text-[clamp(3.8rem,8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                Have an idea?
                <br />
                <span className="blue-text">
                  Let&apos;s build it.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-base leading-7 text-slate-400">
                Whether you need creative visuals, a polished website, video
                editing, or reliable digital support, I&apos;d love to hear
                about your project.
              </p>
            </div>

            <a
              href="mailto:your@email.com"
              className="group flex h-28 w-28 items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-300 hover:scale-110 hover:bg-blue-400 md:h-36 md:w-36"
            >
              <ArrowUpRight
                size={34}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
              />
            </a>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-5 border-t border-slate-400/10 pt-6 text-xs text-slate-600 sm:flex-row">
            <span>
              © 2026 Khimberlie D. Macose
            </span>

            <span>
              Creative Digital Portfolio
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}