import { SkillProps } from "@/types/skill";
export default function  SkillBadge({ data }: { data: SkillProps }){
    return (
  <div className="flex flex-col items-center p-4 bg-neutral-200 rounded-2xl shadow-sm border border-gray-100 hover:border-fuchsia-500 transition-all">
    <span className="font-bold text-neutral-800">{data.name}</span>
    <span className="text-xs text-fuchsia-900 bg-fuchsia-200 px-2 py-1 rounded-full mt-2">
      {data.level}
    </span>
  </div>
    );
}