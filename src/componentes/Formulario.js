import React, { useState,Fragment } 
from "react";
import {calcularTotal} from '../helpers'

const Formulario = (props) => {
   const   { state, setstate, plazo, setPlazo,settotal,setcargando } = props

  //Definir state
const [error, seterror] = useState(false)
  const calcularPrestamo = (e) => {
    e.preventDefault();
    //Validar
    if (state === 0 || plazo === "") {
     seterror(true)
    }else{
         seterror(false)
         setcargando(true)
         setTimeout(() => {
          const total =   calcularTotal(state,plazo)
          settotal(total) 
          setcargando(false)  
     }, 3000);
      
      
    }

    //Realizar cotizacion

  };
  return (

     <Fragment>
    <form onSubmit={calcularPrestamo}>
      <div className="row">
        <div>
          <label>Cantidad Prestamo</label>
          <input
            className="u-full-width"
            type="number"
            placeholder="Ejemplo: 3000"
            onChange={(e) => {
              setstate(parseInt(e.target.value));
            }}
          />
        </div>
        <div>
          <label>Plazo para Pagar</label>
          <select
            className="u-full-width"
            onChange={(e) => {
              setPlazo(parseInt(e.target.value));
            }}
          >
            <option value="">Seleccionar</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Calcular"
            className="button-primary u-full-width"
          />
        </div>
      </div>
    </form>
{(error)?<p className='error'>Todos los campos son obligatorios</p>: ''  }
    
    </Fragment>
  );
};

export default Formulario;
