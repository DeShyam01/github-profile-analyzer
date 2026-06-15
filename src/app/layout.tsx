import type { Metadata } from "next";
import { Mona_Sans, Lora } from "next/font/google";
import Providers from "./ThemeProvider";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });

const font = Mona_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Github Profile Analyser",
  description: "Analyze Github profiles with ease",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font.variable font-sans",
        "font-serif",
        lora.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex flex-col overflow-x-hidden">
        <Providers>
          <Header />
          <main className="flex-1 min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
