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
  Quote,
  Rocket,
  Search,
  Share2,
  Video,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react";

import Folder from "@/components/Folder";
import HomeProjectCTA from "@/components/HomeProjectCTA";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

/* =========================================================
   SERVICES
========================================================= */

const capabilities = [
  {
    label: "Social Media",
    title: "Social Media Management",
    description:
      "Planning, scheduling, publishing, and organizing content across digital social platforms.",
    icon: Share2,
    href: "/work/social-media",
  },
  {
    label: "Design",
    title: "Graphic Design & Content Creation",
    description:
      "Social graphics, branded templates, promotional assets, carousel posts, and marketing visuals.",
    icon: Palette,
    href: "/work/graphic-design",
  },
  {
    label: "Video",
    title: "Short-Form Video Editing",
    description:
      "Reels, TikTok content, captions, text overlays, and vertical platform-ready video.",
    icon: Video,
    href: "/work/video-editing",
  },
  {
    label: "GoHighLevel",
    title: "GoHighLevel Marketing Operations",
    description:
      "Funnels, workflows, contacts, tags, campaigns, forms, scheduling, and lead follow-up.",
    icon: Workflow,
    href: "/work/gohighlevel",
  },
  {
    label: "Email",
    title: "Email Marketing",
    description:
      "Newsletters, campaigns, follow-up organization, lead nurturing, and promotional communication.",
    icon: Mail,
    href: "/work/email-marketing",
  },
  {
    label: "VA Support",
    title: "Virtual & Executive Support",
    description:
      "Scheduling, calendars, communication, coordination, documentation, and operational support.",
    icon: BriefcaseBusiness,
    href: "/work/virtual-assistance",
  },
  {
    label: "Web & Funnels",
    title: "Websites, Landing Pages & Funnels",
    description:
      "Website updates, landing pages, funnels, lead forms, calls to action, and promotional pages.",
    icon: Monitor,
    href: "/portfolio",
  },
  {
    label: "Marketing",
    title: "Digital Marketing & Lead Generation",
    description:
      "Campaign support, lead follow-up, promotional content, coordination, and brand consistency.",
    icon: Megaphone,
    href: "/portfolio",
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
        logo:
          "https://www.google.com/s2/favicons?domain=capcut.com&sz=128",
        domain: "capcut.com",
      },
      {
        name: "Metricool",
        logo:
          "https://www.google.com/s2/favicons?domain=metricool.com&sz=128",
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
          "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128",
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
      "Platforms used for email campaigns, marketing support, and lead follow-up.",
    tools: [
      {
        name: "Mailchimp",
        logo:
          "https://cdn.simpleicons.org/mailchimp/FFE01B",
        domain: "mailchimp.com",
      },
      {
        name: "Klaviyo",
        logo:
          "https://www.google.com/s2/favicons?domain=klaviyo.com&sz=128",
        domain: "klaviyo.com",
      },
    ],
  },

  {
    category: "Web & Funnels",
    description:
      "Platforms for website, landing pages, marketing funnels, CRM, and e-commerce support.",
    tools: [
      {
        name: "GoHighLevel",
        logo:
          "https://www.google.com/s2/favicons?domain=gohighlevel.com&sz=128",
        domain: "gohighlevel.com",
      },
      {
        name: "WordPress",
        logo:
          "https://cdn.simpleicons.org/wordpress/21759B",
        domain: "wordpress.org",
      },
      {
        name: "ClickFunnels",
        logo:
          "https://www.google.com/s2/favicons?domain=clickfunnels.com&sz=128",
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
          "https://www.google.com/s2/favicons?domain=calendly.com&sz=128",
        domain: "calendly.com",
      },
      {
        name: "QuickBooks Online",
        logo:
          "https://www.google.com/s2/favicons?domain=quickbooks.intuit.com&sz=128",
        domain: "quickbooks.intuit.com",
      },
    ],
  },
];


/* =========================================================
   TESTIMONIALS
========================================================= */

const testimonials = [
  {
    quote:
      "Add a verified client testimonial here once Khim provides the final feedback.",
    name: "Client Name",
    role: "Company / Role",
  },
  {
    quote:
      "Add another verified testimonial about the quality of the work, communication, or support.",
    name: "Client Name",
    role: "Company / Role",
  },
  {
    quote:
      "Add another verified testimonial here once real client feedback is available.",
    name: "Client Name",
    role: "Company / Role",
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
  const handleImageError = (
    event: React.SyntheticEvent<
      HTMLImageElement,
      Event
    >,
  ) => {
    const image =
      event.currentTarget;

    const fallbackStage =
      image.dataset.fallbackStage;

    // First failure:
    // switch to Google favicon.
    if (!fallbackStage) {
      image.dataset.fallbackStage =
        "favicon";

      image.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

      return;
    }

    // Second failure:
    // hide image and reveal letter fallback.
    image.dataset.fallbackStage =
      "failed";

    image.style.display =
      "none";

    const fallback =
      image.nextElementSibling as HTMLElement | null;

    if (fallback) {
      fallback.style.display =
        "flex";
    }
  };

  return (
    <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-[#E1E7EF] bg-white p-2.5 shadow-[0_5px_15px_rgba(15,23,42,0.06)]">
      <img
        src={logo}
        alt=""
        aria-label={`${name} logo`}
        loading="lazy"
        className="h-full w-full object-contain"
        onError={handleImageError}
      />

      {/* FINAL FALLBACK */}

      <div className="hidden h-full w-full items-center justify-center">
        <span className="font-(family-name:--font-display) text-lg font-bold text-[#4F8CFF]">
          {name.charAt(0)}
        </span>
      </div>
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
   SERVICE FOLDER
========================================================= */

function ServiceFolder({
  service,
  index,
}: {
  service: (typeof capabilities)[number];
  index: number;
}) {
  const router =
    useRouter();

  const Icon =
    service.icon;

  function openCategory() {
    router.push(
      service.href,
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
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
        delay:
          index *
          0.05,
      }}
      className="h-full w-full"
    >
      <div
        onClick={
          openCategory
        }
        className="group h-full w-full cursor-pointer"
      >
        <Folder
          label={
            service.label
          }
          mode="flap"
          variant="solid"
          color="#DCE6F5"
          paperColor="#F7F9FC"
          theme="light"
          tabPosition="left"
          layout="spread"
          size={1}
          openOn="hover"
          peek
          intro
          draggable={false}
          zoomOnClick={false}
          tilt={0.2}
          bounce={0.25}
          speed={1}
          className="w-full"
          frontContent={
            <>
              {/* TOP */}

              <div className="flex items-start justify-between gap-5">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-[#CCD7E4] bg-white text-[#4F8CFF] shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                  <Icon
                    size={19}
                  />
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9D5E2] bg-white text-[#667085] transition-all duration-300 group-hover:border-[#4F8CFF] group-hover:bg-[#4F8CFF] group-hover:text-white">
                  <ArrowUpRight
                    size={15}
                  />
                </div>
              </div>

              {/* TITLE */}

              <h3 className="font-(family-name:--font-display) mt-8 max-w-[90%] text-[23px] font-semibold leading-[1.08] tracking-tight text-[#101828] transition-colors duration-300 group-hover:text-[#3F7BE0]">
                {
                  service.title
                }
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-5 max-w-[95%] text-sm leading-7 text-[#667085]">
                {
                  service.description
                }
              </p>

              {/* BOTTOM */}

              <div className="mt-auto pt-6">
                <div className="h-px bg-[#C8D4E1]" />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#4F8CFF]">
                    View Projects
                  </span>

                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4F8CFF]" />

                    <span className="h-1.5 w-1.5 rounded-full bg-[#B8C6D6]" />

                    <span className="h-1.5 w-1.5 rounded-full bg-[#B8C6D6]" />
                  </div>
                </div>
              </div>
            </>
          }
          items={[
            {
              title:
                service.label,
              description:
                "Selected portfolio work",
            },
            {
              title:
                "Creative Work",
              description:
                "Related projects and digital assets",
            },
            {
              title:
                "Portfolio",
              description:
                "Open this category",
            },
          ]}
          onItemClick={
            openCategory
          }
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function HomePage() {
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
        `radial-gradient(650px circle at ${x}% ${y}%, rgba(79,140,255,0.17), transparent 48%)`,
    );

  return (
    <main className="min-h-screen font-(family-name:--font-body) selection:bg-[#4F8CFF] selection:text-white">
      <SiteHeader />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        onMouseMove={
          handleHeroMouseMove
        }
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

        <motion.div
          style={{
            background:
              spotlightBackground,
          }}
          className="pointer-events-none absolute inset-0 hidden lg:block"
        />

        <div className="relative mx-auto grid w-full max-w-360 items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 xl:gap-20">
          {/* LEFT */}

          <div>
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

                <ArrowRight
                  size={17}
                />
              </MagneticButton>

              <MagneticButton
                href="/contact#contact-form"
                secondary
              >
                <BriefcaseBusiness
                  size={16}
                />

                Start a Project
              </MagneticButton>
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
                scale: [
                  1,
                  1.035,
                  1,
                ],
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
                y: [
                  0,
                  -10,
                  0,
                ],
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
                x: [
                  0,
                  8,
                  0,
                ],
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
                y: [
                  0,
                  9,
                  0,
                ],
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
                x: [
                  0,
                  -8,
                  0,
                ],
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
          SERVICES
      ====================================================== */}

      <section
        id="capabilities"
        className="relative overflow-hidden bg-[#F8FAFC] px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10"
      >
        <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#4F8CFF]/6 blur-[160px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-[#79A8FF]/5 blur-[150px]" />

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
            className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-20"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#4F8CFF]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                  Services
                </p>
              </div>

              <h2 className="font-(family-name:--font-display) mt-6 max-w-4xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
                Explore the areas I{" "}

                <span className="text-[#4F8CFF]">
                  work in.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#667085] md:text-base md:leading-8 lg:pb-1">
              Each folder represents a service area.
              Hover to reveal the work inside, then
              click to explore projects in that
              category.
            </p>
          </motion.div>

          {/* 3 WIDE FOLDERS PER ROW */}

          <div className="mt-20 grid auto-rows-fr gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-6 xl:gap-x-9">
            {capabilities.map(
              (
                service,
                index,
              ) => (
                <div
                  key={
                    service.title
                  }
                  className={`
                    h-full
                    md:col-span-1
                    lg:col-span-2
                    ${
                      index === 6
                        ? "lg:col-start-2"
                        : ""
                    }
                  `}
                >
                  <ServiceFolder
                    service={
                      service
                    }
                    index={
                      index
                    }
                  />
                </div>
              ),
            )}
          </div>

          {/* BROWSE ALL */}

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
            className="mt-16 flex justify-center"
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 rounded-xl border border-[#D8E0EA] bg-white px-6 py-4 text-sm font-semibold text-[#344054] shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#4F8CFF]/40 hover:shadow-[0_15px_40px_rgba(79,140,255,0.10)]"
            >
              Browse All Work

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
          TESTIMONIALS
      ====================================================== */}

      <section
        id="testimonials"
        className="relative overflow-hidden bg-[#0D1826] px-5 py-28 text-white md:px-8 md:py-40 lg:px-10"
      >
        {/* GRID */}

        <div
          className="
            pointer-events-none absolute inset-0 opacity-35
            bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        {/* GLOWS */}

        <div className="pointer-events-none absolute -left-40 top-0 h-150 w-150 rounded-full bg-[#4F8CFF]/10 blur-[180px]" />

        <div className="pointer-events-none absolute -bottom-60 right-[-10%] h-125 w-125 rounded-full bg-[#79A8FF]/7 blur-[160px]" />

        <div className="relative mx-auto max-w-360">
          {/* INTRO */}

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
            className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-20"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#79A8FF]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
                  Testimonials
                </p>
              </div>

              <h2 className="font-(family-name:--font-display) mt-6 max-w-4xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
                Words from people I&apos;ve{" "}

                <span className="text-[#79A8FF]">
                  worked with.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8 lg:pb-1">
              Feedback from clients and collaborators
              about the creative, marketing, and
              operational support behind the work.
            </p>
          </motion.div>

          {/* CARDS */}

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {testimonials.map(
              (
                testimonial,
                index,
              ) => (
                <motion.article
                  key={`${testimonial.name}-${index}`}
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
                    duration: 0.55,
                    delay:
                      index *
                      0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className={`
                    group relative flex min-h-100 flex-col overflow-hidden
                    rounded-4xl border p-7 transition-all duration-500 md:p-8
                    ${
                      index === 1
                        ? "border-[#4F8CFF]/30 bg-[#132033] shadow-[0_25px_70px_rgba(0,0,0,0.25)] lg:-translate-y-6"
                        : "border-white/10 bg-[#101C2C]/80"
                    }
                    hover:border-[#4F8CFF]/45
                    hover:shadow-[0_25px_70px_rgba(79,140,255,0.12)]
                  `}
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#4F8CFF]/0 blur-[80px] transition-all duration-500 group-hover:bg-[#4F8CFF]/12" />

                  <Quote
                    size={110}
                    strokeWidth={0.8}
                    className="pointer-events-none absolute -right-5 -top-4 text-white/3"
                  />

                  <div className="relative flex h-full flex-col">
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
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#4F8CFF]/20 bg-[#4F8CFF]/10 text-[#79A8FF]"
                    >
                      <Quote
                        size={18}
                      />
                    </motion.div>

                    <blockquote className="font-(family-name:--font-display) mt-10 flex-1 text-xl font-medium leading-8 tracking-tight text-[#F7F9FC] md:text-[22px] md:leading-9">
                      “
                      {
                        testimonial.quote
                      }
                      ”
                    </blockquote>

                    <div className="mt-10 border-t border-white/10 pt-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#19283D]">
                          <span className="h-2 w-2 rounded-full bg-[#4F8CFF]" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-white">
                            {
                              testimonial.name
                            }
                          </p>

                          <p className="mt-1 text-xs text-[#6E7C90]">
                            {
                              testimonial.role
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ),
            )}
          </div>

          <p className="mt-8 text-center text-[10px] leading-5 text-[#6E7C90]">
            Placeholder testimonial content — replace
            with verified feedback before publishing.
          </p>
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