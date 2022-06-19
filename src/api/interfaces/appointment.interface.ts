import { UUIDV4 } from '../../types';

export interface Appointment {
    id: UUIDV4
    DogId: UUIDV4
    date: Date
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
}