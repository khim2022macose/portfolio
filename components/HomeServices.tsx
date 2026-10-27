"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  Megaphone,
  Monitor,
  Palette,
  Share2,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type Service = {
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

type ServiceGroup = {
  id: string;
  label: string;
  count: number;
  description: string;
  icon: LucideIcon;
  services: Service[];
};

/* =========================================================
   SERVICE GROUPS

   Structure inspired by AdamStudio Selected Work:
   - primary disciplines
   - count
   - secondary filters
   - related cards
========================================================= */

const serviceGroups: ServiceGroup[] = [
  {
    id: "content",
    label: "Social & Content",
    count: 3,
    description:
      "Content creation, publishing, design, and short-form media for digital channels.",
    icon: Share2,
    services: [
      {
        title: "Social Media Management",
        shortTitle: "Social Media",
        description:
          "Planning, scheduling, publishing, captions, content calendars, and consistent social media support.",
        icon: Share2,
        href: "/work/social-media",
      },
      {
        title: "Graphic Design & Content Creation",
        shortTitle: "Graphic Design",
        description:
          "Branded social graphics, carousels, promotional content, templates, and marketing visuals.",
        icon: Palette,
        href: "/work/graphic-design",
      },
      {
        title: "Short-Form Video Editing",
        shortTitle: "Video Editing",
        description:
          "Reels, TikTok content, captions, overlays, vertical formatting, and social-ready video edits.",
        icon: Video,
        href: "/work/video-editing",
      },
    ],
  },

  {
    id: "marketing",
    label: "Marketing Systems",
    count: 2,
    description:
      "CRM, automation, campaigns, email communication, and lead follow-up systems.",
    icon: Workflow,
    services: [
      {
        title: "GoHighLevel Marketing Operations",
        shortTitle: "GoHighLevel",
        description:
          "Funnels, workflows, contacts, tags, forms, scheduling, campaigns, and CRM follow-up.",
        icon: Workflow,
        href: "/work/gohighlevel",
      },
      {
        title: "Email Marketing",
        shortTitle: "Email Marketing",
        description:
          "Newsletters, promotional campaigns, follow-ups, lead nurturing, and email communication support.",
        icon: Mail,
        href: "/work/email-marketing",
      },
    ],
  },

  {
    id: "web",
    label: "Web & Funnels",
    count: 1,
    description:
      "Websites, landing pages, funnels, forms, and conversion-focused digital pages.",
    icon: Monitor,
    services: [
      {
        title: "Websites, Landing Pages & Funnels",
        shortTitle: "Web & Funnels",
        description:
          "Website updates, landing pages, funnels, lead forms, calls to action, and promotional pages.",
        icon: Monitor,
        href: "/portfolio",
      },
    ],
  },

  {
    id: "operations",
    label: "Operations & Growth",
    count: 2,
    description:
      "Administrative support, coordination, campaign execution, and lead-generation operations.",
    icon: BriefcaseBusiness,
    services: [
      {
        title: "Virtual & Executive Support",
        shortTitle: "Virtual Support",
        description:
          "Scheduling, communication, coordination, documentation, calendars, and administrative support.",
        icon: BriefcaseBusiness,
        href: "/work/virtual-assistance",
      },
      {
        title: "Digital Marketing & Lead Generation",
        shortTitle: "Lead Generation",
        description:
          "Campaign support, promotional content, lead follow-up, coordination, and digital marketing execution.",
        icon: Megaphone,
        href: "/portfolio",
      },
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function HomeServices() {
  const [activeGroup, setActiveGroup] =
    useState(serviceGroups[0].id);

  const [activeService, setActiveService] =
    useState(serviceGroups[0].services[0].shortTitle);

  const selectedGroup = useMemo(
    () =>
      serviceGroups.find(
        (group) => group.id === activeGroup,
      ) ?? serviceGroups[0],
    [activeGroup],
  );

  const displayedServices = useMemo(() => {
    const selected =
      selectedGroup.services.find(
        (service) =>
          service.shortTitle === activeService,
      );

    return selected
      ? [selected]
      : selectedGroup.services;
  }, [
    selectedGroup,
    activeService,
  ]);

  function selectGroup(group: ServiceGroup) {
    setActiveGroup(group.id);

    setActiveService(
      group.services[0].shortTitle,
    );
  }

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8FAFC] px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#4F8CFF]/6 blur-[160px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-[#79A8FF]/5 blur-[150px]" />

      <div className="relative mx-auto max-w-360">
        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

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
          className="grid gap-10 lg:grid-cols-[1fr_0.48fr] lg:items-end lg:gap-20"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#4F8CFF]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                Services
              </p>
            </div>

            <h2 className="font-(family-name:--font-display) mt-6 max-w-4xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
              Digital support across{" "}

              <span className="text-[#4F8CFF]">
                content & systems.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-[#667085] md:text-base md:leading-8">
            Creative, marketing, technical, and
            operational support organized into focused
            service areas.
          </p>
        </motion.div>

        {/* =====================================================
            PRIMARY SERVICE DISCIPLINES

            Same structural idea as AdamStudio's:
            Web & GHL / Graphics / Video / etc.
        ====================================================== */}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {serviceGroups.map(
            (group, index) => {
              const Icon =
                group.icon;

              const active =
                group.id ===
                activeGroup;

              return (
                <motion.button
                  key={
                    group.id
                  }
                  type="button"
                  onClick={() =>
                    selectGroup(
                      group,
                    )
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
                    delay:
                      index *
                      0.06,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    p-5
                    text-left

                    transition-all
                    duration-500

                    ${
                      active
                        ? "border-[#4F8CFF] bg-[#07111F] text-white shadow-[0_20px_50px_rgba(7,17,31,0.16)]"
                        : "border-[#D8E0EA] bg-white text-[#101828] hover:-translate-y-1 hover:border-[#4F8CFF]/35 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
                    }
                  `}
                >
                  {/* =========================================
                      VISUAL PREVIEW AREA
                  ========================================== */}

                  <div
                    className={`
                      relative
                      aspect-16/9
                      overflow-hidden
                      rounded-2xl

                      ${
                        active
                          ? "bg-[#132033]"
                          : "bg-[#E9EEF5]"
                      }
                    `}
                  >
                    {/* GRID */}

                    <div
                      className={`
                        absolute inset-0

                        bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]
                        bg-size-[28px_28px]

                        ${
                          active
                            ? "opacity-40"
                            : "opacity-80"
                        }
                      `}
                    />

                    {/* LARGE NUMBER */}

                    <span
                      className={`
                        font-(family-name:--font-display)
                        absolute
                        -bottom-7
                        -right-2
                        text-[110px]
                        font-semibold
                        leading-none
                        tracking-tighter

                        ${
                          active
                            ? "text-white/4"
                            : "text-[#101828]/3"
                        }
                      `}
                    >
                      {String(
                        index +
                          1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    {/* ICON */}

                    <div
                      className={`
                        absolute
                        left-5
                        top-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border

                        ${
                          active
                            ? "border-white/10 bg-white/5 text-[#79A8FF]"
                            : "border-white/80 bg-white text-[#4F8CFF] shadow-[0_8px_25px_rgba(15,23,42,0.08)]"
                        }
                      `}
                    >
                      <Icon
                        size={19}
                      />
                    </div>

                    {/* COUNT */}

                    <div
                      className={`
                        absolute
                        bottom-4
                        left-5
                        flex
                        items-center
                        gap-2
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]

                        ${
                          active
                            ? "text-[#B8D2FF]"
                            : "text-[#667085]"
                        }
                      `}
                    >
                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full

                          ${
                            active
                              ? "bg-[#79A8FF]"
                              : "bg-[#4F8CFF]"
                          }
                        `}
                      />

                      {
                        group.count
                      }{" "}

                      {group.count ===
                      1
                        ? "Service"
                        : "Services"}
                    </div>
                  </div>

                  {/* =========================================
                      CATEGORY TEXT
                  ========================================== */}

                  <div className="pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-(family-name:--font-display) text-xl font-semibold tracking-tight">
                        {
                          group.label
                        }
                      </h3>

                      <ArrowUpRight
                        size={15}
                        className={`
                          mt-1
                          shrink-0
                          transition-transform
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1

                          ${
                            active
                              ? "text-[#79A8FF]"
                              : "text-[#98A2B3]"
                          }
                        `}
                      />
                    </div>

                    <p
                      className={`
                        mt-3
                        text-xs
                        leading-6

                        ${
                          active
                            ? "text-[#A8B3C4]"
                            : "text-[#667085]"
                        }
                      `}
                    >
                      {
                        group.description
                      }
                    </p>
                  </div>
                </motion.button>
              );
            },
          )}
        </div>

        {/* =====================================================
            SECONDARY SERVICE FILTERS

            Same idea as AdamStudio's:
            Funnels & Websites / GHL Workflows / etc.
        ====================================================== */}

        <div className="mt-8 border-y border-[#D8E0EA] py-5">
          <div className="flex flex-wrap items-center gap-2">
            {selectedGroup.services.map(
              (service) => {
                const active =
                  activeService ===
                  service.shortTitle;

                return (
                  <button
                    key={
                      service.shortTitle
                    }
                    type="button"
                    onClick={() =>
                      setActiveService(
                        service.shortTitle,
                      )
                    }
                    className={`
                      rounded-full
                      border
                      px-4
                      py-2.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.1em]

                      transition-all
                      duration-300

                      ${
                        active
                          ? "border-[#07111F] bg-[#07111F] text-white"
                          : "border-[#D8E0EA] bg-white text-[#667085] hover:border-[#4F8CFF]/35 hover:text-[#4F8CFF]"
                      }
                    `}
                  >
                    {
                      service.shortTitle
                    }
                  </button>
                );
              },
            )}
          </div>
        </div>

        {/* =====================================================
            SERVICE CONTENT CARDS
        ====================================================== */}

        <motion.div
          layout
          className="mt-8 grid gap-5 lg:grid-cols-2"
        >
          {displayedServices.map(
            (
              service,
              index,
            ) => {
              const Icon =
                service.icon;

              return (
                <motion.article
                  layout
                  key={
                    service.title
                  }
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    group
                    relative
                    min-h-95
                    overflow-hidden
                    rounded-4xl
                    border
                    border-[#D8E0EA]
                    bg-white
                    p-7

                    shadow-[0_12px_40px_rgba(15,23,42,0.04)]

                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[#4F8CFF]/40
                    hover:shadow-[0_20px_55px_rgba(79,140,255,0.09)]

                    md:p-8
                  "
                >
                  {/* =========================================
                      CARD NUMBER
                  ========================================== */}

                  <span className="font-(family-name:--font-display) pointer-events-none absolute -right-3 -top-7 text-[130px] font-semibold tracking-tighter text-[#101828]/2.5">
                    {String(
                      index +
                        1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  {/* =========================================
                      CARD BODY
                  ========================================== */}

                  <div className="relative flex h-full flex-col">
                    {/* ICON */}

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#4F8CFF]">
                      <Icon
                        size={19}
                      />
                    </div>

                    {/* TITLE */}

                    <h3 className="font-(family-name:--font-display) mt-8 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#101828]">
                      {
                        service.title
                      }
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#667085] md:text-[15px]">
                      {
                        service.description
                      }
                    </p>

                    {/* =========================================
                        ACTIONS
                    ========================================== */}

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-10">
                      <Link
                        href="/contact#contact-form"
                        className="
                          group/quote
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

                          hover:bg-[#4F8CFF]
                        "
                      >
                        Get a Quote

                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover/quote:-translate-y-0.5 group-hover/quote:translate-x-0.5"
                        />
                      </Link>

                      <Link
                        href={
                          service.href
                        }
                        className="
                          group/work
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

                          hover:border-[#4F8CFF]/40
                          hover:text-[#4F8CFF]
                        "
                      >
                        Explore Related Work

                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover/work:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            },
          )}
        </motion.div>

        {/* =====================================================
            EXPLORE ALL SERVICES
        ====================================================== */}

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-[#D8E0EA]
              bg-white
              px-6
              py-4
              text-sm
              font-semibold
              text-[#344054]

              shadow-[0_10px_30px_rgba(15,23,42,0.04)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[#4F8CFF]/40
              hover:text-[#4F8CFF]
            "
          >
            Explore All Services

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}