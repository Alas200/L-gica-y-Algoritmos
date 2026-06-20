// 1. Arreglo de objetos inicial (Productos de la tienda)
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

console.log("🛒 PRODUCTOS ORIGINALES:", productos);
console.log("------------------------------------------");

// 2. Uso de filter() para obtener productos de menos de $100
// La regla es: dejar pasar solo los objetos cuyo precio sea menor a 100
const productosBaratos = productos.filter(prod => prod.precio < 100);

console.log("🔍 2. FILTRADOS (Menos de $100):", productosBaratos);
console.log("------------------------------------------");

// 3. Uso de sort() para ordenar alfabéticamente por NOMBRE
// Usamos [...] para sacar una copia de los filtrados y no alterar el paso anterior.
// Con textos, usamos 'localeCompare' que es el equivalente al (a - b) de los números.
const productosOrdenados = [...productosBaratos].sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
});

console.log("🔤 3. ORDENADOS ALFABÉTICAMENTE:", productosOrdenados);
console.log("------------------------------------------");

// 4. Uso de map() para extraer SOLO los nombres de los productos ordenados
// Map transforma el objeto completo en un simple texto con el nombre
const nombresProductos = productosOrdenados.map(prod => prod.nombre);

// 5. Mostrar el resultado final solicitado en la consola
console.log("📋 4. RESULTADO FINAL (Solo nombres):", nombresProductos);
// Debería mostrar: ["Camiseta", "Libro", "Zapatos"]