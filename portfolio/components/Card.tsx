import Image from 'next/image';
import { ProjectProps } from '@/types/project';

export default function Card({ data }: { data: ProjectProps }) {
    return (
        <div className="bg-neutral-800 rounded-xl shadow-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{data.title}</h3>
            <div className="relative overflow-hidden rounded-md mb-4 group">
                {data.image !== '!' ? (
                    <>
                        <Image
                            src={data.image}
                            alt={data.title}
                            width={400}
                            height={200}
                            className="rounded-md object-cover group-hover:opacity-0 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 text-gray-700 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                            <p className="flex items-center justify-center text-sm leading-relaxed">
                                {data.description}
                            </p>
                            {data.link !== '!' && (
                                <div className="absolute bottom-4 left-4 right-4">
                                    <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-fuchsia-500 hover:underline">voir le projet</a>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="bg-white text-gray-700 rounded-md p-4">
                        <p className="text-sm leading-relaxed">{data.description}</p>
                        {data.link !== '!' && (
                            <div className="mt-4">
                                <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-fuchsia-500 hover:underline">voir le projet</a>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                {data.tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="bg-fuchsia-200 text-fuchsia-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}