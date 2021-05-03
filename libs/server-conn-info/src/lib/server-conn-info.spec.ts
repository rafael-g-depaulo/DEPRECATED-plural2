import { strapiHost } from './server-conn-info'

describe('strapi', () => {

  describe('strapiHost', () => {
    it('should work in dev', () => {
      process.env.NODE_ENV = "development"
      expect(strapiHost()).toEqual('localhost:1337')
    })
  })
})
