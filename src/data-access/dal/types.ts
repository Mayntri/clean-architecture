import { UUIDV4 } from '../../types'

interface ListFilters {
    cursor?: string
    limit?: number
    page?: number
    isDeleted?: boolean
    includeDeleted?: boolean
}

export interface GetAllAppoitmentsFilters extends ListFilters {
    DogId?: UUIDV4
}

export type GetAllAppoitmentsOrder = [
    ['date' | 'createdAt', 'DESC' | 'ASC'],
]