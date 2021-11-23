import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
const GiftExpertApp = () => {
    //const categories=['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['Oregairu'])
  //  const handleAdd=()=>{
      // setcategories([...categories,'Oregairu']);
    //  setcategories(cats=>[...categories,'Oregairu']);
    //}


    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ul>
                {
                    categories.map(category=>
                   <GiftGrid key={category} category={category}/>
                   ) }
            </ul>
        </>
    );
}
export default GiftExpertApp;