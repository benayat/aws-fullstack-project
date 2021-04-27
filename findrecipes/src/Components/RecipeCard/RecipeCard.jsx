import React from "react";
import axios from 'axios';
import './RecipeCardStyle.css';

const RecipeCard =({title,description,ingredients,prepStages,image,cal,prepTime})=>{

const clickHandler = () =>{
    

}

  return (
    <div className="recipeCardContainer">
        <h2>{title}title</h2>
        <p>{description}description</p>
        <div className="allRecipeInfo">
            <div className="miniCard">
                <h3>Ingredients</h3>
                <ol>
                    {/* {
                        ingredients.map((ingre,index)=>{
                            return <li key={index}>{ingre}</li>
                        })
                    }    */}
                </ol>
                <p>{cal}</p>
                <p>{prepTime}</p>
            </div>
            <div className="miniCard">
                <h3>Preparation Stages</h3>
            </div>
            <img className="miniCard" src={image} alt="" width="" height=""/>
        </div>
        <button onClick={clickHandler}>Add to Favorites</button>
   </div>
  );
}

export default RecipeCard;