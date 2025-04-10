// import { useState } from "react";

import { ButtonDeleteGif } from "./ButtonDeleteGif"


export const GifItems = (images) => {

    // const [objetos,setObjetos] = useState([images]);
  
  
    // console.log(objetos);
   

  // console.log(imgs)

    // console.log("titulo:",title, "url:" ,url ,"id:",id);
  return (

  
    <div className="container">
     
     
      <div className="row">
      <div className="col-6">
       <div className="card">
      <img src={images.url}/>
      <p class="text-center">{images.title}</p>
      <ButtonDeleteGif
        key={images.id}
        {...images}


      />
      </div>
  
     
    </div>
      </div>
    </div>




  )
}
































// const eliminarPorId = (id) => {
//   const nuevosItems = objetos.filter(items => items.id !== id);
//   setObjetos(nuevosItems);
// } 
