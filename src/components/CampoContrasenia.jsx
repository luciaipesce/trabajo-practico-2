// ✅ Requisito Técnico General: Contar con al menos 3 componentes.
// Cuenta con 4 Componentes:
// 1. EvaluadorContrasenia.jsx: Componente principal que gestiona la lógica general, los estados y el renderizado de los subcomponentes.
// 2. CampoContrasenia.jsx: Componente que contiene el campo de entrada de la contraseña, el botón de copiar y el botón de mostrar/ocultar.
// 3. GlobitoFortaleza.jsx: Componente que muestra visualmente la fortaleza de la contraseña ("Poco segura", "Segura", "Muy segura").
// 4. FondoAnimado.jsx: Componente que contiene el fondo animado de burbujas.

// Componente CampoContrasenia
// Este componente contiene el campo de entrada para la contraseña,un botón para copiarla y un botón para mostrar u ocultar su contenido.

import React from "react";
import { FaRegEye, FaRegEyeSlash, FaRegCopy } from "react-icons/fa6"; // Importamos los iconos de React Icons FontAwesome
import { FaSyncAlt } from "react-icons/fa"; // Importamos el icono para el botón de generar contraseña aleatoria

// Función que recibe las propiedades necesarias para el campo de contraseña
function CampoContrasenia({ contrasenia, setContrasenia, mostrar, setMostrar, copiar, generarContrasenia }) {
  // Función para alternar la visibilidad de la contraseña (mostrar u ocultar)
  const cambiarVisibilidad = () => setMostrar(!mostrar);

  return (
    // <fieldset> se usa para agrupar controles relacionados. En este caso, todo lo relacionado a la contraseña.
    <fieldset className="bloque-evaluador">

      {/* Campo de entrada de la contraseña */}
      <input
        id="campo-contrasenia"
        type={mostrar ? "text" : "password"} // Si "mostrar" es true, se muestra el texto, si no, se oculta como password
        placeholder="Ingresá tu Contraseña"
        value={contrasenia}
        onChange={(e) => setContrasenia(e.target.value)} // Se actualiza el estado cuando el usuario escribe
        className="input-contrasenia"
      />

      {/* Grupo de botones de acción: Copiar y Mostrar/Ocultar */}
      <div className="iconos-acccion">
        {/* Botón para Copiar la Contraseña al Portapapeles */}
        <button
          type="button"
          onClick={copiar}
          aria-label="Copiar Contraseña al Portapapeles" // Descripción para lectores de pantalla
        >
          <FaRegCopy /> {/* FaRegCopy es el icono de copiar que importamos */}
        </button>

        {/* Botón para Mostrar u Ocultar la Contraseña */}
        <button
          type="button"
          onClick={cambiarVisibilidad}
          aria-label={mostrar ? "Ocultar Contraseña" : "Mostrar Contraseña"} // Descripción para lectores de pantalla. Si "mostrar" es true, se indica que se va a ocultar la contraseña, si no, que se va a mostrar
        >
          {mostrar ? <FaRegEye /> : <FaRegEyeSlash />} {/* Si "mostrar" es true, se muestra el icono de ojo abierto, si no, el de ojo cerrado */}
        </button>
      
        {/* ✅ Power Up: Posee un botón para generar de manera aleatoria una contraseña de al menos 8 caracteres que posea mayúsculas, minúsculas y números (+1 punto extra)*/} 
        <button
        type="button"
        onClick={generarContrasenia}
        aria-label="Generar Contraseña Aleatoria"
        >
          <FaSyncAlt />
        </button>  
      </div>
    </fieldset>
  );
}

export default CampoContrasenia;