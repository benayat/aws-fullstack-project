import React, { useState } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import Button from '../Button/Button';
import RecipeCard from '../RecipeCard/RecipeCard';
import '../FindRecipesPage/FindRecipeStyle.css';

const FindRecipesPage = () => {

const [data,setData] = useState();
// const [description,setDescription] = useState();
// const [ingredients,setIngredients] = useState();
// const [prepStages,setPrepStages] = useState();

const getApi= async () => {
    console.log("getApi");
    try{
        const response = await axios.get();
        setData(response);
        
       
    }catch(err){
            console.log(err); 
    }
}


const clickHandler=()=>{
    getApi();
}

const changeHandler = (e)=>{
    console.log(e.target.value);
}
    return (
      <div className="recipesContainer">
        <h1>Recipes from ... </h1>
            <div className="recipeSearch">
                <Input change={changeHandler}/>
                <Button click={clickHandler} content="Search"/>
            </div>
        <RecipeCard/>

    </div>
    );
};

  export default FindRecipesPage;
