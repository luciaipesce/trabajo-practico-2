// ✅ Requisito Técnico General: Contar con al menos 3 componentes.
// Este es uno de los componentes visuales que informa la fortaleza de la contraseña.

// Componente GlobitoFortaleza
// Muestra la fortaleza de la contraseña ("Poco segura", "Segura", "Muy segura") en un globito animado.
// Recibe la prop "fortaleza" y ajusta el estilo en base al texto recibido.

import React from "react";

function GlobitoFortaleza({ fortaleza }) {
    return (
        <aside
        className="globito-fortaleza"
        role="status"       // role="status" lo hace accesible para lectores de pantalla, informando que es un mensaje importante.
        aria-live="polite" // El lector de pantalla lo leerá cuando termine de hablar, sin interrumpir
        >
        {/* Texto con la palabra clave + fortaleza visual */}
        <span>Fortaleza: </span>

        {/* 
            Se crea una clase dinámica según el contenido (ej: nivel-Poco-Segura).
            Esto permite aplicar estilos diferentes a cada nivel.
            Se reemplaza el espacio por guion para que sea válido como nombre de clase.
        */}
        <strong className={`nivel-${fortaleza.replace(" ", "-")}`}>
            {fortaleza}
        </strong>
        </aside>
    );
}

export default GlobitoFortaleza;