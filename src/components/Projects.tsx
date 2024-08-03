import CodeIcon from "@/icons/Code";
import { projects } from "../data/db";
import MainProjectItem from "./Projects/MainProjectItem";

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto w-3/4 py-4 mt-24">
        <div className="flex flex-row items-center gap-x-2 text-2xl mb-4">
          <span className="text-lime-500"><CodeIcon /> </span>
          <h1 className="font-bold">
            <span className="text-lime-500">Aplicaciones</span> que he construido
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {projects.map((project) => (
            <MainProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
