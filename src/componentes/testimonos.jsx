import React from "react";
import '../css/testimonios.css'


export function Testimonios(props) {
  return (
    <div className='contenedor-test'>

      <img className='img-test'
      src={require(`../img/test-${props.img}.png`)}
      alt='foto de testimonio'/>

      <div className="contendeor-texto">
        <p className="nombre-test">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="trabajo-test">
          {props.trabajo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-test">"{props.testimonio}"</p>
      </div>

    </div>
  );
}

