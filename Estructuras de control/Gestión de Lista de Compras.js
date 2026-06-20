// 1. Creamos un conjunto (Set) vacío para la lista de compras
const listaDeCompras = new Set();

// 2. Función para agregar un producto
const agregarProducto = (producto) => {
    // .has() revisa si el producto ya existe en el conjunto
    if (listaDeCompras.has(producto)) {
        console.log(`⚠️ El producto "${producto}" ya está en la lista.`);
    } else {
        // .add() agrega el producto al conjunto
        listaDeCompras.add(producto);
        console.log(`✅ "${producto}" ha sido agregado.`);
    }
};

// 3. Función para eliminar un producto
const eliminarProducto = (producto) => {
    // .delete() elimina el producto. Si no existía, devuelve false
    const seElimino = listaDeCompras.delete(producto);
    
    if (seElimino) {
        console.log(`🗑️ "${producto}" ha sido eliminado de la lista.`);
    } else {
        console.log(`❌ No se encontró "${producto}" en la lista.`);
    }
};

// 4. Función para mostrar la lista completa
const mostrarLista = () => {
    console.log("\n--- 🛒 MI LISTA DE COMPRAS ---");
    
    // .size nos dice cuántos elementos hay en el conjunto (como .length en los arrays)
    if (listaDeCompras.size === 0) {
        console.log("Tu lista está vacía.");
        console.log("-------------------------------\n");
        return;
    }

    // Recorremos el conjunto con un forEach
    // En los Sets, el índice no existe como tal, así que solo imprimimos el producto
    listaDeCompras.forEach((producto) => {
        console.log(`• ${producto}`);
    });
    console.log("-------------------------------\n");
};

// === 🚀 PRUEBAS ===

agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
mostrarLista(); // Muestra los 3 productos

agregarProducto("Leche"); // Intento de duplicado (avisará que ya existe)

eliminarProducto("Pan"); // Elimina Pan
mostrarLista(); // Muestra la lista final solo con Manzanas y Leche