import { CreateAppointmentDTO } from './appointment.dto';

export type CreateDogDTO = {
    name: string;
    breed: string;
    isGoodBoy: boolean;
    appointments?: CreateAppointmentDTO[]
}

export type UpdateDogDTO = CreateDogDTO