import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Gallery = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div className="md:w-2/4 mx-auto text-center">
                <h2 className="font-extrabold text-5xl text-blue-950 my-10"> Our Gallery </h2>
                <p className=" px-5 md:px-0 text-xl text-slate-800"> Whether you&rsquo;re searching for the perfect gift or simply want to relive the joy of your own childhood, Toy Wonderland is your one-stop destination. Come, let your imagination soar and experience the magic of play. Start exploring our toy gallery today</p>
            </div>
            <div className='grid md:grid-cols-2 md:mx-20 mx-5   my-10'>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-0 ">
                    <div className="border-4 rounded-xl border-emerald-900 " data-aos="zoom-in" data-aos-delay="200">
                        <img className="rounded-xl h-[300px]" src="https://img.freepik.com/free-photo/cute-little-boy-playing-park_1157-20375.jpg?w=740&t=st=1684405859~exp=1684406459~hmac=b1003b4ea691f542271b35bf5a16cc0c3646bf68205e9d2e1ba75db7108909bf" alt="" />
                    </div>
                    <div className="border-4 rounded-xl border-emerald-900 " data-aos="zoom-in" data-aos-delay="300">
                        <img className="rounded-xl h-[300px]" src="https://i.ytimg.com/vi/XPEDaF3-b-U/maxresdefault.jpg" alt="" />
                    </div>
                    <div className="border-4 rounded-xl border-emerald-900 " data-aos="zoom-in" data-aos-delay="200">
                        <img className="rounded-xl h-[300px]" src="https://m.media-amazon.com/images/I/71llwjfgshL.jpg    " alt="" />
                    </div>
                    <div className="border-4 rounded-xl border-emerald-900 " data-aos="zoom-in" data-aos-delay="300">
                        <img className="rounded-xl h-[300px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkt37Q6bOLXpaxQiqaJl9O3-oRMNLqsKIZfg&usqp=CAU" alt="" />
                    </div>
                    <div className="hidden md:block border-4 rounded-xl border-emerald-900 " data-aos="zoom-in" data-aos-delay="100">
                        <img className="rounded-xl h-[300px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEagYU-BoN4JqpMkAwgRi_MO8-bTGLZtiZkA&usqp=CAU" alt="" />
                    </div>
                    <div className="hidden md:block border-4 rounded-xl border-emerald-900 " data-aos="zoom-in" data-aos-delay="300">
                        <img className="rounded-xl h-[300px]" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331400cv15d.jpg" alt="" />
                    </div>
                   


                </div>
                <div className='grid grid-rows-2'>
                <div className="hidden md:block border-4 rounded-xl border-emerald-900 " data-aos="zoom-in" data-aos-delay="400">
                        <img className="rounded-xl h-[300px] w-full" src="https://images-na.ssl-images-amazon.com/images/I/61ER80iH5OL.jpg" alt="" />
                    </div>
                    <div className=" hidden md:block border-4 rounded-xl border-emerald-900 " data-aos="zoom-in" data-aos-delay="200">
                        <img className="rounded-xl h-[300px] w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpK9nYFQWbOBWTjpJJm2ldrv91f2fObWi0ig&usqp=CAU" alt="" />
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Gallery;