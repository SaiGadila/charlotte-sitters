import { Languages, MapPin, PartyPopper, School, Soup, Users } from "lucide-react";

const captions = [
  {
    title: "For Charlotte families",
    description: "Request sitters who understand homework time, dinner routines, weekend plans, and changing family schedules.",
    Icon: PartyPopper
  },
  {
    title: "Welcoming every community",
    description: "Charlotte Sitters is built for families of every background, culture, language, and neighborhood.",
    Icon: Users
  },
  {
    title: "Language preferences",
    description: "Share language preferences so families and caregivers can communicate comfortably when available.",
    Icon: Languages
  },
  {
    title: "After-school support",
    description: "Find help for school pickup windows, tutoring routines, snacks, and evening activities.",
    Icon: School
  },
  {
    title: "Meal and routine notes",
    description: "Add allergy, meal, bedtime, screen-time, or quiet-time notes for your family.",
    Icon: Soup
  },
  {
    title: "Charlotte neighborhoods",
    description: "Supporting families in Ballantyne, South Charlotte, University, Matthews, and beyond.",
    Icon: MapPin
  }
];

export function CommunityCare() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Community-Aware Care</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built for every Charlotte family.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Parents can share the details that make childcare feel familiar: language preferences, food notes, school routines, schedules, and household expectations.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {captions.map(({ title, description, Icon }) => (
            <article key={title} className="rounded-lg border border-slate-100 bg-slate-50 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-700 shadow-sm">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
