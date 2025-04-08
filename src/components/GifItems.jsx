import React from 'react'




export const GifItems = (imgs) => {

    // console.log("titulo:",title, "url:" ,url ,"id:",id);


  return (
    <>
  {
       <div class="container text-center">
       <div class="row">
         <div class="col-4">
            <img src={imgs.url} alt={imgs.title}/>
         </div>
       </div>
     </div>  

}
</>  
  )
}
