import { Recipe } from "../Model/Recipe";

export const getAll = async  () =>  {
    
      try {
        const response = await fetch("http://localhost:8080/recipes/getAll");
        const recipes = await response.json();
        return recipes;
      } catch (error) {
        console.log("error", error);
      }
    
}

export const createRecipe = async (recipe : Recipe) => {

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

}

export const deleteRecipe = async (requestedId : string) => {
  await fetch("http://localhost:8080/recipes/delete?"+ new URLSearchParams({id : requestedId}) , { method: 'DELETE' })
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
  });;
}