// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./estilos.css"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <GifExpertApp/>
  // </StrictMode>,
)
