import { strapiHost } from './server-conn-info'
import { BeforeEachResetEnv } from "@plural2/jest-utils"

describe('strapi', () => {
  BeforeEachResetEnv()
  describe('strapiHost', () => {
    it('should work in dev', () => {
      process.env.NODE_ENV = "development"
      expect(strapiHost()).toEqual('localhost:1337')
    })

    it('should work in prod', () => {
      process.env.NODE_ENV = "production"
      expect(strapiHost()).toEqual('plural2-strapi.herokuapp.com')
    })
  })
})
