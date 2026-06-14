import { Mail, ShieldCheck, HeartPulse, CreditCard } from "lucide-react";
import { stripeBookingPlaceholder } from "@/lib/stripe";

const badges = [
  { label: "Background check ready", Icon: ShieldCheck },
  { label: "CPR certification visible", Icon: HeartPulse },
  { label: "Stripe booking placeholder", Icon: CreditCard }
];

export function ContactStrip() {
  return (
    <section className="bg-brand-50 py-12">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Contact</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink">Questions before you get started?</h2>
          <a href="mailto:hello@charlottesitters.com" className="mt-3 inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900">
            <Mail aria-hidden="true" className="h-5 w-5" />
            hello@charlottesitters.com
          </a>
          <p className="mt-3 text-sm text-slate-500">{stripeBookingPlaceholder.note}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:w-[560px]">
          {badges.map(({ label, Icon }) => (
            <div key={label} className="flex min-h-24 items-center gap-3 rounded-lg border border-brand-100 bg-white p-4 shadow-sm">
              <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-700" />
              <span className="text-sm font-bold text-ink">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
