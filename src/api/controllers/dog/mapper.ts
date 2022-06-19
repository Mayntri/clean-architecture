import { DogOutput } from "../../../data-access/models/Dog"
import { Dog } from "../../interfaces"

export const toDog = (dog: DogOutput): Dog => ({
    id: dog.id,
    name: dog.name,
    breed: dog.breed,
    isGoodBoy: dog.isGoodBoy,
    createdAt: dog.createdAt,
    updatedAt: dog.updatedAt,
    deletedAt: dog.deletedAt
})