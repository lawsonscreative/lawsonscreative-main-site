import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

// Lazy load cookie consent to avoid blocking initial render
const CookieConsent = dynamic(() => import("@/components/CookieConsent"), {
  ssr: false,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Website Design for Small Businesses | Lawsons Creative",
  description: "We modernise tired, awkward and DIY websites for small UK service businesses. Based in Kent, working with trades, pet care, and local services across the UK.",
  keywords: ["website design", "small business websites", "website redesign", "trades websites", "pet care websites", "web design Kent", "website designer UK"],
  openGraph: {
    title: "Lawsons Creative | Modern Websites for Small Businesses",
    description: "We modernise tired, awkward and DIY websites for small UK service businesses. Based in Kent, working with trades, pet care, and local services across the UK.",
    url: "https://lawsonscreative.co.uk",
    siteName: "Lawsons Creative",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Resource hints for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://plausible.io" />
        <StructuredData />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        {/* Privacy-friendly analytics by Plausible - loaded after interactive for performance */}
        <script defer data-domain="lawsonscreative.co.uk" src="https://plausible.io/js/pa-OXqteu7AAgLEOfejtV_6h.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`
        }} />
      </body>
    </html>
  );
}
