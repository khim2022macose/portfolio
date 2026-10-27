
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  X,
  Mail,
  Megaphone,
  Monitor,
  Palette,
  Rocket,
  Search,
  Share2,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/* =========================================================
   HERO TOOLS
========================================================= */

const mobileTools = [
  { name: "GoHighLevel", domain: "gohighlevel.com" },
  { name: "Canva", domain: "canva.com" },
  { name: "CapCut", domain: "capcut.com" },
  { name: "Metricool", domain: "metricool.com" },
  { name: "WordPress", domain: "wordpress.org" },
  { name: "Shopify", domain: "shopify.com" },
];

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
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute z-30 hidden xl:flex items-center justify-center gap-3 border border-[#4F8CFF]/40 bg-[#0B1728]/95 shadow-[0_14px_35px_rgba(0,0,0,0.28),0_0_20px_rgba(79,140,255,0.10)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] hover:border-[#79A8FF]/75 ${
        iconOnly
          ? "h-21 w-21 rounded-2xl"
          : "h-16 min-w-40 rounded-2xl px-4"
      } ${className}`}
    >
      <div
        className={`flex shrink-0 items-center justify-center ${
          iconOnly ? "h-11 w-11" : "h-8 w-8"
        }`}
      >
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
          alt={`${name} logo`}
          className="h-full w-full object-contain"
        />
      </div>

      {!iconOnly && (
        <span className="whitespace-nowrap text-xs font-semibold text-white">
          {name}
        </span>
      )}
    </motion.div>
  );
}

/* =========================================================
   WORK TYPES
========================================================= */

type WorkCard = {
  id: number;
  title: string;
  type: string;
  platform: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  href: string;
  external?: boolean;
  previewImage?: string;
  domain?: string;
};

type ServiceCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  filters: string[];
  works: WorkCard[];
};

/* =========================================================
   SERVICE CATEGORIES
========================================================= */

const serviceCategories: ServiceCategory[] = [
  {
    id: "social-content",
    label: "Social & Content",
    icon: Share2,
    filters: [
      "All",
      "Social Media",
      "Graphic Design",
      "Video Editing",
    ],
    works: [
      {
        id: 1,
        title: "Social Media Content Management",
        type: "Social Media",
        platform: "Content Management",
        description:
          "Planning and organizing branded social content for consistent publishing, communication, and audience engagement.",
        icon: Share2,
        tags: ["Content Planning", "Scheduling", "Publishing"],
        href: "/work/social-media",
      },
      {
        id: 2,
        title: "Social Content Calendar",
        type: "Social Media",
        platform: "Content Planning",
        description:
          "An organized content workflow for planning posts, captions, publishing schedules, and campaign priorities.",
        icon: Share2,
        tags: ["Content Calendar", "Planning", "Social Media"],
        href: "/work/social-media",
      },
      {
        id: 3,
        title: "Branded Social Graphics",
        type: "Graphic Design",
        platform: "Canva",
        description:
          "Branded visual content created for social media, promotions, educational posts, and digital campaigns.",
        icon: Palette,
        tags: ["Canva", "Branding", "Social Graphics"],
        href: "/work/graphic-design",
      },
      {
        id: 4,
        title: "Marketing Carousel Design",
        type: "Graphic Design",
        platform: "Canva",
        description:
          "Carousel-style marketing content designed to present information clearly while maintaining consistent branding.",
        icon: Palette,
        tags: ["Carousel", "Marketing", "Visual Design"],
        href: "/work/graphic-design",
      },
      {
        id: 5,
        title: "Short-Form Social Video",
        type: "Video Editing",
        platform: "CapCut",
        description:
          "Short-form vertical video content prepared for social platforms with captions, overlays, and clean visual pacing.",
        icon: Video,
        tags: ["Reels", "TikTok", "CapCut"],
        href: "/work/video-editing",
      },
      {
        id: 6,
        title: "Reels & Video Content",
        type: "Video Editing",
        platform: "CapCut",
        description:
          "Social video content designed for fast, clear communication across Reels, TikTok, and other vertical formats.",
        icon: Video,
        tags: ["Video Editing", "Captions", "Short Form"],
        href: "/work/video-editing",
      },
    ],
  },

  {
    id: "marketing-systems",
    label: "Marketing Systems",
    icon: Workflow,
    filters: ["All", "GoHighLevel", "Email Marketing"],
    works: [
      {
        id: 7,
        title: "CRM Workflow Automation",
        type: "GoHighLevel",
        platform: "GoHighLevel",
        description:
          "An organized CRM workflow designed to manage contacts, tags, automated follow-up, and customer communication.",
        icon: Workflow,
        tags: ["CRM", "Automation", "Workflows"],
        href: "/work/gohighlevel",
      },
      {
        id: 8,
        title: "Lead Follow-Up System",
        type: "GoHighLevel",
        platform: "GoHighLevel",
        description:
          "A structured follow-up process for managing leads, customer communication, and ongoing marketing activity.",
        icon: Workflow,
        tags: ["Follow-Up", "Leads", "CRM"],
        href: "/work/gohighlevel",
      },
      {
        id: 9,
        title: "Email Campaign Support",
        type: "Email Marketing",
        platform: "Email Marketing",
        description:
          "Campaign support for promotional emails, follow-ups, announcements, and organized customer communication.",
        icon: Mail,
        tags: ["Campaigns", "Email", "Follow-Up"],
        href: "/work/email-marketing",
      },
      {
        id: 10,
        title: "Newsletter Campaign",
        type: "Email Marketing",
        platform: "Mailchimp",
        description:
          "Branded newsletter communication prepared to keep audiences informed, engaged, and connected with the business.",
        icon: Mail,
        tags: ["Newsletter", "Mailchimp", "Marketing"],
        href: "/work/email-marketing",
      },
    ],
  },

  {
    id: "web-funnels",
    label: "Web & Funnels",
    icon: Monitor,
    filters: ["All", "GoHighLevel", "WordPress"],
    works: [
      {
        id: 11,
        title: "Double R Rentals",
        type: "GoHighLevel",
        platform: "GoHighLevel + AI Studio",
        description:
          "A premium car rental website designed to help customers explore available vehicles, understand rental options, and complete the booking process with a clear and professional experience.",
        icon: Monitor,
        tags: ["GoHighLevel", "AI Studio", "Car Rental"],
        href: "https://doublerrentals.net/",
        external: true,
        previewImage: "/images/double-r-rentals-preview.png",
        domain: "doublerrentals.net",
      },
      {
        id: 12,
        title: "The Clean Power Experts",
        type: "WordPress",
        platform: "WordPress + Elementor",
        description:
          "A clean-energy services website focused on helping homeowners explore energy-saving solutions, understand available services, and request a property energy-efficiency evaluation.",
        icon: Monitor,
        tags: ["WordPress", "Elementor", "HTML", "CSS"],
        href: "https://thecleanpowerexperts.com/",
        external: true,
        previewImage: "/images/clean-power-experts.png",
        domain: "thecleanpowerexperts.com",
      },
      {
        id: 13,
        title: "Prime-Time Budget Rides",
        type: "GoHighLevel",
        platform: "GoHighLevel Funnel",
        description:
          "A private car rental website focused on fast approvals, transparent pricing, flexible rental terms, and a simple booking experience for customers across Metro Detroit.",
        icon: Monitor,
        tags: ["GoHighLevel", "Funnel", "HTML", "CSS"],
        href: "https://primetimebudgetrides.com/",
        external: true,
        previewImage: "/images/prime-time-budget-rides.png",
        domain: "primetimebudgetrides.com",
      },
    ],
  },

  /* =====================================================
     OPERATIONS & GROWTH
  ===================================================== */

  {
    id: "operations-growth",
    label: "Operations & Growth",
    icon: BriefcaseBusiness,
    filters: [
      "All",
      "Virtual Support",
      "Lead Generation",
      "GHL Workflow",
    ],
    works: [
      {
        id: 14,
        title: "Digital Operations Support",
        type: "Virtual Support",
        platform: "Business Operations",
        description:
          "Organized administrative and digital support covering scheduling, communication, coordination, documentation, and day-to-day operations.",
        icon: BriefcaseBusiness,
        tags: ["Scheduling", "Operations", "Administration"],
        href: "/work/virtual-assistance",
      },
      {
        id: 15,
        title: "Executive Support Workflow",
        type: "Virtual Support",
        platform: "Business Support",
        description:
          "A structured workflow for managing calendars, communication, tasks, documentation, and ongoing executive support responsibilities.",
        icon: BriefcaseBusiness,
        tags: ["Calendar", "Coordination", "Support"],
        href: "/work/virtual-assistance",
      },
      {
        id: 16,
        title: "Lead Generation Support",
        type: "Lead Generation",
        platform: "Digital Marketing",
        description:
          "Marketing support focused on prospect organization, campaign materials, follow-up, and maintaining a clear lead-generation workflow.",
        icon: Megaphone,
        tags: ["Lead Generation", "Marketing", "Follow-Up"],
        href: "/services",
      },
      {
        id: 17,
        title: "GoHighLevel Workflow Automation",
        type: "GHL Workflow",
        platform: "GoHighLevel",
        description:
          "Custom GoHighLevel automation workflows designed to streamline lead management, automate customer follow-ups, organize CRM processes, and improve business efficiency through trigger-based actions and automated communication.",
        icon: Workflow,
        tags: [
          "GoHighLevel",
          "Workflow Automation",
          "CRM",
          "Lead Follow-Up",
        ],
        href: "/work/gohighlevel",
      },

      /* LIVE WEBINAR AUTOMATION */

      {
        id: 18,
        title: "Live Webinar Automation",
        type: "GHL Workflow",
        platform: "GoHighLevel",
        description:
          "Automatically manages Free and VIP webinar registrations with personalized confirmation emails, SMS reminders, and scheduled follow-ups. Keeps attendees engaged while promoting upgrades and coaching opportunities.",
        icon: Workflow,
        tags: [
          "GoHighLevel",
          "Webinar Automation",
          "Email & SMS",
          "VIP Registration",
        ],
        previewImage: "/images/Live-Webinar.png",
        href: "/work/gohighlevel",
      },

      /* DELETE BAD LIST AUTOMATION */

      {
        id: 19,
        title: "Delete Bad List Automation",
        type: "GHL Workflow",
        platform: "GoHighLevel",
        description:
          "Automatically identifies and removes invalid, bounced, spam, and unsubscribed contacts from your CRM. This workflow keeps your contact list clean, improves email deliverability, and protects your sender reputation.",
        icon: Workflow,
        tags: [
          "GoHighLevel",
          "CRM Cleanup",
          "Email Deliverability",
          "Contact Management",
        ],
        previewImage: "/images/delete-bad-list.png",
        href: "/work/gohighlevel",
      },
    ],
  },
];

/* =========================================================
   SKILLS & TOOLS
========================================================= */

const toolCategories = [
  {
    title: "Social & Content",
    description:
      "Tools for content creation, publishing, scheduling, and social media management.",
    tools: [
      { name: "Canva", domain: "canva.com" },
      { name: "CapCut", domain: "capcut.com" },
      { name: "Metricool", domain: "metricool.com" },
      { name: "Facebook", domain: "facebook.com" },
      { name: "Instagram", domain: "instagram.com" },
      { name: "LinkedIn", domain: "linkedin.com" },
      { name: "TikTok", domain: "tiktok.com" },
      { name: "Pinterest", domain: "pinterest.com" },
    ],
  },
  {
    title: "Marketing & CRM",
    description: "Platforms for email campaigns and customer marketing.",
    tools: [
      { name: "Mailchimp", domain: "mailchimp.com" },
      { name: "Klaviyo", domain: "klaviyo.com" },
    ],
  },
  {
    title: "Web & Funnels",
    description:
      "Platforms for websites, funnels, CRM, and online sales.",
    tools: [
      { name: "GoHighLevel", domain: "gohighlevel.com" },
      { name: "WordPress", domain: "wordpress.org" },
      { name: "ClickFunnels", domain: "clickfunnels.com" },
      { name: "Shopify", domain: "shopify.com" },
    ],
  },
  {
    title: "Business Operations",
    description:
      "Tools for scheduling, communication, coordination, and business administration.",
    tools: [
      { name: "Outlook", domain: "outlook.com" },
      { name: "Calendly", domain: "calendly.com" },
      {
        name: "QuickBooks Online",
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
      "Clarify the goal, audience, priorities, and what the project needs before anything is created.",
    icon: Search,
  },
  {
    title: "Plan",
    description:
      "Organize the workflow, timeline, content, tools, and required deliverables.",
    icon: CalendarDays,
  },
  {
    title: "Create",
    description:
      "Produce the creative assets, content, messaging, and materials needed for the project.",
    icon: Palette,
  },
  {
    title: "Build",
    description:
      "Implement the campaigns, pages, funnels, workflows, and digital systems.",
    icon: Workflow,
  },
  {
    title: "Review",
    description:
      "Check branding, functionality, messaging, links, layouts, and final details.",
    icon: Check,
  },
  {
    title: "Deliver",
    description:
      "Prepare the completed work for publishing, launch, implementation, or handoff.",
    icon: Rocket,
  },
];

/* =========================================================
   WORK PREVIEW
========================================================= */

function WorkPreview({
  work,
  index,
}: {
  work: WorkCard;
  index: number;
}) {
  if (work.previewImage) {
    return (
      <div className="relative overflow-hidden bg-[#E9EEF5]">
        <img
          src={work.previewImage}
          alt={`${work.title} preview`}
          className="block h-auto w-full object-contain"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#07111F]/50 to-transparent" />

        <div className="absolute left-4 top-4 rounded-lg border border-white/15 bg-[#07111F]/80 px-3 py-2 backdrop-blur-md">
          <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#79A8FF]">
            {work.type}
          </p>
        </div>
      </div>
    );
  }

  const Icon = work.icon;

  return (
    <div className="relative aspect-16/10 overflow-hidden bg-[#0D1826]">
      <div className="absolute inset-0 opacity-50 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-size-[32px_32px]" />

      <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[#4F8CFF]/20 blur-[80px]" />

      <span className="font-(family-name:--font-display) absolute -bottom-8 right-0 text-[120px] font-semibold leading-none tracking-tighter text-white/5">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-[#79A8FF] backdrop-blur-md">
        <Icon size={28} strokeWidth={1.4} />
      </div>

      <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
        <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#79A8FF]">
          {work.type}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   WORK CARD
   ONLY GHL WORKFLOW IMAGES OPEN IN A POPUP
========================================================= */

type WorkflowPreview = {
  src: string;
  title: string;
};

function WorkCardItem({
  work,
  index,
  onOpenImage,
}: {
  work: WorkCard;
  index: number;
  onOpenImage: (preview: WorkflowPreview) => void;
}) {
  const isGHLWorkflowImage =
    work.type === "GHL Workflow" &&
    Boolean(work.previewImage);

  const content = (
    <>
      <WorkPreview work={work} index={index} />

      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[#98A2B3]">
            {work.platform}
          </p>

          <ArrowUpRight
            size={15}
            className="text-[#98A2B3] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#4F8CFF]"
          />
        </div>

        <h3 className="font-(family-name:--font-display) mt-4 text-2xl font-semibold leading-tight tracking-tight text-[#101828]">
          {work.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#667085]">
          {work.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[#D8E0EA] bg-[#F8FAFC] px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#667085]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 border-t border-[#E4E7EC] pt-5">
          <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#4F8CFF]">
            {work.external && !isGHLWorkflowImage
              ? "Visit Site"
              : "View Work"}

            <ArrowUpRight size={12} />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-3xl border border-[#D8E0EA] bg-white shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#4F8CFF]/35 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]"
    >
      {isGHLWorkflowImage && work.previewImage ? (
        <button
          type="button"
          onClick={() =>
            onOpenImage({
              src: work.previewImage!,
              title: work.title,
            })
          }
          aria-label={`View ${work.title} image`}
          className="block h-full w-full cursor-pointer text-left"
        >
          {content}
        </button>
      ) : (
        <Link
          href={work.href}
          target={work.external ? "_blank" : undefined}
          rel={
            work.external
              ? "noopener noreferrer"
              : undefined
          }
          className="block h-full"
        >
          {content}
        </Link>
      )}
    </motion.article>
  );
}

/* =========================================================
   RESPONSIVE GHL WORKFLOW IMAGE MODAL
========================================================= */

function WorkflowImageModal({
  preview,
  onClose,
}: {
  preview: WorkflowPreview | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!preview) return;

    const previousFocus =
      document.activeElement as HTMLElement | null;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [preview, onClose]);

  if (!preview) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020817]/90 p-2 backdrop-blur-md sm:p-5"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={`${preview.title} image preview`}
        className="flex max-h-[calc(100dvh-16px)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#4F8CFF]/30 bg-[#07111F] shadow-[0_25px_100px_rgba(0,0,0,0.7)] sm:max-h-[calc(100dvh-40px)]"
      >
        {/* MODAL HEADER */}

        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-3 py-3 sm:px-5 sm:py-4">
          <h2 className="min-w-0 truncate text-sm font-semibold text-white sm:text-lg">
            {preview.title}
          </h2>

          {/* CLOSE BUTTON */}

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:bg-[#4F8CFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#79A8FF]"
          >
            <X size={22} />
          </button>
        </header>

        {/* RESPONSIVE SCROLLABLE IMAGE */}

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-2 sm:p-5">
          <img
            src={preview.src}
            alt={`${preview.title} GoHighLevel automation workflow`}
            className="mx-auto block h-auto w-full max-w-[1200px] rounded-lg object-contain"
          />
        </div>
      </section>
    </div>,
    document.body
  );
}

/* =========================================================
   HOMEPAGE HERO
========================================================= */

function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] px-5 pb-24 pt-36 text-white md:px-8 md:pb-28 md:pt-40 lg:px-10">
      {/* BACKGROUND GRID */}

      <div className="pointer-events-none absolute inset-0 opacity-45 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-size-[72px_72px]" />

      {/* BACKGROUND GLOWS */}

      <div className="pointer-events-none absolute -left-60 -top-40 h-175 w-175 rounded-full bg-[#4F8CFF]/10 blur-[180px]" />

      <div className="pointer-events-none absolute -bottom-60 right-[-10%] h-150 w-150 rounded-full bg-[#79A8FF]/6 blur-[170px]" />

      <div className="relative mx-auto grid max-w-360 gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center xl:gap-20">
        {/* HERO LEFT */}

        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[#4F8CFF]/20 bg-[#4F8CFF]/8 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#79A8FF]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#B8D2FF]">
                About Khim
              </span>
            </div>
          </motion.div>

          {/* TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="font-(family-name:--font-display) mt-8 max-w-4xl text-[clamp(3.2rem,5.3vw,6rem)] font-semibold leading-[0.92] tracking-tighter"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.12,
              duration: 0.55,
            }}
            className="mt-8 max-w-2xl text-base leading-8 text-[#A8B3C4] md:text-lg md:leading-9"
          >
            I support businesses with social media,
            content creation, GoHighLevel, email marketing,
            websites, funnels, and digital operations —
            combining creative work with organized systems
            that help projects move forward.
          </motion.p>

          {/* ACTION BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.55,
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="#services"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#07111F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4F8CFF] hover:text-white"
            >
              Explore My Work

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#79A8FF]/40 hover:bg-white/10"
            >
              Get in Touch

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* HERO RIGHT */}

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
          className="relative mx-auto w-full max-w-145 lg:mx-0 lg:ml-auto"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F8CFF]/10 blur-[90px]" />

          {/* PORTRAIT */}

          <div className="relative z-20 mx-auto w-full max-w-110">
            <div className="pointer-events-none absolute -inset-3 rounded-[34px] border border-[#4F8CFF]/14" />

            <div className="group relative overflow-hidden rounded-[30px] border border-[#4F8CFF]/18 bg-[#0D1826] p-1.5 shadow-[0_25px_70px_rgba(0,0,0,0.32)]">
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-[25px] bg-[#132033]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(79,140,255,0.14),transparent_58%)]" />

                <Image
                  src="/images/Headshot.png"
                  alt="Khimberlie D. Macose"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="relative z-10 object-cover object-top transition-transform duration-700 group-hover:scale-[1.012]"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-linear-to-t from-[#07111F]/18 to-transparent" />
              </div>
            </div>
          </div>

          {/* FLOATING LOGOS */}

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

          {/* MOBILE / TABLET TOOLS */}

          <div className="relative z-30 mx-auto mt-6 grid max-w-110 grid-cols-2 gap-3 sm:grid-cols-3 xl:hidden">
            {mobileTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                className="flex min-h-17 items-center gap-2.5 rounded-xl border border-[#4F8CFF]/20 bg-[#0D1826] px-3 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.16)]"
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   HOMEPAGE
========================================================= */

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState(
    serviceCategories[0].id
  );

  const [activeFilter, setActiveFilter] = useState("All");

  const [selectedPreview, setSelectedPreview] =
    useState<WorkflowPreview | null>(null);

  const closePreview = useCallback(
    () => setSelectedPreview(null),
    []
  );

  const selectedCategory = useMemo(
    () =>
      serviceCategories.find(
        (category) => category.id === activeCategory
      ) ?? serviceCategories[0],
    [activeCategory]
  );

  const filteredWorks = useMemo(
    () =>
      activeFilter === "All"
        ? selectedCategory.works
        : selectedCategory.works.filter(
            (work) => work.type === activeFilter
          ),
    [selectedCategory, activeFilter]
  );

  function changeCategory(category: ServiceCategory) {
    setActiveCategory(category.id);
    setActiveFilter("All");
  }

  return (
    <main className="min-h-screen bg-white font-(family-name:--font-body) text-[#101828] selection:bg-[#4F8CFF] selection:text-white">
      <SiteHeader />

      <HomeHero />

      {/* =====================================================
          SERVICES & WORK
      ====================================================== */}

      <section
        id="services"
        className="relative scroll-mt-20 overflow-hidden bg-[#F8FAFC] px-5 py-28 md:px-8 md:py-40 lg:px-10"
      >
        {/* BACKGROUND GLOWS */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#4F8CFF]/6 blur-[160px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-[#79A8FF]/5 blur-[150px]" />

        <div className="relative mx-auto max-w-360">
          {/* SECTION HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center">
              <div className="flex items-center gap-3 rounded-full border border-[#4F8CFF]/15 bg-[#EEF4FF] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4F8CFF]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#4F8CFF]">
                  Services & Work
                </span>
              </div>
            </div>

            <h2 className="font-(family-name:--font-display) mx-auto mt-7 max-w-4xl text-[clamp(2.8rem,4.5vw,4.9rem)] font-semibold leading-[0.96] tracking-tighter">
              Explore work by{" "}
              <span className="text-[#4F8CFF]">
                category.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#667085] md:text-base md:leading-8">
              Select a service category to explore related
              projects and digital work.
            </p>
          </motion.div>

          {/* CATEGORY BAR */}

          <div className="mx-auto mt-14 max-w-6xl overflow-x-auto pb-2">
            <div className="flex min-w-max items-center gap-1 rounded-3xl border border-[#D8E0EA] bg-white p-2 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                const active =
                  activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => changeCategory(category)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                      active
                        ? "bg-[#07111F] text-white shadow-[0_8px_25px_rgba(7,17,31,0.15)]"
                        : "text-[#667085] hover:bg-[#F8FAFC] hover:text-[#101828]"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        active
                          ? "bg-[#4F8CFF] text-white"
                          : "bg-[#EEF4FF] text-[#4F8CFF]"
                      }`}
                    >
                      <Icon size={16} />
                    </span>

                    <span className="text-xs font-semibold">
                      {category.label}
                    </span>

                    <span
                      className={`flex h-6 min-w-6 items-center justify-center rounded-lg px-1.5 text-[8px] font-semibold ${
                        active
                          ? "bg-white/10 text-white/70"
                          : "bg-[#EEF2F7] text-[#98A2B3]"
                      }`}
                    >
                      {category.works.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FILTER BUTTONS */}

          <motion.div
            key={selectedCategory.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {selectedCategory.filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl border px-4 py-3 text-[8px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-[#4F8CFF] bg-[#07111F] text-white shadow-[0_6px_20px_rgba(79,140,255,0.15)]"
                    : "border-[#D8E0EA] bg-white text-[#667085] hover:border-[#4F8CFF]/40 hover:text-[#4F8CFF]"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* PROJECT CARDS */}

          <motion.div
            layout
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredWorks.map((work, index) => (
              <WorkCardItem
                key={work.id}
                work={work}
                index={index}
                onOpenImage={setSelectedPreview}
              />
            ))}
          </motion.div>

          {/* EXPLORE ALL SERVICES */}

          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#07111F] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4F8CFF]"
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

      {/* =====================================================
          SKILLS & TOOLS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-28 md:px-8 md:py-40 lg:px-10">
        <div className="mx-auto max-w-360">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-end lg:gap-20"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#4F8CFF]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                  Skills & Tools
                </p>
              </div>

              <h2 className="font-(family-name:--font-display) mt-6 max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
                Tools behind the{" "}
                <span className="text-[#4F8CFF]">
                  work.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#667085] md:text-base md:leading-8 lg:justify-self-end">
              A practical stack used across content,
              marketing, websites, funnels, communication,
              and digital operations.
            </p>
          </motion.div>

          {/* TOOL GROUPS */}

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {toolCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="rounded-4xl border border-[#D8E0EA] bg-[#F8FAFC] p-6 transition-all duration-300 hover:border-[#4F8CFF]/30 hover:bg-white hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-8"
              >
                <h3 className="font-(family-name:--font-display) text-2xl font-semibold tracking-tight text-[#101828]">
                  {category.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#667085]">
                  {category.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2.5 rounded-xl border border-[#E4E7EC] bg-white px-3.5 py-2.5 shadow-[0_5px_15px_rgba(15,23,42,0.025)]"
                    >
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`}
                        alt=""
                        className="h-5 w-5 object-contain"
                      />

                      <span className="text-xs font-semibold text-[#475467]">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
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
        <div className="pointer-events-none absolute -left-40 top-20 h-125 w-125 rounded-full bg-[#4F8CFF]/6 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-[#79A8FF]/6 blur-[150px]" />

        <div className="relative mx-auto max-w-360">
          {/* PROCESS HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-[0.28fr_1fr] lg:gap-12"
          >
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#4F8CFF]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                  Process
                </p>
              </div>
            </div>

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

          {/* PROCESS JOURNEY */}

          <div className="relative mt-28">
            {/* CURVED CONNECTOR */}

            <div className="pointer-events-none absolute left-[4%] right-[4%] top-1/2 hidden -translate-y-1/2 xl:block">
              <svg
                viewBox="0 0 1200 360"
                className="h-90 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 40 180 C 130 180, 135 65, 225 65 C 315 65, 315 295, 405 295 C 495 295, 495 65, 585 65 C 675 65, 675 295, 765 295 C 855 295, 855 65, 945 65 C 1035 65, 1040 180, 1160 180"
                  fill="none"
                  stroke="#D8E0EA"
                  strokeWidth="2"
                />

                <motion.path
                  d="M 40 180 C 130 180, 135 65, 225 65 C 315 65, 315 295, 405 295 C 495 295, 495 65, 585 65 C 675 65, 675 295, 765 295 C 855 295, 855 65, 945 65 C 1035 65, 1040 180, 1160 180"
                  fill="none"
                  stroke="#4F8CFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </div>

            {/* PROCESS CARDS */}

            <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-6 xl:gap-4">
              {process.map((step, index) => {
                const Icon = step.icon;
                const raised = index % 2 === 0;

                return (
                  <motion.article
                    key={step.title}
                    initial={{
                      opacity: 0,
                      y: raised ? 35 : -35,
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
                      delay: index * 0.09,
                    }}
                    className={`group relative ${
                      raised
                        ? "xl:-translate-y-14"
                        : "xl:translate-y-14"
                    }`}
                  >
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
                      <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-[#4F8CFF] transition-transform duration-500 group-hover:scale-x-100" />

                      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#4F8CFF]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#4F8CFF]/12" />

                      <div className="relative">
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

                        <h3 className="font-(family-name:--font-display) mt-8 text-2xl font-semibold tracking-tight text-[#101828]">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-[#667085]">
                          {step.description}
                        </p>
                      </div>

                      {/* PULSE */}

                      <motion.span
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.15,
                        }}
                        className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-[#4F8CFF]"
                      />
                    </motion.div>

                    {/* MOBILE CONNECTOR */}

                    {index < process.length - 1 && (
                      <div className="flex justify-center py-3 xl:hidden">
                        <motion.div
                          animate={{
                            y: [0, 5, 0],
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
              })}
            </div>

            {/* STRUCTURED WORKFLOW BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative mx-auto mt-16 flex w-fit items-center gap-3 rounded-full border border-[#D8E0EA] bg-white px-5 py-3 shadow-[0_8px_25px_rgba(15,23,42,0.05)] xl:mt-24"
            >
              <span className="relative flex h-2.5 w-2.5">
                <motion.span
                  animate={{
                    scale: [1, 1.9, 1],
                    opacity: [0.45, 0, 0.45],
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
          TESTIMONIALS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-28 md:px-8 md:py-36 lg:px-10">
        <div className="mx-auto max-w-360">
          <motion.div
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
            }}
            transition={{
              duration: 0.55,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#4F8CFF]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                Testimonials
              </p>
            </div>

            <h2 className="font-(family-name:--font-display) mt-6 max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">
              Client feedback, when{" "}
              <span className="text-[#4F8CFF]">
                verified.
              </span>
            </h2>
          </motion.div>

          {/* PLACEHOLDERS */}

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {["01", "02", "03"].map((number) => (
              <div
                key={number}
                className="relative min-h-72 overflow-hidden rounded-4xl border border-[#D8E0EA] bg-[#F8FAFC] p-7"
              >
                <span className="font-(family-name:--font-display) text-sm font-semibold text-[#4F8CFF]">
                  {number}
                </span>

                <p className="font-(family-name:--font-display) mt-14 text-xl font-semibold tracking-tight text-[#101828]">
                  Verified feedback coming soon.
                </p>

                <p className="mt-4 text-sm leading-7 text-[#667085]">
                  Placeholder testimonial content —
                  replace with verified feedback before
                  publishing.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#07111F] px-5 py-28 text-white md:px-8 md:py-36 lg:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-size-[72px_72px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F8CFF]/10 blur-[180px]" />

        <div className="relative mx-auto grid max-w-360 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#79A8FF]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
                Start a Project
              </p>
            </div>

            <h2 className="font-(family-name:--font-display) mt-6 max-w-4xl text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-tighter">
              Need support with your next{" "}
              <span className="text-[#79A8FF]">
                digital project?
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8">
              Let&apos;s turn the work into a clear,
              organized, and practical plan.
            </p>
          </div>

          <div>
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#07111F] transition-transform duration-300 hover:-translate-y-1"
            >
              Start a Project

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <SiteFooter />

      {/* GHL WORKFLOW IMAGE POPUP */}

      <WorkflowImageModal
        preview={selectedPreview}
        onClose={closePreview}
      />
    </main>
  );
}
