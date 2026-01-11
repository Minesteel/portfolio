import { ExperiencesProps } from "@/types/experience";
import experienceData from "@/data/experiences.json";

const experiences = experienceData.experiences as ExperiencesProps[];
export default function Timeline() {
  return (
    <section id="experience" className="py-20 px-6">      
      <div className="max-w-3xl mx-auto relative">
        {/* La ligne verticale centrale (cachée sur mobile si tu préfères) */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-fuchsia-200"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Le point sur la ligne */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-fuchsia-600 border-4 border-white shadow-sm z-10"></div>

              {/* Contenu de la carte */}
              <div className="ml-12 md:ml-0 md:w-[45%] p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-sm font-bold text-fuchsia-600">{exp.date}</span>
                <h3 className="text-xl font-bold mt-1 text-gray-800">{exp.title}</h3>
                <p className="text-gray-500 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}