import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import TermsConditions from "../pages/TermsConditions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <PrivateRoute><About></About></PrivateRoute>
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
            }
        ]
        
    }
])

export default router