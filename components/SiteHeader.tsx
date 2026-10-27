"use client";

import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  usePathname,
} from "next/navigation";
import {
  useEffect,
  useState,
} from "react";

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
    label: "Contact",
    href: "/contact",
  },
];

export default function SiteHeader() {
  const pathname =
    usePathname();

  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

  const [
    scrolled,
    setScrolled,
  ] = useState(false);

  const contactPage =
    pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 30,
      );
    };

    handleScroll();

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

  function isActive(
    href: string,
  ) {
    if (
      href === "/" &&
      pathname === "/"
    ) {
      return true;
    }

    if (
      href !== "/" &&
      pathname.startsWith(
        href,
      )
    ) {
      return true;
    }

    return false;
  }

  const darkHeader =
    contactPage || !scrolled;

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        transition-all duration-500
        ${
          contactPage
            ? "border-b border-white/10 bg-[#090909]/92 backdrop-blur-xl"
            : scrolled
              ? "border-b border-[#E2E8F0] bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.07)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-22 max-w-360 items-center justify-between px-5 md:px-8 lg:px-10">
        {/* BRAND */}

        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
        >
          <div
            className={`
              relative flex h-11 w-11
              items-center justify-center
              overflow-hidden
              rounded-xl border
              transition-all duration-500
              ${
                darkHeader
                  ? "border-white/20 bg-white/10 backdrop-blur-md"
                  : "border-[#D8E0EA] bg-[#07111F]"
              }
            `}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,140,255,0.45),transparent_55%)]" />

            <span className="font-(family-name:--font-display) relative z-10 text-xs font-bold text-white">
              KM
            </span>
          </div>

          <div className="hidden sm:block">
            <p
              className={`
                font-(family-name:--font-display)
                text-sm font-semibold
                tracking-tight
                transition-colors duration-500
                ${
                  darkHeader
                    ? "text-white"
                    : "text-[#101828]"
                }
              `}
            >
              Khimberlie D. Macose
            </p>

            <p
              className={`
                mt-1 text-[8px]
                font-semibold uppercase
                tracking-[0.18em]
                transition-colors duration-500
                ${
                  darkHeader
                    ? "text-white/45"
                    : "text-[#98A2B3]"
                }
              `}
            >
              Digital Marketing &
              Operations
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex xl:gap-10">
          {navigation.map(
            (item) => {
              const active =
                isActive(
                  item.href,
                );

              return (
                <Link
                  key={
                    item.label
                  }
                  href={
                    item.href
                  }
                  className={`
                    group/nav
                    relative py-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    transition-colors duration-300
                    ${
                      darkHeader
                        ? active
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                        : active
                          ? "text-[#101828]"
                          : "text-[#667085] hover:text-[#101828]"
                    }
                  `}
                >
                  {
                    item.label
                  }

                  <span
                    className={`
                      absolute bottom-1 left-0
                      h-px bg-[#4F8CFF]
                      transition-all duration-300
                      ${
                        active
                          ? "w-full"
                          : "w-0 group-hover/nav:w-full"
                      }
                    `}
                  />
                </Link>
              );
            },
          )}
        </nav>

        {/* CTA */}

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/contact#contact-form"
            className={`
              group hidden h-11
              items-center gap-2
              rounded-xl px-5
              text-xs font-semibold
              transition-all duration-300
              md:flex
              ${
                darkHeader
                  ? "border border-white/25 bg-white/10 text-white hover:bg-white hover:text-[#07111F]"
                  : "bg-[#07111F] text-white hover:bg-[#132033]"
              }
            `}
          >
            Start a Project

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={
              menuOpen
            }
            onClick={() =>
              setMenuOpen(
                !menuOpen,
              )
            }
            className={`
              flex h-11 w-11
              items-center justify-center
              rounded-xl border
              transition-all duration-300
              lg:hidden
              ${
                darkHeader
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-[#D8E0EA] bg-white text-[#101828]"
              }
            `}
          >
            {menuOpen ? (
              <X size={18} />
            ) : (
              <Menu
                size={18}
              />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE */}

      <div
        className={`
          overflow-hidden bg-white
          transition-all duration-300
          lg:hidden
          ${
            menuOpen
              ? "max-h-140 border-t border-[#E2E8F0]"
              : "max-h-0"
          }
        `}
      >
        <div className="mx-auto max-w-360 px-5 py-4 md:px-8">
          {navigation.map(
            (
              item,
              index,
            ) => {
              const active =
                isActive(
                  item.href,
                );

              return (
                <Link
                  key={
                    item.label
                  }
                  href={
                    item.href
                  }
                  onClick={() =>
                    setMenuOpen(
                      false,
                    )
                  }
                  className="flex items-center justify-between border-b border-[#EEF2F6] py-4 last:border-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-semibold text-[#98A2B3]">
                      {String(
                        index +
                          1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <span
                      className={`
                        font-(family-name:--font-display)
                        text-base font-semibold
                        ${
                          active
                            ? "text-[#4F8CFF]"
                            : "text-[#344054]"
                        }
                      `}
                    >
                      {
                        item.label
                      }
                    </span>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-[#98A2B3]"
                  />
                </Link>
              );
            },
          )}

          <Link
            href="/contact#contact-form"
            onClick={() =>
              setMenuOpen(
                false,
              )
            }
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-[#07111F] px-5 py-4 text-sm font-semibold text-white"
          >
            Start a Project

            <ArrowUpRight
              size={15}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}