import { Studies } from "@/types"
import { TimelineContent, TimelineItem, TimelinePoint } from "keep-react"
import SkillBadge from "../ui/SkillBadge"
import MapIcon from "@/icons/Map"

type StudyItemProps = {
    study: Studies
}

export default function StudyItem({ study }: StudyItemProps) {
    return (
        <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
                <p className="text-sm font-semibold leading-[1.4] text-teal-300 dark:text-metal-300">
                    {study.start_date} - {study.end_date}
                </p>
                <h1 className="text-lg font-bold text-teal-800 dark:text-white">
                    {study.title} {study.subtitle !== "" ? "-" : ""} {study.subtitle}
                </h1>
                <section className="flex items-center">
                    <MapIcon />
                    <span className="ml-1 font-bold opacity-80">{study.college} - </span>
                    <span className="ml-1">{study.city}</span>
                </section>
                <div className="flex">
                    {study.tecnologies.length > 0 && (study.tecnologies).map(tech => (
                        <SkillBadge key={tech.id} color={tech.color} icon={tech.icon} className="mx-2">
                            {tech.title}
                        </SkillBadge>
                    ))}
                </div>
                
            </TimelineContent>
        </TimelineItem>
    )
}
