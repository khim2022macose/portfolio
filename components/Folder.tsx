"use client";

import { motion } from "framer-motion";
import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

export interface FolderItem {
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
  content?: ReactNode;
}

export type FolderEntry =
  | FolderItem
  | string
  | number
  | ReactElement;

export interface FolderProps {
  items?: FolderEntry[];
  label?: string;

  frontContent?: ReactNode;

  mode?: "flap" | "book";
  variant?: "solid" | "glass" | "matte";

  color?: string;
  paperColor?: string;

  tabPosition?: "left" | "center" | "right";
  layout?: "spread" | "stack" | "row";

  size?: number;

  openOn?: "click" | "hover";

  open?: boolean;
  defaultOpen?: boolean;

  onOpenChange?: (open: boolean) => void;

  onItemClick?: (
    item: FolderEntry,
    index: number,
  ) => void;

  onItemDrop?: (
    item: FolderEntry,
    index: number,
    inside: boolean,
  ) => void;

  draggable?: boolean;
  zoomOnClick?: boolean;
  peek?: boolean;
  intro?: boolean;

  tilt?: number;
  bounce?: number;
  speed?: number;
  frost?: number;

  closeOnOutsideClick?: boolean;

  theme?: "dark" | "light";

  className?: string;
  style?: CSSProperties;

  children?: ReactNode;
}

function isFolderItem(
  item: FolderEntry,
): item is FolderItem {
  return (
    typeof item === "object" &&
    item !== null &&
    !isValidElement(item)
  );
}

function renderItem(
  item: FolderEntry,
) {
  if (isValidElement(item)) {
    return item;
  }

  if (
    typeof item === "string" ||
    typeof item === "number"
  ) {
    return (
      <p className="text-xs font-medium text-[#344054]">
        {item}
      </p>
    );
  }

  return (
    <>
      {item.image && (
        <img
          src={item.image}
          alt={item.alt ?? item.title ?? ""}
          className="mb-3 h-16 w-full rounded-lg object-cover"
        />
      )}

      {item.title && (
        <p className="font-(family-name:--font-display) text-[11px] font-semibold leading-4 text-[#172033]">
          {item.title}
        </p>
      )}

      {item.description && (
        <p className="mt-1 text-[9px] leading-4 text-[#667085]">
          {item.description}
        </p>
      )}

      {item.content}
    </>
  );
}

export default function Folder({
  items,
  label,
  frontContent,

  mode = "flap",
  variant = "solid",

  color = "#DCE6F5",
  paperColor = "#F7F9FC",

  tabPosition = "left",
  layout = "stack",

  size = 1,

  openOn = "hover",

  open,
  defaultOpen = false,

  onOpenChange,
  onItemClick,

  draggable = false,
  zoomOnClick = false,
  peek = true,
  intro = true,

  tilt = 0.3,
  bounce = 0.28,
  speed = 1,

  frost = 0.25,

  closeOnOutsideClick = true,

  theme = "light",

  className = "",
  style,

  children,
}: FolderProps) {
  const rootRef =
    useRef<HTMLDivElement>(null);

  const [internalOpen, setInternalOpen] =
    useState(defaultOpen);

  const controlled =
    open !== undefined;

  const isOpen = controlled
    ? Boolean(open)
    : internalOpen;

  const customChildren =
    Children.toArray(children).filter(
      isValidElement,
    );

  const defaultItems: FolderEntry[] = [
    {
      title: "Selected Work",
      description:
        "Projects from this category.",
    },
    {
      title: "Portfolio",
      description:
        "Creative and digital work.",
    },
    {
      title: "Explore",
      description:
        "View related projects.",
    },
  ];

  const source: FolderEntry[] =
    customChildren.length > 0
      ? (customChildren as ReactElement[])
      : items?.length
        ? items
        : defaultItems;

  const entries =
    source.slice(0, 3);

  function setOpen(
    next: boolean,
  ) {
    if (!controlled) {
      setInternalOpen(next);
    }

    if (next !== isOpen) {
      onOpenChange?.(next);
    }
  }

  function toggle() {
    setOpen(!isOpen);
  }

  useEffect(() => {
    if (
      !closeOnOutsideClick ||
      openOn !== "click"
    ) {
      return;
    }

    function handleOutside(
      event: PointerEvent,
    ) {
      if (
        rootRef.current &&
        !rootRef.current.contains(
          event.target as Node,
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "pointerdown",
      handleOutside,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutside,
      );
    };
  });

  const tabPositionClass = {
    left: "left-[7%]",
    center:
      "left-1/2 -translate-x-1/2",
    right: "right-[7%]",
  };

  const paperPositions =
    layout === "spread"
      ? [
          {
            x: -76,
            y: -90,
            rotate: -7,
          },
          {
            x: 0,
            y: -108,
            rotate: 0,
          },
          {
            x: 76,
            y: -90,
            rotate: 7,
          },
        ]
      : layout === "row"
        ? [
            {
              x: -78,
              y: -94,
              rotate: 0,
            },
            {
              x: 0,
              y: -94,
              rotate: 0,
            },
            {
              x: 78,
              y: -94,
              rotate: 0,
            },
          ]
        : [
            {
              x: 0,
              y: -106,
              rotate: -2.5,
            },
            {
              x: 0,
              y: -82,
              rotate: 1,
            },
            {
              x: 0,
              y: -58,
              rotate: 2.5,
            },
          ];

  const scale =
    Math.max(0.75, size);

  const folderHeight =
    330 * scale;

  const paperWidth =
    205 * scale;

  const paperHeight =
    145 * scale;

  const frontShadow =
    theme === "light"
      ? "0 22px 55px rgba(15, 23, 42, 0.12)"
      : "0 22px 55px rgba(0, 0, 0, 0.32)";

  const folderBackground =
    variant === "matte"
      ? color
      : variant === "glass"
        ? `linear-gradient(
            145deg,
            rgba(255,255,255,0.72),
            ${color}
          )`
        : `linear-gradient(
            150deg,
            #EEF4FB 0%,
            ${color} 48%,
            #CCD9EA 100%
          )`;

  return (
    <motion.div
      ref={rootRef}
      initial={
        intro
          ? {
              opacity: 0,
              y: 16,
              scale: 0.97,
            }
          : false
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration:
          0.45 / speed,
      }}
      onMouseEnter={() => {
        if (
          openOn === "hover"
        ) {
          setOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (
          openOn === "hover"
        ) {
          setOpen(false);
        }
      }}
      onClick={(event) => {
        if (
          openOn === "click"
        ) {
          event.stopPropagation();
          toggle();
        }
      }}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();

          if (
            openOn === "click"
          ) {
            toggle();
          }
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-label={
        label
          ? `${label} folder`
          : "Folder"
      }
      data-mode={mode}
      data-draggable={
        draggable
          ? "true"
          : "false"
      }
      className={`
        group/folder
        relative w-full select-none
        outline-none
        [-webkit-tap-highlight-color:transparent]
        ${className}
      `}
      style={{
        height:
          folderHeight,
        ...style,
      }}
    >
      {/* =============================================
          SHADOW
      ============================================== */}

      <motion.div
        animate={{
          opacity:
            isOpen
              ? 0.16
              : 0.1,
          scaleX:
            isOpen
              ? 1.06
              : 0.94,
        }}
        transition={{
          duration: 0.35,
        }}
        className="pointer-events-none absolute bottom-2 left-[7%] right-[7%] h-10 rounded-full bg-[#07111F] blur-xl"
      />

      {/* =============================================
          BACK FOLDER
      ============================================== */}

      <motion.div
        animate={{
          y:
            isOpen
              ? -5
              : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 190,
          damping:
            18 -
            bounce * 4,
        }}
        className="absolute inset-x-0 bottom-5 top-12"
      >
        {/* TAB */}

        <div
          className={`
            absolute -top-7.5
            h-14 w-[45%]
            rounded-t-3xl
            border border-b-0
            border-[#BECBDC]
            ${tabPositionClass[tabPosition]}
          `}
          style={{
            background:
              color,
          }}
        >
          {label && (
            <span className="absolute inset-x-5 top-4 truncate text-[9px] font-semibold uppercase tracking-[0.14em] text-[#526174]">
              {label}
            </span>
          )}
        </div>

        {/* BACK */}

        <div
          className="absolute inset-0 rounded-3xl border border-[#C5D1DE]"
          style={{
            background:
              `linear-gradient(
                145deg,
                #DCE6F5,
                #CCD9EA
              )`,
          }}
        />
      </motion.div>

      {/* =============================================
          PAPERS
      ============================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-5 top-12 z-20">
        {entries.map(
          (
            item,
            index,
          ) => {
            const position =
              paperPositions[
                index
              ] ??
              paperPositions[0];

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  left: "50%",
                  bottom:
                    "45%",
                  x:
                    isOpen
                      ? position.x *
                        scale
                      : 0,
                  y:
                    isOpen
                      ? position.y *
                        scale
                      : peek
                        ? -(
                            19 +
                            index *
                              7
                          )
                        : 6,
                  rotate:
                    isOpen
                      ? position.rotate
                      : index *
                          1.2 -
                        1,
                  scale:
                    isOpen
                      ? 1
                      : 0.96 -
                        index *
                          0.025,
                  opacity:
                    isOpen
                      ? 1
                      : 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness:
                    190 * speed,
                  damping:
                    18 -
                    bounce * 4,
                  delay:
                    isOpen
                      ? index *
                        0.03
                      : 0,
                }}
                onClick={(
                  event,
                ) => {
                  event.stopPropagation();

                  if (
                    isOpen
                  ) {
                    onItemClick?.(
                      item,
                      index,
                    );
                  }
                }}
                className={`
                  absolute
                  origin-center
                  ${
                    isOpen
                      ? "pointer-events-auto cursor-pointer"
                      : "pointer-events-none"
                  }
                `}
                style={{
                  width:
                    paperWidth,
                  height:
                    paperHeight,
                  marginLeft:
                    -paperWidth /
                    2,
                  zIndex:
                    20 - index,
                }}
              >
                <motion.div
                  whileHover={
                    isOpen
                      ? {
                          y: -6,
                          scale:
                            zoomOnClick
                              ? 1.04
                              : 1.015,
                        }
                      : undefined
                  }
                  className="h-full overflow-hidden rounded-2xl border border-[#D6E0EA] p-4 shadow-[0_12px_26px_rgba(15,23,42,0.10)]"
                  style={{
                    background:
                      paperColor,
                  }}
                >
                  <div className="mb-3 h-1.5 w-12 rounded-full bg-[#4F8CFF]/30" />

                  <div className="mb-2 h-1.5 w-[74%] rounded-full bg-[#DFE6EE]" />

                  <div className="mb-4 h-1.5 w-[52%] rounded-full bg-[#E8EDF3]" />

                  {renderItem(
                    item,
                  )}

                  <div className="mt-4 space-y-1.5">
                    <div className="h-1 w-full rounded-full bg-[#E7ECF2]" />
                    <div className="h-1 w-[80%] rounded-full bg-[#E7ECF2]" />
                    <div className="h-1 w-[58%] rounded-full bg-[#E7ECF2]" />
                  </div>
                </motion.div>
              </motion.div>
            );
          },
        )}
      </div>

      {/* =============================================
          FRONT FACE
      ============================================== */}

      <motion.div
        initial={false}
        animate={{
          y:
            isOpen
              ? 5
              : 0,
          rotateX:
            isOpen
              ? -4
              : 0,
          rotateZ:
            isOpen
              ? tilt * -0.5
              : 0,
        }}
        transition={{
          type: "spring",
          stiffness:
            185 * speed,
          damping:
            18 -
            bounce * 4,
        }}
        className="absolute inset-x-0 bottom-5 z-30 h-[76%] origin-bottom"
        style={{
          transformStyle:
            "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-3xl border border-[#C6D2E0]"
          style={{
            background:
              folderBackground,
            boxShadow:
              frontShadow,
            backdropFilter:
              variant ===
              "glass"
                ? `blur(${6 + frost * 12}px)`
                : undefined,
          }}
        >
          {/* LIGHT */}

          <div className="pointer-events-none absolute inset-px rounded-[23px] bg-linear-to-br from-white/55 via-white/10 to-[#4F8CFF]/5" />

          {/* HOVER ACCENT */}

          <motion.div
            animate={{
              scaleX:
                isOpen
                  ? 1
                  : 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="absolute inset-x-0 top-0 h-0.75 origin-left bg-[#4F8CFF]"
          />

          {/* =========================================
              CONTENT DIRECTLY ON FOLDER FACE
          ========================================== */}

          <div className="relative z-10 flex h-full flex-col p-7 lg:p-8">
            {frontContent}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}