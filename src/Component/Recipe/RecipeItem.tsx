import { Link } from "react-router-dom";
import { Recipe } from "../../Model/Recipe";

interface RecipeItemProps {
  data: Recipe;
  id: number;
}

const RecipeItem = (recipe: RecipeItemProps) => {
  return (
    <Link to={`/select/${recipe.id}`}>
        <h4>{recipe.data.name.toUpperCase()}</h4>
        <img
          src={recipe.data.imagePath}
          alt={recipe.data.name}
          className="img-responsive"
          width="300"
          height="200"
        />
    </Link>
  );
};
export default RecipeItem;
