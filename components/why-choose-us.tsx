import { CheckCircle2, Globe2, HeartPulse, MessageCircle, ShieldCheck, Star, Utensils, Zap } from "lucide-react";

const features = [
  { label: "Background Checked Sitters", Icon: ShieldCheck },
  { label: "CPR Certified Caregivers", Icon: HeartPulse },
  { label: "Last-Minute Availability", Icon: Zap },
  { label: "Secure Messaging", Icon: MessageCircle },
  { label: "Parent Reviews", Icon: Star },
  { label: "Local Charlotte Community", Icon: CheckCircle2 },
  { label: "Language Preferences", Icon: Globe2 },
  { label: "Routine and Meal Notes", Icon: Utensils }
];

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Why Parents Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built for trust before the first booking.
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-600">
            Every part of Charlotte Sitters is designed around safety, clarity, and quick communication for busy families, from Indian households to every community across Charlotte.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ label, Icon }) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="font-semibold text-ink">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
