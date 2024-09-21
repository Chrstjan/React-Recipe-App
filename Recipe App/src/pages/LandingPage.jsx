import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const LandingPage = () => {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/recipes?limit=0"
  );

  useEffect(() => {
    {
      data ? console.log(data.recipes) : null;
    }
  }, [data]);

  return (
    <>
      {loading ? <h2>Loading data</h2> : null}
      {error ? <h2>Error in fetch</h2> : null}
    </>
  );
};
