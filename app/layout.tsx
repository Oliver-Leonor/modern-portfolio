import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE_URL = "https://oliver-leonor.vercel.app";
const TITLE = "Oliver Leonor | Full-stack developer & AI engineer";
const DESCRIPTION =
  "I ship AI-native full-stack apps end to end with Claude Code. Fourteen years in IT, six shipping production software. Available for senior contract or full-time roles, PH / AU timezone.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Oliver Leonor",
  },
  description: DESCRIPTION,
  authors: [{ name: "Oliver Leonor" }],
  keywords: [
    "Oliver Leonor",
    "full-stack developer",
    "AI engineer",
    "Next.js",
    "TypeScript",
    "Claude Code",
    "Philippines developer",
    "remote developer",
    "senior developer",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Oliver Leonor",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#161617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable} dark`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
