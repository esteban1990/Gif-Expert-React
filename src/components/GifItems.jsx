import React from 'react'
// import "../estilos.css/"


export const GifItems = (imgs) => {

    // console.log("titulo:",title, "url:" ,url ,"id:",id);


 
  return (
  
    <div class='container'>
      <div class="row">
        <div class="col-6">
        <img src={imgs.url} alt={imgs.title}/>
                     <p>{imgs.title}</p>
        
  
    </div>
</div>
    </div>
  
  )
}
