// ✅ Requisito Técnico General: Contar con al menos 3 componentes.
// Cuenta con 4 Componentes:
// 1. EvaluadorContrasenia.jsx: Componente principal que gestiona la lógica general, los estados y el renderizado de los subcomponentes.
// 2. CampoContrasenia.jsx: Componente que contiene el campo de entrada de la contraseña, el botón de copiar y el botón de mostrar/ocultar.
// 3. GlobitoFortaleza.jsx: Componente que muestra visualmente la fortaleza de la contraseña ("Poco segura", "Segura", "Muy segura").
// 4. FondoAnimado.jsx: Componente que contiene el fondo animado de burbujas.

import React from "react";
import "../assets/styles/fondo-burbujas.css";
import fondo from "../assets/img/fondo-burbujas.svg";

// Componente que renderiza el fondo animado de burbujas
function FondoAnimado() {
  return (
    <>
      <figure aria-hidden="true" style={{ margin: 0, padding: 0 }}>
        {/* Fondo amarillo liso */}
        <div className="fondo-liso" role="presentation"></div>

        {/* SVG que contiene las burbujas animadas y la imagen multicolor */}
        <svg
          className="contenedor-burbujas"
          preserveAspectRatio="none" // Permite que el SVG se estire completamente sin conservar su proporción
          style={{ overflow: "visible" }} // Asegura que las burbujas no se recorten al salirse del área visible
          aria-hidden="true" // Oculta este SVG de los lectores de pantalla ya que es decorativo
        >
          <defs> {/* defs son definiciones de elementos que pueden ser reutilizables dentro del SVG */}
            {/* Filtro visual que crea el efecto tipo blobby, como que se unen tipo Agar.io (? */}
            <filter id="efectoGoma" height="130%"> {/* filter crea un efecto visual aplicado a elementos SVG. En este caso, se está creando un filtro llamado efectoGoma */}
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="desenfoque" /> {/* feGaussianBlur aplica un desenfoque gaussiano (es una forma matemática de "suavizar" imágenes) al gráfico de entrada (SourceGraphic) con una desviación estándar de 10, creando un efecto de desenfoque. */}
              <feColorMatrix // feColorMatrix aplica una transformación de color a la imagen. En este caso, se está utilizando para ajustar los colores y la opacidad de la imagen desenfocada.
                in="desenfoque" // La entrada de este filtro es el resultado del desenfoque anterior.
                mode="matrix" // Modifica los canales de color y opacidad con una matriz matemática.
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" // Esta matriz transforma los colores de la imagen desenfocada. Los valores ajustan los canales rojo, verde, azul y alfa (opacidad) de la imagen. El último número 18 -7 crea el efecto de fusión tipo blobby, como si las burbujas se pegaran entre sí (como en Agar.io).
                result="goma" // El resultado de esta transformación se almacena en una variable llamada goma.
              />
            </filter>

            {/* Máscara que recorta la imagen de fondo multicolor en la forma de burbujas */}
            <mask id="mascara" x="0" y="0">
              <g style={{ filter: "url(#efectoGoma)" }}> {/* g es un grupo de elementos SVG. Acá se aplica el filtro efectoGoma a todos los elementos dentro de este grupo */}
                {/* Burbuja 1 */}
                <circle className="burbuja" cx="10%" cy="10%" r="80" fill="white" /> {/* cx: Coordenada X del Centro, cy: Coordenada Y del centro, r: Radio, fill: Color de Relleno */}
                {/* Burbuja 2 */}
                <circle className="burbuja" cx="50%" cy="10%" r="40" fill="white" />
                {/* Burbuja 3 */}
                <circle className="burbuja" cx="17%" cy="15%" r="70" fill="white" />
                {/* Burbuja 4 */}
                <circle className="burbuja" cx="90%" cy="20%" r="120" fill="white" />
                {/* Burbuja 5 */}
                <circle className="burbuja" cx="30%" cy="25%" r="30" fill="white" />
                {/* Burbuja 6 */}
                <circle className="burbuja" cx="50%" cy="60%" r="80" fill="white" />
                {/* Burbuja 7 */}
                <circle className="burbuja" cx="70%" cy="90%" r="10" fill="white" />
                {/* Burbuja 8 */}
                <circle className="burbuja" cx="90%" cy="60%" r="90" fill="white" />
                {/* Burbuja 9 */}
                <circle className="burbuja" cx="30%" cy="90%" r="80" fill="white" />
              </g>
            </mask>
          </defs>

          {/* Imagen multicolor que se recorta según la máscara anterior para formar las burbujas */}
          <image
            href={fondo}
            width="100%"
            height="100%"
            preserveAspectRatio="none" //  Esto le dice al SVG que estire o ajuste la imagen de fondo para que cubra todo el contenedor, aunque se deforme.
            mask="url(#mascara)" // Aplica la máscara definida anteriormente a la imagen, recortándola en la forma de las burbujas.
          />
        </svg>
      </figure>
    </>
  );
}

export default FondoAnimado;