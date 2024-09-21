import { useNavigate } from "react-router-dom";
import style from "./Recipe.module.scss";

export const Recipe = ({ recipes }) => {
  const navigate = useNavigate();
  const handleViewRecipe = (name) => {
    navigate(`/recipe/${name}`);
    console.log("Navigation!!");
  };

  return (
    <>
      {recipes.length > 0
        ? recipes.map((recipe) => {
            return (
              <figure
                onClick={() => handleViewRecipe(recipe.name)}
                key={recipe.id}
                className={style.recipeStyling}
              >
                <header className={style.headerStyling} key={recipe.id}>
                  <img src={recipe.image} alt="Recipe Thumbnail" />
                  <h2>{recipe.name}</h2>
                </header>
              </figure>
            );
          })
        : null}
    </>
  );
};
