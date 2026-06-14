import { sitterFormEndpoint } from "@/lib/forms";
import { FormField } from "@/components/form-field";

export function BabysitterForm() {
  return (
    <form action={sitterFormEndpoint} method="POST" className="grid gap-5 rounded-lg border border-slate-100 bg-brand-50/40 p-5 shadow-soft sm:grid-cols-2 sm:p-6">
      <input type="hidden" name="form_type" value="babysitter_signup" />
      <input type="hidden" name="_subject" value="New Charlotte Sitters babysitter application" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://saigadila.github.io/charlotte-sitters/#sitters" />
      <FormField label="Name" name="name" placeholder="Jordan Smith" />
      <FormField label="Email" name="email" type="email" placeholder="jordan@example.com" />
      <FormField label="Phone" name="phone" type="tel" placeholder="(704) 555-0188" />
      <FormField label="Experience Level" name="experience_level">
        <select
          id="experience_level-field"
          name="experience_level"
          required
          className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-base font-normal text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
        >
          <option value="">Select experience</option>
          <option>Less than 1 year</option>
          <option>1-2 years</option>
          <option>3-5 years</option>
          <option>5+ years</option>
        </select>
      </FormField>
      <FormField label="CPR Certified" name="cpr_certified">
        <select
          id="cpr_certified-field"
          name="cpr_certified"
          required
          className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-base font-normal text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
        >
          <option value="">Select one</option>
          <option>Yes</option>
          <option>No</option>
          <option>In progress</option>
        </select>
      </FormField>
      <FormField label="Availability" name="availability" placeholder="Weeknights and weekends" />
      <button type="submit" className="min-h-12 rounded-full bg-ink px-6 text-sm font-bold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:col-span-2">
        Apply as a Babysitter
      </button>
      <p className="text-xs leading-5 text-slate-500 sm:col-span-2">
        Stripe and booking workflows can be connected after sitter approval and parent matching are live.
      </p>
    </form>
  );
}
