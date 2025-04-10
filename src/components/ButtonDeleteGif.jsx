import React, { useState } from 'react'

export const ButtonDeleteGif = (images) => {

  const [objetos,setObjetos] = useState([images]);

  console.log(objetos)

  // console.log(objetos);
  const eliminarPorId = ({id}) => {
    const nuevosItems = objetos.filter(items => items.id !== id);
    setObjetos(nuevosItems);
  } 
    
      

  return (
    <div>
   
      <ul>

        {
        objetos.map(item => (
            <div key={item.id}>
            {/* {item.nombre} */}
            <button class="btn btn-danger" onClick={() => eliminarPorId(item.id)}>Eliminar</button>
            </div>
        ))
        
        }
      </ul>
    </div>
  );

}
