import axios from "axios"

import { strapiUrl } from "@plural2/server-conn-info"

// create axios instance to connect to strapi server
export const strapi = axios.create({
  baseURL: strapiUrl(),
})

export default strapi
