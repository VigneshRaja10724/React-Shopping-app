import { Container, Row, Col } from "react-bootstrap";
import RecipeList from "./RecipeList";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getAll } from "../../Data/Http";
import { Recipe } from "../../Model/Recipe";

export default function RecipeCompo() {
  const [recipes, setRecipes] = useState<Recipe[] | undefined>();

  useEffect(() => {
    getAll()
      .then((recipe: Recipe[]) => {
        setRecipes(recipe);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  if (recipes) {
    return (
      <Container fluid style={{ paddingTop: 20 }}>
        <Row xs={12}>
          <Col>
            <RecipeList recipeList={recipes} />
          </Col>
          <Col xs={6}>
            <Outlet context={{ recipes, setRecipes }} />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <h1 style={{ textAlign: "center" }}>Loading....</h1>;
  }
}
