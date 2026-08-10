import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Saddleback Land Company | Rural Land Acquisition",
  description:
    "Saddleback Land Company buys rural land directly across the South and Midwest. Our own capital, our own closings, and a straight answer either way.",
  keywords: [
    "land acquisition",
    "rural land",
    "sell land",
    "American South",
    "Midwest land",
    "land buyers",
    "landowners",
  ],
  openGraph: {
    title: "Saddleback Land Company | Rural Land Acquisition",
    description:
      "Saddleback Land Company buys rural land directly across the South and Midwest. Our own capital, our own closings, and a straight answer either way.",
    type: "website",
    locale: "en_US",
    siteName: "Saddleback Land Company",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saddleback Land Company - Good Land Deserves Good Stewards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saddleback Land Company | Rural Land Acquisition",
    description:
      "Saddleback Land Company buys rural land directly across the South and Midwest. Our own capital, our own closings, and a straight answer either way.",
    images: ["/og-image.png"],
  },
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%231C1410'/><path d='M4 24 L10 12 L16 18 L22 8 L28 24 Z' fill='%23C9A96E'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
