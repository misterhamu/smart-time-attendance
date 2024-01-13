import clsx from "clsx";
import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.scss";
import { Providers } from "./providers";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({
  weight: ['300','400', '500','600','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kanit',
})

export const metadata: Metadata = {
  title: "Smart Time Attendance",
  description: "Smart Time Attendance App",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Thitipat Na Nakorn" },
    {
      name: "Thitipat Na Nakorn",
      url: "https://www.linkedin.com/in/thitipat-na-nakorn/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
    { rel: "icon", url: "/icons/favicon-32x32.png" },
  ],
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    title: "Smart Time Attendance",
    description: "Smart Time Attendance App",
    siteName: "Smart Time Attendance",
    images: [{
      url: "/icons/android-chrome-512x512.png",
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={kanit.className}>
      <body className={clsx("min-h-screen  bg antialiased")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen ">
            <Navbar />
            <main className="mb-6 relative px-4  flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
