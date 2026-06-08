import type { Metadata } from "next";
import { Zilla_Slab, Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.setAttribute('data-theme','light');}}catch(e){}})()`;

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
    <html
      lang="en"
      data-theme="light"
      className={`${zillaSlab.variable} ${notoSans.variable} ${notoSansMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
