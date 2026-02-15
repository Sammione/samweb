import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeuraCore AI | Engineering Intelligent Systems for the Future",
  description: "NeuraCore AI builds predictive, infrastructure-grade AI systems and trains the next generation of data scientists for emerging markets.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Infrastructure AI", "Data Science Academy", "Predictive Analytics", "Africa AI"],
  openGraph: {
    title: "NeuraCore AI | Engineering Intelligent Systems",
    description: "Infrastructure-grade AI systems and talent development.",
    url: "https://neuracore.ai",
    siteName: "NeuraCore AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-secondary/30`}>
        {children}
      </body>
    </html>
  );
}
