
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { type FormEvent, useState } from "react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

// ======================================================
// CONTACT INFORMATION
// ======================================================

const contactDetails = {
  email: "khim2022macose@gmail.com",
  whatsapp: "+639177503814",
};

const services = [
  "Social Media Management",
  "Graphic Design & Content Creation",
  "Short-Form Video Editing",
  "GoHighLevel Marketing Operations",
  "Email Marketing & Newsletter Support",
  "Virtual Assistance & Executive Support",
  "Websites, Landing Pages & Funnels",
  "Digital Marketing & Lead Generation",
];

// Matches the header's container and padding exactly.
const containerClass =
  "mx-auto w-full max-w-360 px-5 md:px-8 lg:px-10";

// ======================================================
// CONTACT PAGE
// app/contact/page.tsx
// ======================================================

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) return;

    const element = event.currentTarget;
    const form = new FormData(element);

    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      service: String(form.get("service") || "").trim(),
      details: String(form.get("details") || "").trim(),
      website: String(form.get("website") || ""),
    };

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitStatus("success");
      element.reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-(family-name:--font-body) text-[#101828] selection:bg-[#4F8CFF] selection:text-white">
      <SiteHeader />

      {/* ==================================================
          CONTACT HERO
          ALIGNED TO HEADER
      ================================================== */}

      <section className="relative overflow-hidden bg-[#07111F] pb-20 pt-40 text-white md:pb-24 md:pt-44">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-size-[72px_72px] opacity-45" />

        {/* Background glow */}
        <div className="pointer-events-none absolute -left-50 top-0 h-150 w-150 rounded-full bg-[#4F8CFF]/10 blur-[180px]" />

        {/* Matching header container */}
        <div className={`relative ${containerClass}`}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#4F8CFF]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#79A8FF]">
              Contact
            </p>
          </motion.div>

          {/* Heading and description */}
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="font-(family-name:--font-display) max-w-5xl text-[clamp(3.1rem,4.8vw,5.5rem)] font-semibold leading-[0.92] tracking-tighter">
                Let&apos;s talk about
                <br />

                <span className="text-[#79A8FF]">
                  your project.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              className="max-w-xl text-sm leading-7 text-[#A8B3C4] md:text-base md:leading-8"
            >
              Tell me what you&apos;re working on, what kind
              of support you need, and where you&apos;d like
              help across creative, marketing, systems, or
              operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ==================================================
          CONTACT CONTENT
          SAME WIDTH AND PADDING AS HEADER
      ================================================== */}

      <section className="bg-[#F4F7FA] py-20 md:py-28">
        <div
          className={`${containerClass} grid gap-8 lg:grid-cols-[0.72fr_1.28fr]`}
        >
          {/* ================================================
              LEFT CONTACT DETAILS
          ================================================= */}

          <div className="min-w-0 space-y-4">
            {/* EMAIL */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-[#D8E0EA] bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[#4F8CFF]/35 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#4F8CFF]">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#98A2B3]">
                    Email
                  </p>

                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="font-(family-name:--font-display) mt-2 block break-all text-base font-semibold text-[#101828] transition-colors hover:text-[#4F8CFF] sm:text-lg"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>
            </motion.article>

            {/* WHATSAPP */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.08,
              }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-[#D8E0EA] bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[#4F8CFF]/35 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#4F8CFF]">
                  <MessageCircle size={17} />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#98A2B3]">
                    WhatsApp
                  </p>

                  <a
                    href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-(family-name:--font-display) mt-2 block text-lg font-semibold text-[#101828] transition-colors hover:text-[#4F8CFF]"
                  >
                    {contactDetails.whatsapp}
                  </a>
                </div>
              </div>
            </motion.article>

            {/* AVAILABILITY */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.16,
              }}
              className="rounded-3xl border border-[#4F8CFF]/20 bg-[#EEF4FF] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#4F8CFF]">
                  <Clock3 size={17} />
                </div>

                <div>
                  <p className="font-(family-name:--font-display) text-lg font-semibold">
                    Availability
                  </p>

                  <p className="mt-3 text-sm font-semibold text-[#344054]">
                    Monday to Friday
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[#667085]">
                    Flexible working hours to accommodate
                    project needs and different time zones.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          {/* ================================================
              CONTACT FORM
          ================================================= */}

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 scroll-mt-32"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-4xl border border-[#D8E0EA] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] md:p-8 lg:p-10"
            >
              {/* FORM HEADER */}
              <div className="flex items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4F8CFF]">
                    Project Inquiry
                  </p>

                  <h2 className="font-(family-name:--font-display) mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    Tell me about your project.
                  </h2>
                </div>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#4F8CFF] sm:flex">
                  <BriefcaseBusiness size={18} />
                </div>
              </div>

              {/* NAME + EMAIL */}
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="name"
                    className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#667085]"
                  >
                    Your Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="mt-3 h-14 w-full rounded-xl border border-[#D8E0EA] bg-[#F8FAFC] px-5 text-sm text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#4F8CFF] focus:bg-white"
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="email"
                    className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#667085]"
                  >
                    Your Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="mt-3 h-14 w-full rounded-xl border border-[#D8E0EA] bg-[#F8FAFC] px-5 text-sm text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#4F8CFF] focus:bg-white"
                  />
                </div>
              </div>

              {/* SERVICE */}
              <div className="mt-6">
                <label
                  htmlFor="service"
                  className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#667085]"
                >
                  What Do You Need?
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="mt-3 h-14 w-full rounded-xl border border-[#D8E0EA] bg-[#F8FAFC] px-5 text-sm text-[#101828] outline-none transition-all focus:border-[#4F8CFF] focus:bg-white"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* PROJECT DETAILS */}
              <div className="mt-6">
                <label
                  htmlFor="details"
                  className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#667085]"
                >
                  Project Details *
                </label>

                <textarea
                  id="details"
                  name="details"
                  required
                  rows={8}
                  placeholder="Tell me about your project, goals, timeline, and what you need help with..."
                  className="mt-3 w-full resize-none rounded-xl border border-[#D8E0EA] bg-[#F8FAFC] px-5 py-5 text-sm leading-7 text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#4F8CFF] focus:bg-white"
                />
              </div>

              {/* ANTI-SPAM FIELD */}
              <div
                className="absolute left-[-10000px]"
                aria-hidden="true"
              >
                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* BUTTONS */}
              <div className="mt-7 grid gap-3 md:grid-cols-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-[#07111F] px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#132033] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={14} />

                  {isSubmitting
                    ? "Sending..."
                    : "Send Message"}

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                <a
                  href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-[#D8E0EA] bg-white px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#344054] transition-all duration-300 hover:border-[#4F8CFF]/50 hover:bg-[#EEF4FF]"
                >
                  <MessageCircle
                    size={14}
                    className="text-[#4F8CFF]"
                  />

                  WhatsApp Instead
                </a>
              </div>

              {/* FORM SUBMISSION STATUS */}
              <div
                role="status"
                aria-live="polite"
                className="mt-5 text-center text-sm"
              >
                {submitStatus === "success" && (
                  <p className="text-green-700">
                    Thank you! Your message has been sent
                    successfully.
                  </p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-700">
                    Sorry, your message could not be sent.
                    Please try again or email me directly.
                  </p>
                )}
              </div>

              <p className="mt-5 text-center text-[10px] leading-6 text-[#98A2B3]">
                I look forward to learning more about your project.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
