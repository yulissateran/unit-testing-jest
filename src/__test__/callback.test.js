import { callbackHell } from '../callback'
describe('Callback', () => {
  test('testing a callback', (done) => {
    callbackHell((text) => {
      expect(text).toEqual('I am a callback')
      done()
    })
  })
})