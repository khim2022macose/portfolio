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
  Monitor,
  Palette,
  Rocket,
  Search,
  Share2,
  Video,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import {
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react";

import HomeProjectCTA from "@/components/HomeProjectCTA";
import SelectedWork from "@/components/SelectedWork";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

/* =========================================================
   SERVICES
========================================================= */

const capabilities = [
  {
    title: "Social Media Management",
    description:
      "Planning, scheduling, publishing, and organizing content across digital social platforms.",
    icon: Share2,
  },
  {
    title: "Graphic Design & Content Creation",
    description:
      "Social graphics, branded templates, promotional assets, carousel posts, and marketing visuals.",
    icon: Palette,
  },
  {
    title: "Short-Form Video Editing",
    description:
      "Reels, TikTok content, captions, text overlays, and vertical platform-ready video.",
    icon: Video,
  },
  {
    title: "GoHighLevel Marketing Operations",
    description:
      "Funnels, workflows, contacts, tags, campaigns, forms, scheduling, and lead follow-up.",
    icon: Workflow,
  },
  {
    title: "Email Marketing",
    description:
      "Newsletters, campaigns, follow-up organization, lead nurturing, and promotional communication.",
    icon: Mail,
  },
  {
    title: "Virtual & Executive Support",
    description:
      "Scheduling, calendars, communication, coordination, documentation, and operational support.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Websites, Landing Pages & Funnels",
    description:
      "Website updates, landing pages, funnels, lead forms, calls to action, and promotional pages.",
    icon: Monitor,
  },
  {
    title: "Digital Marketing & Lead Generation",
    description:
      "Campaign support, lead follow-up, promotional content, coordination, and brand consistency.",
    icon: Megaphone,
  },
];

/* =========================================================
   SKILLS & TOOLS
========================================================= */

const toolCategories = [
  {
    category: "Social & Content",
    description:
      "Tools used for content creation, publishing, scheduling, and social media management.",
    tools: [
      {
        name: "Canva",
        logo: "https://cdn.simpleicons.org/canva/00C4CC",
        domain: "canva.com",
      },
      {
        name: "CapCut",
        logo: "https://cdn.simpleicons.org/capcut/000000",
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
        logo:
          "https://cdn.simpleicons.org/facebook/1877F2",
        domain: "facebook.com",
      },
      {
        name: "Instagram",
        logo:
          "https://cdn.simpleicons.org/instagram/E4405F",
        domain: "instagram.com",
      },
      {
        name: "LinkedIn",
        logo:
          "https://cdn.simpleicons.org/linkedin/0A66C2",
        domain: "linkedin.com",
      },
      {
        name: "TikTok",
        logo:
          "https://cdn.simpleicons.org/tiktok/000000",
        domain: "tiktok.com",
      },
      {
        name: "Pinterest",
        logo:
          "https://cdn.simpleicons.org/pinterest/BD081C",
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
        logo:
          "https://cdn.simpleicons.org/mailchimp/FFE01B",
        domain: "mailchimp.com",
      },
      {
        name: "Klaviyo",
        logo:
          "https://cdn.simpleicons.org/klaviyo/000000",
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
        logo:
          "https://cdn.simpleicons.org/wordpress/21759B",
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
        logo:
          "https://cdn.simpleicons.org/shopify/7AB55C",
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
          "https://cdn.simpleicons.org/microsoftoutlook/0078D4",
        domain: "outlook.com",
      },
      {
        name: "Calendly",
        logo:
          "https://cdn.simpleicons.org/calendly/006BFF",
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
   PROCESS
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
   TOOL LOGO
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
    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#E1E7EF] bg-white p-2.5 shadow-[0_5px_15px_rgba(15,23,42,0.06)]">
      <img
        src={logo}
        alt={`${name} logo`}
        loading="lazy"
        className="h-full w-full object-contain"
        onError={(event) => {
          const image = event.currentTarget;

          if (image.dataset.fallback === "true") {
            return;
          }

          image.dataset.fallback = "true";

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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 240,
    damping: 20,
  });

  const springY = useSpring(y, {
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
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
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
   HOME PAGE
========================================================= */

export default function HomePage() {
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  function handleHeroMouseMove(
    event: ReactMouseEvent<HTMLElement>,
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    spotlightX.set(
      ((event.clientX - rect.left) /
        rect.width) *
        100,
    );

    spotlightY.set(
      ((event.clientY - rect.top) /
        rect.height) *
        100,
    );
  }

  const spotlightBackground =
    useTransform(
      [spotlightX, spotlightY],
      ([x, y]) =>
        `radial-gradient(650px circle at ${x}% ${y}%, rgba(79,140,255,0.17), transparent 48%)`,
    );

  return (
    <main className="min-h-screen font-(family-name:--font-body) selection:bg-[#4F8CFF] selection:text-white">
      <SiteHeader />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        onMouseMove={handleHeroMouseMove}
        className="relative flex min-h-screen items-center overflow-hidden bg-[#07111F] pt-22 text-white"
      >
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

        {/* CURSOR LIGHT */}

        <motion.div
          style={{
            background: spotlightBackground,
          }}
          className="pointer-events-none absolute inset-0 hidden lg:block"
        />

        <div className="relative mx-auto grid w-full max-w-360 items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 xl:gap-20">
          {/* =================================================
              HERO CONTENT
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
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#4F8CFF]/25 bg-[#4F8CFF]/10 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#79A8FF]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.21em] text-[#B8D2FF]">
                Khim&apos;s Digital Work · Portfolio
              </span>
            </motion.div>

            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#6E7C90]">
              Marketing · Content · Systems · Operations
            </p>

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
              Creative work.
              <br />

              Marketing systems.
              <br />

              <span className="text-[#79A8FF]">
                Digital operations.
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
              Creative and operational support designed
              to help businesses communicate, organize,
              and execute their digital work.
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
                delay: 0.2,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticButton href="/portfolio">
                Explore My Work

                <ArrowRight size={17} />
              </MagneticButton>

              <MagneticButton
                href="/contact#contact-form"
                secondary
              >
                <BriefcaseBusiness size={16} />

                Start a Project
              </MagneticButton>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-2 py-4 text-sm font-semibold text-[#A8B3C4] transition-colors hover:text-white"
              >
                About Khim

                <ArrowUpRight size={15} />
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
            className="relative mx-auto flex aspect-square w-full max-w-120 items-center justify-center"
          >
            <div className="absolute inset-[3%] rounded-full border border-white/5" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[11%] rounded-full border border-dashed border-[#4F8CFF]/25"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[22%] rounded-full border border-white/10"
            />

            <div className="absolute inset-[29%] rounded-full bg-[#4F8CFF]/13 blur-[50px]" />

            {/* CENTER */}

            <motion.div
              animate={{
                scale: [1, 1.035, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[#4F8CFF]/30 bg-[#132033]/95 md:h-44 md:w-44"
            >
              <span className="font-(family-name:--font-display) text-5xl font-semibold tracking-tighter">
                KM
              </span>
            </motion.div>

            {/* SOCIAL */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-0 top-[16%] rounded-2xl border border-white/10 bg-[#132033]/95 p-4 shadow-2xl"
            >
              <Share2
                size={17}
                className="text-[#79A8FF]"
              />

              <p className="mt-3 text-xs font-semibold">
                Social Media
              </p>
            </motion.div>

            {/* VIDEO */}

            <motion.div
              animate={{
                x: [0, 8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute right-[3%] top-[29%] rounded-2xl border border-white/10 bg-[#132033]/95 p-4 shadow-2xl"
            >
              <Video
                size={17}
                className="text-[#79A8FF]"
              />

              <p className="mt-3 text-xs font-semibold">
                Video Editing
              </p>
            </motion.div>

            {/* GHL */}

            <motion.div
              animate={{
                y: [0, 9, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-[18%] right-0 rounded-2xl border border-white/10 bg-[#132033]/95 p-4 shadow-2xl"
            >
              <Workflow
                size={17}
                className="text-[#79A8FF]"
              />

              <p className="mt-3 text-xs font-semibold">
                GoHighLevel
              </p>
            </motion.div>

            {/* EMAIL */}

            <motion.div
              animate={{
                x: [0, -8, 0],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
              }}
              className="absolute bottom-[8%] left-[14%] rounded-2xl border border-white/10 bg-[#132033]/95 p-4 shadow-2xl"
            >
              <Mail
                size={17}
                className="text-[#79A8FF]"
              />

              <p className="mt-3 text-xs font-semibold">
                Email Marketing
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SELECTED WORK
      ====================================================== */}

      <SelectedWork />

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="capabilities"
        className="relative overflow-hidden bg-[#F8FAFC] px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10"
      >
        <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#4F8CFF]/6 blur-[160px]" />

        <div className="relative mx-auto max-w-360">
          {/* =================================================
              HEADING + PARAGRAPH POSITION
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
                  Services
                </p>
              </div>
            </div>

            {/* HEADING + DESCRIPTION */}

            <div className="grid gap-7 xl:grid-cols-[1fr_0.55fr] xl:items-end">
              <h2 className="font-(family-name:--font-display) max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
                Where creative work meets{" "}

                <span className="text-[#4F8CFF]">
                  digital execution.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-[#667085] xl:justify-self-end xl:text-base xl:leading-8">
                Creative, marketing, technical, and
                operational support built around the
                needs of digital businesses.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              SERVICE CARDS
          ================================================= */}

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map(
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
                      y: 25,
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
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -7,
                    }}
                    className="group relative flex min-h-80 flex-col overflow-hidden rounded-4xl border border-[#D8E0EA] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#4F8CFF]/45 hover:shadow-[0_22px_55px_rgba(15,23,42,0.09)] md:p-7"
                  >
                    {/* HOVER GLOW */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#4F8CFF]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#4F8CFF]/10" />

                    {/* ICON */}

                    <div className="relative">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[#D8E0EA] bg-[#F8FAFC] text-[#4F8CFF] transition-all duration-300 group-hover:border-[#4F8CFF]/30 group-hover:bg-[#EEF4FF]">
                        <Icon size={19} />
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="relative mt-10">
                      <h3 className="font-(family-name:--font-display) text-2xl font-semibold leading-tight tracking-tight text-[#101828]">
                        {service.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-[#667085]">
                        {service.description}
                      </p>
                    </div>
                  </motion.article>
                );
              },
            )}
          </div>

          {/* VIEW ALL */}

          <motion.div
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
            className="mt-10 flex justify-end"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-xl border border-[#D8E0EA] bg-white px-5 py-3.5 text-sm font-semibold text-[#344054] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4F8CFF]/40 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
            >
              View All Services

              <ArrowRight
                size={15}
                className="text-[#4F8CFF] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SKILLS & TOOLS
      ====================================================== */}

      <section
        id="tools"
        className="relative overflow-hidden bg-[#E9EEF5] px-5 py-28 text-[#101828] md:px-8 md:py-36 lg:px-10"
      >
        {/* GLOWS */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-150 w-150 rounded-full bg-[#4F8CFF]/5 blur-[170px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-white/60 blur-[150px]" />

        <div className="relative mx-auto max-w-360">
          {/* =================================================
              HEADING + PARAGRAPH POSITION
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
                  Skills & Tools
                </p>
              </div>
            </div>

            {/* TITLE / DESCRIPTION */}

            <div className="grid gap-7 xl:grid-cols-[1fr_0.55fr] xl:items-end">
              <h2 className="font-(family-name:--font-display) max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
                The tools behind the{" "}

                <span className="text-[#4F8CFF]">
                  work.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-[#667085] xl:justify-self-end xl:text-base xl:leading-8">
                Platforms used across content creation,
                marketing, CRM, websites, scheduling,
                social media, and business operations.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              TOOL CATEGORY CARDS
          ================================================= */}

          <div className="mt-16 grid gap-5 xl:grid-cols-2">
            {toolCategories.map(
              (
                category,
                categoryIndex,
              ) => (
                <motion.article
                  key={category.category}
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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.55,
                    delay:
                      categoryIndex *
                      0.06,
                  }}
                  className="rounded-[28px] border border-[#D2DBE6] bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.035)] sm:p-7 lg:p-8"
                >
                  {/* CATEGORY HEADER */}

                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#4F8CFF]">
                      Tool Category
                    </p>

                    <h3 className="font-(family-name:--font-display) mt-3 text-2xl font-semibold tracking-tight md:text-[28px]">
                      {category.category}
                    </h3>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#667085]">
                    {category.description}
                  </p>

                  <div className="my-7 h-px bg-[#DDE4ED]" />

                  {/* TOOLS */}

                  <div
                    className={`
                      grid gap-3
                      ${
                        category.tools.length >
                        4
                          ? "grid-cols-2 sm:grid-cols-4"
                          : "grid-cols-2 sm:grid-cols-3"
                      }
                    `}
                  >
                    {category.tools.map(
                      (
                        tool,
                        toolIndex,
                      ) => (
                        <motion.div
                          key={tool.name}
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
                            delay:
                              categoryIndex *
                                0.04 +
                              toolIndex *
                                0.035,
                          }}
                          whileHover={{
                            y: -5,
                          }}
                          className="group flex min-h-35 flex-col items-center justify-center rounded-[20px] border border-[#D9E1EB] bg-[#F7F9FC] px-3 py-5 text-center transition-all duration-300 hover:border-[#B8C9DE] hover:bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]"
                        >
                          <div className="transition-transform duration-300 group-hover:scale-105">
                            <ToolLogo
                              name={tool.name}
                              logo={tool.logo}
                              domain={tool.domain}
                            />
                          </div>

                          <p className="mt-4 max-w-full text-xs font-medium leading-4 text-[#27364A]">
                            {tool.name}
                          </p>
                        </motion.div>
                      ),
                    )}
                  </div>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        id="process"
        className="relative overflow-hidden bg-[#F8FAFC] px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10"
      >
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute -left-40 top-20 h-125 w-125 rounded-full bg-[#4F8CFF]/6 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-[#79A8FF]/6 blur-[150px]" />

        <div className="relative mx-auto max-w-360">
          {/* =================================================
              HEADING + PARAGRAPH POSITION
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
                  Process
                </p>
              </div>
            </div>

            {/* TITLE / DESCRIPTION */}

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
            {/* DESKTOP CURVED PATH */}

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

                {/* BLUE PATH */}

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

            {/* PROCESS ITEMS */}

            <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-6 xl:gap-4">
              {process.map(
                (
                  step,
                  index,
                ) => {
                  const Icon = step.icon;

                  const raised =
                    index % 2 === 0;

                  return (
                    <motion.article
                      key={step.title}
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
                        group relative
                        ${
                          raised
                            ? "xl:-translate-y-14"
                            : "xl:translate-y-14"
                        }
                      `}
                    >
                      {/* PROCESS CARD */}

                      <motion.div
                        whileHover={{
                          y: -8,
                          scale: 1.015,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 240,
                          damping: 18,
                        }}
                        className="relative min-h-72 overflow-hidden rounded-4xl border border-[#D8E0EA] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.045)] transition-all duration-300 group-hover:border-[#4F8CFF]/45 group-hover:shadow-[0_22px_55px_rgba(79,140,255,0.12)]"
                      >
                        {/* TOP ACCENT */}

                        <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-[#4F8CFF] transition-transform duration-500 group-hover:scale-x-100" />

                        {/* GLOW */}

                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#4F8CFF]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#4F8CFF]/12" />

                        <div className="relative">
                          {/* ICON */}

                          <motion.div
                            whileHover={{
                              rotate: -8,
                              scale: 1.08,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 250,
                              damping: 17,
                            }}
                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#4F8CFF]"
                          >
                            <Icon size={18} />
                          </motion.div>

                          {/* TITLE */}

                          <h3 className="font-(family-name:--font-display) mt-8 text-2xl font-semibold tracking-tight text-[#101828]">
                            {step.title}
                          </h3>

                          {/* DESCRIPTION */}

                          <p className="mt-4 text-sm leading-7 text-[#667085]">
                            {step.description}
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
                            repeat: Infinity,
                            delay:
                              index *
                              0.15,
                          }}
                          className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-[#4F8CFF]"
                        />
                      </motion.div>

                      {/* MOBILE CONNECTOR */}

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
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8E0EA] bg-white text-[#4F8CFF]"
                          >
                            <ArrowRight
                              size={14}
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

            {/* WORKFLOW BADGE */}

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
                    repeat: Infinity,
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
          PROJECT CTA
      ====================================================== */}

      <HomeProjectCTA />

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <SiteFooter />
    </main>
  );
}