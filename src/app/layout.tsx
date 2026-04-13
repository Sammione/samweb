import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "QoreLogic | Engineering Intelligent Systems for the Future",
  description: "QoreLogic builds predictive, infrastructure-grade AI systems and trains the next generation of data scientists for emerging markets.",
  metadataBase: new URL("https://qorelogic.com"),
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Infrastructure AI", "Data Science Academy", "Predictive Analytics", "Africa AI"],
  openGraph: {
    title: "QoreLogic | Engineering Intelligent Systems",
    description: "Infrastructure-grade AI systems and talent development.",
    url: "https://qorelogic.com",
    siteName: "QoreLogic",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QoreLogic - Engineering Intelligent Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QoreLogic | Engineering Intelligent Systems",
    description: "Infrastructure-grade AI systems and talent development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0B0F1A" />
      </head>
      <body className={`${inter.className} antialiased selection:bg-secondary/30 selection:text-white`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-secondary focus:text-white focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
