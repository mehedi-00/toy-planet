
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import PrivetRoute from "./PrivetRoute";
import SingleToyDetails from "../Pages/SingleToy/SingleToyDetails";
import MyToy from "../Pages/MyToy/MyToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'addToy', element: <PrivetRoute><AddToy /></PrivetRoute> },
            { path: 'allToy', element: <AllToy />, loader: () => fetch('http://localhost:5000/alltoy') },
            { path: 'toy/:id', element: <PrivetRoute><SingleToyDetails /></PrivetRoute>, loader: ({ params }) => fetch(`http://localhost:5000/singletoy/${params.id}`) },
            { path: '/toys', element: <PrivetRoute><MyToy /></PrivetRoute> }
        ]
    },
]);

export default router;