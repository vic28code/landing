"use strict";

/**
 * Muestra la notificación interactiva (toast) si existe en el DOM.
 * Agrega la clase 'md:block' para hacerla visible en pantallas medianas o mayores.
 * @function
 * @returns {void}
 */
const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block"); 
    }
};

/**
 * Asigna un evento click al elemento con ID 'demo' para abrir un video de YouTube en una nueva pestaña.
 * @function
 * @returns {void}
 */
const showVideo = () => {
    const demoBtn = document.getElementById("demo");
    if (demoBtn) {
        demoBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        });
    }
};

(() => {
    showToast();
    showVideo();
})();
import { fetchFakerData } from './functions.js';

const renderCards = (items) => {
  const container = document.getElementById('skeleton-container');
  container.innerHTML = ''; // Limpiar contenido previo

  items.slice(0, 3).forEach(item => {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300';
    card.innerHTML = `
      <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
      <p class="text-sm text-gray-600">Autor: ${item.author}</p>
      <p class="text-sm text-gray-600">Género: ${item.genre}</p>
      <p class="text-sm text-gray-600">Contenido: ${item.content}</p>
    `;
    container.appendChild(card);
  });
};

const loadData = async () => {
  const url = 'https://fakerapi.it/api/v2/texts?_quantity=10&_characters=120';
  const result = await fetchFakerData(url);

  if (result.success) {
    renderCards(result.body.data);
  } else {
    console.error('Error al cargar los datos:', result.error);
  }
};

loadData();
