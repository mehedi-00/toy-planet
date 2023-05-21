
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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            { path: '/', element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'addToy', element: <PrivetRoute><AddToy /></PrivetRoute> },
            { path: 'allToy', element: <AllToy />, loader: () => fetch('https://toy-planet-server.vercel.app/alltoy') },           
            {path: 'blogs',element:<Blogs/>},
            { path: 'toy/:id', element: <PrivetRoute><SingleToyDetails /></PrivetRoute>, loader: ({ params }) => fetch(`https://toy-planet-server.vercel.app/singletoy/${params.id}`) },
            { path: '/my-toys', element: <PrivetRoute><MyToy /></PrivetRoute> }
        ]
    },
]);

export default router;