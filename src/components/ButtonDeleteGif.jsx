import React, { useState } from 'react'

export const ButtonDeleteGif = (images) => {

  const [objetos,setObjetos] = useState([images]);

    // console.log(objetos);
        const eliminarPorId = (id) => {
        const nuevasImagenes = objetos.filter(item => item.id !== id);
        setObjetos(nuevasImagenes);
      };
      

  return (
    <>    
    {

    objetos.map(item => (
      <div key={item.id}>
        <button onClick={() => eliminarPorId(item.id)}>Eliminar</button>
      </div>
    ))
    
    }
    </>
  )
}
