export type PlaneType = {
    id: number
    name: string
    img: string | undefined
    country: string
    capacity: number
    routes: Routes[]
    crew: Crew[]
}

export type Routes = [
    string
]

export type Crew = [
    string
]

export type PlanesType = Array<PlaneType>

export type PaginationProps = {
    totalPlanes: number
    planesPerPage: number
    setCurrentPage: Function
    currentPage: number
}