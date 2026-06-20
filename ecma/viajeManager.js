// viajeManager.js

// Usamos const porque la referencia del array no va a cambiar
const destinos = [];

// Función de flecha para calcular el costo del viaje
// Nota: Dejamos esta función interna (sin exportar) ya que app.js no la necesita directamente
const calcularCosto = (destino, transporte) => {
    let costoBase = 0; // let porque el costo se va a modificar

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
};

// Función de flecha para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte) => {
    // Shorthand properties: si la propiedad y la variable se llaman igual, se pone solo una vez
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
};

// Función de flecha para mostrar el itinerario usando Template Literals (``) y forEach
export const mostrarItinerario = () => {
    if (destinos.length === 0) {
        console.log("No hay viajes registrados en el itinerario.");
        return;
    }

    // Reemplazamos el bucle for tradicional por un método moderno de arrays (forEach)
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("---------------------------");
    });
};