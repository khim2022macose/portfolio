"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  Monitor,
  Palette,
  Share2,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

/* =========================================================
   TYPES
========================================================= */

type Project = {
  id: number;
  title: string;
  category: string;
  platform: string;
  description: string;
  href: string;
  website: string | null;
  previewImage: string | null;
  icon: LucideIcon;
  tags: string[];
};

/* =========================================================
   PROJECTS
========================================================= */

const projects: Project[] = [
  /* =======================================================
     SOCIAL MEDIA
  ======================================================== */

  {
    id: 1,
    title:
      "Social Media Content Management",
    category:
      "Social Media",
    platform:
      "Canva",
    description:
      "Content planning, branded graphics, captions, publishing, scheduling, and consistent social presentation.",
    href:
      "/work/social-media",
    website:
      null,
    previewImage:
      null,
    icon:
      Share2,
    tags: [
      "Content Planning",
      "Social Media",
      "Canva",
    ],
  },

  {
    id: 2,
    title:
      "Social Content Calendar",
    category:
      "Social Media",
    platform:
      "Metricool",
    description:
      "Organized planning and scheduling workflow for consistent social publishing.",
    href:
      "/work/social-media",
    website:
      null,
    previewImage:
      null,
    icon:
      Share2,
    tags: [
      "Scheduling",
      "Content Calendar",
      "Publishing",
    ],
  },

  /* =======================================================
     GRAPHIC DESIGN
  ======================================================== */

  {
    id: 3,
    title:
      "Branded Social Graphics",
    category:
      "Graphic Design",
    platform:
      "Canva",
    description:
      "Marketing graphics, social content, promotional materials, carousels, and branded digital assets.",
    href:
      "/work/graphic-design",
    website:
      null,
    previewImage:
      null,
    icon:
      Palette,
    tags: [
      "Graphic Design",
      "Branding",
      "Canva",
    ],
  },

  {
    id: 4,
    title:
      "Marketing Carousel Design",
    category:
      "Graphic Design",
    platform:
      "Canva",
    description:
      "Carousel content prepared for educational, promotional, and engagement-focused campaigns.",
    href:
      "/work/graphic-design",
    website:
      null,
    previewImage:
      null,
    icon:
      Palette,
    tags: [
      "Carousel",
      "Content",
      "Visual Design",
    ],
  },

  /* =======================================================
     VIDEO EDITING
  ======================================================== */

  {
    id: 5,
    title:
      "Short-Form Social Video",
    category:
      "Video Editing",
    platform:
      "CapCut",
    description:
      "Vertical social video with captions, text overlays, pacing, and platform-ready formatting.",
    href:
      "/work/video-editing",
    website:
      null,
    previewImage:
      null,
    icon:
      Video,
    tags: [
      "Reels",
      "TikTok",
      "CapCut",
    ],
  },

  {
    id: 6,
    title:
      "Reels & Video Content",
    category:
      "Video Editing",
    platform:
      "CapCut",
    description:
      "Short-form marketing videos prepared for social publishing and brand communication.",
    href:
      "/work/video-editing",
    website:
      null,
    previewImage:
      null,
    icon:
      Video,
    tags: [
      "Video Editing",
      "Captions",
      "Short Form",
    ],
  },

  /* =======================================================
     FUNNELS & WEBSITES
     PROJECT 01 — DOUBLE R RENTALS
  ======================================================== */

  {
    id: 7,
    title:
      "Double R Rentals",
    category:
      "Funnels & Websites",
    platform:
      "GoHighLevel + AI Studio",
    description:
  "A premium car rental website designed to help customers explore available vehicles, understand rental options, and complete the booking process with a clear and professional experience.",
    href:
      "/work/gohighlevel",
    website:
      "https://doublerrentals.net/",
    previewImage:
      "/images/double-r-rentals-preview.png",
    icon:
      Workflow,
    tags: [
      "GoHighLevel",
      "AI Studio",
      "Car Rental Website",
    ],
  },

  /* =======================================================
     FUNNELS & WEBSITES
     PROJECT 02 — THE CLEAN POWER EXPERTS
  ======================================================== */

  {
    id: 8,
    title:
      "The Clean Power Experts ",
    category:
      "Funnels & Websites",
    platform:
      "WordPress + Elementor",
    description:
  "A clean-energy services website focused on helping homeowners explore energy-saving solutions, understand available services, and request a property energy-efficiency evaluation.",
    href:
      "/portfolio",
    website:
      "https://thecleanpowerexperts.com/",
    previewImage:
      "/images/clean-power-experts.png",
    icon:
      Monitor,
    tags: [
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
    ],
  },

  /* =======================================================
     FUNNELS & WEBSITES
     PROJECT 03 - PRIME TIME BUDGET 
  ======================================================== */

{
  id: 9,

  title:
    "Prime-Time Budget Rides",

  category:
    "Funnels & Websites",

  platform:
    "GoHighLevel",

  description:
  "A private car rental website focused on fast approvals, transparent pricing, flexible rental terms, and a simple booking experience for customers across Metro Detroit.",

  href:
    "/work/gohighlevel",

  website:
    "https://primetimebudgetrides.com/",

  previewImage:
    "/images/prime-time-budget-rides.png",

  icon:
    Workflow,

  tags: [
    "GoHighLevel",
    "Funnel",
    "HTML",
    "CSS",
  ],
},

  /* =======================================================
     EMAIL MARKETING
  ======================================================== */

  {
    id: 10,
    title:
      "Email Campaign Support",
    category:
      "Email Marketing",
    platform:
      "GoHighLevel",
    description:
      "Marketing email preparation, campaign organization, formatting, and follow-up support.",
    href:
      "/work/email-marketing",
    website:
      null,
    previewImage:
      null,
    icon:
      Mail,
    tags: [
      "Email",
      "Campaigns",
      "Follow-Up",
    ],
  },

  {
    id: 11,
    title:
      "Newsletter Support",
    category:
      "Email Marketing",
    platform:
      "Mailchimp",
    description:
      "Newsletter preparation and campaign formatting for clear branded communication.",
    href:
      "/work/email-marketing",
    website:
      null,
    previewImage:
      null,
    icon:
      Mail,
    tags: [
      "Newsletter",
      "Mailchimp",
      "Marketing",
    ],
  },

  /* =======================================================
     AUTOMATION & OPERATIONS
  ======================================================== */

  {
    id: 12,
    title:
      "CRM Workflow Automation",
    category:
      "Automation & Operations",
    platform:
      "GoHighLevel",
    description:
      "Workflow setup, contacts, tags, automated follow-up, campaigns, and CRM organization.",
    href:
      "/work/gohighlevel",
    website:
      null,
    previewImage:
      null,
    icon:
      Workflow,
    tags: [
      "Automation",
      "CRM",
      "Workflows",
    ],
  },

  {
    id: 13,
    title:
      "Digital Operations Support",
    category:
      "Automation & Operations",
    platform:
      "Outlook",
    description:
      "Calendar coordination, communication, scheduling, documentation, and digital business support.",
    href:
      "/work/virtual-assistance",
    website:
      null,
    previewImage:
      null,
    icon:
      BriefcaseBusiness,
    tags: [
      "Operations",
      "Scheduling",
      "Administration",
    ],
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Social Media",
  "Graphic Design",
  "Video Editing",
  "Funnels & Websites",
  "Email Marketing",
  "Automation & Operations",
];

/* =========================================================
   FULL WEBSITE IMAGE PREVIEW
========================================================= */

function ImageProjectPreview({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="relative w-full overflow-hidden bg-[#050505]">
      {/* ===================================================
          FULL SCREENSHOT

          No object-cover.
          No forced crop.
          Full uploaded screenshot remains visible.
      ==================================================== */}

      <motion.img
        src={image}
        alt={`${title} website preview`}
        loading="lazy"
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          block
          h-auto
          w-full
          object-contain
        "
      />

      {/* BOTTOM FADE */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/25 to-transparent" />

      {/* WEBSITE PREVIEW BADGE */}

      <div className="pointer-events-none absolute bottom-4 left-4">
        <span
          className="
            rounded-full
            border
            border-white/20
            bg-black/65
            px-3 py-2
            text-[7px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-white
            backdrop-blur-md
          "
        >
          Website Preview
        </span>
      </div>

      {/* EXTERNAL LINK INDICATOR */}

      <div
        className="
          pointer-events-none
          absolute
          right-4
          top-4
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/60
          text-white
          backdrop-blur-md
        "
      >
        <ArrowUpRight
          size={14}
        />
      </div>
    </div>
  );
}

/* =========================================================
   PLACEHOLDER PREVIEW
========================================================= */

function StaticProjectPreview({
  index,
  Icon,
}: {
  index: number;
  Icon: LucideIcon;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#E6ECF4]">
      {/* GRID */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(120,140,165,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(120,140,165,0.09)_1px,transparent_1px)]
          bg-size-[34px_34px]
        "
      />

      {/* NUMBER */}

      <span
        className="
          font-(family-name:--font-display)
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-7xl
          font-semibold
          tracking-tighter
          text-[#AFBBCB]/30
        "
      >
        {String(
          index + 1,
        ).padStart(
          2,
          "0",
        )}
      </span>

      {/* LABEL */}

      <div
        className="
          absolute
          bottom-5
          left-5
          flex
          items-center
          gap-2
          rounded-full
          border
          border-[#CBD5E1]
          bg-white/90
          px-3
          py-2
          backdrop-blur-md
        "
      >
        <Icon
          size={11}
          className="text-[#4F8CFF]"
        />

        <span className="text-[7px] font-semibold uppercase tracking-[0.14em] text-[#667085]">
          Project Preview
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon =
    project.icon;

  const destination =
    project.website ||
    project.href;

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.97,
      }}
      transition={{
        duration: 0.4,
      }}
      className="group h-full"
    >
      <Link
        href={destination}
        target={
          project.website
            ? "_blank"
            : undefined
        }
        rel={
          project.website
            ? "noopener noreferrer"
            : undefined
        }
        className="block h-full"
      >
        <div
          className="
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-4xl
            border
            border-[#D8E0EA]
            bg-white
            p-3
            shadow-[0_12px_40px_rgba(15,23,42,0.04)]
            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-[#4F8CFF]/40
            hover:shadow-[0_24px_65px_rgba(15,23,42,0.10)]
          "
        >
          {/* =================================================
              PROJECT PREVIEW
          ================================================= */}

          {project.previewImage ? (
            <div className="overflow-hidden rounded-3xl">
              <ImageProjectPreview
                image={
                  project.previewImage
                }
                title={
                  project.title
                }
              />
            </div>
          ) : (
            <div className="relative aspect-16/10 overflow-hidden rounded-3xl bg-[#E7ECF3]">
              <StaticProjectPreview
                index={
                  index
                }
                Icon={
                  Icon
                }
              />
            </div>
          )}

          {/* =================================================
              CARD CONTENT
          ================================================= */}

          <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
            {/* PLATFORM */}

            <div>
              <span
                className="
                  rounded-full
                  bg-[#EEF4FF]
                  px-3
                  py-1.5
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#4F8CFF]
                "
              >
                {
                  project.platform
                }
              </span>
            </div>

            {/* CATEGORY */}

            <p
              className="
                mt-5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#98A2B3]
              "
            >
              {
                project.category
              }
            </p>

            {/* TITLE */}

            <div className="mt-2 flex items-start justify-between gap-4">
              <h3
                className="
                  font-(family-name:--font-display)
                  text-[25px]
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-[#101828]
                "
              >
                {
                  project.title
                }
              </h3>

              <ArrowUpRight
                size={17}
                className="
                  mt-1
                  shrink-0
                  text-[#98A2B3]
                  transition-all
                  duration-300

                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-[#4F8CFF]
                "
              />
            </div>

            {/* DESCRIPTION */}

            <p className="mt-4 text-sm leading-7 text-[#667085]">
              {
                project.description
              }
            </p>

            {/* TAGS */}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map(
                (
                  tag,
                ) => (
                  <span
                    key={
                      tag
                    }
                    className="
                      rounded-lg
                      bg-[#F2F4F7]
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-medium
                      text-[#667085]
                    "
                  >
                    {
                      tag
                    }
                  </span>
                ),
              )}
            </div>

            {/* BOTTOM */}

            <div className="mt-auto pt-7">
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[#E4E7EC]
                  pt-5
                "
              >
                <span className="text-xs font-semibold text-[#344054]">
                  {project.website
                    ? "Visit Live Website"
                    : "View Project"}
                </span>

                <ArrowUpRight
                  size={14}
                  className="text-[#4F8CFF]"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* =========================================================
   PORTFOLIO PAGE
========================================================= */

export default function PortfolioPage() {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState(
    "All",
  );

  /* =======================================================
     PORTFOLIO HEADER STATE
  ======================================================== */

  const [
    headerHidden,
    setHeaderHidden,
  ] = useState(
    false,
  );

  const lastScrollY =
    useRef(0);

  const ticking =
    useRef(
      false,
    );

  const contentRef =
    useRef<HTMLElement>(
      null,
    );

  const contentStartY =
    useRef(
      Number.POSITIVE_INFINITY,
    );

  /* =======================================================
     MEASURE CONTENT
  ======================================================== */

  useEffect(() => {
    const measure =
      () => {
        if (
          !contentRef.current
        ) {
          return;
        }

        contentStartY.current =
          contentRef.current.getBoundingClientRect()
            .top +
          window.scrollY;
      };

    const frame =
      window.requestAnimationFrame(
        measure,
      );

    window.addEventListener(
      "resize",
      measure,
    );

    return () => {
      window.cancelAnimationFrame(
        frame,
      );

      window.removeEventListener(
        "resize",
        measure,
      );
    };
  }, []);

  /* =======================================================
     PORTFOLIO HEADER BEHAVIOR

     SCROLL DOWN = HIDE
     SCROLL UP = SHOW
  ======================================================== */

  useEffect(() => {
    lastScrollY.current =
      window.scrollY;

    const HEADER_HEIGHT =
      88;

    const THRESHOLD =
      6;

    const handleScroll =
      () => {
        if (
          ticking.current
        ) {
          return;
        }

        ticking.current =
          true;

        window.requestAnimationFrame(
          () => {
            const current =
              Math.max(
                window.scrollY,
                0,
              );

            const difference =
              current -
              lastScrollY.current;

            const start =
              Math.max(
                contentStartY.current -
                  HEADER_HEIGHT,
                0,
              );

            /* HERO */

            if (
              current <
              start
            ) {
              setHeaderHidden(
                false,
              );
            }

            /* SCROLL DOWN */

            else if (
              difference >
              THRESHOLD
            ) {
              setHeaderHidden(
                true,
              );
            }

            /* SCROLL UP */

            else if (
              difference <
              -THRESHOLD
            ) {
              setHeaderHidden(
                false,
              );
            }

            lastScrollY.current =
              current;

            ticking.current =
              false;
          },
        );
      };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  /* =======================================================
     FILTER PROJECTS
  ======================================================== */

  const filteredProjects =
    useMemo(() => {
      if (
        activeCategory ===
        "All"
      ) {
        return projects;
      }

      return projects.filter(
        (
          project,
        ) =>
          project.category ===
          activeCategory,
      );
    }, [
      activeCategory,
    ]);

  /* =======================================================
     CATEGORY COUNT
  ======================================================== */

  function categoryCount(
    category: string,
  ) {
    if (
      category ===
      "All"
    ) {
      return projects.length;
    }

    return projects.filter(
      (
        project,
      ) =>
        project.category ===
        category,
    ).length;
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-(family-name:--font-body) text-[#101828]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className={`
          [&>header]:transition-transform
          [&>header]:duration-300
          [&>header]:ease-[cubic-bezier(0.22,1,0.36,1)]
          [&>header]:will-change-transform

          ${
            headerHidden
              ? "[&>header]:-translate-y-full"
              : "[&>header]:translate-y-0"
          }
        `}
      >
        <SiteHeader />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#07111F]
          px-5
          pb-14
          pt-28
          text-white

          md:px-8
          md:pb-16
          md:pt-32

          lg:px-10
        "
      >
        {/* GRID */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-40

            bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        {/* GLOW */}

        <div className="pointer-events-none absolute -left-50 -top-30 h-150 w-150 rounded-full bg-[#4F8CFF]/10 blur-[190px]" />

        <div className="relative mx-auto max-w-360">
          {/* LABEL */}

          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
            Portfolio
          </p>

          {/* CONTENT */}

          <div
            className="
              mt-5
              grid
              gap-8

              lg:grid-cols-[1.1fr_0.55fr]
              lg:items-end
              lg:gap-20
            "
          >
            <h1
              className="
                font-(family-name:--font-display)
                max-w-5xl
                text-[clamp(3rem,5vw,5.5rem)]
                font-semibold
                leading-[0.92]
                tracking-tighter
              "
            >
              Projects I&apos;ve
              <br />

              <span className="text-[#79A8FF]">
                worked on.
              </span>
            </h1>

            <p className="max-w-lg text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8">
              Explore selected work across social
              media, content creation, GoHighLevel,
              email marketing, websites, funnels,
              and digital operations.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TWO COLUMN PORTFOLIO
      ====================================================== */}

      <section
        ref={
          contentRef
        }
        className="
          px-5
          py-12

          md:px-8
          md:py-16

          lg:px-10
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-360
            gap-10

            xl:grid-cols-[270px_minmax(0,1fr)]
            xl:gap-12
          "
        >
          {/* =================================================
              COLUMN 1
              FILTER
          ================================================= */}

          <aside
            className={`
              self-start

              xl:sticky

              transition-[top]
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                headerHidden
                  ? "xl:top-5"
                  : "xl:top-27"
              }
            `}
          >
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-[#D8E0EA]
                bg-white
                shadow-[0_10px_35px_rgba(15,23,42,0.04)]
              "
            >
              {/* FILTER TITLE */}

              <div className="border-b border-[#E4E7EC] px-5 py-5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#4F8CFF]">
                  Filter Work
                </p>

                <h2 className="font-(family-name:--font-display) mt-2 text-xl font-semibold tracking-tight">
                  Categories
                </h2>
              </div>

              {/* DESKTOP */}

              <div className="hidden p-3 xl:block">
                {categories.map(
                  (
                    category,
                  ) => {
                    const active =
                      activeCategory ===
                      category;

                    return (
                      <button
                        key={
                          category
                        }
                        type="button"
                        onClick={() =>
                          setActiveCategory(
                            category,
                          )
                        }
                        className={`
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3.5
                          transition-all
                          duration-300

                          ${
                            active
                              ? "bg-[#07111F] text-white"
                              : "text-[#667085] hover:bg-[#F5F7FA] hover:text-[#101828]"
                          }
                        `}
                      >
                        <span className="text-left text-[10px] font-semibold uppercase tracking-[0.09em]">
                          {category ===
                          "All"
                            ? "All Projects"
                            : category}
                        </span>

                        {/* COUNT */}

                        <span
                          className={`
                            flex
                            h-6
                            min-w-6
                            items-center
                            justify-center
                            rounded-lg
                            px-1.5
                            text-[9px]
                            font-semibold

                            ${
                              active
                                ? "bg-white/10 text-white/80"
                                : "bg-[#EEF2F7] text-[#98A2B3]"
                            }
                          `}
                        >
                          {categoryCount(
                            category,
                          )}
                        </span>
                      </button>
                    );
                  },
                )}
              </div>

              {/* MOBILE / TABLET */}

              <div className="p-4 xl:hidden">
                <select
                  value={
                    activeCategory
                  }
                  onChange={(
                    event,
                  ) =>
                    setActiveCategory(
                      event.target
                        .value,
                    )
                  }
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-[#D8E0EA]
                    bg-[#F8FAFC]
                    px-4
                    text-sm
                    font-semibold
                    text-[#344054]
                    outline-none

                    focus:border-[#4F8CFF]
                    focus:ring-3
                    focus:ring-[#4F8CFF]/10
                  "
                >
                  {categories.map(
                    (
                      category,
                    ) => (
                      <option
                        key={
                          category
                        }
                        value={
                          category
                        }
                      >
                        {category ===
                        "All"
                          ? `All Projects (${projects.length})`
                          : `${category} (${categoryCount(
                              category,
                            )})`}
                      </option>
                    ),
                  )}
                </select>
              </div>
            </div>
          </aside>

          {/* =================================================
              COLUMN 2
              PROJECTS
          ================================================= */}

          <div className="min-w-0">
            {/* RESULTS HEADER */}

            <div
              className="
                mb-8
                flex
                flex-col
                gap-4
                border-b
                border-[#D8E0EA]
                pb-7

                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#4F8CFF]">
                  {activeCategory ===
                  "All"
                    ? "Portfolio"
                    : activeCategory}
                </p>

                <h2 className="font-(family-name:--font-display) mt-2 text-3xl font-semibold tracking-tight">
                  {activeCategory ===
                  "All"
                    ? "All Projects"
                    : activeCategory}
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-sm text-[#667085]">
                  Showing{" "}

                  <span className="font-semibold text-[#101828]">
                    {
                      filteredProjects.length
                    }
                  </span>{" "}

                  {filteredProjects.length ===
                  1
                    ? "project"
                    : "projects"}
                </p>

                {activeCategory !==
                  "All" && (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveCategory(
                        "All",
                      )
                    }
                    className="text-xs font-semibold text-[#4F8CFF] transition-opacity hover:opacity-60"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* =================================================
                CARDS — 2 PER ROW
            ================================================= */}

            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid gap-6 md:grid-cols-2"
              >
                {filteredProjects.map(
                  (
                    project,
                    index,
                  ) => (
                    <ProjectCard
                      key={
                        project.id
                      }
                      project={
                        project
                      }
                      index={
                        index
                      }
                    />
                  ),
                )}
              </motion.div>
            </AnimatePresence>

            {/* EMPTY */}

            {filteredProjects.length ===
              0 && (
              <div
                className="
                  flex
                  min-h-80
                  flex-col
                  items-center
                  justify-center
                  rounded-4xl
                  border
                  border-dashed
                  border-[#CBD5E1]
                  bg-white
                  p-8
                  text-center
                "
              >
                <Monitor
                  size={22}
                  className="text-[#4F8CFF]"
                />

                <h3 className="font-(family-name:--font-display) mt-5 text-2xl font-semibold">
                  No matching projects
                </h3>

                <p className="mt-3 text-sm text-[#667085]">
                  Try another category.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      "All",
                    )
                  }
                  className="mt-6 rounded-xl bg-[#07111F] px-5 py-3 text-xs font-semibold text-white"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <SiteFooter />
    </main>
  );
}