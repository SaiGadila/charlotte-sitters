import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charlotte Sitters | Trusted Babysitters in Charlotte, NC",
  description:
    "Find vetted babysitters in Charlotte for date nights, weekends, emergency childcare, after-school care, and recurring care, with community-aware support for Indian families and every Charlotte family.",
  keywords: [
    "Charlotte babysitters",
    "babysitting Charlotte NC",
    "childcare Charlotte",
    "date night sitter",
    "CPR certified babysitter",
    "Indian babysitter Charlotte",
    "community childcare Charlotte"
  ],
  metadataBase: new URL("https://charlottesitters.com"),
  openGraph: {
    title: "Charlotte Sitters",
    description:
      "Trusted, community-aware babysitters in Charlotte, when you need them most.",
    url: "https://charlottesitters.com",
    siteName: "Charlotte Sitters",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/charlotte-sitters-hero.png",
        width: 1400,
        height: 1000,
        alt: "Babysitter and Charlotte family at a bright kitchen table"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlotte Sitters",
    description: "Find trusted, community-aware babysitters in Charlotte, NC.",
    images: ["/charlotte-sitters-hero.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
