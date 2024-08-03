import { useState } from "react"
import Experience from "./Experience"
import Studies from "./Studies"

export default function SectorSelection() {
    const [tab, setTab] = useState(0)

    function handleClickTab(tabNumber: number) {
        setTab(tabNumber)
    } 

    return (
        <section 
            id="experiences"
            className="mx-auto w-3/4 py-4"
        >
            <div 
                className="flex flex-row justify-center border-white mb-6 pb-2"
            >
                <button 
                    className={`w-full mr-4 py-2 border-b-2 ${tab === 0 ? 'text-purple-500 font-bold border-purple-500' : 'text-white hover:text-purple-400 hover:border-purple-200'}  transition ease-in duration-200`}
                    onClick={() => handleClickTab(0)}
                >
                    Experiencia
                </button>
                <button 
                    className={`w-full ml-4 py-2 border-b-2 ${tab === 1 ? 'text-teal-500 font-bold border-teal-500' : 'text-white hover:text-teal-400 hover:border-teal-200'} transition ease-in duration-200`}
                    onClick={() => handleClickTab(1)}
                >
                    Estudios
                </button>
            </div>
            {
                tab === 0
                ? <Experience />
                : <Studies />
            }
        </section>
    )
}
