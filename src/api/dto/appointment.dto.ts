import { UUIDV4 } from '../../types';

export type CreateAppointmentDTO = {
    DogId: UUIDV4
    date: Date
}

export type UpdateAppointmentDTO = CreateAppointmentDTO