import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AllRecipes from "../Pages/AllRecipes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddRecipe from "../Pages/AddRecipe";
import MyRecipes from "../Pages/MyRecipes";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import DetailsRecipe from "../Pages/DetailsRecipe";
import Loading from "../Components/Loading";
import Support from "../Pages/Support";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-recipes",
        loader: () =>
          fetch("https://recipe-haven-server-five.vercel.app/recipes"),
        Component: AllRecipes,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe></AddRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "recipe-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://recipe-haven-server-five.vercel.app/recipes/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            {" "}
            <DetailsRecipe></DetailsRecipe>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "support",
        Component: Support
      },
      {
        path: "my-recipes",
        loader: () =>
          fetch("https://recipe-haven-server-five.vercel.app/recipes"),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            {" "}
            <MyRecipes></MyRecipes>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "/*",
        Component: ErrorPage,
      },
    ],
  },
  {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Dashboard
      }
    ]
  }
]);

export default router;
