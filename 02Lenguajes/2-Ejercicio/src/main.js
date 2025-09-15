//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concat = (a, b) => {
  return [...a, ...b];
};

console.log(concat(array1, array2));

//Opcional
const array3 = [7, "Gran Canaria", 30, true];
const array4 = [8, 10, "adios"];

const concatMulti = (...arrays) => [].concat(...arrays);
console.log(concatMulti(array1, array2, array3, array4));
