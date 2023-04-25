import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import { Recipe } from "../../Model/Recipe";

interface RecipeList {
  recipeList: Recipe[];
}

const RecipeList = (data: RecipeList) => {

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/newRecipe`;
    navigate(path);
  };

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Button variant="success" onClick={routeChange}>
            New Recipe
          </Button>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        {data.recipeList.map((recipe, index) => (
          <RecipeItem key={recipe.id} data={recipe} id={recipe.id} /> //Keys help React identify which items have changed, are added, or are removed
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
