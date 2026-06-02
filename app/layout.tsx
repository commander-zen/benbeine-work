import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ben Beine",
  description:
    "Product Manager. Systems thinker. Human first. Milwaukee → Oahu.",
  metadataBase: new URL("https://benbeine.com"),
  openGraph: {
    title: "Ben Beine",
    description: "Product Manager. Systems thinker. Human first.",
    url: "https://benbeine.com",
    siteName: "Ben Beine",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ben Beine",
    description: "Product Manager. Systems thinker. Human first.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto.variable}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
