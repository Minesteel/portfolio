// components/Sidenav.tsx
"use client"

import Link from 'next/link'
import { Home, User, Folder, GraduationCap, Briefcase, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface SidenavProps {
  isCollapsed: boolean;
}

export default function Sidenav({ isCollapsed }: SidenavProps) {
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: '#hero', icon: Home },
    { name: t.nav.about, href: '#about', icon: User },
    { name: t.nav.skills, href: '#skills', icon: Folder },
    { name: t.nav.projects, href: '#projects', icon: Briefcase },
    { name: t.nav.experience, href: '#experience', icon: GraduationCap },
    { name: t.nav.contact, href: '#contact', icon: Mail },
  ]

  return (
    <aside className={`
      transition-all duration-300 ease-in-out  flex flex-col
      ${isCollapsed ? 'w-20' : 'w-64 bg-neutral-800'}
    `}>
      <nav className="flex-1 p-4 space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <Link 
              href={`#${item.href.slice(1)}`}
              key={item.href} 
              className={`
                flex items-center gap-4 p-3 rounded-xl transition-colors hover:bg-fuchsia-600 hover:text-white text-gray-300
                ${isCollapsed ? 'justify-center' : ''}
              `}
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.querySelector(item.href);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              title={isCollapsed ? item.name : ''} // Tooltip quand c'est réduit
            >
              <Icon size={24} className="shrink-0" />
              {!isCollapsed && (
                <span className="font-medium whitespace-nowrap overflow-hidden">
                  {item.name}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}