"use client";

import { useContactModal } from "./contactModal";

const links = [
  {
    label: "Email",
    value: "redoanhasan02@gmail.com",
    href: "mailto:redoanhasan02@gmail.com",
  },
  {
    label: "Phone",
    value: "+8801714701219",
    href: "tel:+8801714701219",
  },
  {
    label: "LinkedIn",
    value: "in/md-redoan-hasan",
    href: "https://linkedin.com/in/md-redoan-hasan",
  },
  {
    label: "GitHub",
    value: "mdredoanhasan",
    href: "https://github.com/mdredoanhasan",
  },
];

export default function ContactSection() {
  const openContactModal = useContactModal();

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#0a0a0f] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-white/10 bg-linear-to-br from-white/4.5 to-white/1.5 p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
        <div className="flex flex-col items-start gap-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </p>
          <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Let&apos;s build something together.
          </h2>
          <p className="max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
            Have a project, an internship, or an idea worth exploring? Send me a
            message and I&apos;ll get back to you.
          </p>
          <button
            type="button"
            onClick={openContactModal}
            className="cta-primary mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </button>
        </div>

        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={
                  link.href.startsWith("https://") ? "_blank" : undefined
                }
                rel={
                  link.href.startsWith("https://") ? "noreferrer" : undefined
                }
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0a0a0f]/60 px-5 py-4 transition hover:border-cyan-300/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span className="text-sm text-gray-400">{link.label}</span>
                <span className="truncate text-sm text-white sm:text-base">
                  {link.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
