export interface CardProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    date: string;
  };
}
