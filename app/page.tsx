"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Mail,
  Megaphone,
  Menu,
  Monitor,
  Palette,
  Quote,
  Rocket,
  Search,
  Share2,
  Video,
  Workflow,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useState,
} from "react";

import SelectedWork from "@/components/SelectedWork";

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Social Media Management",
    description:
      "Planning, organizing, scheduling, and publishing social media content across Facebook, Instagram, LinkedIn, TikTok, and other digital channels.",
    tools: "Canva · CapCut · Metricool · GoHighLevel",
    icon: Share2,
  },
  {
    number: "02",
    title: "Graphic Design & Content Creation",
    description:
      "Creating branded social graphics, promotional materials, carousel posts, educational content, templates, and digital marketing visuals.",
    tools: "Canva",
    icon: Palette,
  },
  {
    number: "03",
    title: "Short-Form Video Editing",
    description:
      "Editing Reels, TikTok videos, and vertical social content with captions, text overlays, scripts, and platform-ready formatting.",
    tools: "CapCut · Descript Learning",
    icon: Video,
  },
  {
    number: "04",
    title: "GoHighLevel Marketing Operations",
    description:
      "Supporting funnels, landing pages, workflows, automations, contacts, tags, campaigns, lead follow-up, and social publishing.",
    tools: "GoHighLevel",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Email Marketing & Newsletter Support",
    description:
      "Preparing newsletters, formatting campaigns, organizing email follow-ups, supporting automation, and nurturing leads through email.",
    tools: "GoHighLevel · Mailchimp · Klaviyo",
    icon: Mail,
  },
  {
    number: "06",
    title: "Virtual Assistance & Executive Support",
    description:
      "Supporting calendars, meetings, scheduling, client communication, project coordination, documents, presentations, and daily operations.",
    tools: "Outlook · Calendly · Canva",
    icon: CalendarDays,
  },
  {
    number: "07",
    title: "Websites, Landing Pages & Funnels",
    description:
      "Updating websites, landing pages, lead capture forms, calls to action, funnels, and promotional pages for marketing campaigns.",
    tools: "GoHighLevel · WordPress · ClickFunnels · Shopify",
    icon: Monitor,
  },
  {
    number: "08",
    title: "Digital Marketing & Lead Generation",
    description:
      "Supporting campaigns, promotional content, lead follow-up, marketing coordination, client nurturing, and consistent branding.",
    tools: "Content Marketing · Campaign Coordination · CRM",
    icon: Megaphone,
  },
];

/* =========================================================
   SKILLS & TOOLS
========================================================= */

const toolGroups = [
  {
    category: "Social & Content",
    description:
      "Tools used for content creation, publishing, scheduling, and social media management.",
    tools: [
      {
        name: "Canva",
        logo: "https://cdn.simpleicons.org/canva",
        domain: "canva.com",
      },
      {
        name: "CapCut",
        logo: "https://cdn.simpleicons.org/capcut",
        domain: "capcut.com",
      },
      {
        name: "Metricool",
        logo:
          "https://www.google.com/s2/favicons?domain_url=https://metricool.com&sz=256",
        domain: "metricool.com",
      },
      {
        name: "Facebook",
        logo: "https://cdn.simpleicons.org/facebook",
        domain: "facebook.com",
      },
      {
        name: "Instagram",
        logo: "https://cdn.simpleicons.org/instagram",
        domain: "instagram.com",
      },
      {
        name: "LinkedIn",
        logo: "https://cdn.simpleicons.org/linkedin",
        domain: "linkedin.com",
      },
      {
        name: "TikTok",
        logo: "https://cdn.simpleicons.org/tiktok",
        domain: "tiktok.com",
      },
      {
        name: "Pinterest",
        logo: "https://cdn.simpleicons.org/pinterest",
        domain: "pinterest.com",
      },
    ],
  },

  {
    category: "Marketing & CRM",
    description:
      "Platforms used for CRM management, email campaigns, marketing automation, and lead follow-up.",
    tools: [
      {
        name: "GoHighLevel",
        logo:
          "https://www.google.com/s2/favicons?domain_url=https://gohighlevel.com&sz=256",
        domain: "gohighlevel.com",
      },
      {
        name: "Mailchimp",
        logo: "https://cdn.simpleicons.org/mailchimp",
        domain: "mailchimp.com",
      },
      {
        name: "Klaviyo",
        logo: "https://cdn.simpleicons.org/klaviyo",
        domain: "klaviyo.com",
      },
    ],
  },

  {
    category: "Web & Funnels",
    description:
      "Platforms used for website updates, landing pages, marketing funnels, and e-commerce support.",
    tools: [
      {
        name: "WordPress",
        logo: "https://cdn.simpleicons.org/wordpress",
        domain: "wordpress.org",
      },
      {
        name: "ClickFunnels",
        logo:
          "https://www.google.com/s2/favicons?domain_url=https://clickfunnels.com&sz=256",
        domain: "clickfunnels.com",
      },
      {
        name: "Shopify",
        logo: "https://cdn.simpleicons.org/shopify",
        domain: "shopify.com",
      },
    ],
  },

  {
    category: "Business Operations",
    description:
      "Tools used for scheduling, executive support, communication, and administrative operations.",
    tools: [
      {
        name: "Microsoft Outlook",
        logo:
          "https://cdn.simpleicons.org/microsoftoutlook",
        domain: "outlook.com",
      },
      {
        name: "Calendly",
        logo: "https://cdn.simpleicons.org/calendly",
        domain: "calendly.com",
      },
      {
        name: "QuickBooks Online",
        logo:
          "https://www.google.com/s2/favicons?domain_url=https://quickbooks.intuit.com&sz=256",
        domain: "quickbooks.intuit.com",
      },
    ],
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

const experienceAreas = [
  {
    number: "01",
    title: "Social Media & Content Operations",
    description:
      "Planning, creating, organizing, scheduling, and publishing branded social media content.",
    highlights: [
      "Content calendar planning",
      "Social publishing and scheduling",
      "Caption and CTA preparation",
      "Brand consistency support",
    ],
  },
  {
    number: "02",
    title: "GoHighLevel Marketing Operations",
    description:
      "Supporting funnels, landing pages, campaigns, contacts, workflows, automation, and lead follow-up inside GoHighLevel.",
    highlights: [
      "Funnels and landing pages",
      "Workflow and automation support",
      "Contact and tag organization",
      "Email and campaign support",
    ],
  },
  {
    number: "03",
    title: "Creative Content Production",
    description:
      "Creating social media graphics, marketing assets, educational content, and short-form videos.",
    highlights: [
      "Social media graphics",
      "Carousel content",
      "Short-form video editing",
      "Promotional assets",
    ],
  },
  {
    number: "04",
    title: "Virtual & Executive Support",
    description:
      "Supporting scheduling, communication, project organization, documentation, and daily digital business operations.",
    highlights: [
      "Calendar management",
      "Client communication",
      "Project coordination",
      "Documents and presentations",
    ],
  },
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review the business goal, audience, campaign, content needs, and priorities.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Organize the content, timeline, workflow, campaign, or operational tasks.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Prepare graphics, videos, captions, emails, pages, or other required assets.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Build & Schedule",
    description:
      "Set up campaigns, workflows, funnels, content schedules, or business systems.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Review",
    description:
      "Check branding, formatting, messaging, links, layouts, schedules, and details.",
    icon: Check,
  },
  {
    number: "06",
    title: "Publish & Support",
    description:
      "Launch or publish the work and provide continued operational support where needed.",
    icon: Rocket,
  },
];

/* =========================================================
   WHY WORK WITH ME
========================================================= */

const reasons = [
  {
    title: "Creative + Operational",
    description:
      "Support that can move between creative content and practical business operations.",
  },
  {
    title: "Multi-Channel",
    description:
      "Experience across social, email, websites, funnels, CRM, and communication.",
  },
  {
    title: "Organized Execution",
    description:
      "Turning plans into scheduled content, campaigns, systems, and completed tasks.",
  },
  {
    title: "Brand Consistency",
    description:
      "Attention to messaging, formatting, visual quality, and consistency across channels.",
  },
  {
    title: "Flexible Support",
    description:
      "Able to support both marketing projects and the daily operations behind them.",
  },
];

/* =========================================================
   TOOL LOGO COMPONENT
========================================================= */

function ToolLogo({
  name,
  logo,
  domain,
}: {
  name: string;
  logo: string;
  domain: string;
}) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-[0_6px_18px_rgba(15,23,42,0.06)]">
      <img
        src={logo}
        alt={`${name} logo`}
        loading="lazy"
        className="h-full w-full object-contain"
        onError={(event) => {
          const image =
            event.currentTarget;

          if (
            image.dataset.fallback ===
            "true"
          ) {
            return;
          }

          image.dataset.fallback =
            "true";

          image.src = `https://www.google.com/s2/favicons?domain_url=https://${domain}&sz=256`;
        }}
      />
    </div>
  );
}

/* =========================================================
   MAGNETIC BUTTON
========================================================= */

function MagneticButton({
  children,
  href,
  secondary = false,
}: {
  children: ReactNode;
  href: string;
  secondary?: boolean;
}) {
  const x =
    useMotionValue(0);

  const y =
    useMotionValue(0);

  const springX =
    useSpring(x, {
      stiffness: 240,
      damping: 20,
    });

  const springY =
    useSpring(y, {
      stiffness: 240,
      damping: 20,
    });

  function handleMouseMove(
    event: ReactMouseEvent<HTMLAnchorElement>,
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    x.set(
      (event.clientX -
        rect.left -
        rect.width / 2) *
        0.16,
    );

    y.set(
      (event.clientY -
        rect.top -
        rect.height / 2) *
        0.16,
    );
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      onMouseMove={
        handleMouseMove
      }
      onMouseLeave={
        reset
      }
      style={{
        x: springX,
        y: springY,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={
        secondary
          ? "group inline-flex items-center justify-center gap-3 rounded-2xl border border-[#2B3A50] bg-[#132033] px-6 py-4 text-sm font-semibold text-[#A8B3C4] transition-all duration-300 hover:border-[#4F8CFF]/50 hover:bg-[#19283D] hover:text-white"
          : "group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#4F8CFF] px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(79,140,255,0.22)] transition-all duration-300 hover:bg-[#79A8FF]"
      }
    >
      {children}
    </motion.a>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

  const spotlightX =
    useMotionValue(50);

  const spotlightY =
    useMotionValue(50);

  function handleHeroMouseMove(
    event: ReactMouseEvent<HTMLElement>,
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    spotlightX.set(
      ((event.clientX -
        rect.left) /
        rect.width) *
        100,
    );

    spotlightY.set(
      ((event.clientY -
        rect.top) /
        rect.height) *
        100,
    );
  }

  const spotlightBackground =
    useTransform(
      [
        spotlightX,
        spotlightY,
      ],
      ([x, y]) =>
        `radial-gradient(600px circle at ${x}% ${y}%, rgba(79,140,255,0.17), transparent 48%)`,
    );

  return (
    <main className="min-h-screen font-(family-name:--font-body) selection:bg-[#4F8CFF] selection:text-white">
      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto max-w-360 px-4 pt-4 md:px-8 lg:px-10">
          <nav className="flex h-18 items-center justify-between rounded-2xl border border-white/10 bg-[#07111F]/85 px-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:px-7">
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
                  Digital Work Portfolio
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-7 xl:flex">
              {navigation.map(
                (item) =>
                  item.href.startsWith(
                    "/",
                  ) ? (
                    <Link
                      key={
                        item.label
                      }
                      href={
                        item.href
                      }
                      className="group relative text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A8B3C4] transition-colors hover:text-white"
                    >
                      {
                        item.label
                      }

                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#4F8CFF] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ) : (
                    <a
                      key={
                        item.label
                      }
                      href={
                        item.href
                      }
                      className="group relative text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A8B3C4] transition-colors hover:text-white"
                    >
                      {
                        item.label
                      }

                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#4F8CFF] transition-all duration-300 group-hover:w-full" />
                    </a>
                  ),
              )}
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/about"
                className="hidden rounded-xl border border-white/10 px-4 py-3 text-xs font-semibold text-[#A8B3C4] transition-colors hover:text-white md:block"
              >
                About Me
              </Link>

              <a
                href="#contact"
                className="hidden rounded-xl bg-white px-5 py-3 text-xs font-bold text-[#07111F] transition-colors hover:bg-[#B8D2FF] md:block"
              >
                Hire Me
              </a>

              <button
                type="button"
                aria-label="Toggle navigation"
                onClick={() =>
                  setMenuOpen(
                    !menuOpen,
                  )
                }
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white xl:hidden"
              >
                {menuOpen ? (
                  <X
                    size={
                      19
                    }
                  />
                ) : (
                  <Menu
                    size={
                      19
                    }
                  />
                )}
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-[#07111F]/95 p-3 backdrop-blur-2xl xl:hidden">
              {navigation.map(
                (item) =>
                  item.href.startsWith(
                    "/",
                  ) ? (
                    <Link
                      key={
                        item.label
                      }
                      href={
                        item.href
                      }
                      onClick={() =>
                        setMenuOpen(
                          false,
                        )
                      }
                      className="block border-b border-white/5 px-4 py-4 text-lg text-[#A8B3C4] last:border-none hover:text-white"
                    >
                      {
                        item.label
                      }
                    </Link>
                  ) : (
                    <a
                      key={
                        item.label
                      }
                      href={
                        item.href
                      }
                      onClick={() =>
                        setMenuOpen(
                          false,
                        )
                      }
                      className="block border-b border-white/5 px-4 py-4 text-lg text-[#A8B3C4] last:border-none hover:text-white"
                    >
                      {
                        item.label
                      }
                    </a>
                  ),
              )}
            </div>
          )}
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        onMouseMove={
          handleHeroMouseMove
        }
        className="relative flex min-h-screen items-center overflow-hidden bg-[#07111F] pt-28 text-white"
      >
        <div
          className="
            pointer-events-none absolute inset-0 opacity-60
            bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        <div className="pointer-events-none absolute left-[-15%] top-[-20%] h-150 w-150 rounded-full bg-[#4F8CFF]/15 blur-[190px]" />

        <motion.div
          style={{
            background:
              spotlightBackground,
          }}
          className="pointer-events-none absolute inset-0 hidden lg:block"
        />

        <div className="relative mx-auto grid w-full max-w-360 items-center gap-16 px-5 py-20 md:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-10">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#4F8CFF]/25 bg-[#4F8CFF]/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#79A8FF] opacity-70" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F8CFF]" />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B8D2FF]">
                Khim&apos;s Digital Work
              </span>
            </div>

            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#6E7C90]">
              Selected Work · Marketing · Content · Operations
            </p>

            <h1 className="font-(family-name:--font-display) max-w-5xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[0.9] tracking-tighter">
              Digital work
              <br />
              built across
              <br />

              <motion.span
                animate={{
                  backgroundPosition:
                    [
                      "0% center",
                      "200% center",
                    ],
                }}
                transition={{
                  duration:
                    7,
                  repeat:
                    Infinity,
                  ease: "linear",
                }}
                className="
                  bg-[linear-gradient(100deg,#F7F9FC_0%,#DCE8FF_30%,#B8D2FF_55%,#79A8FF_78%,#F7F9FC_100%)]
                  bg-size-[200%_auto]
                  bg-clip-text
                  text-transparent
                "
              >
                content & systems.
              </motion.span>
            </h1>

            <p className="mt-9 max-w-190 text-base leading-8 text-[#A8B3C4] md:text-lg">
              A portfolio of work across social media,
              graphic design, short-form video, GoHighLevel,
              email marketing, websites, funnels, lead
              generation, and digital business operations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="#work">
                Explore My Work

                <ArrowRight
                  size={
                    17
                  }
                />
              </MagneticButton>

              <MagneticButton
                href="#services"
                secondary
              >
                <BriefcaseBusiness
                  size={
                    16
                  }
                />

                View Services
              </MagneticButton>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-2 py-4 text-sm font-semibold text-[#A8B3C4] transition-colors hover:text-white"
              >
                About Khim

                <ArrowUpRight
                  size={
                    15
                  }
                />
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-7">
              <div>
                <p className="font-(family-name:--font-display) text-xl font-semibold">
                  08
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[#6E7C90]">
                  Work Areas
                </p>
              </div>

              <div>
                <p className="font-(family-name:--font-display) text-xl font-semibold">
                  06
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[#6E7C90]">
                  Work Archives
                </p>
              </div>

              <div>
                <p className="font-(family-name:--font-display) text-xl font-semibold">
                  Multi
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[#6E7C90]">
                  Channel Work
                </p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}

          <div className="relative mx-auto flex aspect-square w-full max-w-120 items-center justify-center">
            <div className="absolute inset-[5%] rounded-full border border-[#4F8CFF]/15" />

            <motion.div
              animate={{
                rotate:
                  360,
              }}
              transition={{
                duration:
                  25,
                repeat:
                  Infinity,
                ease: "linear",
              }}
              className="absolute inset-[13%] rounded-full border border-dashed border-[#4F8CFF]/30"
            />

            <motion.div
              animate={{
                rotate:
                  -360,
              }}
              transition={{
                duration:
                  18,
                repeat:
                  Infinity,
                ease: "linear",
              }}
              className="absolute inset-[23%] rounded-full border border-white/10"
            />

            <div className="absolute inset-[30%] rounded-full bg-[#4F8CFF]/15 blur-[45px]" />

            <div className="relative flex h-42 w-42 items-center justify-center rounded-full border border-[#4F8CFF]/30 bg-[#132033] shadow-[0_0_80px_rgba(79,140,255,0.15)]">
              <span className="font-(family-name:--font-display) text-5xl font-semibold tracking-tighter">
                KM
              </span>
            </div>

            <motion.div
              animate={{
                y: [
                  0,
                  -10,
                  0,
                ],
              }}
              transition={{
                duration:
                  5,
                repeat:
                  Infinity,
              }}
              className="absolute left-0 top-[22%] rounded-2xl border border-white/10 bg-[#132033]/95 p-4 shadow-2xl"
            >
              <Share2
                size={
                  18
                }
                className="text-[#79A8FF]"
              />

              <p className="mt-3 text-xs font-semibold">
                Social Media
              </p>
            </motion.div>

            <motion.div
              animate={{
                y: [
                  0,
                  10,
                  0,
                ],
              }}
              transition={{
                duration:
                  4,
                repeat:
                  Infinity,
              }}
              className="absolute bottom-[20%] right-0 rounded-2xl border border-white/10 bg-[#132033]/95 p-4 shadow-2xl"
            >
              <Workflow
                size={
                  18
                }
                className="text-[#79A8FF]"
              />

              <p className="mt-3 text-xs font-semibold">
                GoHighLevel
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MARQUEE
      ====================================================== */}

      <section className="overflow-hidden border-b border-[#D7DFE9] bg-white py-5">
        <motion.div
          animate={{
            x: [
              "0%",
              "-50%",
            ],
          }}
          transition={{
            duration:
              30,
            repeat:
              Infinity,
            ease: "linear",
          }}
          className="flex w-max"
        >
          {[0, 1].map(
            (group) => (
              <div
                key={
                  group
                }
                className="flex shrink-0 items-center"
              >
                {[
                  "SOCIAL MEDIA",
                  "GRAPHIC DESIGN",
                  "VIDEO EDITING",
                  "GOHIGHLEVEL",
                  "EMAIL MARKETING",
                  "VIRTUAL ASSISTANCE",
                  "WEBSITES & FUNNELS",
                  "LEAD GENERATION",
                ].map(
                  (item) => (
                    <div
                      key={`${group}-${item}`}
                      className="flex items-center"
                    >
                      <span className="font-(family-name:--font-display) mx-8 text-xl font-medium text-[#344054] md:text-2xl">
                        {
                          item
                        }
                      </span>

                      <span className="text-[#4F8CFF]">
                        ✦
                      </span>
                    </div>
                  ),
                )}
              </div>
            ),
          )}
        </motion.div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="bg-[#F8FAFC] px-5 py-28 text-[#101828] md:px-8 md:py-40"
      >
        <div className="mx-auto max-w-360">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
            01 / Capabilities
          </p>

          <h2 className="font-(family-name:--font-display) mt-5 max-w-4xl text-4xl font-semibold tracking-tighter md:text-6xl">
            Digital work across{" "}
            <span className="text-[#4F8CFF]">
              creative, marketing, and operations.
            </span>
          </h2>

          <div className="mt-16">
            {services.map(
              (
                service,
                index,
              ) => {
                const Icon =
                  service.icon;

                return (
                  <motion.div
                    key={
                      service.title
                    }
                    initial={{
                      opacity:
                        0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity:
                        1,
                      y: 0,
                    }}
                    viewport={{
                      once:
                        true,
                    }}
                    transition={{
                      delay:
                        index *
                        0.04,
                    }}
                    className="group grid gap-5 border-t border-[#D8E0EA] py-8 md:grid-cols-[60px_1fr_1fr_auto] md:items-center"
                  >
                    <span className="text-xs text-[#98A2B3]">
                      {
                        service.number
                      }
                    </span>

                    <div>
                      <h3 className="font-(family-name:--font-display) text-2xl font-medium md:text-3xl">
                        {
                          service.title
                        }
                      </h3>

                      <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#4F8CFF]">
                        {
                          service.tools
                        }
                      </p>
                    </div>

                    <p className="max-w-lg text-sm leading-7 text-[#667085]">
                      {
                        service.description
                      }
                    </p>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#CDD6E2] bg-white text-[#475467] transition-all duration-300 group-hover:border-[#4F8CFF] group-hover:bg-[#4F8CFF] group-hover:text-white">
                      <Icon
                        size={
                          17
                        }
                      />
                    </div>
                  </motion.div>
                );
              },
            )}

            <div className="border-t border-[#D8E0EA]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED WORK
      ====================================================== */}

      <SelectedWork />

      {/* =====================================================
          SKILLS & TOOLS
      ====================================================== */}

      <section
        id="skills"
        className="relative overflow-hidden bg-[#E8EDF4] px-5 py-28 text-[#101828] md:px-8 md:py-40"
      >
        <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#4F8CFF]/7 blur-[150px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-[#94A3B8]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-360">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#4F8CFF]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                  03 / Skills & Tools
                </p>
              </div>

              <h2 className="font-(family-name:--font-display) mt-6 max-w-4xl text-4xl font-semibold tracking-tighter md:text-6xl">
                The tools behind the{" "}
                <span className="text-[#4F8CFF]">
                  work.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#667085]">
              Platforms used across social media, content
              creation, marketing, CRM, email, websites,
              scheduling, and business operations.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {toolGroups.map(
              (
                group,
                groupIndex,
              ) => (
                <motion.div
                  key={
                    group.category
                  }
                  initial={{
                    opacity:
                      0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity:
                      1,
                    y: 0,
                  }}
                  viewport={{
                    once:
                      true,
                  }}
                  transition={{
                    delay:
                      groupIndex *
                      0.07,
                  }}
                  className="group relative overflow-hidden rounded-4xl border border-[#D0D8E3] bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#4F8CFF]/35 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)] md:p-8"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#4F8CFF]/0 blur-[90px] transition-all duration-500 group-hover:bg-[#4F8CFF]/7" />

                  <div className="relative flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4F8CFF]">
                        Tool Category
                      </p>

                      <h3 className="font-(family-name:--font-display) mt-2 text-2xl font-semibold tracking-tight">
                        {
                          group.category
                        }
                      </h3>
                    </div>

                    <span className="font-(family-name:--font-display) text-sm font-semibold text-[#98A2B3]">
                      {String(
                        group
                          .tools
                          .length,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>
                  </div>

                  <p className="relative mt-4 max-w-lg text-sm leading-7 text-[#667085]">
                    {
                      group.description
                    }
                  </p>

                  <div className="relative my-7 h-px bg-[#E2E8F0]" />

                  <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                    {group.tools.map(
                      (
                        tool,
                        toolIndex,
                      ) => (
                        <motion.div
                          key={
                            tool.name
                          }
                          initial={{
                            opacity:
                              0,
                            scale:
                              0.9,
                          }}
                          whileInView={{
                            opacity:
                              1,
                            scale:
                              1,
                          }}
                          viewport={{
                            once:
                              true,
                          }}
                          transition={{
                            delay:
                              groupIndex *
                                0.03 +
                              toolIndex *
                                0.025,
                          }}
                          whileHover={{
                            y: -5,
                          }}
                          className="group/tool flex min-h-38 flex-col items-center justify-center rounded-3xl border border-[#D8E0EA] bg-[#F8FAFC] px-4 py-6 text-center transition-all duration-300 hover:border-[#4F8CFF]/45 hover:bg-white hover:shadow-[0_14px_35px_rgba(15,23,42,0.08)]"
                        >
                          <div className="transition-transform duration-300 group-hover/tool:scale-105">
                            <ToolLogo
                              name={
                                tool.name
                              }
                              logo={
                                tool.logo
                              }
                              domain={
                                tool.domain
                              }
                            />
                          </div>

                          <p className="mt-4 text-sm font-semibold leading-5 text-[#344054]">
                            {
                              tool.name
                            }
                          </p>
                        </motion.div>
                      ),
                    )}
                  </div>
                </motion.div>
              ),
            )}
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[#D0D8E3] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-[#667085]">
              Tools used across Khim&apos;s digital
              marketing, creative, web, and operational work.
            </p>

            <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#4F8CFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F8CFF]" />

              Digital Toolkit
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}

      <section
        id="experience"
        className="bg-[#111827] px-5 py-28 text-white md:px-8 md:py-40"
      >
        <div className="mx-auto max-w-360">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
            04 / Work Experience
          </p>

          <h2 className="font-(family-name:--font-display) mt-5 max-w-4xl text-4xl font-semibold tracking-tighter md:text-6xl">
            Work across{" "}
            <span className="text-[#79A8FF]">
              creative and digital operations.
            </span>
          </h2>

          <div className="mt-14">
            {experienceAreas.map(
              (item) => (
                <article
                  key={
                    item.title
                  }
                  className="grid gap-6 border-t border-white/10 py-9 md:grid-cols-[70px_1fr]"
                >
                  <span className="text-xs text-[#6E7C90]">
                    {
                      item.number
                    }
                  </span>

                  <div>
                    <h3 className="font-(family-name:--font-display) text-2xl font-semibold">
                      {
                        item.title
                      }
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#98A2B3]">
                      {
                        item.description
                      }
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {item.highlights.map(
                        (
                          highlight,
                        ) => (
                          <div
                            key={
                              highlight
                            }
                            className="flex items-start gap-3 text-sm text-[#CBD5E1]"
                          >
                            <Check
                              size={
                                15
                              }
                              className="mt-0.5 shrink-0 text-[#79A8FF]"
                            />

                            <span>
                              {
                                highlight
                              }
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </article>
              ),
            )}

            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="bg-[#F8FAFC] px-5 py-28 text-[#101828] md:px-8 md:py-40">
        <div className="mx-auto max-w-360">
          <div className="text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
              05 / Work Process
            </p>

            <h2 className="font-(family-name:--font-display) mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tighter md:text-6xl">
              From request to{" "}
              <span className="text-[#4F8CFF]">
                completed work.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {processSteps.map(
              (step) => {
                const Icon =
                  step.icon;

                return (
                  <div
                    key={
                      step.number
                    }
                    className="rounded-3xl border border-[#D8E0EA] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4F8CFF]/10 text-[#4F8CFF]">
                      <Icon
                        size={
                          18
                        }
                      />
                    </div>

                    <p className="mt-7 text-[9px] uppercase tracking-[0.18em] text-[#98A2B3]">
                      Step{" "}
                      {
                        step.number
                      }
                    </p>

                    <h3 className="font-(family-name:--font-display) mt-2 text-xl font-semibold">
                      {
                        step.title
                      }
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#667085]">
                      {
                        step.description
                      }
                    </p>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="bg-[#E9EEF5] px-5 py-28 text-[#101828] md:px-8 md:py-40">
        <div className="mx-auto max-w-360">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
            06 / Work Feedback
          </p>

          <h2 className="font-(family-name:--font-display) mt-5 max-w-3xl text-4xl font-semibold tracking-tighter md:text-6xl">
            Feedback from people I&apos;ve{" "}
            <span className="text-[#4F8CFF]">
              worked with.
            </span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[1, 2].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-4xl border border-[#D5DDE8] bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                >
                  <Quote
                    size={
                      28
                    }
                    className="text-[#4F8CFF]/45"
                  />

                  <p className="mt-8 text-base leading-8 text-[#667085]">
                    Add a verified client, employer, or
                    colleague testimonial here.
                  </p>

                  <div className="mt-8 border-t border-[#E2E8F0] pt-5">
                    <p className="font-(family-name:--font-display) text-sm font-semibold">
                      Verified Name
                    </p>

                    <p className="mt-1 text-xs text-[#98A2B3]">
                      Role / Company
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY WORK WITH ME
      ====================================================== */}

      <section className="bg-[#0B1320] px-5 py-28 text-white md:px-8 md:py-40">
        <div className="mx-auto max-w-360">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
            07 / Working With Me
          </p>

          <h2 className="font-(family-name:--font-display) mt-5 max-w-4xl text-4xl font-semibold tracking-tighter md:text-6xl">
            Flexible support across{" "}
            <span className="text-[#79A8FF]">
              creative work and operations.
            </span>
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-5">
            {reasons.map(
              (
                reason,
                index,
              ) => (
                <div
                  key={
                    reason.title
                  }
                  className="bg-[#111C2C] p-7 transition-colors duration-300 hover:bg-[#17263A]"
                >
                  <span className="text-xs text-[#79A8FF]">
                    0
                    {
                      index +
                      1
                    }
                  </span>

                  <h3 className="font-(family-name:--font-display) mt-12 text-xl font-semibold">
                    {
                      reason.title
                    }
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#94A3B8]">
                    {
                      reason.description
                    }
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-linear-to-br from-[#07111F] via-[#0D1826] to-[#111827] px-5 py-28 text-white md:px-8 md:py-40"
      >
        <div className="pointer-events-none absolute right-[-15%] top-[-50%] h-150 w-150 rounded-full bg-[#4F8CFF]/15 blur-[180px]" />

        <div className="relative mx-auto max-w-360">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
                08 / Contact
              </p>

              <h2 className="font-(family-name:--font-display) mt-6 text-[clamp(3.5rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-tighter">
                Have work
                <br />
                in mind?
                <br />

                <span className="text-[#79A8FF]">
                  Let&apos;s talk.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-[#A8B3C4]">
                Need help with social media, content,
                GoHighLevel, email marketing, websites,
                funnels, or digital operations? Send an
                inquiry.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#B8D2FF] hover:text-white"
              >
                Want to know more about me?

                <ArrowUpRight
                  size={
                    15
                  }
                />
              </Link>
            </div>

            <form
              action="mailto:your@email.com"
              method="post"
              encType="text/plain"
              className="rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="name"
                  placeholder="Your Name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-[#64748B] focus:border-[#4F8CFF]/60"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm outline-none placeholder:text-[#64748B] focus:border-[#4F8CFF]/60"
                />
              </div>

              <select
                name="service"
                defaultValue=""
                className="mt-5 w-full rounded-2xl border border-white/10 bg-[#132033] px-5 py-4 text-sm text-[#A8B3C4] outline-none"
              >
                <option
                  value=""
                  disabled
                >
                  Select a service
                </option>

                {services.map(
                  (
                    service,
                  ) => (
                    <option
                      key={
                        service.title
                      }
                      value={
                        service.title
                      }
                    >
                      {
                        service.title
                      }
                    </option>
                  ),
                )}
              </select>

              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about the work you need..."
                className="mt-5 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 outline-none placeholder:text-[#64748B] focus:border-[#4F8CFF]/60"
              />

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#4F8CFF] px-6 py-4 text-sm font-semibold transition-colors hover:bg-[#79A8FF]"
              >
                Send Inquiry

                <ArrowUpRight
                  size={
                    16
                  }
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#050A12] px-5 py-10 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-360">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row">
            <div>
              <p className="font-(family-name:--font-display) text-lg font-semibold">
                Khimberlie D. Macose
              </p>

              <p className="mt-2 text-sm text-[#6E7C90]">
                Digital Marketing & Operations Portfolio
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#work"
                className="text-[#A8B3C4] hover:text-white"
              >
                Work
              </a>

              <a
                href="#skills"
                className="text-[#A8B3C4] hover:text-white"
              >
                Skills
              </a>

              <Link
                href="/about"
                className="text-[#A8B3C4] hover:text-white"
              >
                About
              </Link>

              <a
                href="#contact"
                className="text-[#A8B3C4] hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-[#6E7C90] sm:flex-row">
            <span>
              © 2026 Khimberlie D. Macose. All rights reserved.
            </span>

            <span>
              Digital Work Portfolio
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}