import useFetchApi from "@hooks/useFetchApi"

import { Entity } from "../utils/Entity"
import { filterEntityProps } from "../utils/filterEntityProps"
import strapi from "./strapi"

export interface Animal extends Entity {
  name: string,
  goodBoy: boolean,
}

const animalPath = `/animals`
const filterAnimalProps = filterEntityProps<Animal>("name", "goodBoy")

export const getAnimal = (id: number | string) => strapi
  .get<Animal>(`${animalPath}/${id}`)
  .then(({ data }) => filterAnimalProps(data))

export const getAllAnimals = () => strapi
  .get<Animal[]>(animalPath)
  .then(({ data }) => data.map(filterAnimalProps))

export const useAnimal = (id: number | string) => useFetchApi(`${animalPath}/${id}`, () => getAnimal(id))
export const useAllAnimals = () => useFetchApi<Animal[]>(animalPath, getAllAnimals)
