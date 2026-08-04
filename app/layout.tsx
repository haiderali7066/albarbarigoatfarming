import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import FloatingNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingGoatChat from "@/components/FloatingGoatChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://albarbarigoatfarming.com"),

  title: {
    default: "AL Barbari Goat Farming | Premium Livestock & Farm Services in Lahore",
    template: "%s | AL Barbari Goat Farming",
  },

  description:
    "Discover top-quality healthy Barbari goats for Aqeeqah, Sadqah, Qurbani, family meals, and farm services with secure doorstep delivery across Lahore.",

  keywords: [
    "Al Barbari Goat Farming",
    "Barbari goats",
    "Goat farming Lahore",
    "Buy goats online",
    "Aqeeqah goats",
    "Sadqah goats",
    "Qurbani goats",
    "Healthy goats Lahore",
    "Livestock farm Pakistan",
    "Goat delivery Lahore",
  ],

  verification: {
    google: "5QHV2-VJ5a_i3WKRqYXH7T8FSfiABzroaQp87ewO1OA",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "AL Barbari Goat Farming",
    description:
      "Premium Barbari goats for Aqeeqah, Sadqah, Qurbani, and family meals with trusted farm-to-home delivery in Lahore.",

    url: "https://albarbarigoatfarming.com",
    siteName: "AL Barbari Goat Farming",

    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "AL Barbari Goat Farming",
      },
    ],

    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AL Barbari Goat Farming",
    description:
      "Premium Barbari goats for Aqeeqah, Sadqah, Qurbani & family meals.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://albarbarigoatfarming.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-[#f8faf9] font-sans antialiased text-[#0a1a0f] selection:bg-[#ffc222] selection:text-[#0a1a0f]">
        {/* Floating Navigation */}
        <FloatingNavbar />

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Floating Widgets */}
        <WhatsAppButton />
        <FloatingGoatChat />
      </body>
    </html>
  );
}