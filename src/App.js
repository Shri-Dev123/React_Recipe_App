import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';

function App() {
  const APP_ID = "4dbf3088"
  const APP_KEY = "5b55ff5d7e2a19c5543243418c6e32c9"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const sampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const searchRecipe = (e) => {
    setSearch(e.target.value)
  }

  const queryRecipe = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(sampleReq);
      setRecipes(response.data.hits)
    }
    fetchData();
  }, [query]);


  return (
    <div className="App">
      <form onSubmit={queryRecipe} className="search-form">
        <input className="search-bar" onChange={searchRecipe} type="text" value={search} />
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">

          {recipes.map((recipe, index) => (<Recipe key={index} title={recipe.recipe.label} calories={recipe.recipe.calories} mealType={recipe.recipe.mealType} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />))}

      </div>
    </div>
  );
}

export default App;
