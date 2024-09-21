import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Recipe } from "../components/Main/Recipe/Recipe";

export const LandingPage = () => {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/recipes?limit=0"
  );

  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    {
      const getSelectedRecipes = async () => {
        const selectedRecipes = [
          data.recipes[Math.floor(Math.random() * data.recipes.length)],
          data.recipes[Math.floor(Math.random() * data.recipes.length)],
          data.recipes[Math.floor(Math.random() * data.recipes.length)],
          data.recipes[Math.floor(Math.random() * data.recipes.length)],
        ];
        setSortedProducts(selectedRecipes);
        console.log(sortedProducts);
      };

      {
        data ? getSelectedRecipes() : null;
      }
    }
  }, [data]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {loading ? <h2>Loading data</h2> : null}
      {error ? <h2>Error in fetch</h2> : null}

      <Recipe recipes={sortedProducts} />
    </>
  );
};
