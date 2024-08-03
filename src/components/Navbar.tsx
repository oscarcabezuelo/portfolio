//import MenuIcon from "@/icons/Menu";

export default function Navbar() {
  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-lg md:sticky top-0 z-10">
      <div className="flex flex-wrap py-5 mx-auto flex-col md:flex-row items-center w-3/4">
        <nav className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#presentation" className="text-xl font-black">
            OSCAR
          </a>
        </nav>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white flex flex-wrap items-center text-base justify-center">
          <a href="#experiences" className="mr-5 hover:underline">
            Experiencias
          </a>
          <a href="#projects" className="mr-5 hover:underline">
            Proyectos
          </a>
          <a href="#skills" className="mr-5 hover:underline">
            Habilidades
          </a>
        </nav>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-white text-black border-0 p-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <MenuIcon />
        </a> */}
      </div>
    </header>
  )
}
