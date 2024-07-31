"use client";
import { useState } from 'react';

const FormularioCitas = () => {
  const [formData, setFormData] = useState({
    nombreMascota: '',
    nombreDueno: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Cita agregada');
    setFormData({
      nombreMascota: '',
      nombreDueno: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Agendar una Cita:</h2>
      <div>
        <input
          type="text"
          name="nombreMascota"
          placeholder="Nombre Mascota"
          value={formData.nombreMascota}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <input
          type="text"
          name="nombreDueno"
          placeholder="Nombre Dueño"
          value={formData.nombreDueno}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <input
          type="date"
          name="fecha"
          placeholder="Fecha"
          value={formData.fecha}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <input
          type="time"
          name="hora"
          placeholder="Hora"
          value={formData.hora}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <textarea
          name="sintomas"
          placeholder="Síntomas"
          value={formData.sintomas}
          onChange={handleChange}
          style={textareaStyle}
        />
      </div>
      <button type="submit" style={buttonStyle}>Agregar Cita</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '500px',
  margin: '0 auto',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const inputStyle = {
  width: 'calc(100% - 20px)',
  margin: '10px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const textareaStyle = {
  width: 'calc(100% - 20px)',
  margin: '10px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  minHeight: '100px',
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default FormularioCitas;
