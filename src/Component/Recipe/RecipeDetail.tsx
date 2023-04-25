import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Recipe } from "../../Model/Recipe";
import { deleteRecipe } from "../../Data/Http";

interface Contex {
  recipes: Recipe[];
  setRecipes: any;
}

type RcipeProps = {
  id?: string; //optional, chaining operator ?  https://stackoverflow.com/questions/52251917/what-is-the-use-of-questionmark-in-typescript-variable
};

const RecipeDetail = () => {
  const { id } = useParams<RcipeProps>();
  const [data, setData] = useState<Recipe>();
  const contexData: Contex = useOutletContext();
  const recipes = contexData.recipes;
  const navigate = useNavigate();

  useEffect(() => {
    // let recipe = recipes[+id!]; //In TypeScript, a postfix ! removes null and undefined from the type of an expression.
    let recipe =  recipes.find((rep ) =>{
      return  rep.id === +id!;
    })
    setData(recipe);
  }, [id]);

  const onUpdate = () => {
    navigate(`/edit/${id}`)
  }
  const onDelete = () => {
    const updatedRecipes = recipes.splice(+id!, 1);
    navigate("/");
    deleteRecipe(id!);
    contexData.setRecipes(recipes);
  };
  return (
    <Container>
      <Row>
        <img width="500" height="500" src={data?.imagePath} alt={data?.name} />
      </Row>
      <Row>
        <h4>{data?.name.toUpperCase()}</h4>
      </Row>
      <Row>
        <h4>{data?.discription}</h4>
      </Row>
      <Button variant="primary" onClick={onUpdate}>Edit</Button>{" "}
      <Button variant="danger" onClick={onDelete}> Delete</Button>
    </Container>
  );
};

export default RecipeDetail;
