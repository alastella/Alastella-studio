import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"], axes: ["opsz", "wdth"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alastella.com"),
  title: "Alastella: AI software for everyday use",
  description: "Alastella is an AI software development company building AI software for everyday use: private by default, quick to learn, fairly priced.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: "Alastella: AI software for everyday use", description: "AI software built for everyday use.", url: "/", siteName: "Alastella", locale: "en_NG" },
  twitter: { card: "summary_large_image", title: "Alastella: AI software for everyday use", description: "AI software built for everyday use." },
};

export const viewport: Viewport = { themeColor: "#efede6" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
