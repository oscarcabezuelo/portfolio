import UserIcon from "@/icons/User";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [age, setAge] = useState(0)
  const birthdayDate = new Date(1997, 4, 16)

  useEffect(() => {
    const today = new Date()
    let years = today.getFullYear() - birthdayDate.getFullYear()
    const monthDiff = today.getMonth() - birthdayDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdayDate.getDate()))
      years--
    setAge(years)

  }, [])

  return (
    <section>
      <div className="mx-auto w-3/4 py-4 mb-20">
        <div className="flex flex-row items-center gap-x-2 mb-8">
          <span className="text-cyan-500"><UserIcon /></span>
          <h1 className="text-2xl font-bold ">
            Sobre <span className="text-cyan-500">mí</span>
          </h1>
        </div>
        <p className="text-pretty">
          Si quieres conocerme más, puedes hacerlo en las siguientes líneas.
          Hay algún dato que puede ser relevante <span className="font-semibold text-cyan-500 opacity-80">(lo destacaré así, tranquilidad)</span>, pero si no tienes tiempo o simplemente no te apetece,
          pasa a Contacto directamente en <a className="text-cyan-400 font-medium underline hover:no-underline" href="#contact">este enlace</a>.
        </p>
        <p className="text-pretty mt-8">
          Me llamo <span className="font-semibold text-cyan-500 opacity-80">Oscar Cabezuelo Pérez</span>. Tengo {age} años (nací el 16 de mayo de 1997).
          Soy de <span className="font-semibold text-cyan-500 opacity-80">Valencia (España)</span>,
          aunque en un futuro mi idea es mudarme a <span className="font-semibold">Gran Canaria (España)</span>.
        </p>
        <p className="text-pretty mt-4">
          Empecé como administrador de sistemas informáticos en red en 2015, pero desde el primer momento que estudié la
          asignatura de desarrollo de páginas web, supe que quería dedicarme a esto. Tengo más de 8 años de experiencia en estudios y
          creación de páginas web por mi cuenta, y he tenido la oportunidad de trabajar durante 3 años
          como <span className="font-semibold text-cyan-500 opacity-80">desarrollador frontend</span>. Nunca he parado
          de aprender nuevas tecnologías por mi cuenta.
        </p>
        <p className="text-pretty mt-4">
          Actualmente estoy buscando un trabajo <span className="font-semibold text-cyan-500 opacity-80">100% remoto</span>,
          idealmente con oficinas en Valencia o Gran Canaria para poder visitarlas lo máximo posible.
          Tampoco sería un problema ir a la oficina en, por ejemplo, Madrid o Barcelona, una vez cada 2 / 3 meses. ¡Hablando se entiende la gente!
        </p>
        <p className="text-pretty mt-4">
          Me considero una persona <span className="font-semibold text-cyan-500 opacity-80">autosuficiente</span>, siempre busco solucionar errores por mi cuenta y,
          después de cierto rodaje, no necesito supervisión permanente.
          También soy <span className="font-semibold text-cyan-500 opacity-80">proactivo</span>,
          me gusta hacer código por mi cuenta y mejorar fallos que vea en el código para evitar problemas mayores.
          Pero, sobre todo, soy una persona <span className="font-semibold text-cyan-500 opacity-80">sociable y amigable</span>,
          que valora un buen ambiente de trabajo por encima de muchas otras cosas.
        </p>
        <p className="text-pretty mt-4">
          Mis hobbies principales son los videojuegos, quedar con mis amigos, escuchar música y hacer deporte, además de programar.
          Gustos típicos de un programador, lo sé, pero tal vez haya cosas más interesantes por ahí.
        </p>
      </div>
    </section>
  )
}
