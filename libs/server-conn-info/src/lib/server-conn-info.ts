const isDevEnv = (): boolean => process.env.NODE_ENV !== "production"

export const strapiProtocol = (): string => isDevEnv() ? "http" : "https"
export const strapiUrl = (): string => `${strapiProtocol()}://${strapiHost()}`
export const strapiHost = (): string => isDevEnv() ? "localhost:1337" : "plural2-strapi.herokuapp.com"
