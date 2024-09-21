import { useParams } from "react-router-dom";

export const RecipePage = () => {
  const { id } = useParams();
  return (
    <>
      <h2>Recipe!!</h2>
      <h3>{id}</h3>
    </>
  );
};
