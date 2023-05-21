import { useContext, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const TopRatedToy = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/top-rated-toy/')
            .then(res => res.json())
            .then(data => setToys(data));
        AOS.init();
    }, []);
    const handleDetails = () => {
        if (!user) {
            let timerInterval;
            Swal.fire({
                title: 'please Login first!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector('b');
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft();
                    }, 10);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                }
            });
        }
    };

    return (
        <div className='mt-20 mx-20'>
            <h2 className='my-5 text-4xl font-bold text-center'> Top Rated Products</h2>
            <p className='text-2xl text-center font-medium mt-8 text-gray-400'>Shop Juno Toy & Games Store goodies for your kids.</p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">

                {
                    toys.map(toy => <div data-aos="zoom-in" data-aos-delay="200" className="card  bg-base-100 shadow-xl" key={toy._id}>
                        <div>
                            <img src={toy?.toy_url} alt="Shoes" className="rounded-xl w-full h-[300px]" />
                        </div>
                        <div className="card-body   bg-gradient-to-b from-[#eeaeca] to-[#94bbe9] rounded-xl">
                            <div className='flex justify-between'>
                                <h2 className="cart-title">{toy.toy_name}</h2>
                                <h4 className=''>Avilable : {toy.quantity}</h4>
                            </div>
                            <div className="card-actions mt-8">
                            <Link to={`/toy/${toy._id}`} className="btn btn-primary"> <button onClick={handleDetails}>Vew Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopRatedToy;