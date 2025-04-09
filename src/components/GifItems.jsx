

export const GifItems = (images) => {
  // console.log(imgs)

    // console.log("titulo:",title, "url:" ,url ,"id:",id);
  return (

  
    <div className="container">
      <div className="row">
      <div className="col-6">
       <div className="card">
        <img src={images.url} className="card-img-top"/>   
        <p>{images.title}</p>
        <button class="btn btn-danger">Delete Image</button>
        </div>
      </div>
     

      </div>
    </div>




  )
}
