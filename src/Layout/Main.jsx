import {
    Outlet
} from "react-router-dom";
import Navbar from "../Pages/Share/Navbar";
import Footer from "../Pages/Share/Footer";


const Main = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto md:min-h-[calc(100vh-500px)]">

            <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default Main;