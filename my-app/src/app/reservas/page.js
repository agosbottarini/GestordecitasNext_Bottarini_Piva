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
  const [citas, setCitas] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      setCitas([...citas, formData]);
      setFormData({
        nombreMascota: '',
        nombreDueno: '',
        fecha: '',
        hora: '',
        sintomas: '',
      });
      setError('');
    } else {
      setError('Por favor, complete todos los campos.');
    }
  };

  const resetearForm = (index) => {
    const newCitas = [...citas];
    newCitas.splice(index, 1);
    setCitas(newCitas);
  };

  const validarFormulario = () => {
    const { nombreMascota, nombreDueno, fecha, hora, sintomas } = formData;
    return nombreMascota && nombreDueno && fecha && hora && sintomas;
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Agendar una Cita:</h2>
        {error && <p style={errorStyle}>{error}</p>}
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

      <div style={tusCitasStyle}>
        <h2>Tus Citas:</h2>
        {citas.map((cita, index) => (
          <div key={index} style={citaContainStyle}>
            <p><strong>Nombre mascota:</strong> {cita.nombreMascota}</p>
            <p><strong>Nombre dueño:</strong> {cita.nombreDueno}</p>
            <p><strong>Fecha cita:</strong> {cita.fecha}</p>
            <p><strong>Hora:</strong> {cita.hora}</p>
            <p><strong>Síntomas:</strong> {cita.sintomas}</p>
            <button onClick={() => resetearForm(index)} style={deleteButtonStyle}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
};

const formStyle = {
  flex: '1',
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

const tusCitasStyle = {
  flex: '1',
  marginLeft: '20px',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const citaContainStyle = {
  marginBottom: '20px',
  padding: '10px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 0 5px rgba(0,0,0,0.1)',
};

const deleteButtonStyle = {
  marginTop: '10px',
  padding: '5px 10px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  margin: '10px',
};

export default FormularioCitas;
