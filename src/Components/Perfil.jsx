import React, { useEffect, useState } from 'react'

const Perfil = () => {

  const [perfil, setPerfil] = useState({})
  const [cambiarPerfil, setCambiarPerfil] = useState(false)
  const url = 'https://randomuser.me/api/'

  useEffect(()=>{
    fetch(url)
      .then(response => response.json())
      .then((data) =>{
        console.log(data);
        setPerfil(data.results[0]);
      })
  },[cambiarPerfil])
  console.log(perfil);


  return (
    <div>
        {perfil.name
          ? 
            <>
              <h2>{perfil.name.title} {perfil.name.first} {perfil.name.last}</h2>
              <img src={perfil.picture.large} alt="" />
              <p>Edad: {perfil.dob.age}</p>
              <p>Genero: {perfil.gender}</p>
              <p>Ciudad: {perfil.location.city}</p>
              <p>Pais: {perfil.location.country}</p>
            </>
          : 'null'
        }
        <button onClick={() => setCambiarPerfil(!cambiarPerfil)}>Cambiar Perfil</button>
               
    </div>
  )
}

export default Perfil