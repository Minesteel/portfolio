import LayoutClient from '@/components/LayoutClient'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from 'next'
import "./globals.css";

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Mon portfolio',
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <LayoutClient>{children}</LayoutClient>
        </LanguageProvider>
      </body>
    </html>
  )
}