import Link from "next/link";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#050A12] px-5 py-10 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-360">
        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
          {/* BRAND */}

          <div>
            <Link
              href="/"
              className="group flex w-fit items-center gap-3"
            >
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#4F8CFF]/25 bg-[#4F8CFF]/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,140,255,0.35),transparent_60%)]" />

                <span className="font-(family-name:--font-display) relative z-10 text-xs font-bold">
                  KM
                </span>
              </div>

              <div>
                <p className="font-(family-name:--font-display) text-sm font-semibold">
                  Khimberlie D. Macose
                </p>

                <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#6E7C90]">
                  Digital Marketing & Operations
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#6E7C90]">
              Creative work, marketing systems, and
              digital operations.
            </p>
          </div>

          {/* NAVIGATION */}

          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            {navigation.map(
              (item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[#A8B3C4] transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* =================================================
            FOOTER BOTTOM
        ================================================= */}

        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-[#6E7C90] sm:flex-row">
          <span>
            © 2026 Khimberlie D. Macose. All rights
            reserved.
          </span>

          <span>
            Creative · Marketing · Operations
          </span>
        </div>
      </div>
    </footer>
  );
}