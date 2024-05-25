import {
    createBrowserRouter,
  } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoute";
import AddRecipes from "../pages/AddRecipes/AddRecipes";
import Recipes from "../pages/AllRecipes/Recipes";
import Error from "../shared/Error/Error";

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
        }
      ]
    },
  ]);