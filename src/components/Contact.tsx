import ContactIcon from "@/icons/Contact";

export default function Contact() {

  return (
    <section id="contact">
      <div className="mx-auto w-3/4 mb-40">
        <div className="flex flex-row items-center gap-x-2 mb-4">
          <span className="text-yellow-500"><ContactIcon /></span>
          <h1 className="text-2xl font-bold ">
            ¡<span className="text-yellow-500">Contacta</span> conmigo!
          </h1>
        </div>
        <p>
          ¿Te ha gustado lo que has visto? Pues esto es solo una parte de lo que puedo llegar a realizar como desarrollador web.
        </p>
        <p>
          Si quieres contactar conmigo, manda un email a <a href="mailto:oscar70cp@gmail.com" className="text-yellow-500 font-medium hover:underline">esta dirección.</a>
        </p>
      </div>
    </section>
  )
}
