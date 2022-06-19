import { UUIDV4 } from '../../types'
import { Appointment } from './appointment.interface'

export interface Dog {
    id: UUIDV4
    name: string
    breed: string
    isGoodBoy: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
}