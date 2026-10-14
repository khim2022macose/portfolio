import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    title: "Creativity",
    description:
      "I enjoy transforming ideas into visuals, content, and digital experiences that communicate clearly.",
    icon: Sparkles,
  },
  {
    title: "Organization",
    description:
      "I value structure, clear processes, and keeping digital work organized from planning through completion.",
    icon: Target,
  },
  {
    title: "Reliability",
    description:
      "I approach work with attention to detail and a focus on completing tasks carefully and consistently.",
    icon: Heart,
  },
];

const navigation = [
  {
    label: "Work",
    href: "/#work",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Skills",
    href: "/#skills",
  },
  {
    label: "Experience",
    href: "/#experience",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] font-(family-name:--font-body) text-[#101828]">
      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto max-w-360 px-4 pt-4 md:px-8 lg:px-10">
          <nav className="flex h-18 items-center justify-between rounded-2xl border border-white/10 bg-[#07111F]/90 px-5 shadow-[0_20px_80px_rgba(0,0,0,0.20)] backdrop-blur-2xl md:px-7">
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4F8CFF]/25 bg-[#4F8CFF]/10">
                <span className="font-(family-name:--font-display) text-xs font-bold text-white">
                  KM
                </span>
              </div>

              <div className="hidden sm:block">
                <p className="font-(family-name:--font-display) text-sm font-semibold text-white">
                  Khimberlie D. Macose
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.17em] text-[#6E7C90]">
                  About Me
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {navigation.map(
                (item) => (
                  <Link
                    key={
                      item.label
                    }
                    href={
                      item.href
                    }
                    className={`relative text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                      item.label ===
                      "About"
                        ? "text-[#79A8FF]"
                        : "text-[#A8B3C4] hover:text-white"
                    }`}
                  >
                    {item.label}

                    {item.label ===
                      "About" && (
                      <span className="absolute -bottom-2 left-0 h-px w-full bg-[#4F8CFF]" />
                    )}
                  </Link>
                ),
              )}
            </div>

            <Link
              href="/#contact"
              className="rounded-xl bg-white px-5 py-3 text-xs font-bold text-[#07111F] transition-colors hover:bg-[#B8D2FF]"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-[#07111F] via-[#0D1826] to-[#111827] px-5 pb-28 pt-44 text-white md:px-8 md:pb-36 md:pt-52 lg:px-10">
        <div
          className="
            pointer-events-none absolute inset-0 opacity-50
            bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        <div className="pointer-events-none absolute -right-40 -top-40 h-150 w-150 rounded-full bg-[#4F8CFF]/15 blur-[180px]" />

        <div className="relative mx-auto max-w-360">
          <Link
            href="/"
            className="group mb-10 inline-flex items-center gap-3 text-sm font-semibold text-[#A8B3C4] transition-colors hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1"
              />
            </span>

            Back to my work
          </Link>

          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
            About / Khimberlie D. Macose
          </p>

          <h1 className="font-(family-name:--font-display) mt-7 max-w-5xl text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.88] tracking-tighter">
            The person
            <br />
            behind the{" "}

            <span className="text-[#79A8FF]">
              work.
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-base leading-8 text-[#A8B3C4] md:text-lg">
            I&apos;m Khimberlie D. Macose, a creative digital
            marketing and operations specialist who enjoys
            combining creative work with organized systems and
            practical business support.
          </p>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="bg-white px-5 py-28 md:px-8 md:py-40 lg:px-10">
        <div className="mx-auto grid max-w-360 gap-12 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
              01 / My Story
            </p>
          </div>

          <div>
            <h2 className="font-(family-name:--font-display) max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tighter text-[#101828] md:text-6xl">
              Creative thinking meets{" "}

              <span className="text-[#4F8CFF]">
                organized execution.
              </span>
            </h2>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <p className="text-base leading-8 text-[#667085]">
                My professional background covers social media
                management, content creation, graphic design,
                short-form video editing, GoHighLevel, email
                marketing, websites and funnels, lead generation,
                scheduling, and virtual assistance.
              </p>

              <p className="text-base leading-8 text-[#667085]">
                I enjoy roles where creative and operational work
                overlap. That means I can help create the content,
                organize the campaign, update the system, schedule
                the work, and support the day-to-day tasks that
                keep everything moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="bg-[#EEF2F7] px-5 py-28 md:px-8 md:py-40 lg:px-10">
        <div className="mx-auto max-w-360">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
            02 / How I Work
          </p>

          <h2 className="font-(family-name:--font-display) mt-5 max-w-4xl text-4xl font-semibold tracking-tighter md:text-6xl">
            The values I bring to{" "}

            <span className="text-[#4F8CFF]">
              every project.
            </span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map(
              (value) => {
                const Icon =
                  value.icon;

                return (
                  <article
                    key={
                      value.title
                    }
                    className="rounded-4xl border border-[#D8E0EA] bg-white p-7 shadow-[0_15px_45px_rgba(15,23,42,0.05)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#4F8CFF]">
                      <Icon size={19} />
                    </div>

                    <h3 className="font-(family-name:--font-display) mt-8 text-2xl font-semibold">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#667085]">
                      {
                        value.description
                      }
                    </p>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ====================================================== */}

      <section className="bg-[#111827] px-5 py-28 text-white md:px-8 md:py-40 lg:px-10">
        <div className="mx-auto grid max-w-360 gap-12 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
              03 / Education
            </p>
          </div>

          <div>
            <div className="rounded-4xl border border-white/10 bg-white/5 p-7 md:p-10">
              <GraduationCap
                size={25}
                className="text-[#79A8FF]"
              />

              <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#79A8FF]">
                Education Background
              </p>

              <h2 className="font-(family-name:--font-display) mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Bachelor of Science in
                Information Technology
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#A8B3C4]">
                My technology background supports the digital,
                creative, marketing, and operational work I handle
                today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PERSONAL INTRO AREA
      ====================================================== */}

      <section className="bg-[#F8FAFC] px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10">
        <div className="mx-auto grid max-w-360 gap-12 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
              04 / Beyond The Work
            </p>
          </div>

          <div>
            <h2 className="font-(family-name:--font-display) max-w-4xl text-4xl font-semibold tracking-tighter md:text-6xl">
              More than the{" "}

              <span className="text-[#4F8CFF]">
                portfolio.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#667085]">
              This is the right place to add a more personal
              introduction about yourself—your interests, what
              motivates you, how you approach life and work, or
              anything you want employers and clients to know
              beyond the projects shown in your portfolio.
            </p>

            <div className="mt-10 rounded-3xl border border-[#D8E0EA] bg-white p-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4F8CFF]">
                Personal Story
              </p>

              <p className="mt-4 text-sm leading-7 text-[#667085]">
                Replace this paragraph with the personal story you
                want visitors to see. Keeping this information here
                means your homepage stays focused entirely on your
                professional work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-linear-to-br from-[#07111F] via-[#0D1826] to-[#111827] px-5 py-28 text-white md:px-8 md:py-36 lg:px-10">
        <div className="mx-auto max-w-360 text-center">
          <BriefcaseBusiness
            size={24}
            className="mx-auto text-[#79A8FF]"
          />

          <h2 className="font-(family-name:--font-display) mx-auto mt-7 max-w-4xl text-4xl font-semibold tracking-tighter md:text-6xl">
            Ready to see the{" "}

            <span className="text-[#79A8FF]">
              work?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#A8B3C4]">
            Explore selected projects, tools, capabilities, and
            digital work from across my portfolio.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-3 rounded-2xl bg-[#4F8CFF] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#79A8FF]"
            >
              Explore My Work

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-[#B8D2FF] transition-colors hover:bg-white/10 hover:text-white"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#050A12] px-5 py-9 text-white md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-360 flex-col justify-between gap-4 text-xs text-[#6E7C90] sm:flex-row">
          <span>
            © 2026 Khimberlie D. Macose. All rights reserved.
          </span>

          <div className="flex gap-6">
            <Link
              href="/"
              className="hover:text-white"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className="text-[#79A8FF]"
            >
              About
            </Link>

            <Link
              href="/#contact"
              className="hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}