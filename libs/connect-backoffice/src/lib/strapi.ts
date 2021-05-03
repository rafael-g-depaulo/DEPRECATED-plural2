import axios from "axios"

import { strapiHost } from "@plural2/server-conn-info"

// create axios instance to connect to strapi server
export const strapi = axios.create({
  baseURL: `http://${strapiHost()}`,
})

export default strapi
