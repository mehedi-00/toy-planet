import {
    Outlet
} from "react-router-dom";
import Navbar from "../Pages/Share/Navbar";


const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
        </>
    );
};

export default Main;