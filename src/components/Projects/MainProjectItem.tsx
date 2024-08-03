import { Projects } from "@/types"
import SkillBadge from "../ui/SkillBadge";

type MainProjectProps = {
    project: Projects
}

export default function MainProjectItem({ project }: MainProjectProps) {
    return (
        <div className="flex flex-row rounded-3xl my-6 border-4 border-lime-700 bg-gradient-to-b from-lime-950 to-black">
            
            <div className="p-8 w-full">
                <h1 className="text-lg font-bold text-lime-200 mb-4">
                    {project.title}
                </h1>
                <p className="mb-4">{project.description}</p>
                <div>
                    {project.tecnologies.map((tech) => (
                        <SkillBadge key={tech.id} color={tech.color} icon={tech.icon} className="mr-4">
                            {tech.title}
                        </SkillBadge>
                    ))}
                </div>
            </div>
            <a
                href={project.link}
                className="size-full scale-90">
                    <img
                        alt={`Foto del proyecto ${project.id}`}
                        className="object-cover object-center rounded-3xl ease-in duration-100 scale-90 hover:scale-100 hover:border-white"
                        src={project.image}
                    />

            </a>
        </div>

    )
}
