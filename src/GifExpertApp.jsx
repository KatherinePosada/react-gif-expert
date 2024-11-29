import { useState } from "react"
import { AddCategory, GifGrid } from "./components"; //Archivos de barril/index
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat, 'Valorant']);
  }


  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory  
        onNewCategory = { onAddCategory }
      />

      { categories.map( category => (
          <GifGrid key={category} category= {category}/>
        )) 
      }

    </>
  )
}