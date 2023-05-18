
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
            {path:'/',element:<Home/>}
        ]
    },
]);

export default router;