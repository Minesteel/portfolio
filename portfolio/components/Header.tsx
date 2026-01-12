// components/Header.tsx
"use client"
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface HeaderProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export default function Header({ isCollapsed, toggleSidebar }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="h-16 bg-neutral-800 grid grid-cols-3 items-center px-6 sticky top-0 z-30">
      <div>
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-500 hover:cursor-pointer rounded-lg transition-colors mr-4"
          >
          {/* On change l'icône selon l'état */}
          {isCollapsed ? <PanelLeftOpen size={22} /> : <PanelLeftClose size={22} />}
        </button>
        <span className="font-bold text-lg tracking-tight p-2 bg-neutral-600 rounded-full w-8 h-8 ">LP</span>
      </div>

      <div className="justify-self-center hover:bg-fuchsia-600 rounded-full p-2 transition-colors duration-300 hover:text-white text-fuchsia-400">
        <button className="hover:cursor-pointer"
        onClick={(e) => {
                e.preventDefault();
                const targetElement = document.querySelector('#hero');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
          <h1 className="font-bold text-3xl tracking-tight ">{t.header.title}</h1>
        </button>
      </div>

      <select 
        name="languages" 
        id="language-select" 
        className="justify-self-end rounded-md p-1 bg-neutral-700 text-white hover:cursor-pointer hover:bg-neutral-600 transition-colors"
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>

    </header>
  )
}