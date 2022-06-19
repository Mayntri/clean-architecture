import { Op } from "sequelize";
import { UUIDV4 } from "../../types";
import { getPagination } from '../helpers/getPagination';
import { Appointment } from "../models";
import { AppointmentInput, AppointmentOutput } from "../models/Appointment";
import { GetAllAppoitmentsFilters, GetAllAppoitmentsOrder } from "./types";

const create = async (
  payload: AppointmentInput
): Promise<AppointmentOutput> => {
  return Appointment.create(payload);
};

const update = async (
  id: UUIDV4,
  payload: Partial<AppointmentInput>
): Promise<AppointmentOutput> => {
  const dog = await Appointment.findByPk(id);

  if (!dog) throw new Error("not found");

  return dog.update(payload);
};

const getById = async (id: UUIDV4): Promise<AppointmentOutput> => {
  const dog = await Appointment.findByPk(id);

  if (!dog) throw new Error("not found");

  return dog;
};

const deleteById = async (id: UUIDV4) => {
  const numDeletedDogs = await Appointment.destroy({
    where: { id },
  });

  return !!numDeletedDogs;
};

const getAll = async (
  filters: GetAllAppoitmentsFilters,
  order: GetAllAppoitmentsOrder
): Promise<{
  rows: AppointmentOutput[]
  count: number
}> => {
  const pagination = getPagination(filters?.page, filters?.limit)

  return Appointment.findAndCountAll({
    where: {
      ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
      ...(filters?.DogId && { DogId: filters.DogId }),
    },
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
    ...pagination,
    order
  });
};

export const appointmentDal = {
  create,
  update,
  getById,
  deleteById,
  getAll,
};
