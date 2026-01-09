import { ButtonProps } from '@/types/button';

export const Button: React.FC<ButtonProps> = ({ name, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="px-4 py-2 bg-fuchsia-500 text-white rounded hover:bg-fuchsia-600 hover:cursor-pointer transition-colors duration-300">
            {name}
        </button>
    );
};