import React from "react";

const Resultado = ({ total, plazo, state }) => (
  <div className="u-full-width resultado">
    <h2>Resumen</h2>
    <p>La cantidad solicitada es: ${state}</p>
    <p>A pagar en: {plazo}Meses</p>
    <p>Su pago mensual es de: ${(total/plazo).toFixed(2)}</p>
    <p>Total a pagar es: ${(total).toFixed(2)}</p>
  </div>
);

export default Resultado;
