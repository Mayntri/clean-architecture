import { UUIDV4 } from '../../types'
import { Dog } from '../models'
import { DogInput, DogOutput } from '../models/Dog'

const create = async (payload: DogInput): Promise<DogOutput> => {
    return Dog.create(payload)
}

const update = async (id: UUIDV4, payload: Partial<DogInput>): Promise<DogOutput> => {
    const dog = await Dog.findByPk(id)

    if (!dog) throw new Error('not found')

    return dog.update(payload)
}

const getById = async (id: UUIDV4): Promise<DogOutput> => {
    const dog = await Dog.findByPk(id)

    if (!dog) throw new Error('not found')

    return dog
}

const deleteById = async (id: UUIDV4): Promise<boolean> => {
    const numDeletedDogs = await Dog.destroy({
        where: {id}
    })

    return !!numDeletedDogs
}

const getAll = async (): Promise<DogOutput[]> => {
    return Dog.findAll()
}

export const dogDal = {
    create,
    update,
    getById,
    deleteById,
    getAll
}