import type { Metadata } from "next";
// import { Chelsea_Market } from "next/font/google";
import { Mona_Sans } from "next/font/google";
import Providers from "./ThemeProvider";
import "./globals.css";

const font = Mona_Sans({
  // weight: "400",
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Github Profile Analyser",
  description: "Analyze Github profiles with ease",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${font.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
