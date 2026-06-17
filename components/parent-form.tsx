import { parentFormEndpoint } from "@/lib/forms";
import { FormField } from "@/components/form-field";

export function ParentForm() {
  return (
    <form action={parentFormEndpoint} method="POST" className="grid gap-5 rounded-lg border border-slate-100 bg-white p-5 shadow-soft sm:grid-cols-2 sm:p-6">
      <input type="hidden" name="form_type" value="parent_signup" />
      <input type="hidden" name="_subject" value="New Charlotte Sitters parent request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://saigadila.github.io/charlotte-sitters/thank-you/" />
      <FormField label="Name" name="name" placeholder="Avery Johnson" />
      <FormField label="Email" name="email" type="email" placeholder="avery@example.com" />
      <FormField label="Phone" name="phone" type="tel" placeholder="(704) 555-0123" />
      <FormField label="ZIP Code" name="zip_code" inputMode="numeric" placeholder="28203" />
      <FormField label="Child Age" name="child_age" placeholder="4 and 7" />
      <FormField label="Language or Cultural Preferences" name="family_preferences" required={false} placeholder="Hindi, Telugu, vegetarian meals, bedtime routine" />
      <FormField label="Care Needed" name="care_needed">
        <select
          id="care_needed-field"
          name="care_needed"
          required
          className="min-h-12 rounded-lg border border-slate-200 bg-white px-4 text-base font-normal text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
        >
          <option value="">Select care type</option>
          <option>Date night</option>
          <option>Weekend care</option>
          <option>After-school care</option>
          <option>Last-minute childcare</option>
          <option>Recurring care</option>
        </select>
      </FormField>
      <button type="submit" className="min-h-12 rounded-full bg-brand-600 px-6 text-sm font-bold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:col-span-2">
        Get Started
      </button>
      <p className="text-xs leading-5 text-slate-500 sm:col-span-2">
        Requests are sent directly to the Charlotte Sitters inbox.
      </p>
    </form>
  );
}
