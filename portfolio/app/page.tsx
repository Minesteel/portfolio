import Image from 'next/image'
import { Button } from '@/components/Button';
import Card from '@/components/Card';
import projects from '@/data/projects.json';
import skillsData from '@/data/skills.json';
import SkillBadge from '@/components/SkillBadge';
import { SkillProps } from '@/types/skill';

const skills = skillsData.skills as SkillProps[];
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="">
        <section className="relative w-[calc(100vw-100px)] h-screen flex items-center justify-center overflow-hidden" id="hero">
          <Image
            src="/wallpaper_network.jpg"
            alt="Background Hero"
            fill
            priority
            className="object-cover -z-10"
          />
          
          <div className="absolute inset-0 bg-black/40 -z-10" />
          
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4"> - Loris Pineaud - </h1>
            <p className="text-2xl mb-8">Ingénieur logiciel en devenir<br/>Actuellement en Master 1 Génie logiciel</p>
            <Button name="Contactez-moi"></Button>
          </div>
        </section>
        <section className="p-6 h-screen" id="about">
          <h2 className="text-4xl font-bold mb-6">- À propos -</h2>
        </section>
        <section className="p-6 h-screen" id="skills">
          <h2 className="text-4xl font-bold mb-6">- Compétences -</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} data={skill} />
            ))}
          </div>
        </section>
        <section className="p-6 h-screen" id="projects">
          <h2 className="text-4xl font-bold mb-6">- Projets -</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.projects.map((project) => (
              <Card key={project.id} data={project} />
            ))}
            </div>
        </section>
        <section className="p-6 h-screen" id="degrees">
          <h2 className="text-4xl font-bold mb-6">- Diplômes -</h2>
        </section>
        <section className="p-6 h-screen" id="contact">
          <h2 className="text-4xl font-bold mb-6">- Contact -</h2>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-center w-full h-24 border-t gap-4 ">
        <div className="flex space-x-4">
          <a href="/" className='hover:text-fuchsia-400 transition-colors'>Github</a>
          <span>|</span>
          <a href="/" className='hover:text-fuchsia-400 transition-colors'>Linkedin</a>
        </div>
        <div className="text-sm text-gray-500">
          ©Loris Pineaud. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}