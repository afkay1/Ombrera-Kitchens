import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bodoni_Moda, Instrument_Sans, Amiri, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LangProvider, LANG_BOOT_SCRIPT } from "@/lib/i18n";
import SmoothScroll from "@/components/SmoothScroll";
import { TransitionProvider } from "@/components/Transition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import SkipLink from "@/components/SkipLink";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/format";
import { BRAND } from "@/lib/data/site";

const display = Bodoni_Moda({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });
const displayAr = Amiri({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-display-ar", display: "swap" });
const ar = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["300", "400", "500", "600"], variable: "--font-ar", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Ombrera Kitchens | Luxury Kitchen Design Studio in Riyadh", template: "%s | Ombrera Kitchens" },
  description:
    "Ombrera Kitchens designs and builds bespoke luxury kitchens in Riyadh and across the Gulf: modern, Italian, Japandi, Shaker, industrial and Gulf majlis styles.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Ombrera Kitchens", images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Ombrera Kitchens at night" }] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#0E0D0C", width: "device-width", initialScale: 1 };

const ORG = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Ombrera Kitchens",
  url: SITE_URL,
  image: `${SITE_URL}/og.jpg`,
  email: BRAND.email,
  telephone: BRAND.phone,
  address: { "@type": "PostalAddress", streetAddress: "Takhassusi Street, Al Mohammadiyah", addressLocality: "Riyadh", postalCode: "12363", addressCountry: "SA" },
  openingHours: ["Sa-Th 10:00-21:00", "Fr 16:00-21:00"],
};

/** Runs before hydration: remembers whether the intro has already played this session. */
const BOOT = `try{window.__introSeen=!!sessionStorage.getItem("ombrera-intro")}catch(e){window.__introSeen=false}${LANG_BOOT_SCRIPT}`;

/** Reveal targets start hidden only when JS runs; <noscript> keeps everything visible otherwise. */
const PREPAINT = "@media (prefers-reduced-motion: no-preference){html [data-reveal]{opacity:0}html [data-cover]{display:block}}";
const NOSCRIPT = "[data-reveal]{opacity:1!important}[data-cover]{display:none!important}.intro{display:none!important}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${displayAr.variable} ${ar.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: PREPAINT }} />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: NOSCRIPT }} />
        </noscript>
        <Script id="boot" strategy="beforeInteractive">{BOOT}</Script>
      </head>
      <body>
        <JsonLd data={ORG} />
        <LangProvider>
          <TransitionProvider>
            <Intro />
            <SkipLink />
            <SmoothScroll />
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </TransitionProvider>
        </LangProvider>
      </body>
    </html>
  );
}
