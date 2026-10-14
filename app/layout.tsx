import type {
  Metadata,
} from "next";
import {
  Manrope,
  Sora,
} from "next/font/google";
import "./globals.css";

const manrope =
  Manrope({
    subsets: [
      "latin",
    ],
    variable:
      "--font-body",
    weight: [
      "400",
      "500",
      "600",
      "700",
      "800",
    ],
  });

const sora =
  Sora({
    subsets: [
      "latin",
    ],
    variable:
      "--font-display",
    weight: [
      "400",
      "500",
      "600",
      "700",
      "800",
    ],
  });

export const metadata: Metadata =
  {
    title:
      "Khimberlie D. Macose | Digital Marketing & Operations Specialist",

    description:
      "Portfolio of Khimberlie D. Macose — social media management, graphic design, short-form video editing, GoHighLevel, email marketing, website and funnel support, virtual assistance, and digital marketing operations.",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sora.variable}`}
      >
        {children}
      </body>
    </html>
  );
}