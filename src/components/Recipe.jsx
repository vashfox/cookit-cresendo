import React, { useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import RecipeItem from "./RecipeItem";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/recipes");
      const recipe = response.data.find((item) => item.uuid === id);
      setRecipe(recipe);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <RecipeItem details={recipe} view/>
    </div>
  );
}

export default Recipe;
