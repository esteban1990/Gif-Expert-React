import React, { useState } from 'react'

export const InputAddCategoryComponent = ({onNewCategory}) => {
    // console.log(onNewCategory)


    const [inputValue,setInputValue] =  useState(" ")


    const handleChangeInput = ({target}) => {
        // console.log(e.target.value)
        setInputValue(target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const valor = inputValue
        if(valor.trim().length <= 1) return;
        //USAR JAVASCRIPT PARA ESTE CODIGO , ALMANCENAR EL VALOR EN UNA CONSTANTE 

        onNewCategory(valor.trim());
        
       
        // onSetCategories((cate)=>([inputValue,...cate]))
        setInputValue("");
        
    }

  return (
    <>
    <h3>IputAddCategoryComponent</h3>

    <form onSubmit={handleSubmitForm}>
    <input
    type="text"
    placeholder='ingresa una categoria para ver imagenes'
    value={inputValue}
    onChange={handleChangeInput}
    />
    </form>


    </>
  )
}
