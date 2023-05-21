import {
    Outlet
} from "react-router-dom";
import Navbar from "../Pages/Share/Navbar";
import Footer from "../Pages/Share/Footer";


const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Main;