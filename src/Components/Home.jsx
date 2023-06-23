import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';

const Home = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('fish');

  useEffect(() => {
    const getRecipes = async () => {
      const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
      const data = await res.json();
      setRecipes(data.hits);
      console.log(data);
    }

    getRecipes();
  }, [query]);


  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="container2">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" placeholder="Search for a Recipe..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="search-btn">Search</button>
      </form>
      <div className="heading">
        <h1>{query} Recipes</h1>
      </div>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <Recipes key={recipe.recipe.calories}
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            dish={recipe.recipe.dishType}
            colories={recipe.recipe.calories}
            cuisine={recipe.recipe.cuisineType}
            dietLabels={recipe.recipe.dietLabels}
            time={recipe.recipe.totalTime}
            ingredients={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  )
}
export default Home;