import { Routes, Route } from "react-router-dom";
import RecipeCompo from "../Component/Recipe/Recipe";
import ShoppingList from "../Component/ShoppingList/ShoppingList";
import EditShopping from "../Component/ShoppingList/EditShoppingList";
import RecipeDetail from "../Component/Recipe/RecipeDetail";
import SelectRecipe from "../Component/Recipe/SelectRecipe";
import EditRecipe from "../Component/Recipe/EditRecipe";
import Login from "../Component/Auth/Login";

const   ComponentRoutes = (props : any) => {
  return (
      <Routes>
        <Route path="/" element={<RecipeCompo token = {props.userToken} />}>
          <Route path="" element={<SelectRecipe />}></Route>
          <Route path="newRecipe" element={<EditRecipe />}></Route>
          <Route path="/edit/:id" element={<EditRecipe />}></Route>
          <Route path="select/:id" element={<RecipeDetail />}></Route>
          <Route path=":id/edit" element={<EditRecipe />}></Route>
        </Route>
        <Route path="/shoppingList" element={<ShoppingList />}></Route>
        <Route path="/editShopping" element={<EditShopping />}></Route>
        {/* <Route path='*' element={<Navigate to='recipe' />} /> */}
      </Routes>
  );
};

export default ComponentRoutes;
