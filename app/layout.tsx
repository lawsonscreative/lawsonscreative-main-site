import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Web Design for Small Businesses in the UK | Lawsons Creative",
  description: "Professional website design and development for small service businesses. Fast delivery, transparent pricing, real results. Based in London, serving UK-wide.",
  keywords: ["web design", "website design London", "small business websites", "affordable web design", "website designer UK"],
  openGraph: {
    title: "Lawsons Creative | Modern Websites for Small Businesses",
    description: "Professional website design and development for small service businesses. Fast delivery, transparent pricing, real results.",
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
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://plausible.io" />
        <link rel="dns-prefetch" href="https://plausible.io" />
        <StructuredData />
        {/* Privacy-friendly analytics by Plausible - deferred for performance */}
        <script defer data-domain="lawsonscreative.co.uk" src="https://plausible.io/js/pa-OXqteu7AAgLEOfejtV_6h.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`
        }} />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
