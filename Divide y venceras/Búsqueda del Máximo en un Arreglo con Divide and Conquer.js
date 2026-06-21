function findMax(arr) {
    // 1. CASO BASE: Si el arreglo tiene un solo elemento, ese elemento es el máximo.
    if (arr.length === 1) {
        return arr[0];
    }

    // 2. DIVIDIR: Calculamos el punto medio y cortamos el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);    // Primera mitad (desde el inicio hasta el medio)
    const right = arr.slice(mid);      // Segunda mitad (desde el medio hasta el final)

    // 3. CONQUISTAR: Llamadas recursivas para encontrar el máximo de cada mitad
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // 4. COMBINAR: Comparamos los dos ganadores y devolvemos el más grande
    return Math.max(leftMax, rightMax);
}


const numbers = [3, 8, 2, 10, 5, 7];
console.log(" El número máximo es:", findMax(numbers)); // Salida esperada: 10