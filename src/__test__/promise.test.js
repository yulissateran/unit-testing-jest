import { getDataFromApi } from '../promise';

describe('Promise', () => {
  test('testing a promise', (done) => {
    getDataFromApi('https://rickandmorty/api/character/')
      .then(() => {
        expect(text).toEqual('I am a callback');
        done()
      })
  })
})
