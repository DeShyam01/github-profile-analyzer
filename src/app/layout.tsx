import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import Providers from "./ThemeProvider";
import "./globals.css";

const font = Mona_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Github Profile Analyser",
  description: "Analyze Github profiles with ease",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="h-full antialiased font.variable font-sans" suppressHydrationWarning>
      <body className="flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
