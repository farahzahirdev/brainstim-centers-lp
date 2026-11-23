import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import ScrollProgress from "@/components/ScrollProgress";
import { PHONE_NUMBER, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Neuro-Navigated TMS in California`,
  description: `If medication hasn’t helped, there’s another way. Drug-free, FDA-cleared TMS targeted to your own brain and reviewed by a neurosurgeon. Book a free consultation or call ${PHONE_NUMBER}.`,
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png", sizes: "180x180" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/favicon.png",
  },
  keywords: [
    "BrainStim Centers",
    "neuro-navigated TMS",
    "TMS therapy California",
    "TMS Valencia",
    "TMS Calabasas",
    "TMS Van Nuys",
    "TMS Lancaster",
    "TMS Fremont",
    "treatment-resistant depression",
    "accelerated TMS",
  ],
  openGraph: {
    title: `${SITE_NAME} | If medication hasn’t helped, there’s another way`,
    description:
      "Drug-free, FDA-cleared TMS, targeted to your own brain. Neurosurgeon-reviewed plans. Free consultation.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1328",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
        <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
