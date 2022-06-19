import { AppointmentInput, AppointmentOutput } from "../models/Appointment";
import { appointmentDal } from "../dal/appointment";
import { UUIDV4 } from "../../types";
import { GetAllAppoitmentsFilters, GetAllAppoitmentsOrder } from "../dal/types";

const create = async (
  payload: AppointmentInput
): Promise<AppointmentOutput> => {
  return appointmentDal.create(payload);
};

const update = async (
  id: UUIDV4,
  payload: AppointmentInput
): Promise<AppointmentOutput> => {
  return appointmentDal.update(id, payload);
};

const getById = (id: UUIDV4): Promise<AppointmentOutput> => {
  return appointmentDal.getById(id);
};

const deleteById = (id: UUIDV4): Promise<boolean> => {
  return appointmentDal.deleteById(id);
};

const getAll = async (
  filters: GetAllAppoitmentsFilters,
  order: GetAllAppoitmentsOrder
): Promise<{
  count: number
  appointments: AppointmentOutput[]
}> => {
  const { rows: appointments, count } = await appointmentDal.getAll(filters, order);

  return {
    count,
    appointments
  };
};

export const AppointmentService = {
  create,
  update,
  getById,
  deleteById,
  getAll,
};
