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
  title: "Gravolytics | Open-source gravity research surface",
  description:
    "Gravolytics is an open-source research surface for gravity, electrogravitics, field visualization, experiment triage, and agent-readable collaboration on hard physics problems.",
  keywords: [
    "Gravolytics",
    "gravity research",
    "electrogravitics",
    "field visualization",
    "open-source physics",
    "agent collaboration",
    "experiment triage",
    "spacetime analysis",
  ],
  openGraph: {
    title: "Gravolytics | Open-source gravity research surface",
    description:
      "A site built so humans and agents can understand, inspect, and contribute to gravity-adjacent research without drowning in folklore.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
