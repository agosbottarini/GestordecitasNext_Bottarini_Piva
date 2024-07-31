"use client";

import React from "react"

const ListaCitas = (props) =>
{
    return(


        <section className="listacitas"
        style={{
            borderRadius: "0.5vw",
            backgroundColor: "#ebebeb",
            padding: "1vw",
            width: "17vw",
            marginLeft: "10.21vw",
            marginTop: "1.5vw",
            fontSize: "large"
        }}
        >
            <p><strong>Nombre mascota:</strong> {props.nombreMascota}</p>
            <p><strong>Nombre dueño:</strong> {props.nombreDuenio}</p>
            <p><strong>Fecha cita:</strong> {props.fecha}</p>
            <p><strong>Hora:</strong> {props.hora}</p>
            <p><strong>Sintomas:</strong> {props.sintomas}</p>
            <button onClick={() => props.onEliminar(props.id)} className="button eliminar" style={{boxSizing: "6vw"}}>Eliminar</button>
        </section>

    )
}

export default ListaCitas