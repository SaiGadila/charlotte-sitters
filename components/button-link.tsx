import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-brand-600 text-white shadow-soft hover:bg-brand-700 focus-visible:outline-brand-600"
      : "border border-slate-200 bg-white text-ink hover:border-brand-200 hover:bg-brand-50 focus-visible:outline-brand-600";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${classes} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
