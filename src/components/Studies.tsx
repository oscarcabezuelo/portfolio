import { studies } from "@/data/db";
import { Timeline } from "keep-react";
import StudyItem from "./Studies/StudyItem";
import SchoolIcon from "@/icons/School";

export default function Studies() {
    return (
        <section>
            <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 text-2xl mb-4">
                    <span className="text-teal-500"><SchoolIcon /></span>
                    <h1 className="font-semibold">Mis <span className="text-teal-500">estudios</span> académicos</h1>
                </div>
                <Timeline className="relative border-dashed mt-1 pt-1 ml-4">
                    {studies.map(study => (
                        <StudyItem key={study.id} study={study} />
                    ))}
                </Timeline>


            </div>
        </section>
    )
}
