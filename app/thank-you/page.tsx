import Link from "next/link";
import { CheckCircle2, Mail } from "lucide-react";

export const metadata = {
  title: "Request Received | Charlotte Sitters",
  description: "Thank you for contacting Charlotte Sitters."
};

export default function ThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-50 px-4 py-12">
      <section className="w-full max-w-2xl rounded-lg border border-slate-100 bg-white p-8 text-center shadow-soft sm:p-10">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-700">
          <CheckCircle2 aria-hidden="true" className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Thank you. Your request was received.
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Charlotte Sitters has your information and will follow up soon. You can also email us directly if anything changes.
        </p>
        <a
          href="mailto:hello@charlottesitters.com"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-brand-200 hover:bg-brand-50"
        >
          <Mail aria-hidden="true" className="h-4 w-4" />
          hello@charlottesitters.com
        </a>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-bold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            Back to Charlotte Sitters
          </Link>
        </div>
      </section>
    </main>
  );
}
