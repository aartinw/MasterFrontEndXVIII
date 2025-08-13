//1. Array Operations
const array = ["Hola", "Gran Canaria", 30, true];

//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = ([first]) => first;
console.log(head(array));

//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = ([_first, ...others]) => others;
console.log(tail(array));

//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
const init = (array) => array.slice(0, -1);
console.log(init(array));

//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (array) => array.slice(-1);

console.log(last(array));
