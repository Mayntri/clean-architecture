import { Router } from "express";
import {
  GetAllAppoitmentsFilters,
  GetAllAppoitmentsOrder,
} from "src/data-access/dal/types";
import * as appointmentController from "../controllers/appointment";
import {
  CreateAppointmentDTO,
  UpdateAppointmentDTO,
} from "../dto/appointment.dto";

const appointmentsRouter = Router();

appointmentsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await appointmentController.getById(id);

  return res.send(result);
});

appointmentsRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const payload: UpdateAppointmentDTO = req.body;

  const result = await appointmentController.update(id, payload);
  return res.send(result);
});

appointmentsRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await appointmentController.deleteById(id);
  return res.send({
    success: result,
  });
});

appointmentsRouter.post("/", async (req, res, next) => {
  const payload: CreateAppointmentDTO = req.body;

  const result = await appointmentController.create(payload);
  return res.send(result);
});

appointmentsRouter.get("/", async (req, res) => {
  const {order, ...filters} =
    req.query as unknown as GetAllAppoitmentsFilters & {
      order: GetAllAppoitmentsOrder;
    };

  const results = await appointmentController.getAll(filters, order);
  return res.send(results);
});

export default appointmentsRouter;
