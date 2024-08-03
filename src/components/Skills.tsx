import SkillsIcon from "@/icons/Skills";
import { skills } from "../data/db";
import SkillBadge from "./ui/SkillBadge";

export default function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto w-3/4 py-4">
        <div className="flex flex-row items-center gap-x-2 mb-8">
          <span className="text-rose-500"><SkillsIcon /></span>
          <h1 className="text-2xl font-bold ">
            Habilidades y <span className="text-rose-500">tecnologías</span>
          </h1>
        </div>
        {skills.map(skill => (
          <SkillBadge key={skill.id} color={skill.color} icon={skill.icon} className="mr-4">
            {skill.title}
          </SkillBadge>
        ))}
      </div>
    </section>
  )
}
