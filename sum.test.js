let suma = require('./sum');

describe('Pruebass del archivo sum.js', () => {
  beforeAll(() => {
    console.log("Empezando a probar sum.js")
  });

  test("Probando funcion suma", () => {
    expect(suma(5,3)).toBe(8);
  });
});
