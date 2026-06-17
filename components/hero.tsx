import { BadgeCheck, CalendarClock, HeartHandshake } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

export function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="animate-fadeUp">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
            <BadgeCheck aria-hidden="true" className="h-4 w-4" />
            Charlotte local, family-first, culturally aware
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Trusted Babysitters in Charlotte, When You Need Them Most
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Find vetted babysitters for date nights, weekends, emergency childcare, and recurring care, with support for families across every Charlotte community.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#parents">Find a Babysitter</ButtonLink>
            <ButtonLink href="#sitters" variant="secondary">Become a Babysitter</ButtonLink>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              ["250+", "Charlotte families"],
              ["24 hr", "request window"],
              ["All", "communities welcome"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold text-brand-700">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fadeUp lg:pl-4" style={{ animationDelay: "120ms" }}>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-50 shadow-soft">
            <img
              src="charlotte-sitters-hero.png"
              alt="Babysitter helping a Charlotte family with children at a bright kitchen table"
              width={1400}
              height={1000}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 right-4 grid gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft sm:left-auto sm:right-6 sm:w-80">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 text-brand-700">
                <CalendarClock aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink">Date-night sitter found</p>
                <p className="text-sm text-slate-500">Ballantyne, Saturday 6:30 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                <HeartHandshake aria-hidden="true" className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-slate-600">Share language, routine, meal, and household preferences when you request care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
