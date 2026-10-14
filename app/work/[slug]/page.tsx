import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  FolderOpen,
} from "lucide-react";
import { notFound } from "next/navigation";

import {
  workCategories,
  type WorkSlug,
} from "@/data/work";

/* =========================================================
   GENERATE ALL WORK ROUTES AT BUILD TIME

   This fixes the Next.js 16 Cache Components error because
   Next.js now knows all valid [slug] values while prerendering.
========================================================= */

export function generateStaticParams() {
  return Object.keys(
    workCategories,
  ).map((slug) => ({
    slug,
  }));
}

/* =========================================================
   PAGE PROPS
========================================================= */

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   WORK PAGE
========================================================= */

export default async function WorkPage({
  params,
}: WorkPageProps) {
  const { slug } = await params;

  if (!(slug in workCategories)) {
    notFound();
  }

  const work =
    workCategories[
      slug as WorkSlug
    ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-(family-name:--font-body) text-[#101828]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="border-b border-white/10 bg-[#07111F]">
        <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-6 md:px-8 lg:px-10">
          <Link
            href="/#work"
            className="group flex items-center gap-3 text-sm font-semibold text-[#A8B3C4] transition-colors duration-300 hover:text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#4F8CFF]/50 group-hover:bg-[#4F8CFF]/10">
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </span>

            Back to portfolio
          </Link>

          <Link
            href="/"
            className="font-(family-name:--font-display) text-sm font-semibold tracking-tight text-white"
          >
            KM.
          </Link>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-linear-to-br from-[#07111F] via-[#0D1826] to-[#111827] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10">
        {/* GRID */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-50
            bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />

        {/* BLUE GLOW */}

        <div className="pointer-events-none absolute right-[-10%] top-[-40%] h-150 w-150 rounded-full bg-[#4F8CFF]/16 blur-[180px]" />

        {/* GRAY GLOW */}

        <div className="pointer-events-none absolute bottom-[-50%] left-[-10%] h-125 w-125 rounded-full bg-[#94A3B8]/8 blur-[170px]" />

        <div className="relative mx-auto max-w-360">
          {/* EYEBROW */}

          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#4F8CFF]/25 bg-[#4F8CFF]/10">
              <FolderOpen
                size={15}
                className="text-[#79A8FF]"
              />
            </span>

            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#79A8FF]">
              {work.eyebrow}
            </p>
          </div>

          {/* TITLE */}

          <h1 className="font-(family-name:--font-display) mt-8 max-w-5xl text-[clamp(3.4rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-tighter text-[#F7F9FC]">
            {work.title}
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#A8B3C4] md:text-lg">
            {work.description}
          </p>

          {/* META */}

          <div className="mt-12 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#B8D2FF] backdrop-blur-xl">
              Selected Work
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A8B3C4] backdrop-blur-xl">
              {work.category}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT ARCHIVE
      ====================================================== */}

      <section className="bg-[#EEF2F7] px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-360">
          {/* SECTION HEADER */}

          <div className="mb-12 flex flex-col gap-6 border-b border-[#D3DBE6] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4F8CFF]">
                Project Archive
              </p>

              <h2 className="font-(family-name:--font-display) mt-3 text-3xl font-semibold tracking-tight text-[#101828] md:text-4xl">
                Selected Work
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#667085]">
                A collection of selected work and project
                examples from this area of Khim&apos;s digital
                portfolio.
              </p>
            </div>

            {/* COUNT */}

            <div className="flex w-fit items-center gap-3 rounded-full border border-[#D3DBE6] bg-white px-4 py-2.5 shadow-[0_6px_20px_rgba(15,23,42,0.04)]">
              <span className="font-(family-name:--font-display) text-sm font-semibold text-[#101828]">
                {work.projects.length
                  .toString()
                  .padStart(
                    2,
                    "0",
                  )}
              </span>

              <span className="text-[9px] uppercase tracking-[0.16em] text-[#667085]">
                Entries
              </span>
            </div>
          </div>

          {/* =================================================
              PROJECT GRID
          ================================================= */}

          <div className="grid gap-6 md:grid-cols-2">
            {work.projects.map(
              (
                project,
                index,
              ) => (
                <article
                  key={project.title}
                  className="
                    group
                    overflow-hidden
                    rounded-4xl
                    border border-[#D8E0EA]
                    bg-white
                    p-3
                    shadow-[0_12px_45px_rgba(15,23,42,0.05)]
                    transition-all duration-500
                    hover:-translate-y-1.5
                    hover:border-[#4F8CFF]/45
                    hover:shadow-[0_25px_65px_rgba(15,23,42,0.10)]
                  "
                >
                  {/* =========================================
                      PROJECT IMAGE
                  ========================================= */}

                  <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-[#D8E0EA] bg-[#E7EBF0]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* GRID */}

                        <div
                          className="
                            absolute inset-0
                            opacity-60
                            bg-[linear-gradient(rgba(100,116,139,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.10)_1px,transparent_1px)]
                            bg-size-[34px_34px]
                          "
                        />

                        {/* GLOW */}

                        <div className="absolute h-56 w-56 rounded-full bg-[#4F8CFF]/12 blur-[80px]" />

                        {/* NUMBER */}

                        <span className="font-(family-name:--font-display) relative text-7xl font-semibold tracking-tighter text-[#172033]/8">
                          {String(
                            index + 1,
                          ).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        {/* PLACEHOLDER */}

                        <div className="absolute bottom-5 left-5 rounded-full border border-[#CBD5E1] bg-white/80 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#667085] backdrop-blur-xl">
                          Project Preview
                        </div>
                      </div>
                    )}
                  </div>

                  {/* =========================================
                      PROJECT INFORMATION
                  ========================================= */}

                  <div className="p-5 md:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-[#EEF4FF] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4F8CFF]">
                        {project.type}
                      </span>

                      <span className="font-(family-name:--font-display) text-[10px] font-semibold text-[#98A2B3]">
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </span>
                    </div>

                    <h3 className="font-(family-name:--font-display) mt-5 text-2xl font-semibold tracking-tight text-[#101828] md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#667085]">
                      {project.description}
                    </p>

                    {/* DIVIDER */}

                    <div className="my-6 h-px bg-[#E2E8F0]" />

                    {/* ACTION */}

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#344054]">
                        View project details

                        <ArrowUpRight
                          size={14}
                          className="text-[#4F8CFF] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8E0EA] bg-[#F8FAFC] text-[#667085] transition-all duration-300 group-hover:border-[#4F8CFF] group-hover:bg-[#4F8CFF] group-hover:text-white">
                        <ArrowUpRight
                          size={14}
                        />
                      </span>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>

          {/* =================================================
              BACK TO PORTFOLIO
          ================================================= */}

          <div className="mt-16 flex justify-center">
            <Link
              href="/#work"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-2xl
                border border-[#D3DBE6]
                bg-white
                px-6 py-4
                text-sm
                font-semibold
                text-[#344054]
                shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#4F8CFF]/50
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]
              "
            >
              <ArrowLeft
                size={16}
                className="text-[#4F8CFF] transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to Selected Work
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/10 bg-[#07111F] px-5 py-8 text-[#A8B3C4] md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-360 flex-col justify-between gap-4 text-xs sm:flex-row">
          <span>
            © 2026 Khimberlie D. Macose
          </span>

          <span>
            Digital Work Archive
          </span>
        </div>
      </footer>
    </main>
  );
}