import { sum } from './sum'

describe('testes de soma', () => {
  it('teste valores pares', () => {
    expect(sum(2, 4)).toEqual(6);
  })

  it('teste valores impares', () => {
    expect(sum(1, 3)).toEqual(4);
  })
})
