
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
            {path:'/',element:<Home/>},
            {path:'login',element: <Login/>},
            {path:'register',element: <Register/>},
            {path:'addToy',element: <AddToy/>},
            {path:'allToy',element: <AllToy/>,loader: ()=> fetch('http://localhost:5000/alltoy')},
        ]
    },
]);

export default router;