let suma = require('./sum');

describe('Pruebass del archivo sum.js', () => {
  beforeAll(() => {
    console.log("Empezando a probar sum.js")
  });

  test("Probando funcion suma", () => {
    expect(suma(5,3)).toBe(8);
  });

  test("Probar si el resultado es positivo", () => {
    expect(suma(5,3) > 0).toBeTruthy();
  });

  test("Probar si el resultado no es negativo", () => {
    expect(suma(5,3) > 0).toBeFalsy();
  });
});
