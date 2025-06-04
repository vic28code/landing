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