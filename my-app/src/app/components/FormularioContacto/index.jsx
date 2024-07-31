"use client";
import { useState } from 'react';

const FormularioContacto = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      apellido: '',
      email: '',
      mensaje: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      alert('Formulario enviado');

      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: '',
      })
    };

    return(
        <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{marginBottom: "3vw"}}>Contáctanos</h2>
        <div style={inputContainerStyle}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          style={fullWidthInputStyle}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Escribe un mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          style={textareaStyle}
        />
        <button type="submit" style={buttonStyle}>Enviar</button>
      </form>
    )
}
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '500px',
    margin: '0 auto',
    marginTop: '10vw'
  };
  
  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  };
  
  const inputStyle = {
    flex: '1',
    margin: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };
  
  const fullWidthInputStyle = {
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

export default FormularioContacto;