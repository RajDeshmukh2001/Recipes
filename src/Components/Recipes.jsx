import React from 'react'

const Recipes = ({ title, image, dish, colories, cuisine, dietLabels, time, ingredients }) => {
    return (
        <>
            <div className="recipes">
                <div className="recipe-info">
                    <div className="image-box">
                        <img src={image} alt="" />
                    </div>
                    <div className="info">
                        <h2>{title}</h2>
                        <span className="dish">{dish}</span>
                        <p>Cuisine Type - <span>{cuisine}</span></p>
                        <p>colories - <span>{colories.toFixed(0)}</span></p>
                        <div className="diet-labels">
                            <p>Diet Labels - </p>
                            {dietLabels.map((label, i) => (<span key={i}>{label}</span>))}
                        </div>
                        <p>Total Time - <span>{(time === 0) ? ('') : (time + ' min')}</span> </p>
                    </div>
                </div>
                <div className="ingredients">
                    <h5>Ingredients</h5>
                    <ul className="list">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Recipes;