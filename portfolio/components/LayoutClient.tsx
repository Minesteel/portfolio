"use client"

import { useState } from 'react'
import Header from '@/components/Header'
import Sidenav from '@/components/Sidenav'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
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
  )
}