import { Router } from "express";
import { checkCache } from "../../lib/check-cache";
import * as dogController from "../controllers/dog";
import { CreateDogDTO, UpdateDogDTO } from "../dto/dog.dto";

const dogsRouter = Router();

dogsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await dogController.getById(id);

  return res.send(result);
});

dogsRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const payload: UpdateDogDTO = req.body;

  const result = await dogController.update(id, payload);
  return res.send(result);
});

dogsRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const result = await dogController.deleteById(id);
  return res.send({
    success: result,
  });
});

dogsRouter.post("/", async (req, res) => {
  const payload: CreateDogDTO = req.body;

  const result = await dogController.create(payload);
  return res.send(result);
});

dogsRouter.get("/", checkCache, async (req, res) => {
  const results = await dogController.getAll();
  debugger;
  return res.send(results);
});

export default dogsRouter;
