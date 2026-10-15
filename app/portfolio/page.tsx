"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Mail,
  Monitor,
  Palette,
  Share2,
  Video,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import {
  useMemo,
  useState,
} from "react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const projects = [
  {
    id: 1,
    title:
      "Social Media Content Management",
    category: "Social Media",
    platform: "Canva",
    description:
      "Content planning, branded graphics, captions, publishing, scheduling, and consistent social presentation.",
    href: "/work/social-media",
    icon: Share2,
    tags: [
      "Content Planning",
      "Social Media",
      "Canva",
    ],
  },
  {
    id: 2,
    title: "Social Content Calendar",
    category: "Social Media",
    platform: "Metricool",
    description:
      "Organized planning and scheduling workflow for consistent social publishing.",
    href: "/work/social-media",
    icon: Share2,
    tags: [
      "Scheduling",
      "Content Calendar",
      "Publishing",
    ],
  },
  {
    id: 3,
    title: "Branded Social Graphics",
    category: "Graphic Design",
    platform: "Canva",
    description:
      "Marketing graphics, social content, promotional materials, carousels, and branded digital assets.",
    href: "/work/graphic-design",
    icon: Palette,
    tags: [
      "Graphic Design",
      "Branding",
      "Canva",
    ],
  },
  {
    id: 4,
    title: "Marketing Carousel Design",
    category: "Graphic Design",
    platform: "Canva",
    description:
      "Carousel content prepared for educational, promotional, and engagement-focused campaigns.",
    href: "/work/graphic-design",
    icon: Palette,
    tags: [
      "Carousel",
      "Content",
      "Visual Design",
    ],
  },
  {
    id: 5,
    title: "Short-Form Social Video",
    category: "Video Editing",
    platform: "CapCut",
    description:
      "Vertical social video with captions, text overlays, pacing, and platform-ready formatting.",
    href: "/work/video-editing",
    icon: Video,
    tags: [
      "Reels",
      "TikTok",
      "CapCut",
    ],
  },
  {
    id: 6,
    title: "Reels & Video Content",
    category: "Video Editing",
    platform: "CapCut",
    description:
      "Short-form marketing videos prepared for social publishing and brand communication.",
    href: "/work/video-editing",
    icon: Video,
    tags: [
      "Video Editing",
      "Captions",
      "Short Form",
    ],
  },
  {
    id: 7,
    title: "GoHighLevel Funnel Support",
    category: "GoHighLevel",
    platform: "GoHighLevel",
    description:
      "Landing pages, forms, calls to action, funnels, and digital lead-generation support.",
    href: "/work/gohighlevel",
    icon: Workflow,
    tags: [
      "Funnels",
      "Landing Pages",
      "GoHighLevel",
    ],
  },
  {
    id: 8,
    title: "CRM Workflow Automation",
    category: "GoHighLevel",
    platform: "GoHighLevel",
    description:
      "Workflow setup, contacts, tags, automated follow-up, campaigns, and CRM organization.",
    href: "/work/gohighlevel",
    icon: Workflow,
    tags: [
      "Automation",
      "CRM",
      "Workflows",
    ],
  },
  {
    id: 9,
    title: "Email Campaign Support",
    category: "Email Marketing",
    platform: "GoHighLevel",
    description:
      "Marketing email preparation, campaign organization, formatting, and follow-up support.",
    href: "/work/email-marketing",
    icon: Mail,
    tags: [
      "Email",
      "Campaigns",
      "Follow-Up",
    ],
  },
  {
    id: 10,
    title: "Newsletter Support",
    category: "Email Marketing",
    platform: "Mailchimp",
    description:
      "Newsletter preparation and campaign formatting for clear branded communication.",
    href: "/work/email-marketing",
    icon: Mail,
    tags: [
      "Newsletter",
      "Mailchimp",
      "Marketing",
    ],
  },
  {
    id: 11,
    title: "Landing Page Support",
    category: "Websites & Funnels",
    platform: "WordPress",
    description:
      "Website and landing-page content, forms, calls to action, and marketing-focused updates.",
    href: "/portfolio",
    icon: Monitor,
    tags: [
      "WordPress",
      "Landing Page",
      "Website",
    ],
  },
  {
    id: 12,
    title: "Digital Operations Support",
    category: "Digital Operations",
    platform: "Outlook",
    description:
      "Calendar coordination, communication, scheduling, documentation, and digital business support.",
    href: "/work/virtual-assistance",
    icon: BriefcaseBusiness,
    tags: [
      "Operations",
      "Scheduling",
      "Administration",
    ],
  },
];

const categories = [
  "All",
  "Social Media",
  "Graphic Design",
  "Video Editing",
  "GoHighLevel",
  "Email Marketing",
  "Websites & Funnels",
  "Digital Operations",
];

const platforms = [
  "All",
  "GoHighLevel",
  "Canva",
  "CapCut",
  "Metricool",
  "Mailchimp",
  "WordPress",
  "Outlook",
];

export default function PortfolioPage() {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  const [
    activePlatform,
    setActivePlatform,
  ] = useState("All");

  const [
    categoryOpen,
    setCategoryOpen,
  ] = useState(false);

  const filteredProjects =
    useMemo(() => {
      return projects.filter(
        (project) => {
          const categoryMatch =
            activeCategory ===
              "All" ||
            project.category ===
              activeCategory;

          const platformMatch =
            activePlatform ===
              "All" ||
            project.platform ===
              activePlatform;

          return (
            categoryMatch &&
            platformMatch
          );
        },
      );
    }, [
      activeCategory,
      activePlatform,
    ]);

  return (
    <main className="min-h-screen bg-[#EEF2F7] font-(family-name:--font-body) text-[#101828]">
      <SiteHeader />

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#07111F] text-white">
        <div
          className="
            absolute inset-0 opacity-50
            bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        <div className="absolute -left-50 top-0 h-150 w-150 rounded-full bg-[#4F8CFF]/10 blur-[190px]" />

        <div className="relative mx-auto flex min-h-190 max-w-360 flex-col justify-center px-5 pb-24 pt-36 md:px-8 md:pb-28 md:pt-40 lg:px-10 xl:px-16">
          <div className="mb-10 flex flex-wrap items-center gap-4">
            <span className="h-px w-12 bg-[#4F8CFF]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#79A8FF]">
              Selected Work
            </p>

            <span className="hidden h-1 w-1 rounded-full bg-[#475569] sm:block" />

            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#64748B]">
              Portfolio Archive
            </span>
          </div>

          <div className="max-w-6xl">
            <h1 className="font-(family-name:--font-display) text-[clamp(3.2rem,5vw,5.75rem)] font-semibold leading-[0.88] tracking-tighter">
              Work built across
              <br />

              <span className="text-[#79A8FF]">
                content & systems.
              </span>
            </h1>
          </div>

          <div className="mt-14 grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <p className="max-w-2xl text-base leading-8 text-[#A8B3C4] md:text-lg">
              Explore selected work across social
              media, graphic design, video editing,
              GoHighLevel, email marketing,
              websites, funnels, and digital
              operations.
            </p>

            <div className="flex flex-wrap gap-8 lg:justify-end">
              <div>
                <p className="font-(family-name:--font-display) text-2xl font-semibold">
                  {projects.length}
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Work Entries
                </p>
              </div>

              <div className="hidden h-12 w-px bg-white/10 sm:block" />

              <div>
                <p className="font-(family-name:--font-display) text-2xl font-semibold">
                  Multi
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                  Platform Work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}

      <section className="sticky top-22 z-30 border-b border-[#D8E0EA] bg-white/95 px-5 py-8 backdrop-blur-xl md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-360 gap-7 xl:grid-cols-[0.58fr_1.42fr] xl:items-end">
          <div className="relative">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#98A2B3]">
              Category
            </p>

            <button
              type="button"
              onClick={() =>
                setCategoryOpen(
                  !categoryOpen,
                )
              }
              className="flex w-full items-center justify-between rounded-2xl border border-[#D8E0EA] bg-[#F8FAFC] px-5 py-4 text-left text-sm font-semibold text-[#344054]"
            >
              {activeCategory}

              <ChevronDown
                size={17}
                className={`
                  transition-transform
                  ${
                    categoryOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {categoryOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-2xl border border-[#D8E0EA] bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                {categories.map(
                  (category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setActiveCategory(
                          category,
                        );

                        setCategoryOpen(
                          false,
                        );
                      }}
                      className={`
                        flex w-full items-center
                        justify-between rounded-xl
                        px-4 py-3 text-left text-sm
                        ${
                          activeCategory ===
                          category
                            ? "bg-[#EEF4FF] font-semibold text-[#4F8CFF]"
                            : "text-[#475467] hover:bg-[#F8FAFC]"
                        }
                      `}
                    >
                      {category}
                    </button>
                  ),
                )}
              </div>
            )}
          </div>

          <div>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#98A2B3]">
              Platform
            </p>

            <div className="flex flex-wrap gap-2">
              {platforms.map(
                (platform) => (
                  <button
                    key={platform}
                    type="button"
                    onClick={() =>
                      setActivePlatform(
                        platform,
                      )
                    }
                    className={`
                      rounded-xl border px-4 py-3
                      text-[9px] font-semibold uppercase
                      tracking-[0.11em]
                      ${
                        activePlatform ===
                        platform
                          ? "border-[#07111F] bg-[#07111F] text-white"
                          : "border-[#D8E0EA] bg-white text-[#667085] hover:border-[#4F8CFF]/50"
                      }
                    `}
                  >
                    {platform}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-10">
        <div className="mx-auto max-w-360">
          <div className="mb-10 flex flex-col gap-5 border-b border-[#D3DBE6] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.19em] text-[#4F8CFF]">
                Portfolio Projects
              </p>

              <h2 className="font-(family-name:--font-display) mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Selected work
              </h2>
            </div>

            <p className="text-sm text-[#667085]">
              Showing{" "}

              <span className="font-semibold text-[#101828]">
                {filteredProjects.length}
              </span>{" "}

              {filteredProjects.length === 1
                ? "project"
                : "projects"}
            </p>
          </div>

          <AnimatePresence
            mode="popLayout"
          >
            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredProjects.map(
                (
                  project,
                  index,
                ) => {
                  const Icon =
                    project.icon;

                  return (
                    <motion.div
                      layout
                      key={project.id}
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
                    >
                      <Link
                        href={project.href}
                        className="group block overflow-hidden rounded-4xl border border-[#D8E0EA] bg-white p-3 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#4F8CFF]/45 hover:shadow-[0_24px_65px_rgba(15,23,42,0.10)]"
                      >
                        <div className="relative aspect-16/10 overflow-hidden rounded-3xl bg-[#0D1826]">
                          <div
                            className="
                              absolute inset-0 opacity-50
                              bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)]
                              bg-size-[34px_34px]
                            "
                          />

                          <span className="font-(family-name:--font-display) absolute -right-2 top-1 text-[100px] font-semibold tracking-tighter text-white/3">
                            {String(
                              index + 1,
                            ).padStart(
                              2,
                              "0",
                            )}
                          </span>

                          <div className="relative flex h-full flex-col justify-between p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#79A8FF]">
                                <Icon size={20} />
                              </div>

                              <ArrowUpRight
                                size={17}
                                className="text-[#64748B] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#79A8FF]"
                              />
                            </div>

                            <div className="flex flex-wrap gap-2">
                              <span className="rounded-full border border-[#4F8CFF]/25 bg-[#4F8CFF]/10 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#B8D2FF]">
                                {project.category}
                              </span>

                              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#94A3B8]">
                                {project.platform}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-5">
                          <h3 className="font-(family-name:--font-display) text-2xl font-semibold tracking-tight">
                            {project.title}
                          </h3>

                          <p className="mt-4 text-sm leading-7 text-[#667085]">
                            {project.description}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {project.tags.map(
                              (tag) => (
                                <span
                                  key={tag}
                                  className="rounded-lg bg-[#F2F4F7] px-2.5 py-1.5 text-[9px] font-medium text-[#667085]"
                                >
                                  {tag}
                                </span>
                              ),
                            )}
                          </div>

                          <div className="mt-7 flex items-center justify-between border-t border-[#E2E8F0] pt-5">
                            <span className="text-xs font-semibold text-[#344054]">
                              View Project
                            </span>

                            <ArrowUpRight
                              size={14}
                              className="text-[#4F8CFF]"
                            />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                },
              )}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length ===
            0 && (
            <div className="flex min-h-90 flex-col items-center justify-center rounded-4xl border border-dashed border-[#CBD5E1] bg-white p-8 text-center">
              <Monitor
                size={22}
                className="text-[#4F8CFF]"
              />

              <h3 className="font-(family-name:--font-display) mt-6 text-2xl font-semibold">
                No matching projects
              </h3>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory(
                    "All",
                  );
                  setActivePlatform(
                    "All",
                  );
                }}
                className="mt-6 rounded-xl bg-[#07111F] px-5 py-3 text-xs font-semibold text-white"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}

      <section className="relative overflow-hidden bg-[#07111F] px-5 py-28 text-white md:px-8 md:py-36 lg:px-10">
        <div className="relative mx-auto grid max-w-360 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
              Work Together
            </p>

            <h2 className="font-(family-name:--font-display) mt-5 max-w-4xl text-4xl font-semibold tracking-tighter md:text-6xl">
              Have a project that needs{" "}

              <span className="text-[#79A8FF]">
                creative or digital support?
              </span>
            </h2>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#07111F]"
          >
            Start a Project

            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}