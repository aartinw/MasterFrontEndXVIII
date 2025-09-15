//Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source) {
  return { ...source };
}

const original = { a: 1, b: 2, c: 3 };
const copy = clone(original);

console.log(original);
console.log(copy);

//Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
function merge(source, target) {
  return { ...source, ...target };
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

const result = merge(b, a);

console.log(result);
