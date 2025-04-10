
import { GifItems } from './GifItems';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs(category)
    // console.log(images,isLoading);



    


  return (

    <div>
      {/* podria hacer un componente aca isLoading  */}
      {
        isLoading ? (<h2>Cargando...</h2>)
        : null
      }
      <h4>{category}</h4>
 
        {images.map((imgs) => {
          return (
            <GifItems key={imgs.id}
            {...imgs}
            

            
            
            />
          )
        })}


    </div>
  )
}
