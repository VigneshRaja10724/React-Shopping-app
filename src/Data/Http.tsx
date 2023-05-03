import { UserRequest } from "../Model/AuthRequest";
import { Recipe } from "../Model/Recipe";

export const getAll = async (token: any) => {
  console.log(token.jwt)
  const header = {
    method: "GET",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer" + token },
  };
  try {
    const response = await fetch(
      "http://localhost:8080/recipes/getAll",header);
    const recipes = await response.json();
    return recipes;
  } catch (error) {
    console.log("error", error);
  }
};

export const login = async (credentials: UserRequest) => {
  const authRequest = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  };
  const response = await fetch("http://localhost:8080/signin", authRequest);
  const authResponse = await response.json();
  return authResponse;
};

export const createRecipe = async (recipe: Recipe) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  };
  await fetch("http://localhost:8080/recipes/create", requestOptions)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
};

export const updateRecipe = async (recipe: Recipe, recipeId: string) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: recipeId,
      name: recipe.name,
      discription: recipe.discription,
      imagePath: recipe.imagePath,
    }),
  };
  await fetch("http://localhost:8080/recipes/update", requestOptions)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
};

export const deleteRecipe = async (requestedId: string) => {
  await fetch(
    "http://localhost:8080/recipes/delete?" +
      new URLSearchParams({ id: requestedId }),
    { method: "DELETE" }
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
};
