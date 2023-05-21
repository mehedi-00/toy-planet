import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner";
import Gallery from "../Gallery";
import OurBrands from "../OUrBrands";
import ShopCategory from "../ShopCategory";
import TopRatedToy from "../TopRatedToy";

const Home = () => {
    useTitle("Home");
    return (
        <>
           <Banner/>
           <Gallery/>
           <ShopCategory/>
           <TopRatedToy/>
           <OurBrands/>
        </>
    );
};

export default Home;