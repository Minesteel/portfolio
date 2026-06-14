export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  type: "perso" | "school" | "work";
}
