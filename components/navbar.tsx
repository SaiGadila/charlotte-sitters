"use client";

import Link from "next/link";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why us" },
  { href: "#parents", label: "Parents" },
  { href: "#sitters", label: "Sitters" },
  { href: "#faq", label: "FAQ" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="#" className="flex items-center gap-2 font-bold tracking-tight text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-600 text-white">
            <ShieldCheck aria-hidden="true" className="h-5 w-5" />
          </span>
          Charlotte Sitters
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-brand-700">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="#parents" className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 md:inline-flex">
          Get Started
        </Link>
        <button
          type="button"
          className="inline-grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-sm md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
