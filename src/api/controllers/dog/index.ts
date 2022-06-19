import { Dog } from "../../interfaces";
import * as mapper from "./mapper";
import { DogService } from "../../../data-access/services/DogService";
import { CreateDogDTO, UpdateDogDTO } from "../../dto/dog.dto";
import {} from "../../../data-access/dal/dog";
import { UUIDV4 } from "../../../types";
import localCache from "../../../lib/local-cache";

const primaryCacheKey = "dogs";

export const create = async (payload: CreateDogDTO): Promise<Dog> => {
  return mapper.toDog(await DogService.create(payload));
};

export const update = async (id: UUIDV4, payload: UpdateDogDTO): Promise<Dog> => {
  return mapper.toDog(await DogService.update(id, payload));
};

export const getById = async (id: UUIDV4): Promise<Dog> => {
  return mapper.toDog(await DogService.getById(id));
};

export const deleteById = (id: UUIDV4): Promise<boolean> => {
  return DogService.deleteById(id);
};

export const getAll = async (): Promise<Dog[]> => {
  const recipes = await DogService.getAll().then((recipes) =>
    recipes.map(mapper.toDog)
  );

  if (recipes.length) localCache.set(primaryCacheKey, recipes);

  return recipes;
};
