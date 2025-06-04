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
 * Muestra un video en pantalla.
 * Esta función es un ejemplo y debe implementarse según la lógica de la aplicación.
 * @function
 * @returns {void}
 */
const showVideo = () => {
    // Lógica para mostrar un video (implementar según necesidades)
};

(() => {
    showToast();
})();