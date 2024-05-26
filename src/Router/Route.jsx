import {
    createBrowserRouter,
  } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoute";
import AddRecipes from "../pages/AddRecipes/AddRecipes";
import Recipes from "../pages/AllRecipes/Recipes";
import Error from "../shared/Error/Error";
import RecipesDetails from "../pages/AllRecipes/RecipesDetails";
import PrivateRecipe from "../Router/PrivateRecipe"

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<RootLayout/>,
      errorElement:<Error/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/addRecipes',
          element:<PrivateRoutes><AddRecipes/></PrivateRoutes>
        },
        {
          path:'/recipes',
          element:<Recipes/>
        },
        {
            path:'/recipeDetails/:id',
            element:<PrivateRecipe><RecipesDetails/></PrivateRecipe>,
            loader:({params}) => fetch(`http://localhost:5000/recipe/${params.id}`)
        }
      ]
    },
  ]);