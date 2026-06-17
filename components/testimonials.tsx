import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We wanted someone comfortable with our dinner routine, bedtime schedule, and the way our home runs. Charlotte Sitters made it easy to share those preferences up front.",
    name: "Avery R.",
    detail: "Ballantyne parent"
  },
  {
    quote:
      "The background check and CPR details made the decision easier. Our sitter handled bedtime beautifully and sent updates without us asking.",
    name: "Chris M.",
    detail: "Myers Park parent"
  },
  {
    quote:
      "After-school care used to be a weekly scramble. Now we have trusted sitters nearby who understand our routine and our kids actually look forward to seeing.",
    name: "Priya S.",
    detail: "Ballantyne parent"
  }
];

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Parent Stories</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Trusted by Charlotte families with full calendars.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
              <Quote aria-hidden="true" className="h-8 w-8 text-brand-500" />
              <p className="mt-5 leading-7 text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-bold text-ink">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
