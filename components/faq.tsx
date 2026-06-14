const faqs = [
  {
    question: "Are babysitters background checked?",
    answer:
      "Yes. Charlotte Sitters is designed around verified caregiver profiles, background check status, parent reviews, and clear safety signals before families request care."
  },
  {
    question: "How much does childcare cost?",
    answer:
      "Rates vary by sitter experience, number of children, care type, and timing. Families can review sitter details and confirm pricing before booking."
  },
  {
    question: "Can I book same-day care?",
    answer:
      "Yes, the platform is built to support last-minute childcare requests when local sitters are available. Same-day options depend on schedule and location."
  },
  {
    question: "Are sitters CPR certified?",
    answer:
      "Many sitters are CPR certified, and caregiver profiles can show certification status so parents can prioritize the qualifications that matter most."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions parents ask first.
          </h2>
        </div>
        <div className="mt-10 divide-y divide-slate-100 rounded-lg border border-slate-100 bg-white shadow-sm">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5 open:bg-brand-50/40">
              <summary className="cursor-pointer list-none text-base font-bold text-ink marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
