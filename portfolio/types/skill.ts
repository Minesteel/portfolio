export interface SkillProps {
  id: number;
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: "programming" | "framework" | "tool" | "language";
}
