"use client"
import Image from 'next/image'
import Card from '@/components/Card';
import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';
import SkillBadge from '@/components/SkillBadge';
import { SkillProps } from '@/types/skill';
import { ProjectsProps } from '@/types/project';
import ContactSection from '@/pages/Contact';
import { Download } from 'lucide-react';
import { useState } from 'react';

const skills = skillsData.skills as SkillProps[];
const projects = projectsData.projects as ProjectsProps[];

export default function Home() {
  const [activeTab, setActiveTab] = useState('Description');
  const [activeTabProjects, setActiveTabProjects] = useState('perso');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="">
        <section className="relative max-w-screen h-screen flex items-center justify-center overflow-hidden" id="hero">
          <Image
            src="/wallpaper_network.jpg"
            alt="Background Hero"
            fill
            priority
            className="object-cover -z-10"
          />
          
          <div className="absolute inset-0 bg-black/40 -z-10" />
          
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-fuchsia-400"> - Loris Pineaud - </h1>
            <p className="text-2xl mb-8">Ingénieur logiciel en devenir<br/>Actuellement étudiant en Master 1 Génie logiciel</p>
        <button className="px-4 py-2 bg-fuchsia-500 text-white rounded-lg hover:bg-fuchsia-600 hover:cursor-pointer transition-colors duration-300" 
        onClick={() => {
                const targetElement = document.querySelector('#contact');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
            Contactez-moi
            </button>
          </div>
        </section>
        <section className="p-6 min-h-screen" id="about">
          <h2 className="text-4xl font-bold mb-6">- À propos -</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-1">
              <Image 
                src="/profile1.jpg" 
                alt="Profile Picture" 
                width={200} height={200} 
                className="rounded-lg object-cover mx-auto md:mx-0 border-2 border-fuchsia-500 shadow-lg"
                />
            </div>
            <div className="flex-2 text-lg w-full">
              <div className="flex justify-center mb-4">
                <ul className="flex w-full justify-around space-x-4">
                  <li>
                    <button 
                      className={`p-1 rounded-xl transition-colors hover:bg-fuchsia-600 hover:text-white hover:cursor-pointer ${
                        activeTab === 'Description' ? 'bg-fuchsia-600 text-white' : 'text-gray-300'
                      }`}
                       onClick={()=>{
                        setActiveTab('Description');
                        const desc = document.getElementById('Description');
                        const infos = document.getElementById('Infos');
                        const passions = document.getElementById('Passions');
                        if(desc && infos && passions){
                          desc.classList.remove('hidden');
                          infos.classList.add('hidden');
                          passions.classList.add('hidden');
                        }
                       }}
                      >
                        Déscription
                    </button>
                  </li>
                  <li>
                    <button 
                    className={`p-1 rounded-xl transition-colors hover:bg-fuchsia-600 hover:text-white hover:cursor-pointer ${
                      activeTab === 'Infos' ? 'bg-fuchsia-600 text-white' : 'text-gray-300'
                    }`}
                    onClick={()=>{
                        setActiveTab('Infos');
                        const desc = document.getElementById('Description');
                        const infos = document.getElementById('Infos');
                        const passions = document.getElementById('Passions');
                        if(desc && infos && passions){
                          desc.classList.add('hidden');
                          infos.classList.remove('hidden');
                          passions.classList.add('hidden');
                        }
                       }}
                    >
                      Infos
                    </button>
                  </li>
                  <li>
                    <button 
                    className={`p-1 rounded-xl transition-colors hover:bg-fuchsia-600 hover:text-white hover:cursor-pointer ${
                      activeTab === 'Passions' ? 'bg-fuchsia-600 text-white' : 'text-gray-300'
                    }`}
                    onClick={()=>{
                        setActiveTab('Passions');
                        const desc = document.getElementById('Description');
                        const infos = document.getElementById('Infos');
                        const passions = document.getElementById('Passions');
                        if(desc && infos && passions){
                          desc.classList.add('hidden');
                          infos.classList.add('hidden');
                          passions.classList.remove('hidden');
                        }
                       }}
                    >
                      Passions
                    </button>
                  </li>
                </ul>
              </div>
              <div className="backdrop-blur-sm bg-neutral-800 p-4 rounded-lg">
                <div className="" id='Description'>
                  <p>
                    Bonjour! Je m'appelle Loris Pineaud, un passionné de technologie et d'innovation. Actuellement en Master 1 de Génie Logiciel, je suis déterminé à devenir un ingénieur logiciel compétent et créatif. Mon parcours académique m'a permis d'acquérir des compétences solides en développement logiciel, en gestion de projets et en résolution de problèmes complexes. Je suis constamment à la recherche de nouvelles opportunités pour apprendre et grandir dans le domaine du génie logiciel.
                  </p>
                </div>
                <div className="hidden" id='Infos'>
                  <p>
                    Âge : {new Date().getFullYear() - 2003 - (new Date() < new Date(new Date().getFullYear(), 9, 19) ? 1 : 0)} ans<br/>
                    Localisation : Bordeaux, France<br/>
                    Email : loris.pineaud003@gmail.com<br/>
                    Téléphone : +33 7 83 44 16 33<br/>
                  </p>
                </div>
                <div className="hidden" id='Passions'>
                  <p>
                    En dehors du codage, j'aime explorer les dernières tendances technologiques, participer à des hackathons et contribuer à des projets open source. J'apprécie également la lecture de livres sur le développement personnel et la technologie, ainsi que le voyage pour découvrir de nouvelles cultures et perspectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-6 min-h-screen" id="skills">
          <h2 className="text-4xl font-bold mb-6">- Compétences -</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} data={skill} />
            ))}
          </div>
        </section>
        <section className="p-6 min-h-screen" id="projects">
          <h2 className="text-4xl font-bold mb-6">- Projets -</h2>
          <div className="flex-2 text-lg w-full">
              <div className="flex justify-center mb-4">
                <ul className="flex w-full justify-around space-x-4">
                  <li>
                    <button 
                      className={`p-1 rounded-xl transition-colors hover:bg-fuchsia-600 hover:text-white hover:cursor-pointer ${
                        activeTabProjects === 'Perso' ? 'bg-fuchsia-600 text-white' : 'text-gray-300'
                      }`}
                       onClick={()=>{
                        setActiveTabProjects('Perso');
                        const perso = document.getElementById('perso');
                        const school = document.getElementById('school');
                        const work = document.getElementById('work');
                        if(perso && school && work){
                          perso.classList.remove('hidden');
                          school.classList.add('hidden');
                          work.classList.add('hidden');
                        }
                       }}
                      >
                        Personnel
                    </button>
                  </li>
                  <li>
                    <button 
                    className={`p-1 rounded-xl transition-colors hover:bg-fuchsia-600 hover:text-white hover:cursor-pointer ${
                      activeTabProjects === 'school' ? 'bg-fuchsia-600 text-white' : 'text-gray-300'
                    }`}
                    onClick={()=>{
                        setActiveTabProjects('school');
                        const perso = document.getElementById('perso');
                        const school = document.getElementById('school');
                        const work = document.getElementById('work');
                        if(perso && school && work){
                          perso.classList.add('hidden');
                          school.classList.remove('hidden');
                          work.classList.add('hidden');
                        }
                       }}
                    >
                      Académique
                    </button>
                  </li>
                  <li>
                    <button 
                    className={`p-1 rounded-xl transition-colors hover:bg-fuchsia-600 hover:text-white hover:cursor-pointer ${
                      activeTabProjects === 'work' ? 'bg-fuchsia-600 text-white' : 'text-gray-300'
                    }`}
                    onClick={()=>{
                        setActiveTabProjects('work');
                        const perso = document.getElementById('perso');
                        const school = document.getElementById('school');
                        const work = document.getElementById('work');
                        if(perso && school && work){
                          perso.classList.add('hidden');
                          school.classList.add('hidden');
                          work.classList.remove('hidden');
                        }
                       }}
                    >
                      Professionnel
                    </button>
                  </li>
                </ul>
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div id={project.type} key={project.id} className={project.type === activeTabProjects.toLowerCase() ? '' : 'hidden'}>
                <Card key={project.id} data={project} />
              </div>
            ))}
          </div>
        </div>
        </section>
        <section className="p-6 min-h-screen" id="degrees">
          <h2 className="text-4xl font-bold mb-6">- Diplômes -</h2>
        </section>
        <section className="p-6 min-h-screen" id="contact">
          <h2 className="text-4xl font-bold mb-6">- Contact -</h2>
          <ContactSection />
        <div className="flex justify-center mt-8">
          <button 
            className="px-4 py-2 bg-fuchsia-500 text-white rounded-lg hover:bg-fuchsia-600 hover:cursor-pointer transition-colors duration-300" 
            onClick={() => 
              {}
            }
            >
             <Download className="inline-block mr-2" /> Télécharger mon CV
          </button>
        </div>
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