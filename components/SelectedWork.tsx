"use client";

import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FolderOpen,
  Mail,
  Palette,
  Share2,
  Video,
  Workflow,
} from "lucide-react";

import CardSwap, {
  Card,
} from "@/components/CardSwap";

const workFolders = [
  {
    title: "Social Media",
    label: "Content & Management",
    description:
      "Social graphics, content calendars, captions, scheduling, publishing, and brand-focused social media work.",
    href: "/work/social-media",
    icon: Share2,
    number: "01",
  },
  {
    title: "Graphic Design",
    label: "Creative Portfolio",
    description:
      "Branded templates, promotional graphics, carousel posts, educational content, and digital marketing materials.",
    href: "/work/graphic-design",
    icon: Palette,
    number: "02",
  },
  {
    title: "Video Editing",
    label: "Short-Form Content",
    description:
      "Reels, TikTok content, captions, text overlays, scripts, and vertical social-media video editing.",
    href: "/work/video-editing",
    icon: Video,
    number: "03",
  },
  {
    title: "GoHighLevel",
    label: "Marketing Operations",
    description:
      "Funnels, landing pages, workflows, automation, contacts, tags, campaigns, and lead follow-up systems.",
    href: "/work/gohighlevel",
    icon: Workflow,
    number: "04",
  },
  {
    title: "Email Marketing",
    label: "Campaign Support",
    description:
      "Newsletters, campaigns, automated follow-up, email formatting, and lead-nurturing support.",
    href: "/work/email-marketing",
    icon: Mail,
    number: "05",
  },
  {
    title: "Digital Operations",
    label: "Business Support",
    description:
      "Scheduling, communication, task coordination, documentation, and operational digital support.",
    href: "/work/virtual-assistance",
    icon: BriefcaseBusiness,
    number: "06",
  },
];

export default function SelectedWork() {
  const router =
    useRouter();

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0D1826] px-5 py-28 text-[#F7F9FC] md:px-8 md:py-40"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute inset-0 opacity-50
            bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        <div className="absolute right-[-15%] top-[10%] h-125 w-125 rounded-full bg-[#4F8CFF]/12 blur-[170px]" />

        <div className="absolute bottom-[-25%] left-[-10%] h-100 w-100 rounded-full bg-[#94A3B8]/8 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-360">
        <div className="grid items-center gap-16 lg:grid-cols-[0.82fr_1.18fr] xl:gap-24">
          {/* LEFT */}

          <div>

            <h2 className="font-(family-name:--font-display) max-w-2xl text-4xl font-semibold leading-[0.96] tracking-tighter md:text-6xl lg:text-7xl">
              Explore the work
              <br />

              <span className="text-[#79A8FF]">
                behind the screen.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#A8B3C4] md:text-lg">
              Browse selected projects organized by the type
              of work completed—from content and design to
              marketing systems and digital operations.
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              <div className="bg-[#132033] p-5">
                <p className="font-(family-name:--font-display) text-2xl font-semibold text-white">
                  06
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#6E7C90]">
                  Work Archives
                </p>
              </div>

              <div className="bg-[#132033] p-5">
                <p className="font-(family-name:--font-display) text-2xl font-semibold text-white">
                  →
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#6E7C90]">
                  Click to Explore
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm text-[#6E7C90]">
              <FolderOpen
                size={16}
                className="text-[#79A8FF]"
              />

              <span>
                Select a folder to explore the archive.
              </span>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex min-h-150 items-center justify-center lg:min-h-160">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F8CFF]/12 blur-[100px]" />

            <div className="relative h-150 w-full max-w-175">
              <CardSwap
                width={520}
                height={340}
                cardDistance={52}
                verticalDistance={58}
                depth={85}
                skewAmount={4}
                visibleCards={4}
                delay={4500}
                autoplay
                pauseOnHover
                draggable
                speed={1}
                bounce={0.3}
                parallax={0.45}
                hoverSpread={0.1}
                dim={0.28}
                cardRadius={28}
                intro
                theme="dark"
                onCardClick={(
                  index: number,
                ) => {
                  const folder =
                    workFolders[
                      index
                    ];

                  if (
                    folder
                  ) {
                    router.push(
                      folder.href,
                    );
                  }
                }}
              >
                {workFolders.map(
                  (
                    folder,
                  ) => {
                    const Icon =
                      folder.icon;

                    return (
                      <Card
                        key={
                          folder.href
                        }
                        style={{
                          background:
                            "transparent",
                          boxShadow:
                            "none",
                        }}
                        customClass="!overflow-visible"
                      >
                        <div className="group/folder relative h-full w-full cursor-pointer">
                          {/* TAB */}

                          <div className="absolute left-5 top-0 z-20 h-12 w-48 rounded-t-2xl border-x border-t border-[#C6CFDA] bg-[#D9E0E8] shadow-[0_-4px_20px_rgba(15,23,42,0.05)]">
                            <div className="flex h-full items-center gap-2 px-4">
                              <FolderOpen
                                size={14}
                                className="text-[#4F8CFF]"
                              />

                              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#5F6B7A]">
                                Work Folder
                              </span>
                            </div>
                          </div>

                          {/* FOLDER */}

                          <div
                            className="
                              absolute inset-x-0 bottom-0 top-8
                              overflow-hidden
                              rounded-4xl
                              border border-[#C6CFDA]
                              bg-[#E7EBF0]
                              shadow-[0_30px_100px_rgba(0,0,0,0.22)]
                              transition-all duration-500
                              group-hover/folder:-translate-y-1
                              group-hover/folder:border-[#4F8CFF]/60
                              group-hover/folder:bg-[#F1F4F8]
                              group-hover/folder:shadow-[0_35px_100px_rgba(0,0,0,0.27),0_0_60px_rgba(79,140,255,0.10)]
                            "
                          >
                            <div
                              className="
                                pointer-events-none absolute inset-0
                                opacity-45
                                bg-[linear-gradient(rgba(100,116,139,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.10)_1px,transparent_1px)]
                                bg-size-[36px_36px]
                              "
                            />

                            <div className="pointer-events-none absolute -right-20 -top-20 h-70 w-70 rounded-full bg-[#4F8CFF]/7 blur-[90px]" />

                            <span className="font-(family-name:--font-display) pointer-events-none absolute -right-1 top-7 text-[110px] font-bold leading-none tracking-tighter text-[#172033]/5">
                              {
                                folder.number
                              }
                            </span>

                            <div className="relative z-10 flex h-full flex-col justify-between p-7 pt-9">
                              <div className="flex items-start justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#BFCADA] bg-[#F5F7FA] text-[#4F8CFF] shadow-[0_6px_18px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover/folder:border-[#4F8CFF] group-hover/folder:bg-[#4F8CFF] group-hover/folder:text-white">
                                  <Icon
                                    size={
                                      20
                                    }
                                  />
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#BFCADA] bg-[#F5F7FA] text-[#667085] transition-all duration-300 group-hover/folder:border-[#4F8CFF] group-hover/folder:bg-[#4F8CFF] group-hover/folder:text-white">
                                  <ArrowUpRight
                                    size={
                                      16
                                    }
                                  />
                                </div>
                              </div>

                              <div>
                                <div className="mb-4 flex items-center gap-3">
                                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4F8CFF]">
                                    {
                                      folder.label
                                    }
                                  </span>

                                  <span className="h-px flex-1 bg-[#C6CFDA]" />
                                </div>

                                <h3 className="font-(family-name:--font-display) text-3xl font-semibold tracking-tighter text-[#172033] md:text-4xl">
                                  {
                                    folder.title
                                  }
                                </h3>

                                <p className="mt-4 max-w-md text-sm leading-6 text-[#667085]">
                                  {
                                    folder.description
                                  }
                                </p>

                                <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-[#344054]">
                                  <span>
                                    Open archive
                                  </span>

                                  <ArrowUpRight
                                    size={
                                      14
                                    }
                                    className="text-[#4F8CFF]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  },
                )}
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}