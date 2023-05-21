
const Banner = () => {

    return (
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#eeaeca] to-[#94bbe9]  px-20 items-center">
            <div className=" w-[90vw] md:w-2/4 md:mr-10">
                    <h2 className="text-2xl text-center md:text-justify font-medium mt-5 md:mt-0">Welcome to <span className="text-3xl font-extrabold text-rose-700">Toy Planet</span></h2>
                    <p className="text-base my-3 text-center md:text-justify md:my-10 text-slate-700">your ultimate destination for a world of fun and imagination! Explore our vast collection of toys, designed to bring joy to kids of all ages. From classic favorites to the latest trends, we have something for every little adventurer, dreamer, and creator.<span className="hidden "> Discover a treasure trove of playthings that spark curiosity, foster creativity, and ignite endless hours of laughter and excitement.  With our carefully curated selection, exceptional quality, and unbeatable prices, Toys Galore is the go-to destination for all your toy needs</span></p>
                    <div className="md:text-start text-center my-5  " >
                        <button className=" px-4 md:px-8 md:py-5 py-3  btn-primary  ">Explore More</button>
                    </div>
            </div>

            <div className="carousel w-[80vw] md:w-2/4 py-3">
                <div id="slide1" className="carousel-item relative w-full">
                    <img className='min-w-full h-[300px] md:h-[500px]   rounded-xl' src="https://media.istockphoto.com/id/497568472/photo/boy-playing-cricket.jpg?s=612x612&w=0&k=20&c=l_5wcAKbTpnBqOb9tHOiyqVZmHJRmjz_3kxHpZRStfM=" alt="" />
                    <div className="absolute flex space-x-4 justify-between top-1/2 md:top-[unset] md: md:justify-stretch  md:bottom-0 left-0 md:left-5 right-2 md:right-8 ">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img className='min-w-full h-[300px] md:h-[500px] rounded-xl' src="https://i.pinimg.com/originals/5a/67/64/5a676443ba344f3d5349aa7418a65756.jpg" alt="" />
                    <div className="absolute flex space-x-4 justify-between top-1/2 md:top-[unset] md:justify-stretch  md:bottom-0 left-0 md:left-5 right-2 md:right-8 ">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img className='min-w-full h-[300px] md:h-[500px]  rounded-xl' src="https://img.freepik.com/free-photo/child-wearing-pink-clothes-playing-with-ball_23-2148597926.jpg?w=740&t=st=1684403838~exp=1684404438~hmac=8b833b1e7f4033954aae95bbae87c62378f06e4daa649c00626bc691578f203e" alt="" />
                    <div className="absolute flex space-x-4 justify-between top-1/2 md:top-[unset] md:justify-stretch  md:bottom-0 left-0 md:left-5 right-2 md:right-8 ">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img className='min-w-full h-[300px] md:h-[500px] ' src="https://img.freepik.com/free-photo/child-wearing-pink-clothes-playing-with-ball_23-2148597926.jpg?w=740&t=st=1684403838~exp=1684404438~hmac=8b833b1e7f4033954aae95bbae87c62378f06e4daa649c00626bc691578f203e" alt="" />
                    <div className="absolute flex space-x-4 justify-between  md:top-[unset] top-1/2 md:justify-stretch  md:bottom-0 left-0 md:left-5 right-2 md:right-8 ">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>



        </div>
    );
};



export default Banner;