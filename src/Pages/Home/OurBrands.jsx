
const OurBrands = () => {
    return (
        <div className='md:mx-20 mt-28'>
            <h2 className='my-5 text-4xl font-bold text-center'> Our Brands</h2>
            <p className='text-2xl text-center font-medium mt-8 text-gray-400'>More Than Your Average Toy Store</p>
            
            <div className='my-10 grid grid-cols-2 md:grid-cols-5 gap-10 justify-items-center'>
        <div className="mx-5 md:mx-2">
            <img src="https://junotoys-html.themerex.net/images/4-3.png" alt="" />
        </div>
        <div className="mx-5 md:mx-2">
            <img src="https://junotoys-html.themerex.net/images/5-1a.png" alt="" />
        </div>
        <div className="mx-5 md:mx-2">
            <img src="https://junotoys-html.themerex.net/images/3-2a.png" alt="" />
        </div>
        <div className="mx-5 md:mx-2">
            <img src="https://junotoys-html.themerex.net/images/1-3a.png" alt="" />
        </div>
        <div className="hidden md:block ">
            <img src="https://junotoys-html.themerex.net/images/3-2a.png" alt="" />
        </div>
            </div>
        </div>
    );
};

export default OurBrands;