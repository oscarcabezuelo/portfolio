export type Experiences = {
    id: number,
    title: string,
    description: string,
    extended_description: string,
    start_date: string,
    end_date: string,
    tecnologies: Skills[]
}

export type Studies = {
    id: number,
    title: string,
    subtitle: string,
    college: string,
    city: string,
    start_date: string,
    end_date: string,
    tecnologies: Skills[]
}

export type Projects = {
    id: number,
    title: string,
    description: string,
    image: string,
    link: string,
    main_project: boolean,
    tecnologies: Skills[]
}

export type Skills = {
    id: number,
    title: string,
    color: string,
    icon: (() => JSX.Element)
}