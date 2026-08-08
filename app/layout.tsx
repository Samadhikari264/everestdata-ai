import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://everestdata.ai"),
  title: "Everest Data | Data, AI & Runtime Security for the Agentic Enterprise",
  description:
    "Everest Data builds governed enterprise data and AI platforms and runtime security infrastructure for autonomous AI agents.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Everest Data | Data, AI & Runtime Security for the Agentic Enterprise",
    description:
      "Everest Data builds governed enterprise data and AI platforms and runtime security infrastructure for autonomous AI agents.",
    url: "https://everestdata.ai",
    siteName: "Everest Data",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Everest Data brand graphic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everest Data | Data, AI & Runtime Security for the Agentic Enterprise",
    description:
      "Everest Data builds governed enterprise data and AI platforms and runtime security infrastructure for autonomous AI agents.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--page-bg)] text-[var(--text)]">{children}</body>
    </html>
  );
}
