import { ButtonLink } from "@/components/button-link";

export function FinalCTA() {
  return (
    <section className="bg-ink py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-100">Charlotte Sitters</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Find Trusted Childcare?
          </h2>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href="#parents">Find a Babysitter</ButtonLink>
          <ButtonLink href="#sitters" variant="secondary">Become a Babysitter</ButtonLink>
        </div>
      </div>
    </section>
  );
}
