import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.scss";
import { Providers } from "./providers";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Time Attendance",
  description: "Time Attendance App",
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
    { rel: "apple-touch-icon", url: "icons/apple-touch-icon.png" },
    { rel: "icon", url: "icons/favicon-32x32.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx("min-h-screen  bg antialiased")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen ">
            <Navbar />
            <main className="mb-6 relative px-4  flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
