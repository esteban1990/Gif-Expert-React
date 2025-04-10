import { useState } from "react"
import { InputAddCategoryComponent } from "./components/InputAddCategoryComponent"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {


    const [categories,setCategories] = useState(["one punch"]);

    const addCategory = (newCategory) => {
        //VALIDAR CON BUEN JAVASCRIPT SI YA EXISTE LA MSIMA CATEGORIA AL MOMENTO DE DARLE SUBMIT AL INPUT 
        // setCategories((cate) => [newCategory,...cate]);
        setCategories([...categories, newCategory])
    }
  return (
    <>

    <h4>GifExpertApp</h4>

    <InputAddCategoryComponent  
    // onSetCategories={setCategories}
    onNewCategory={event => addCategory(event)}
    />

    {
        categories.map((category)=> {
            return (
                <GifGrid
                key={category}
                category={category}
                
                
                />
            )
        })
    }

    </>

  )
}
