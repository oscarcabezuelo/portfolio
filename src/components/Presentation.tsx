import image from "../assets/me.jpg"
import Badge from "./ui/Badge"
import GithubIcon from "@/icons/Github"
import LinkedInIcon from "@/icons/LinkedIn"
import CVIcon from "@/icons/CV"

export default function Presentation() {
  return (
    <section id="presentation" className="">
      <div className="h-screen mx-auto flex flex-row justify-between items-center w-3/4 py-4">
        <div className="py-2 my-2 w-1/2">
          <div className="w-full text-white py-4">
            <p className="font-bold text-6xl py-2 title">¡Hola! Soy Oscar.</p>
          </div>
          <p className="mb-4 leading-relaxed">
            <span className="text-amber-400 font-medium">Desarrollador frontend</span> con <span className="text-amber-400 font-medium">+3 años</span> de experiencia laboral.
            Proactivo y con ganas de aprender.
          </p>
          <div className="flex items-center">
            <a
              href="https://github.com/oscarcabezuelo"
              className="transition duration-200 ease-in mr-4 inline-flex items-center text-white border rounded-2xl p-2 focus:outline-none hover:bg-white hover:text-black"
              title="Github"
            >
              <GithubIcon />
              <span className="text-sm ml-1 font-bold">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/oscarcabezuelo/"
              className="transition duration-200 ease-in mr-4 inline-flex items-center text-blue-600 border border-blue-600 rounded-2xl p-2 focus:outline-none hover:bg-blue-600 hover:text-white text-lg"
              title="LinkedIn"
            >
              <LinkedInIcon />
              <span className="text-sm ml-1 font-bold">LinkedIn</span>
            </a>
            <a
              href="https://www.linkedin.com/in/oscarcabezuelo/"
              className="transition duration-200 ease-in mr-4 inline-flex items-center text-amber-400 border border-amber-400 rounded-2xl p-2 focus:outline-none hover:bg-amber-400 hover:text-black text-lg"
              title="Descarga mi CV"
            >
              <CVIcon />
              <span className="text-sm ml-1 font-bold">Descarga mi CV</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-8">
          <img
            className="object-cover size-40 object-center rounded-full"
            alt="Imagen de mí"
            src={image}
          />
          <Badge fullWidth={true} className="mt-4 w-40 font-medium" >Disponible para trabajar</Badge>
        </div>
      </div>
    </section>
  )
}
