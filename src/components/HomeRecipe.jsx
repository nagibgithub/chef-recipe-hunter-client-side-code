import React from 'react';

const HomeRecipe = ({recipe}) => {
    // console.log(recipe);
    return (
        <div>
            <h1>{recipe.rec_name}</h1>
        </div>
    );
};

export default HomeRecipe;