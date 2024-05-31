import React, { useEffect } from "react";
import RecipeItem from "./RecipeItem";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toggleModal, setModalProps } from "../store";

function Recipes() {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/recipes");
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onViewSelectedRecipe = (data) => {
    dispatch(toggleModal());
    dispatch(setModalProps(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {recipes.map(
        (item, index) =>
          item && (
            <RecipeItem
              key={index}
              itemIndex={index}
              details={item}
              onViewSelectedRecipe={onViewSelectedRecipe}
            />
          )
      )}
    </div>
  );
}

export default Recipes;
