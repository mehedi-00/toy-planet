import { useContext, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../Share/Loader';
import Swal from 'sweetalert2';

const TopRatedToy = () => {
    const [toys, setToys] = useState([]);
    const { user, loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/top-rated-toy/')
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setLoading(false);
            });
        AOS.init();
    }, [setLoading]);
    if (loading) {
        return <Loader />;
    }
    const handleDetails = () => {
        if(!user){
            Swal.fire({
                title: 'please Login first!',
                
                timer: 600,
            }
            )
        }
    };


return (
    <div className='mt-20 md:mx-20 mx-5'>
        
        <h2 className='my-5 text-4xl font-bold text-center'> Top Rated Products</h2>
        <p className='text-2xl text-center font-medium mt-8 text-gray-400'> Games Store goodies for your kids.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">

            {
                toys.map(toy => <div data-aos="zoom-in" data-aos-delay="200" className="card  bg-base-100 shadow-xl" key={toy._id}>
                    <div>
                        <img src={toy?.toy_url} alt="Shoes" className="rounded-xl w-full h-[300px]" />
                    </div>
                    <div className="card-body   bg-gradient-to-b from-[#eeaeca] to-[#94bbe9] rounded-xl">
                        <div className='flex justify-between'>
                            <h2 className="font-medium text-xl">{toy.toy_name}</h2>
                            <h4 className=''>Avilable : {toy.quantity}</h4>
                        </div>
                        <div className='flex justify-between mt-5 items-center'>
                            <h4>Price: {toy.price}</h4>
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