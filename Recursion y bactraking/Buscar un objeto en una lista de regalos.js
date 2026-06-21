// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    // CASO BASE 1: Si el índice llega al tamaño del arreglo, recorrimos todo y no estaba.
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // CASO BASE 2: Si el regalo en la posición actual es el que buscamos.
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    // LLAMADA RECURSIVA: Si no se cumplió ningún caso base, seguimos buscando en la siguiente posición.
    // Pasamos el mismo arreglo, el mismo nombre, pero aumentamos el índice en 1 (index + 1).
    return findGift(gifts, giftName, index + 1);
}


let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind)); 
// Salida esperada: "Lego está en la posición 3."

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind)); 
// Salida esperada: "Camión no está en la lista."