// components/Sidenav.tsx
"use client"

import Link from 'next/link'
import { Home, User, Folder, GraduationCap, Briefcase, Mail } from 'lucide-react'

interface SidenavProps {
  isCollapsed: boolean;
}

const navItems = [
  { name: 'Accueil', href: '#hero', icon: Home },
  { name: 'À propos', href: '#about', icon: User },
  { name: 'Compétences', href: '#skills', icon: Folder },
  { name: 'Projets', href: '#projects', icon: Briefcase },
  { name: 'Expériences', href: '#experience', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Sidenav({ isCollapsed }: SidenavProps) {

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