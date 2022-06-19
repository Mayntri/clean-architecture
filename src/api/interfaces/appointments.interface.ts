import { Appointment } from './appointment.interface';

export interface Appointments {
    appointments: Appointment[]
    response_metadata: {
        next_cursor: string
    }
}