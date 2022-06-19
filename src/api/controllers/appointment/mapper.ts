import { AppointmentOutput } from "../../../data-access/models/Appointment"
import { Appointment } from "../../interfaces"

export const toAppointment = (appointment: AppointmentOutput): Appointment => ({
    id: appointment.id,
    DogId: appointment.DogId,
    date: appointment.date,
    createdAt: appointment.createdAt,
    updatedAt: appointment.updatedAt,
    deletedAt: appointment.deletedAt
})