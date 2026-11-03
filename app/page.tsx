"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  Mail,
  Play,
  Megaphone,
  Monitor,
  Palette,
  Rocket,
  Search,
  Share2,
  Star,
  Quote,
  Video,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { createPortal } from "react-dom";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

/**
 * KHIM PORTFOLIO — app/page.tsx
 *
 * Image files should be placed in public/images, using the EXACT names below.
 * An asset in public/images/example.png is referenced as /images/example.png.
 *
 * All cards open an IN-PAGE, no-scroll media lightbox. Videos also
 * preview in the same lightbox using public/images/<real filename>.mp4.
 * No View Work button navigates to a different page.
 * Only projects with a configured preview image or video are listed.
 * Existing website, workflow, and profile image paths have been preserved.
 * Hero: /images/Headshot.png. About: /images/Khimberlie 2.png.
 */

type WorkCard = {
  id: number;
  title: string;
  type: string;
  platform: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  previewImage?: string;
  previewImages?: string[];
  // Local MP4/WebM files live alongside your existing screenshots in public/images.
  // Add only REAL filenames here; no sample URLs are loaded automatically.
  previewVideos?: { src: string; poster?: string; title?: string }[];
  domain?: string;
  website?: string;
};

type ServiceCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  filters: string[];
  works: WorkCard[];
};

/* =========================================================
   PORTFOLIO ITEMS — ALL SCREENSHOTS USE /public/images
   (Keep spaces, punctuation and capitalization in filenames.)
========================================================= */

const serviceCategories: ServiceCategory[] = [
  {
    id: "social-content",
    label: "Social & Content",
    icon: Share2,
    filters: ["All", "Social Media", "Graphic Design", "Video Editing"],
    works: [
      {
        id: 1,
        title: "Social Media Content Management",
        type: "Social Media",
        platform: "GoHighLevel Social Planner",
        description:
          "Created, prepared, and managed branded posts across social platforms, including post copy, media and publishing workflows.",
        icon: Share2,
        tags: ["Content Management", "Multi-Platform", "Publishing"],
        previewImage: "/images/social media post.png",
      },
      {
        id: 2,
        title: "Social Content Calendar",
        type: "Social Media",
        platform: "Social Media Scheduling",
        description:
          "Organized a multi-platform posting calendar, coordinated content schedules, and prepared posts for consistent publishing.",
        icon: CalendarDays,
        tags: ["Content Calendar", "Post Scheduling", "Planning"],
        previewImages: [
          "/images/social media calendar scheduling.png",
          "/images/scheduling.png",
        ],
      },
      {
        id: 3,
        title: "Branded Social Graphics",
        type: "Graphic Design",
        platform: "Canva",
        description:
          "Designed branded leadership graphics, promotional banners, thought-leadership content, and podcast marketing visuals.",
        icon: Palette,
        tags: ["Canva", "Branding", "Social Graphics"],
        previewImages: [
          "/images/_Static Post July 13, 2026.png",
          "/images/Banner (5).png",
          "/images/banner.png",
          "/images/PROMOTIONAL POST (1).png",
          "/images/static post.png",
        ],
      },
      {
        id: 4,
        title: "Marketing Carousel Design",
        type: "Graphic Design",
        platform: "Canva",
        description:
          "Created branded educational carousel slides with strong typography and a clear narrative for leadership audiences.",
        icon: Palette,
        tags: ["Carousel", "Marketing", "Visual Design"],
        previewImage: "/images/Carousel 1 Access Without Influence.png",
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
        previewVideos: [
          {
            src: "/images/REEL 5 — THE DOWNSTREAM EFFECT.mp4",
            title: "Reel 5 - The Downstream Effect",
          },
          {
            src: "/images/Carousel 5 Move the Room.mp4",
            title: "Carousel 5 - Move the Room",
          },
        ],
      },
    ],
  },
  {
    id: "marketing-systems",
    label: "Marketing Systems",
    icon: Workflow,
    filters: ["All", "GHL Workflow", "Email Marketing"],
    works: [
      {
        id: 9,
        title: "Email Campaign Support",
        type: "Email Marketing",
        platform: "GoHighLevel Email Marketing",
        description:
          "Managed email marketing campaigns, scheduled messages, and tracked sent newsletter campaigns through GoHighLevel.",
        icon: Mail,
        tags: ["GoHighLevel", "Email Campaigns", "Scheduling"],
        previewImage: "/images/email-marketing-campaign.png",
      },
      {
        id: 10,
        title: "Newsletter Campaign",
        type: "Email Marketing",
        platform: "LinkedIn Newsletter Promotion",
        description:
          "Prepared promotional content to build awareness of leadership newsletter articles and encourage audience engagement.",
        icon: Mail,
        tags: ["Newsletter", "LinkedIn", "Content Promotion"],
        previewImage: "/images/news letter.png",
      },
      {
        id: 18,
        title: "Live Webinar Automation",
        type: "GHL Workflow",
        platform: "GoHighLevel",
        description:
          "Automatically manages Free and VIP webinar registrations with personalized confirmation emails, SMS reminders, and scheduled follow-ups. Keeps attendees engaged while promoting upgrades and coaching opportunities.",
        icon: Workflow,
        tags: ["GoHighLevel", "Webinar Automation", "Email & SMS", "VIP Registration"],
        previewImage: "/images/Live-Webinar.png",
      },
      {
        id: 19,
        title: "Delete Bad List Automation",
        type: "GHL Workflow",
        platform: "GoHighLevel",
        description:
          "Automatically identifies and removes invalid, bounced, spam, and unsubscribed contacts from your CRM. This workflow keeps your contact list clean, improves email deliverability, and protects your sender reputation.",
        icon: Workflow,
        tags: ["GoHighLevel", "CRM Cleanup", "Email Deliverability", "Contact Management"],
        previewImage: "/images/delete-bad-list.png",
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
        website: "https://doublerrentals.net/",
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
        website: "https://thecleanpowerexperts.com/",
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
        website: "https://primetimebudgetrides.com/",
        previewImage: "/images/prime-time-budget-rides.png",
        domain: "primetimebudgetrides.com",
      },
    ],
  },
  {
    id: "operations-growth",
    label: "Operations & Growth",
    icon: BriefcaseBusiness,
    filters: ["All", "Virtual Support", "Lead Generation"],
    works: [
      {
        id: 14,
        title: "Digital Operations Support",
        type: "Virtual Support",
        platform: "Content & Digital Operations",
        description:
          "Managed digital publishing tasks, post preparation, scheduling, and cross-platform content coordination to support daily business operations.",
        icon: BriefcaseBusiness,
        tags: ["Digital Operations", "Scheduling", "Coordination"],
        previewImage: "/images/scheduling.png",
      },
      {
        id: 15,
        title: "Executive Support Workflow",
        type: "Virtual Support",
        platform: "Executive Presentation Support",
        description:
          "Prepared and organized executive retreat presentation materials, supporting leadership sessions, communication, and event coordination.",
        icon: BriefcaseBusiness,
        tags: ["Executive Support", "Presentations", "Canva"],
        previewImage: "/images/presentation.png",
      },
      {
        id: 16,
        title: "Lead Generation Support",
        type: "Lead Generation",
        platform: "GoHighLevel Webinar Funnel",
        description:
          "Supported lead capture and nurturing through webinar registration triggers, Free and VIP segmentation, email and SMS confirmations, and scheduled follow-ups.",
        icon: Megaphone,
        tags: ["Lead Generation", "Webinar", "Follow-Up"],
        previewImage: "/images/Live-Webinar.png",
      },
    ],
  },
];

const toolCategories = [
  {
    title: "Social & Content",
    description: "Tools for content creation, publishing, scheduling, and social media management.",
    tools: [
      { name: "Canva", domain: "canva.com" },
      { name: "CapCut", domain: "capcut.com" },
      { name: "Metricool", domain: "metricool.com" },
      { name: "Later", domain: "later.com" },
      { name: "Facebook", domain: "facebook.com" },
      { name: "Instagram", domain: "instagram.com" },
      { name: "LinkedIn", domain: "linkedin.com" },
      { name: "TikTok", domain: "tiktok.com" },
      { name: "YouTube", domain: "youtube.com" },
      { name: "Pinterest", domain: "pinterest.com" },
    ],
  },
  {
    title: "Web & Funnels",
    description: "Platforms for websites, funnels, CRM, and online sales.",
    tools: [
      { name: "GoHighLevel", domain: "gohighlevel.com" },
      { name: "WordPress", domain: "wordpress.org" },
      { name: "Shopify", domain: "shopify.com" },
    ],
  },
  {
    title: "Business Operations",
    description: "Tools for scheduling, communication, and day-to-day business administration.",
    tools: [
      { name: "Outlook", domain: "outlook.com" },
      { name: "Calendly", domain: "calendly.com" },
      { name: "QuickBooks Online", domain: "quickbooks.intuit.com" },
    ],
  },
  {
    title: "Team & Project Management",
    description: "Platforms for team communication, task tracking, and project coordination.",
    tools: [
      { name: "Slack", domain: "slack.com" },
      { name: "Trello", domain: "trello.com" },
      { name: "Asana", domain: "asana.com" },
      { name: "ClickUp", domain: "clickup.com" },
    ],
  },
];

const processSteps = [
  {
    title: "Understand",
    description: "Clarify the goal, audience, priorities, and what the project needs before anything is created.",
    icon: Search,
  },
  {
    title: "Plan",
    description: "Organize the workflow, timeline, content, tools, and required deliverables.",
    icon: CalendarDays,
  },
  {
    title: "Create",
    description: "Produce the creative assets, content, messaging, and materials needed for the project.",
    icon: Palette,
  },
  {
    title: "Build",
    description: "Implement the campaigns, pages, funnels, workflows, and digital systems.",
    icon: Workflow,
  },
  {
    title: "Review",
    description: "Check branding, functionality, messaging, links, layouts, and final details.",
    icon: Check,
  },
  {
    title: "Deliver",
    description: "Prepare the completed work for publishing, launch, implementation, or handoff.",
    icon: Rocket,
  },
];

function projectImages(work: WorkCard): string[] {
  if (work.previewImages?.length) return work.previewImages;
  return work.previewImage ? [work.previewImage] : [];
}

// Both still images and playable videos use the SAME no-scroll lightbox.
type PreviewMedia = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  title?: string;
};

function projectMedia(work: WorkCard): PreviewMedia[] {
  const photos: PreviewMedia[] = projectImages(work).map((src) => ({ kind: "image", src }));
  const clips: PreviewMedia[] = (work.previewVideos ?? [])
    .filter((clip) => Boolean(clip.src?.trim()))
    .map((clip) => ({ ...clip, kind: "video" as const }));
  return work.type === "Video Editing" ? [...clips, ...photos] : [...photos, ...clips];
}

/* A subtle pointer-following light for interactive project and review cards.
   CSS variables are updated directly, avoiding a React rerender per mouse move. */
function handleCardSpotlight(event: ReactPointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse") return;
  const box = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - box.left}px`);
  event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - box.top}px`);
}

/* =========================================================
   WORK CARD THUMBNAIL — IMAGE FITS WITHOUT CROPPING
========================================================= */

function WorkPreview({ work, index }: { work: WorkCard; index: number }) {
  const images = projectImages(work);
  const firstVideo = work.previewVideos?.find((clip) => clip.src?.trim());
  const Icon = work.icon;

  if (firstVideo && work.type === "Video Editing") {
    return (
      <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-[#0D1826]">
        <video
          src={firstVideo.src}
          poster={firstVideo.poster}
          preload="metadata"
          muted
          playsInline
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-[#07111F]/75 text-white backdrop-blur-md">
            <Play size={26} fill="currentColor" className="ml-1" />
          </span>
        </div>
        <span className="absolute left-4 top-4 rounded-lg bg-[#07111F]/85 px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-[#79A8FF]">Video Editing</span>
      </div>
    );
  }

  if (images.length) {
    return (
      <div className="relative flex aspect-16/10 items-center justify-center overflow-hidden bg-[#E9EEF5]">
        <img
          src={images[0]}
          alt={`${work.title} preview`}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#07111F]/35 to-transparent" />
        <div className="absolute left-4 top-4 rounded-lg border border-white/15 bg-[#07111F]/80 px-3 py-2 backdrop-blur-md">
          <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#79A8FF]">{work.type}</p>
        </div>
        {images.length > 1 && (
          <span className="absolute bottom-4 right-4 rounded-lg bg-[#07111F]/85 px-2.5 py-1.5 text-xs font-medium text-white">
            {images.length} images
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-16/10 overflow-hidden bg-[#0D1826]">
      <div className="absolute inset-0 opacity-50 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-size-[32px_32px]" />
      <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[#4F8CFF]/20 blur-[80px]" />
      <span className="absolute -bottom-8 right-0 text-[120px] font-semibold leading-none tracking-tighter text-white/5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-[#79A8FF] backdrop-blur-md">
        <Icon size={28} strokeWidth={1.4} />
      </div>
      <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#79A8FF]">{work.type}</p>
      </div>
    </div>
  );
}

function WorkCardItem({
  work,
  index,
  onOpen,
}: {
  work: WorkCard;
  index: number;
  onOpen: (work: WorkCard) => void;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={reduceMotion ? undefined : { y: -7, scale: 1.008 }}
      onPointerMove={handleCardSpotlight}
      transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : Math.min(index, 5) * 0.055, ease: [0.22, 1, 0.36, 1] }}
      className="group relative isolate overflow-hidden rounded-3xl border border-[#D8E0EA] bg-white shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-500 hover:border-[#4F8CFF]/35 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
        style={{ background: "radial-gradient(350px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(79,140,255,0.13), transparent 72%)" }}
      />
      <button
        type="button"
        onClick={() => onOpen(work)}
        aria-label={`Preview ${work.title} on this page`}
        className="block h-full w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#4F8CFF]"
      >
        <WorkPreview work={work} index={index} />
        <div className="p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#98A2B3]">{work.platform}</p>
            <ArrowUpRight size={15} className="shrink-0 text-[#98A2B3] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#4F8CFF]" />
          </div>
          <h3 className="font-(family-name:--font-display) mt-4 text-2xl font-semibold leading-tight tracking-tight text-[#101828]">{work.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#667085]">{work.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span key={tag} className="rounded-lg border border-[#D8E0EA] bg-[#F8FAFC] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#667085]">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-7 border-t border-[#E4E7EC] pt-5">
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4F8CFF]">
              View Work <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}

/* =========================================================
   VIEW WORK LIGHTBOX — FIT IMAGE TO VIEWPORT / NO SCROLL
   - Fullscreen dark overlay, matching the example layout
   - Every image is fully visible via object-contain
   - No scrolling, cropping, or navigation to other pages
   - Arrow keys, Escape, and touch swipe for image galleries
========================================================= */

function WorkModal({
  work,
  onClose,
}: {
  work: WorkCard | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [mediaError, setMediaError] = useState(false);
  const reduceMotion = useReducedMotion();
  const media = useMemo(() => (work ? projectMedia(work) : []), [work]);

  useEffect(() => {
    setMediaIndex(0);
    setMediaError(false);
  }, [work?.id]);

  const showMedia = useCallback(
    (nextIndex: number) => {
      if (media.length < 2) return;
      setMediaIndex((nextIndex + media.length) % media.length);
      setMediaError(false);
    },
    [media.length]
  );

  useEffect(() => {
    if (!work) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (
        (event.key === "ArrowLeft" || event.key === "ArrowRight") &&
        media.length > 1 &&
        !(event.target instanceof HTMLVideoElement)
      ) {
        // The native video player's arrow keys remain available for seeking.
        event.preventDefault();
        setMediaIndex((current) =>
          (current + (event.key === "ArrowRight" ? 1 : -1) + media.length) % media.length
        );
        setMediaError(false);
      } else if (event.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusable = Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], video[controls], [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [work, media.length, onClose]);

  if (!work || typeof document === "undefined") return null;

  const Icon = work.icon;
  const item = media[mediaIndex];
  const hasGallery = media.length > 1;

  return createPortal(
    <motion.section
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} preview`}
      className="fixed inset-0 z-9999 h-dvh w-screen overflow-hidden bg-[#040608]/95 text-white backdrop-blur-xl"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {/* Video AND image previews always fit in the available viewport without scroll. */}
      <div
        className="absolute inset-x-12 bottom-16 top-16 flex min-h-0 items-center justify-center sm:inset-x-20 sm:bottom-14 sm:top-14 lg:inset-x-24"
        onTouchStart={(event) => {
          // Native video gestures control playback; don't hijack them for carousel swipes.
          touchStartX.current = item?.kind === "video" ? null : (event.changedTouches[0]?.clientX ?? null);
        }}
        onTouchEnd={(event) => {
          const start = touchStartX.current;
          touchStartX.current = null;
          const finish = event.changedTouches[0]?.clientX;
          if (start === null || finish === undefined || !hasGallery) return;
          const distance = finish - start;
          if (Math.abs(distance) < 50) return;
          showMedia(mediaIndex + (distance < 0 ? 1 : -1));
        }}
        onTouchCancel={() => { touchStartX.current = null; }}
      >
        {item && !mediaError ? (
          item.kind === "video" ? (
            <motion.video
              key={`${work.id}-video-${mediaIndex}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.975 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.24 }}
              src={item.src}
              poster={item.poster}
              controls
              playsInline
              preload="metadata"
              onError={() => setMediaError(true)}
              aria-label={item.title ?? `${work.title}, video ${mediaIndex + 1} of ${media.length}`}
              className="block h-full w-full max-w-full object-contain drop-shadow-[0_20px_55px_rgba(0,0,0,0.45)]"
            />
          ) : (
            <motion.img
              key={`${work.id}-image-${mediaIndex}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.975 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.24 }}
              src={item.src}
              alt={`${work.title}, preview ${mediaIndex + 1} of ${media.length}`}
              onError={() => setMediaError(true)}
              draggable={false}
              className="block h-full w-full select-none object-contain drop-shadow-[0_20px_55px_rgba(0,0,0,0.45)]"
            />
          )
        ) : (
          <div className="flex w-full max-w-xl flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-[#79A8FF]">
              {mediaError ? <ImageIcon size={26} /> : <Icon size={26} />}
            </div>
            <h2 className="font-(family-name:--font-display) mt-4 text-lg font-semibold sm:text-2xl">{work.title}</h2>
            <p className="mt-3 line-clamp-4 text-xs leading-6 text-[#A8B3C4] sm:text-sm">
              {mediaError
                ? "Preview unavailable. Check the media file's exact name in public/images."
                : work.description}
            </p>
          </div>
        )}
      </div>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#4F8CFF]/35 bg-[#14202B]/90 text-white transition hover:border-[#79A8FF] hover:bg-[#243B54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#79A8FF] sm:right-6 sm:top-6"
      >
        <X size={18} />
      </button>

      {hasGallery && (
        <>
          <button
            type="button"
            onClick={() => showMedia(mediaIndex - 1)}
            aria-label="Previous preview"
            className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#4F8CFF]/35 bg-[#14202B]/90 text-white transition hover:border-[#79A8FF] hover:bg-[#243B54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#79A8FF] sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => showMedia(mediaIndex + 1)}
            aria-label="Next preview"
            className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#4F8CFF]/35 bg-[#14202B]/90 text-white transition hover:border-[#79A8FF] hover:bg-[#243B54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#79A8FF] sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {media.length > 0 && (
        <div
          aria-live="polite"
          aria-atomic="true"
          className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[#4F8CFF]/15 bg-[#14202B]/90 px-4 py-2 text-center font-mono text-[11px] tracking-[0.14em] text-[#A8B3C4] sm:bottom-5"
        >
          {mediaIndex + 1} / {media.length}
        </div>
      )}
    </motion.section>,
    document.body
  );
}

/* =========================================================
   SHARED HERO / ABOUT MOTION
   Matches the rest of the website's type scale and blue palette.
   Reveal animations run once; ambient movement stays subtle.
   Respect the visitor's reduced-motion preference.
========================================================= */

const gentleReveal: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroLineReveal: Variants = {
  hidden: { y: "108%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } },
};

const staggerReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.14 },
  },
};

/* =========================================================
   SHARED LAYOUT: Homepage content uses a 1250px maximum width
   with 20/32/40px responsive page gutters, matching the
   navigation and footer insets.
========================================================= */

/* =========================================================
   HERO — CLEAN, CENTERED, BRAND CONSISTENT
   Original navy and blue palette, no technology lines.
========================================================= */

function HomeHero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitParallax = useTransform(scrollYProgress, [0, 1], [0, 56]);

  return (
    <section
      ref={heroRef}
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate flex min-h-190 flex-col overflow-hidden bg-[#07111F] px-5 pb-24 pt-28 text-white md:px-8 lg:px-10 sm:min-h-207.5 sm:pt-32 lg:min-h-225 lg:pt-36"
    >
      {/* Very slow ambient blue glow, with no grids, circuitry, or lines. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(79,140,255,0.16)_0%,rgba(7,17,31,0)_56%)]"
        initial={false}
        animate={reduceMotion ? { opacity: 0.75 } : { opacity: [0.65, 1, 0.65] }}
        transition={reduceMotion ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Quiet, soft-focus aurora. Intentionally no circuit motifs or tech lines. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-17%] top-[22%] h-76 w-76 rounded-full bg-[#4F8CFF]/10 blur-[105px] sm:h-110 sm:w-110"
        animate={reduceMotion ? undefined : { x: [0, 52, 0], y: [0, -30, 0], opacity: [0.45, 0.78, 0.45] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[5%] right-[-14%] h-72 w-72 rounded-full bg-[#79A8FF]/10 blur-[105px] sm:h-112 sm:w-md"
        animate={reduceMotion ? undefined : { x: [0, -45, 0], y: [0, 28, 0], opacity: [0.35, 0.68, 0.35] }}
        transition={{ duration: 23, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-312.5 flex-1 flex-col items-center justify-center text-center">
        {/* One-time entrance + very subtle floating portrait. */}
        <motion.div
          style={reduceMotion ? undefined : { y: portraitParallax }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.93, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: reduceMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-71.25 w-[min(92vw,420px)] shrink-0 sm:h-91.25 sm:w-115 lg:h-103.75 lg:w-127.5"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-12 bottom-8 top-20 rounded-full bg-[#4F8CFF]/15 blur-[80px]"
            animate={reduceMotion ? undefined : { opacity: [0.45, 0.8, 0.45] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-x-3 inset-y-0 overflow-hidden mask-[linear-gradient(to_bottom,black_0%,black_73%,transparent_100%)]"
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/Headshot.png"
              alt="Khimberlie D. Macose"
              fill
              priority
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 460px, 510px"
              className="object-contain object-bottom"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerReveal}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="relative z-10 -mt-4 flex w-full flex-col items-center sm:-mt-7"
        >
          <motion.div variants={gentleReveal} className="mb-6">
            <span className="inline-flex items-center rounded-full border border-[#4F8CFF]/30 bg-[#4F8CFF]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8D2FF]">
              Creative &amp; Digital Support
            </span>
          </motion.div>

          <motion.h1
            variants={gentleReveal}
            id="home-heading"
            className="font-(family-name:--font-display) max-w-full text-[clamp(2.15rem,4.55vw,4.5rem)] font-semibold leading-[1.05] tracking-tighter text-white"
          >
            <span className="block overflow-hidden pb-2">
              <motion.span variants={heroLineReveal} className="block md:whitespace-nowrap">Creative work that connects.</motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span variants={heroLineReveal} className="block">
                <motion.span
                  className="block bg-linear-to-r from-[#79A8FF] via-[#E3F0FF] to-[#79A8FF] bg-size-[220%_100%] bg-clip-text text-transparent md:whitespace-nowrap"
                  animate={reduceMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                >
                  Systems that keep it moving.
                </motion.span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={gentleReveal}
            className="mt-7 max-w-2xl text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8"
          >
            I&apos;m <strong className="font-semibold text-white">Khimberlie D. Macose</strong>.
            I bring together social content, brand visuals, marketing workflows,
            websites, and digital operations to make everyday business work clearer
            and more organized.
          </motion.p>

          <motion.div
            variants={gentleReveal}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
          >
            <Link
              href="#services"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#4F8CFF] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(79,140,255,0.17)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#79A8FF] hover:text-[#07111F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79A8FF] sm:w-auto"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-20 bg-white/20 blur-xl transition-transform duration-800 group-hover:translate-x-[580%] motion-reduce:transition-none" />
              <span className="relative z-10">Explore My Work</span>
              <ArrowUpRight size={17} className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-[#4F8CFF]/45 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#79A8FF] hover:bg-[#4F8CFF]/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79A8FF] sm:w-auto"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT — BALANCED PORTRAIT WITH RESTRAINED SCROLL REVEAL
   Directly below Services & Work, with uniform typography.
========================================================= */

const aboutHighlights = [
  { label: "Creative Focus", value: "Social Media & Content" },
  { label: "Marketing Systems", value: "GoHighLevel & Funnels" },
  { label: "Design Tools", value: "Canva & CapCut" },
  { label: "Working Style", value: "Organized & Detail-Focused" },
];

function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-20 overflow-hidden bg-[#07111F] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(79,140,255,0.08),transparent_58%)]"
      />

      {/* Balanced About portrait and copy, aligned at the center. */}
      <div className="relative mx-auto grid max-w-312.5 items-center gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16 xl:gap-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -30, scale: 0.975, clipPath: "inset(0 22% 0 0 round 28px)" }}
          whileInView={{ opacity: 1, x: 0, scale: 1, clipPath: "inset(0 0% 0 0 round 28px)" }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: reduceMotion ? 0 : 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-120 self-center"
        >
          {/* A soft blue halo lifts the portrait without changing the layout. */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-4xl bg-[#4F8CFF]/13 blur-2xl"
            animate={reduceMotion ? undefined : { opacity: [0.28, 0.65, 0.28], scale: [1, 1.02, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Constrained portrait height and width to balance the About copy. */}
          <div className="group relative h-112 w-full overflow-hidden rounded-[28px] border border-[#4F8CFF]/20 bg-[#0D1826] shadow-[0_24px_65px_rgba(0,0,0,0.27)] sm:h-125 lg:h-140">
            <motion.div
              className="absolute inset-0"
              whileHover={reduceMotion ? undefined : { scale: 1.025 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/Khimberlie 2.png"
                alt="Portrait of Khimberlie D. Macose"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 480px"
                className="object-cover object-top"
              />
            </motion.div>
            {/* A restrained gradient keeps the caption legible on any photo. */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#07111F]/75 to-transparent" />
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.4 }}
              className="absolute bottom-5 left-5 rounded-xl border border-white/15 bg-[#07111F]/80 px-4 py-3 backdrop-blur-md sm:bottom-7 sm:left-7"
            >
              <span className="text-xs font-semibold text-white">Creative &amp; Digital Projects</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerReveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="flex min-w-0 flex-col justify-center py-2 lg:py-8"
        >
          <motion.div variants={gentleReveal}>
            <span className="inline-flex rounded-full border border-[#4F8CFF]/30 bg-[#4F8CFF]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8D2FF]">
              About Me
            </span>
          </motion.div>

          <motion.h2
            variants={gentleReveal}
            id="about-heading"
            className="font-(family-name:--font-display) mt-6 max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter text-white"
          >
            Hi, I&apos;m <span className="text-[#79A8FF]">Khimberlie,</span>
            <span className="mt-2 block">a Creative Digital Specialist.</span>
          </motion.h2>

          <motion.p
            variants={gentleReveal}
            className="mt-6 max-w-2xl text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8"
          >
            I help businesses bring their ideas to life through social media content,
            branded graphics, short-form videos, email marketing, and responsive websites.
            I also support the systems behind the work — from GoHighLevel automations
            and funnels to organized campaigns and digital operations.
          </motion.p>

          <motion.p
            variants={gentleReveal}
            className="mt-4 max-w-2xl text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8"
          >
            My approach is thoughtful and practical: understand the goal, create with
            intention, keep everything organized, and deliver work that&apos;s ready to use.
          </motion.p>

          <motion.div
            variants={staggerReveal}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {aboutHighlights.map((item) => (
              <motion.div
                key={item.label}
                variants={gentleReveal}
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.012 }}
                onPointerMove={handleCardSpotlight}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="group relative isolate overflow-hidden rounded-2xl border border-[#4F8CFF]/15 bg-[#0D1826] px-5 py-5 shadow-[0_8px_26px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:border-[#4F8CFF]/45 hover:bg-[#132338]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
                  style={{ background: "radial-gradient(260px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(121,168,255,0.15), transparent 70%)" }}
                />
                <p className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#98A9C2]">
                  {item.label}
                </p>
                <p className="relative z-10 mt-3 text-sm font-semibold text-white sm:text-base">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={gentleReveal} className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#79A8FF] transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79A8FF]"
            >
              Let&apos;s Work Together
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIAL MOCKUP CONTENT
   These are fictional design samples, not verified client reviews.
   Replace with client-approved feedback before publicly presenting
   anything here as a real endorsement.
========================================================= */

const sampleTestimonials = [
  {
    name: "Zafira Lacuesta",
    initials: "ZL",
    role: "Independent Brand Owner",
    quote:
      "Before, our ideas lived in scattered messages. Khim helped bring them into a clear content schedule, and the visuals finally felt consistent. I would recommend her to anyone who needs thoughtful creative support without the chaos.",
    focus: "Content Planning & Branding",
  },
  {
    name: "Maelin Ordonez",
    initials: "MO",
    role: "Marketing Coordinator",
    quote:
      "The campaign follow-up process became easier to understand and manage. The details were handled carefully, and every step had a purpose. I would absolutely recommend Khim for organized CRM and digital marketing support.",
    focus: "Email & CRM Workflows",
  },
  {
    name: "Cassian Valmores",
    initials: "CV",
    role: "Small Business Consultant",
    quote:
      "What stood out was how practical everything felt. The website updates were clean, communication was straightforward, and important details were not overlooked. I would gladly recommend her for reliable digital project support.",
    focus: "Websites & Digital Projects",
  },
];

/* =========================================================
   HOMEPAGE
========================================================= */

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedWork, setSelectedWork] = useState<WorkCard | null>(null);
  const openWork = useCallback((work: WorkCard) => setSelectedWork(work), []);
  const closeWork = useCallback(() => setSelectedWork(null), []);

  // When a visitor selects "Explore Related Work" on /services,
  // read the requested category and filter from the URL, for example:
  // /?category=social-content&filter=Graphic+Design#services
  // This opens the relevant projects instead of the default tab.
  useEffect(() => {
    const syncRelatedWork = () => {
      const params = new URLSearchParams(window.location.search);
      const categoryId = params.get("category");
      const matchingCategory = serviceCategories.find(
        (category) => category.id === categoryId
      );

      if (!matchingCategory) return;

      const requestedFilter = params.get("filter") ?? "All";
      setActiveCategory(matchingCategory.id);
      setActiveFilter(
        matchingCategory.filters.includes(requestedFilter)
          ? requestedFilter
          : "All"
      );
    };

    syncRelatedWork();
    window.addEventListener("popstate", syncRelatedWork);
    window.addEventListener("hashchange", syncRelatedWork);

    return () => {
      window.removeEventListener("popstate", syncRelatedWork);
      window.removeEventListener("hashchange", syncRelatedWork);
    };
  }, []);

  const selectedCategory = useMemo(
    () => serviceCategories.find((category) => category.id === activeCategory) ?? serviceCategories[0],
    [activeCategory]
  );

  const filteredWorks = useMemo(
    () => activeFilter === "All"
      ? selectedCategory.works
      : selectedCategory.works.filter(
          (work) => work.type === activeFilter || (activeFilter === "GoHighLevel" && work.platform.includes("GoHighLevel"))
        ),
    [activeFilter, selectedCategory]
  );

  function changeCategory(category: ServiceCategory) {
    setActiveCategory(category.id);
    setActiveFilter("All");
  }

  return (
    <main className="min-h-screen bg-white font-(family-name:--font-body) text-[#101828] selection:bg-[#4F8CFF] selection:text-white">
      <SiteHeader />
      <HomeHero />

      {/* SERVICES & WORK */}
      <section id="services" className="relative scroll-mt-20 overflow-hidden bg-[#F8FAFC] px-5 py-28 md:px-8 md:py-40 lg:px-10">
        <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-[#4F8CFF]/6 blur-[160px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-[#79A8FF]/5 blur-[150px]" />
        <div className="relative mx-auto max-w-312.5">
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
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4F8CFF]">Services & Work</span>
              </div>
            </div>
            <h2 className="font-(family-name:--font-display) mx-auto mt-7 max-w-4xl text-[clamp(2.8rem,4.5vw,4.9rem)] font-semibold leading-[0.96] tracking-tighter">
              Explore work by <span className="text-[#4F8CFF]">category.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#667085] md:text-base md:leading-8">
              Select a service category to explore related projects and digital work.
              Every View Work preview opens without leaving this page.
            </p>
          </motion.div>

          {/* CATEGORY TABS */}
          <div className="mx-auto mt-14 max-w-6xl overflow-x-auto pb-2">
            <div className="flex min-w-max items-center gap-1 rounded-3xl border border-[#D8E0EA] bg-white p-2 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                const active = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => changeCategory(category)}
                    aria-pressed={active}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                      active ? "bg-[#07111F] text-white shadow-[0_8px_25px_rgba(7,17,31,0.15)]" : "text-[#667085] hover:bg-[#F8FAFC] hover:text-[#101828]"
                    }`}
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${active ? "bg-[#4F8CFF] text-white" : "bg-[#EEF4FF] text-[#4F8CFF]"}`}>
                      <Icon size={16} />
                    </span>
                    <span className="text-xs font-semibold">{category.label}</span>
                    <span className={`flex h-6 min-w-6 items-center justify-center rounded-lg px-1.5 text-[9px] font-semibold ${active ? "bg-white/10 text-white/70" : "bg-[#EEF2F7] text-[#98A2B3]"}`}>
                      {category.works.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PROJECT FILTERS */}
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
                aria-pressed={activeFilter === filter}
                className={`rounded-xl border px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-[#4F8CFF] bg-[#07111F] text-white shadow-[0_6px_20px_rgba(79,140,255,0.15)]"
                    : "border-[#D8E0EA] bg-white text-[#667085] hover:border-[#4F8CFF]/40 hover:text-[#4F8CFF]"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* PROJECT CARDS — softly crossfade when category or filter changes */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${activeCategory}-${activeFilter}`}
              layout
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredWorks.map((work, index) => (
                <WorkCardItem key={work.id} work={work} index={index} onOpen={openWork} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex justify-center">
            <Link href="/services" className="group inline-flex items-center gap-3 rounded-xl bg-[#07111F] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4F8CFF]">
              Explore All Services <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT ME — appears directly below Services & Work */}
      <AboutSection />

      {/* SKILLS & TOOLS */}
      <section className="relative overflow-hidden bg-white px-5 py-28 md:px-8 md:py-40 lg:px-10">
        <div className="mx-auto max-w-312.5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-end lg:gap-20"
          >
            <div>
              <div className="flex items-center gap-3"><span className="h-px w-8 bg-[#4F8CFF]" /><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">Skills & Tools</p></div>
              <h2 className="font-(family-name:--font-display) mt-6 max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">Tools behind the <span className="text-[#4F8CFF]">work.</span></h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#667085] md:text-base md:leading-8 lg:justify-self-end">A practical stack used across content, marketing, websites, funnels, communication, and digital operations.</p>
          </motion.div>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {toolCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="rounded-4xl border border-[#D8E0EA] bg-[#F8FAFC] p-6 transition-all duration-300 hover:border-[#4F8CFF]/30 hover:bg-white hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-8"
              >
                <h3 className="font-(family-name:--font-display) text-2xl font-semibold tracking-tight text-[#101828]">{category.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#667085]">{category.description}</p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {category.tools.map((tool) => (
                    <div key={tool.name} className="flex items-center gap-2.5 rounded-xl border border-[#E4E7EC] bg-white px-3.5 py-2.5 shadow-[0_5px_15px_rgba(15,23,42,0.025)]">
                      <img src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=64`} alt="" className="h-5 w-5 object-contain" />
                      <span className="text-xs font-semibold text-[#475467]">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative overflow-hidden bg-[#F8FAFC] px-5 py-28 text-[#101828] md:px-8 md:py-40 lg:px-10">
        <div className="pointer-events-none absolute -left-40 top-20 h-125 w-125 rounded-full bg-[#4F8CFF]/6 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full bg-[#79A8FF]/6 blur-[150px]" />
        <div className="relative mx-auto max-w-312.5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-[0.28fr_1fr] lg:gap-12"
          >
            <div className="flex items-start gap-3 pt-2"><span className="mt-2 h-px w-8 bg-[#4F8CFF]" /><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">Process</p></div>
            <div className="grid gap-7 xl:grid-cols-[1fr_0.55fr] xl:items-end">
              <h2 className="font-(family-name:--font-display) max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter">A simple path from <span className="text-[#4F8CFF]">idea to delivery.</span></h2>
              <p className="max-w-md text-sm leading-7 text-[#667085] xl:justify-self-end xl:text-base xl:leading-8">Every project moves through a clear workflow so the work stays organized, focused, and easy to follow.</p>
            </div>
          </motion.div>
          <div className="relative mt-28">
            <div className="pointer-events-none absolute left-[4%] right-[4%] top-1/2 hidden -translate-y-1/2 xl:block">
              <svg viewBox="0 0 1200 360" className="h-90 w-full" preserveAspectRatio="none">
                <path d="M 40 180 C 130 180, 135 65, 225 65 C 315 65, 315 295, 405 295 C 495 295, 495 65, 585 65 C 675 65, 675 295, 765 295 C 855 295, 855 65, 945 65 C 1035 65, 1040 180, 1160 180" fill="none" stroke="#D8E0EA" strokeWidth="2" />
                <motion.path d="M 40 180 C 130 180, 135 65, 225 65 C 315 65, 315 295, 405 295 C 495 295, 495 65, 585 65 C 675 65, 675 295, 765 295 C 855 295, 855 65, 945 65 C 1035 65, 1040 180, 1160 180" fill="none" stroke="#4F8CFF" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }} />
              </svg>
            </div>
            <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-6 xl:gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const raised = index % 2 === 0;
                return (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, y: raised ? 35 : -35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.09 }}
                    className={`group relative ${raised ? "xl:-translate-y-14" : "xl:translate-y-14"}`}
                  >
                    <motion.div
                      whileHover={{ y: -8, scale: 1.015 }}
                      transition={{ type: "spring", stiffness: 240, damping: 18 }}
                      className="relative min-h-72 overflow-hidden rounded-4xl border border-[#D8E0EA] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.045)] transition-all duration-300 group-hover:border-[#4F8CFF]/45 group-hover:shadow-[0_22px_55px_rgba(79,140,255,0.12)]"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-[#4F8CFF] transition-transform duration-500 group-hover:scale-x-100" />
                      <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#4F8CFF]"><Icon size={18} /></div>
                        <h3 className="font-(family-name:--font-display) mt-8 text-2xl font-semibold tracking-tight text-[#101828]">{step.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-[#667085]">{step.description}</p>
                      </div>
                      <motion.span animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }} className="absolute bottom-5 right-5 h-2 w-2 rounded-full bg-[#4F8CFF]" />
                    </motion.div>
                    {index < processSteps.length - 1 && (
                      <div className="flex justify-center py-3 xl:hidden">
                        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8E0EA] bg-white text-[#4F8CFF]">
                          <ArrowRight size={14} className="rotate-90 md:rotate-0" />
                        </motion.div>
                      </div>
                    )}
                  </motion.article>
                );
              })}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="relative mx-auto mt-16 flex w-fit items-center gap-3 rounded-full border border-[#D8E0EA] bg-white px-5 py-3 shadow-[0_8px_25px_rgba(15,23,42,0.05)] xl:mt-24">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4F8CFF]" /><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#667085]">Structured Workflow</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - FICTIONAL DESIGN EXAMPLES */}
      <section className="relative overflow-hidden bg-white px-5 py-28 md:px-8 md:py-36 lg:px-10">
        <div className="relative mx-auto max-w-312.5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#4F8CFF]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4F8CFF]">
                Testimonials
              </p>
            </div>
            <div className="mt-6 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
              <h2 className="font-(family-name:--font-display) max-w-3xl text-[clamp(2.8rem,4.5vw,4.75rem)] font-semibold leading-[0.96] tracking-tighter text-[#101828]">
                Kind words. <span className="text-[#4F8CFF]">Thoughtful results.</span>
              </h2>
              <span className="rounded-full border border-[#D8E0EA] bg-[#F8FAFC] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#667085]">
                Sample testimonials
              </span>
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#667085] md:text-base md:leading-8">
              These are fictional examples to demonstrate the testimonial layout, not verified customer reviews.
              Replace them with genuine, client-approved feedback before publishing as real testimonials.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {sampleTestimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.09, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -7, scale: 1.008 }}
                onPointerMove={handleCardSpotlight}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-[#D8E0EA] bg-[#F8FAFC] p-6 shadow-[0_12px_35px_rgba(15,23,42,0.035)] transition-[border-color,box-shadow] duration-300 hover:border-[#4F8CFF]/35 hover:shadow-[0_20px_48px_rgba(15,23,42,0.07)] sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none"
                  style={{ background: "radial-gradient(320px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(79,140,255,0.10), transparent 70%)" }}
                />
                <div className="mb-7 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1" aria-label="Five out of five stars (sample rating)">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={17}
                        fill="currentColor"
                        strokeWidth={1.5}
                        className="text-[#4F8CFF]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote size={26} strokeWidth={1.4} aria-hidden="true" className="text-[#B7C9E8]" />
                </div>

                <p className="flex-1 text-[15px] leading-8 text-[#344054]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D4E2FF] bg-[#EEF4FF] px-3 py-1.5 text-[10px] font-semibold text-[#306DCC]">
                    <Check size={12} aria-hidden="true" /> Would recommend
                  </span>
                  <span className="text-[10px] text-[#98A2B3]">Fictional example</span>
                </div>

                <div className="mt-7 flex items-center gap-3 border-t border-[#E0E7F0] pt-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DCE9FF] text-xs font-bold text-[#295FB5]">
                    {testimonial.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="font-(family-name:--font-display) text-sm font-semibold text-[#101828]">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[#667085]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                  {testimonial.focus}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#07111F] px-5 py-28 text-white md:px-8 md:py-36 lg:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-size-[72px_72px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F8CFF]/10 blur-[180px]" />
        <div className="relative mx-auto grid max-w-312.5 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3"><span className="h-px w-8 bg-[#79A8FF]" /><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">Start a Project</p></div>
            <h2 className="font-(family-name:--font-display) mt-6 max-w-4xl text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-tighter">Need support with your next <span className="text-[#79A8FF]">digital project?</span></h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8">Let&apos;s turn the work into a clear, organized, and practical plan.</p>
          </div>
          <Link href="/contact#contact-form" className="group inline-flex w-fit items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#07111F] transition-transform duration-300 hover:-translate-y-1">
            Start a Project <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <SiteFooter />
      <WorkModal work={selectedWork} onClose={closeWork} />
    </main>
  );
}
