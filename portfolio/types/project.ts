export interface ProjectsProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  date: string;
  type: "perso" | "school" | "work";
}
