import Image from 'next/image';
import { CardProps } from '@/types/project';

export default function Card({ data }: CardProps) {
    return (
        <div className="bg-neutral-800 rounded-xl shadow-lg p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{data.title}</h3>
            <div className="relative overflow-hidden rounded-md mb-4 group">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={400}
                    height={200}
                    className="rounded-md object-cover group-hover:opacity-0 transition-opacity duration-300"
                />
                <p className="absolute inset-0 flex items-center justify-center text-gray-700 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    {data.description}
                </p>
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