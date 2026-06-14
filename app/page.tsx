import { BabysitterForm } from "@/components/babysitter-form";
import { CommunityCare } from "@/components/community-care";
import { ContactStrip } from "@/components/contact-strip";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { ParentForm } from "@/components/parent-form";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <CommunityCare />
      <WhyChooseUs />
      <section id="parents" className="bg-brand-50/50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">
              Parent Signup
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Tell us what kind of care your family needs.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Charlotte Sitters helps match parents with local caregivers for
              one-time, recurring, and last-minute childcare requests. Add language, culture, meal, and routine notes so the match feels right for your home.
            </p>
          </div>
          <ParentForm />
        </div>
      </section>
      <section id="sitters" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">
              Babysitter Applications
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Join a trusted childcare community in Charlotte.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Apply to connect with families seeking reliable, reviewed, and
              safety-minded sitters across the Charlotte area. Multilingual and culturally aware sitters are especially welcome.
            </p>
          </div>
          <BabysitterForm />
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <ContactStrip />
      <FinalCTA />
    </main>
  );
}
