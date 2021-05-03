const isDevEnv = (): boolean => process.env.NODE_ENV !== "production"

export const strapiHost = (): string => {
  return isDevEnv() ? "localhost:1337" : ""
}
