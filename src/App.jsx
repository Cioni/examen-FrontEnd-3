
import React from 'react'
import { useState, useEffect } from 'react' 
import Card from './components/Card'
import './App.css'

const App = () => {

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [isValid1, setIsValid1] = useState(false); //este se usa para el de 3 caracteres
  const [isValid2, setIsValid2] = useState(false); //este se usa para el de 6 caracteres 
  const [isValid3, setIsValid3] = useState(false);
  const [formSubmited, setFormSubmited] = useState(false);
  const [formKey, setFormKey] = useState(0); // estado para refrescar el formulario



  const handleChange1 = (event) => {
    const value = event.target.value; 
    setInputValue1(value);
    setIsValid1(value.length > 2) // aca valido que tiene que ser mayor a 3 caracteres
  }
  
  const handleChange2 = (event) => {
    const value = event.target.value; 
    setInputValue2(value);
    setIsValid2(value.length >= 6) // aca valido que tiene que ser mayor a 6 caracteres
  }

  const handleChange3 = (event) => {
    const value = event.target.value;
    setInputValue3(value);
    setIsValid3(/^#([0-9A-F]{3}){1,2}$/i.test(value)); // Validar el color hexadecimal
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    setFormKey((prevKey) => prevKey + 1); // actualizar el estado de key para refrescar el formulario
  }

  return (
    <>
      <div className='App'>
        <h1>Carga de Estudiantes</h1>
        <form onSubmit={handleSubmit} >
          <input type='text' placeholder='Ingrese su nombre' value={inputValue1} onChange={handleChange1}></input>
          <input type='text' placeholder='Ingrese el color' value={inputValue2} onChange={handleChange2}></input>
          <input type='text' value={inputValue3} onChange={handleChange3} className={`input-field ${isValid3 ? '' : 'invalid'}`} placeholder='Ingrese un color hexadecimal (#FFFFFF)'/>          <button type='submit'>Enviar</button>
        </form>
        {formSubmited && isValid1 && isValid2 && <Card name={inputValue1} color={inputValue2} />}
        {formSubmited && (!isValid1 || !isValid2) && (<p className='error-text'>Por favor, chequear que la informacion sea correcta</p>)}

        {/* {formSubmitted && isValid1 && isValid2 && isValid3 && (<Card key={submitKey} name={inputValue1} color={inputValue2} hexColor={inputValue3} />)}
        {formSubmitted && (!isValid1 || !isValid2 || !isValid3) && (<p className='error-text'>Por favor, chequear que la información sea correcta</p>)} */}
      </div>
    </>
  )
}

export default App
