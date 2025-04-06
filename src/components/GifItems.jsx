import React from 'react'

export const GifItems = ({title,url,id}) => {

    console.log("titulo:",title, "url:" ,url ,"id:",id)

  return (
    <div className="card">
      <img src={url} alt={title}/>
      <p>{title}</p>

    </div>
  )
}
