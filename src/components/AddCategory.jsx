import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setinputValue] = useState('')

  const onInputchange = ({target}) => {
    setinputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault(); //no permite resfrescar el navegador cuando se da enter
    if(inputValue.trim().length <= 1) return;

    onNewCategory(inputValue);
    setinputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputchange }
      />
    </form>
    
  )
}
