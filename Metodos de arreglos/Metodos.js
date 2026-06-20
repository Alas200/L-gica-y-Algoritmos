const numeros = [30, 5, 20, 10];

const nuevoNumero = numeros.sort((a, b) => a - b); // Orden ascendente
// De mayor a menor cambiando el orden a (b - a)
const demayorAMenor = numeros.sort((a, b) => b - a);

console.log(nuevoNumero); // [5, 10, 20, 30] (nuevoNumero es una referencia al mismo array ordenado)
console.log(demayorAMenor); // [30, 20, 10, 5] (deMayorAMenor también es una referencia al mismo array ordenado)


const deMenorAMayor = [...numeros].sort((a, b) => a - b);

// 2. Creamos otra copia limpia y la ordenamos de mayor a menor
const deMayorAMenor = [...numeros].sort((a, b) => b - a);

console.log("Original:     ", numeros);       // [10, 5, 30, 20] (Se quedó intacto)
console.log("Menor a Mayor:", deMenorAMayor);  // [5, 10, 20, 30]
console.log("Mayor a Menor:", deMayorAMenor);  // [30, 20, 10, 5]


//la gran diferencia de [...NOMBRE DEL ARREGLO] es que crea una copia nueva del arreglo original, lo que nos permite modificar esa copia sin afectar el arreglo original. En cambio, si solo asignamos el arreglo a una nueva variable sin usar el spread operator, ambas variables apuntarán al mismo arreglo en memoria, y cualquier cambio en una de ellas afectará a la otra.
