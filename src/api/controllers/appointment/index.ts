import { Appointment, Dog } from "../../interfaces";
import * as mapper from "./mapper";
import { AppointmentService } from "../../../data-access/services/AppointmentService";
import {
  CreateAppointmentDTO,
  UpdateAppointmentDTO,
} from "../../dto/appointment.dto";
import { UUIDV4 } from "../../../types";
import {
  GetAllAppoitmentsFilters,
  GetAllAppoitmentsOrder,
} from "src/data-access/dal/types";
import { encodeBase64NextCursor } from 'src/lib/cursor-based-pagination';

export const create = async (
  payload: CreateAppointmentDTO
): Promise<Appointment> => {
  return mapper.toAppointment(await AppointmentService.create(payload));
};

export const update = async (
  id: UUIDV4,
  payload: UpdateAppointmentDTO
): Promise<Appointment> => {
  return mapper.toAppointment(await AppointmentService.update(id, payload));
};

export const getById = async (id: UUIDV4): Promise<Appointment> => {
  return mapper.toAppointment(await AppointmentService.getById(id));
};

export const deleteById = (id: UUIDV4): Promise<boolean> => {
  return AppointmentService.deleteById(id);
};

export const getAll = async (
  filters: GetAllAppoitmentsFilters,
  order: GetAllAppoitmentsOrder = [["date", "ASC"]]
): Promise<{
  count: number
  appointments: Appointment[]
}> => {
  const { appointments, count } = await AppointmentService.getAll(filters, order);

  return {
    count,
    appointments: appointments.map(mapper.toAppointment)
  };
};
