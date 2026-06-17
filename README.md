# Charlotte Sitters Landing Page

A modern, mobile-first landing page for Charlotte Sitters, built with Next.js 15, TypeScript, Tailwind CSS, and Lucide React.

## Features

- Responsive startup-style landing page
- Sticky navigation with mobile menu
- SEO metadata and Open Graph tags
- Parent and babysitter signup forms
- Formspree/Web3Forms-ready form endpoints
- Trust badges, testimonials, FAQ, and final CTA
- Placeholder Stripe booking configuration for future checkout work

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Form Setup

By default, both forms send submissions to `aparna10kalyanam@gmail.com` through FormSubmit.

The first real submission may trigger a FormSubmit activation email. Open that email once to activate delivery.

To use Formspree, Web3Forms, or another provider instead, add custom endpoints:

```bash
NEXT_PUBLIC_PARENT_FORM_ENDPOINT=https://formspree.io/f/your-parent-form-id
NEXT_PUBLIC_SITTER_FORM_ENDPOINT=https://formspree.io/f/your-sitter-form-id
```

For production, add those variables in your hosting provider.

## Useful Commands

```bash
npm run type-check
npm run build
npm run start
```

## GitHub Pages

This project is configured for static GitHub Pages deployment through `.github/workflows/deploy.yml`.

After pushing to `main`, enable Pages in the repository settings with **Source: GitHub Actions**. The workflow builds the static app into `out/` and deploys it.

Custom domain: `quickcare.today`.

## Future Booking Integration

The file `lib/stripe.ts` contains a placeholder for adding Stripe Checkout or booking deposits later.
