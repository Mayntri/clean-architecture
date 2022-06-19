import { DogInput, DogOutput } from '../models/Dog'
import { dogDal } from '../dal/dog'
import { UUIDV4 } from '../../types'

const create = async (payload: DogInput): Promise<DogOutput> => {
    return dogDal.create(payload)
}

const update = async (id: UUIDV4, payload: DogInput): Promise<DogOutput> => {
    return dogDal.update(id, payload)
}

const getById = (id: UUIDV4): Promise<DogOutput> => {
    return dogDal.getById(id)
}

const deleteById = (id: UUIDV4): Promise<boolean> => {
    return dogDal.deleteById(id)
}

const getAll = (): Promise<DogOutput[]> => {
    return dogDal.getAll()
}

export const DogService = {
    create,
    update,
    getById,
    deleteById,
    getAll,
}
