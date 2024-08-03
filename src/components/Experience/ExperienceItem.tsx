import { Experiences } from "@/types"
import { TimelineContent, TimelineItem, TimelinePoint } from "keep-react"
import SkillBadge from "../ui/SkillBadge"

type ExperienceItemProps = {
    experience: Experiences
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
    return (
        <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
                <p className="text-sm font-semibold leading-[1.4] text-purple-300 dark:text-metal-300">
                    {experience.start_date} - {experience.end_date}
                </p>
                <h1 className="text-lg font-bold text-purple-800 dark:text-white">
                    {experience.title}
                </h1>
                <div className="flex">
                    {experience.tecnologies.length > 0 && (experience.tecnologies).map(tech => (
                        <SkillBadge key={tech.id} color={tech.color} icon={tech.icon} className="mx-2">
                            {tech.title}
                        </SkillBadge>
                    ))}
                </div>
                <p className="text-body-4 font-normal  dark:text-metal-300">
                    {experience.description}
                </p>
                <p className="text-body-5 font-normal opacity-60 dark:text-metal-300">
                    {experience.extended_description}
                </p>
                
            </TimelineContent>
        </TimelineItem>
    )
}
