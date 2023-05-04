import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import TermsConditions from "../pages/TermsConditions";
import AllChef from "../pages/AllChef";
import PrivateRoute from "./PrivateRoute";
import ChefRecipes from "../pages/ChefRecipes";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://radhuni-server-nagibgithub.vercel.app/chefs')
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/terms_conditions",
                element: <TermsConditions></TermsConditions>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/chefs",
                element: <AllChef></AllChef>,
                loader: () => fetch('https://radhuni-server-nagibgithub.vercel.app/chefs')
            },
            {
                path: "/recipes/:recipeId",
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://radhuni-server-nagibgithub.vercel.app/chefs/${ params.recipeId }`)
            }
        ]

    }
])

export default router