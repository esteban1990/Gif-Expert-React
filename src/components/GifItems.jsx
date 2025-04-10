import { useState } from "react";
import { ButtonDeleteGif } from "./ButtonDeleteGif"


export const GifItems = (images) => {
  const [objetos,setObjetos] = useState([images]);
  console.log(objetos);

  const eliminarPorId = (id) => {
    const nuevasImagenes = objetos.filter(item => item.id !== id);
    setObjetos(nuevasImagenes);
  };



  // console.log(imgs)

    // console.log("titulo:",title, "url:" ,url ,"id:",id);
  return (

  
    <div className="container">
      <div className="row">
      <div className="col-6">
       <div className="card">
       {
        objetos.map((img) => {
          return(
            <div key={img.id}>
              <img src={img.url}/>
              <p>{img.title}</p>
              <button onClick={() => eliminarPorId(img.id)} class="btn btn-danger">Deelete image</button>
            </div>
          )
        })
       }
        </div>
      </div>
     

      </div>
    </div>




  )
}
