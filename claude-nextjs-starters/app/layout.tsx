import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Starter Kit",
    template: "%s - Next.js Starter Kit",
  },
  description: "모던 웹 개발을 위한 완벽한 Next.js 스타터킷 - Next.js 16, React 19, TypeScript, Tailwind CSS v4, ShadcnUI",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadcnUI", "스타터킷", "웹 개발"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "Next.js Starter Kit",
    description: "모던 웹 개발을 위한 완벽한 Next.js 스타터킷",
    siteName: "Next.js Starter Kit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Starter Kit",
    description: "모던 웹 개발을 위한 완벽한 Next.js 스타터킷",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
