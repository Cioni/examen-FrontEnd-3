import React from 'react'

const Card = (props) => {

  const buttonStyle = {
    backgroundColor: props.color,
    color: 'white',
  };


  // return (
  //   <div className='card-container'>
  //     <p className='text'>Hola {props.name}!</p>
  //     <p className='text'>Sabemos que tu color favorito es:</p>
  //     <button style={buttonStyle}>{props.color}</button>
  //   </div>
  // )

  return (
    <div className='card-container'>
      <p className='text'>Hola {props.name}!</p>
      <p className='text'>Sabemos que tu color favorito es:</p>
      <button style={buttonStyle}>{props.color}</button>
      <p className='text'>También ingresaste el color hexadecimal:</p>
      <button style={buttonStyle}>{props.hexColor}</button>
    </div>
  );
};



export default Card