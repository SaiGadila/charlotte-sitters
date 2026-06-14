import { CalendarCheck, Search, Smile } from "lucide-react";

const steps = [
  {
    title: "Find",
    description: "Search for available babysitters in your area.",
    Icon: Search
  },
  {
    title: "Book",
    description: "Request care in minutes.",
    Icon: CalendarCheck
  },
  {
    title: "Relax",
    description: "Enjoy peace of mind with verified caregivers.",
    Icon: Smile
  }
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Childcare requests without the back-and-forth.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map(({ title, description, Icon }) => (
            <article key={title} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
