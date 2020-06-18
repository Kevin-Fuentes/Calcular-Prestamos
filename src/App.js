import React, { Fragment, useState } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Mensaje from "./componentes/Mensaje";
import Resultado from "./componentes/Resultado";
import Spinner from "./componentes/Spinner";
function App() {
  const [state, setstate] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, settotal] = useState(0);
const [cargando, setcargando] = useState(false)

  let componente;
if(cargando){
  componente=<Spinner/>
}
  else if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} plazo={plazo} state={state} />;
  }

 

  return (
    <Fragment>
      <Header titulo="COTIZADOR DE PRESTAMOS" />

      <div className="container">
        <Formulario
          state={state}
          setstate={setstate}
          plazo={plazo}
          setPlazo={setPlazo}
          total={total}
          settotal={settotal}
          setcargando = {setcargando}
        />
        <div className="mensajes">{componente}</div>
      </div>
    </Fragment>
  );
}

export default App;
