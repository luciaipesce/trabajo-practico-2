// ✅ Requisito Técnico General: Contar con al menos 3 componentes.
// Cuenta con 4 Componentes:
// 1. EvaluadorContrasenia.jsx: Componente principal que gestiona la lógica general, los estados y el renderizado de los subcomponentes.
// 2. CampoContrasenia.jsx: Componente que contiene el campo de entrada de la contraseña, el botón de copiar y el botón de mostrar/ocultar.
// 3. GlobitoFortaleza.jsx: Componente que muestra visualmente la fortaleza de la contraseña ("Poco segura", "Segura", "Muy segura").
// 4. FondoAnimado.jsx: Componente que contiene el fondo animado de burbujas.

// Componente EvaluadorContrasenia
// Este componente es el principal de la aplicación. Contiene la lógica para evaluar la fortaleza de la contraseña ingresada por el usuario y renderiza los subcomponentes necesarios.

import React, { useState } from "react";
import "../assets/styles/evaluador-contrasenia.css"; // Importamos los estilos CSS
import zxcvbn from "zxcvbn"; // Importamos la librería zxcvbn para evaluar la fortaleza de la contraseña
import CampoContrasenia from "./CampoContrasenia"; // Importamos la componente CampoContrasenia
import GlobitoFortaleza from "./GlobitoFortaleza"; // Importamos la componente GlobitoFortaleza
import generatePassword from "generate-secure-password"; // Importamos la librería para generar contraseñas aleatorias

// ✅ Requisito Técnico General: Contar con al menos 1 componente con estado
function EvaluadorContrasenia() {
  // Estados locales
  const [contrasenia, setContrasenia] = useState(""); // ✅ Requisito Técnico: Poseer una entrada de texto para que el usuario ingrese la contraseña
  const [mostrar, setMostrar] = useState(false); // ✅ Requisito Técnico: Poseer un botón para mostrar/ocultar la contraseña ingresada por el usuario
  const [copiado, setCopiado] = useState(false); // ✅ Power Up: Posee un botón para copiar la contraseña al portapapeles (+1 punto extra)

  // Esta función copia el valor actual de la contraseña usando la API Clipboard.
  const copiar = () => {
    navigator.clipboard.writeText(contrasenia);
    // ✅ Power Up: Luego copiar la contraseña al portapapeles se muestra un mensaje indicando que el valor fue copiado. El mensaje desaparece automáticamente luego de 3 segundos (+1 punto extra)
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000); // Se oculta automáticamente después de 3 segundos
  };

  // ✅ Requisito Técnico: ¿Cómo se calcula la fortaleza de una contraseña? Proponga Ud. la forma que crea conveniente
  // Usamos la librería zxcvbn para evaluar la fortaleza de la contraseña
  const calcularFortaleza = (valor) => {
    const resultado = zxcvbn(valor);
    const score = resultado.score;
    //✅ Requisito Técnico: Debe clasificar y mostrar la fortaleza de la contraseña ingresada con las palabras "Poco segura", "Segura" o "Muy segura"
    if (score <= 1) return "Poco Segura";
    if (score === 2 || score === 3) return "Segura";
    return "Muy Segura";
  };

  // ✅ Requisito Técnico: El mensaje con la clasificación de la contraseña puede aparecer cuando el usuario presione algún botón o cuando la entrada de texto cambia
  // En este caso, se evalúa la fortaleza cada vez que cambia el valor de la contraseña
  const fortaleza = contrasenia ? calcularFortaleza(contrasenia) : "";

    // Función para Generar una Contraseña Aleatoria de 8 Caracteres con Letras Minúsculas, Letras mayúsculasy Números
    const generarContrasenia = () => {
      const nueva = generatePassword({ length: 8, numbers: true, lowercase: true, uppercase: true, symbols: false });
      setContrasenia(nueva);
    };

  return (
    <>
      {/* Encabezado fijo con estilo translúcido */}
      <header className="barra-header">
        <h1 className="titulo-header">Fortaleza de Contraseña</h1>
      </header>

      <main className="contenedor-evaluador">
        <section className="bloque-evaluador">
          {/* ✅ Requisito Técnico General: Contar con al menos 1 componente que reciba una propiedades */}
          <CampoContrasenia
            contrasenia={contrasenia}         // Valor de la contraseña
            setContrasenia={setContrasenia}   // Función para actualizarla
            mostrar={mostrar}                 // Estado de visibilidad
            setMostrar={setMostrar}           // Función para alternar visibilidad
            copiar={copiar}                   // Función para copiar al portapapeles
            generarContrasenia={generarContrasenia} // Función para generar contraseña aleatoria
          />

          {/* Si hay una contraseña ingresada, se muestra el componente visual con la fortaleza */}
          {fortaleza && <GlobitoFortaleza fortaleza={fortaleza} />}

          {/* Mensaje que indica que la contraseña fue copiada al portapapeles */}
          {copiado && (
            <aside
              className="contrasenia-copiada"
              aria-live="polite"  // El lector de pantalla anuncia este contenido cuando se actualiza
              role="status"       // Informa que esto es un mensaje de estado
            >
              <span
                className="tick"
                aria-hidden="true" // Este ícono decorativo no debe ser leído por screen readers
              >
                ✔
              </span>
              <span className="texto">Contraseña Copiada</span> {/* Si esto se muestra es porque anda todo *bailecito* */}
            </aside>
          )}
        </section>
      </main>
    </>
  );
}

export default EvaluadorContrasenia;