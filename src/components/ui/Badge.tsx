type BadgeProps = {
    color?: string,
    fullWidth?: boolean,
    className?: string,
    children: string
}

type Colors = {
    blue: string
    red: string
    green: string
    yellow: string
    gray: string
}

export default function Badge({ color = "yellow", fullWidth = false, className, children }: BadgeProps) {
    const COLORS: Colors = {
        blue: 'bg-blue-100 text-blue-800 border-blue-400 dark:text-blue-400',
        red: 'bg-red-100 text-red-800 border-red-400 dark:text-red-400',
        green: 'bg-green-100 text-green-800 border-green-400 dark:text-green-400',
        yellow: 'bg-yellow-100 text-yellow-800 border-yellow-400 dark:text-yellow-400',
        gray: 'bg-gray-100 text-gray-800 border-gray-400 dark:text-gray-400',
    }

    const FULLWIDTH: string = 'flex w-full justify-center'

    return (
        <span className={`${COLORS[color]} ${fullWidth && FULLWIDTH} ${className} text-xs px-2.5 py-0.5 rounded dark:bg-gray-700 border`}>
            {children}
        </span>
    )
}
