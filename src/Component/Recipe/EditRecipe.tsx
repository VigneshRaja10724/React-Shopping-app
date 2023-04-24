import { useEffect, useRef, useState } from "react";
import { Container, Form, Button, Image, Alert } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { Recipe } from "../../Model/Recipe";
import { createRecipe } from "../../Data/Http";
// import ReactDOM from "react-dom";

interface Contex {
  recipes: Recipe[];
  setRecipes: any;
}
const EditRecipe = () => {
  const recipeContex: Contex = useOutletContext();
  const recipeListData = recipeContex.recipes;
  const setRecipeListData = recipeContex.setRecipes;
  const [name, setName] = useState("");
  const [discription, setDiscripton] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [recipe, setRecipe] = useState<Recipe | undefined | any>();
  const [addedMessage, setAddedMessage] = useState<string>("");

  const formRef = useRef<HTMLFormElement | any>();

  const checkValidity = (
    name: string,
    discription: string,
    imagePath: string
  ) => {
    if (name.length > 1 && discription.length > 1 && imagePath.length > 1) {
      return true;
    }
    return false;
  };

  const isVald = checkValidity(name, discription, imagePath);

  const addRecipe = () => {
    const recipeExist = recipeListData.find(
      //Find will return the object if it is found by the given condition else it will return undefined.
      (recipeListName) =>
        recipeListName.name === recipe.name ||
        recipeListName.imagePath === recipe.imagePath
    );

    if (recipeExist) {
      setAddedMessage("exist");
      return console.log("Recipe Already exist");
    }

    setRecipeListData((previousArray: Recipe[]) => [...previousArray, recipe]);
    setAddedMessage("added");

    createRecipe(recipe);
   
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show message to false
      setAddedMessage("");
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, [addedMessage]);

  const onSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    addRecipe();
    formRef.current.reset();
    setRecipe(null);
    setName("");
    setDiscripton("");
    setImagePath("");
  };
  return (
    <Container>
      <Form ref={formRef}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Recipe Name"
            onChange={(e) => {
              setRecipe({ ...recipe, name: e.target.value });
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagePath">
          <Form.Label style={{ fontWeight: "bold" }}>Image_Path</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image URL"
            onChange={(e) => {
              setRecipe({ ...recipe, imagePath: e.target.value });
              setImagePath(e.target.value);
            }}
          />
          <hr></hr>
          <Image width="250" height="250" src={recipe?.imagePath} rounded />
        </Form.Group>
        <Form.Group className="mb-3" controlId="discription">
          <Form.Label style={{ fontWeight: "bold" }}> DISCRIPTION</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Recipe Discription"
            rows={3}
            onChange={(e) => {
              setRecipe({ ...recipe, discription: e.target.value });
              setDiscripton(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          className="btnFormSend"
          variant="success"
          type="submit"
          onClick={onSubmit}
          disabled={!isVald}
        >
          Add
        </Button>
      </Form>
      <Alert
        variant="success"
        className={addedMessage === "added" ? "d-block mt-3" : "d-none"}
      >
        <h4>Recipe Added</h4>
      </Alert>
      <Alert
        variant="danger"
        className={addedMessage === "exist" ? "d-block mt-3" : "d-none"}
      >
        <h4>Recipe Already Exist</h4>
      </Alert>
    </Container>
  );
};

export default EditRecipe;
