// app.js
// Importamos las funciones necesarias del módulo de viajes
import { registrarDestino, mostrarItinerario } from './viajeManager.js';

// Función de flecha para iniciar la aplicación
const iniciarApp = () => {
    // Registro de destinos de prueba
    registrarDestino("Paris", "2026-06-15", "Avión");
    registrarDestino("Londres", "2026-07-01", "Tren");
    registrarDestino("New York", "2026-10-10", "Avión"); // Destino extra para probar

    // Mostrar el itinerario en consola
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();