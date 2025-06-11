fetch('https://fakerapi.it/api/v1/persons?_quantity=3')
  .then(response => response.json()) // Convierte la respuesta a JSON
  .then(data => {
    // Aquí puedes usar los datos recibidos
    console.log(data);
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error:', error);
  });
 'use strict';

import { fetchFakerData } from './functions.js';
const loadData = async () => {

    const url = 'https://fakerapi.it/api/v2/texts?_quantity=10&_characters=120';

    try {
        const result = await fetchFakerData(url);

        if (result.success) {
            console.log('Datos obtenidos con éxito:', result.body);
        } else {
            console.error('Error al obtener los datos:', result.error);
        }

    } catch (error) {

        console.error('Ocurrió un error inesperado:', error);

    }

};

// Función de autoejecución
(() => {

    loadData();
})();