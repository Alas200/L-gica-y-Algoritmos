const texto = "Aprender a programar abre un mundo de maravillosas oportunidades";

function encontrarPalabraMasLarga(cadena) {
    // 1. Convertimos el texto en un arreglo de palabras usando .split(' ')
    const palabras = cadena.split(' ');
    
    // Aquí guardaremos la palabra más larga encontrada hasta el momento
    let palabraMasLarga = "";

    // 2. Deslizamos la ventana (de tamaño 1) sobre el arreglo de palabras
    for (let i = 0; i < palabras.length; i++) {
        // La ventana actual es la palabra en la posición 'i'
        const palabraActual = palabras[i];

        // Comparamos: ¿La longitud de la palabra actual es mayor que nuestro récord?
        if (palabraActual.length > palabraMasLarga.length) {
            // Si es así, actualizamos nuestro récord
            palabraMasLarga = palabraActual;
        }
    }

    // 3. Devolvemos la palabra más larga al final de todo el recorrido
    return palabraMasLarga;
}

// 5. Mostramos el resultado en la consola
console.log(" Texto original:", texto);
console.log(" La palabra más larga es:", encontrarPalabraMasLarga(texto));
// Resultado esperado: "maravillosas"