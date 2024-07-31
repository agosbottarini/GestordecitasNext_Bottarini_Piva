"use client";

import React, { useState } from 'react';
import FormularioCita from '../FormularioCitas';
import ListaCitas from '../ListaCitas';

const App = () => {
    
  const [citas, setCitas] = useState([]);


  const eliminarCita = (id) => {

      const confirmarEliminacion = window.confirm("¿Deseas eliminar tu cita?");
        if(confirmarEliminacion){
            const citasActualizadas = citas.filter((cita, index) => index !== id);
            setCitas(citasActualizadas);
        }
  }


    return (
        <section class="listacitas-enter listacitas-enter-active">
            
                <div className='primera-mitad'>
                    <h1 style={{ marginLeft: "15.3vw", textAlign: "center" }}>AGENDAR UNA CITA:</h1>
                    <FormularioCita setCitas={setCitas} />
                </div>


                <div className='segunda-mitad'>
                    <h1>TUS CITAS:</h1>

                          <ListaCitas
                            nombreMascota={cita.nombreMascota}
                            nombreDuenio={cita.nombreDuenio}
                            fecha={cita.fecha}
                            hora={cita.hora}
                            sintomas={cita.sintomas}
                            onEliminar={eliminarCita}
                          />

                </div>
        </section>
    );
};

export default App;
