// app/layout.tsx
"use client"

import { useState } from 'react'
import Header from '@/components/Header'
import Sidenav from '@/components/Sidenav'
import { LanguageProvider } from '@/contexts/LanguageContext'
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


export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Par défaut, on peut décider qu'elle est ouverte sur grand écran
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <div className="flex flex-col h-screen">
            <Header isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

            <div className="flex flex-1 overflow-hidden">
              <Sidenav isCollapsed={isCollapsed} />

              <main className="flex-1 overflow-y-auto">
                <div className="">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}