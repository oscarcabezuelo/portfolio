type SkillBadgeProps = {
    color?: string,
    className?: string,
    icon: (() => JSX.Element),
    children: string
}

type Colors = {
    blue: string
    red: string
    green: string
    yellow: string
    gray: string
    indigo: string
    lime: string
    cyan: string
    teal: string
    black: string
    white: string
    amber: string
    "blue-yellow": string
    [key: string]: string
}

export default function SkillBadge({ color = "blue", className, icon, children }: SkillBadgeProps) {
    const COLORS: Colors = {
        blue: 'bg-blue-100 text-blue-800 border-blue-400 dark:text-blue-400',
        red: 'bg-red-100 text-red-800 border-red-400 dark:text-red-400',
        green: 'bg-green-100 text-green-800 border-green-400 dark:text-green-400',
        yellow: 'bg-yellow-100 text-yellow-800 border-yellow-400 dark:text-yellow-400',
        gray: 'bg-gray-100 text-gray-800 border-gray-400 dark:text-gray-400',
        indigo: 'bg-indigo-100 text-indigo-800 border-indigo-400 dark:text-indigo-400',
        lime: 'bg-lime-100 text-lime-800 border-lime-400 dark:text-lime-400',
        cyan: 'bg-cyan-100 text-cyan-800 border-cyan-400 dark:text-cyan-400',
        teal: 'bg-teal-100 text-teal-800 border-teal-400 dark:text-teal-400',
        black: 'bg-black text-white border-white',
        white: 'bg-white text-black border-black',
        amber: 'bg-amber-100 text-amber-800 border-amber-400 dark:text-amber-400',
        "blue-yellow": 'bg-yellow-100 text-blue-800 border-blue-400 dark:text-blue-400',
    }

    return (
        <>
            {icon}
            <span className={`${COLORS[color]} ${className} text-[0.6rem] px-4 py-1 font-black rounded-xl border-2 dark:bg-gray-700`}>
                {children}
            </span>
        </>

    )
}
