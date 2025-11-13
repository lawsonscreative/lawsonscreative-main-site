import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
