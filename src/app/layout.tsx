import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MM Traders | Trusted Paddy Procurement & Supply – Nathakottai, Ramnad",
  description:
    "MM Traders is a leading paddy trading and procurement business based in Nathakottai, Ramanathapuram (Ramnad), Tamil Nadu. We connect farmers, traders, and rice mills across South India.",
  keywords: "paddy trading, rice procurement, MM Traders, Nathakottai, Ramnad, Ramanathapuram, Tamil Nadu, rice mill supply, paddy supplier",
  openGraph: {
    title: "MM Traders | Trusted Paddy Procurement & Supply",
    description:
      "Connecting farmers, traders, and rice mills across South India since decades. Based in Nathakottai, Ramnad.",
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
      <body className={`${inter.variable} ${playfair.variable} antialiased font-[var(--font-inter)]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
