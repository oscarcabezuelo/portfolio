import { experiences } from "@/data/db";
import ExperienceItem from "./Experience/ExperienceItem";
import { Timeline } from "keep-react";
import WorkIcon from "@/icons/Work";

export default function Experience() {
  return (
    <section>
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-x-2 text-2xl mb-4">
          <span className="text-purple-500"><WorkIcon /></span>
          <h1 className="font-semibold">Mi <span className="text-purple-500">experiencia</span> laboral</h1>
        </div>
        
        <Timeline className="relative border-dashed mt-1 pt-1 ml-4">
          {experiences.map(experience => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </Timeline>


      </div>
    </section>


  )
}
