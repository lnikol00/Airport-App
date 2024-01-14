export type Plane = {
    id: number
    model: string
    year: number
    country: string
    capacity: number
    image: string | undefined
    type: string
    captain: string
}

export type PlaneListState = {
    planes: Plane[]
    loading?: boolean
    error?: string
}

export type PaginationProps = {
    totalPlanes: number
    planesPerPage: number
    setCurrentPage: Function
    currentPage: number
}
