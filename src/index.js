import React from "react";
import ReactDOM from "react-dom/client";
import FondoAnimado from "./components/FondoAnimado";
import EvaluadorContrasenia from "./components/EvaluadorContrasenia";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FondoAnimado />
    <EvaluadorContrasenia />
  </>
);