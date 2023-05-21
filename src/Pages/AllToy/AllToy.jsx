import { useContext, useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import Loader from '../Share/Loader';
const AllToy = () => {
   
    const {loading,setLoading} = useContext(AuthContext)
    const [toys, setToys] = useState(useLoaderData());
    const { user } = useContext(AuthContext);
    useTitle("All Toy")

    const handleToySearch = e => {
        e.preventDefault();
        const form = e.target;
        const toy_name = form.toy_name.value;
        setLoading(true)
        fetch(`https://toy-planet-server.vercel.app/toysearch/${toy_name}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                form.reset();
                setLoading(false)
            });

    };
    if(loading){
        return <Loader/>
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
        <div className=' mx-5'>

            <div className=" mt-10">
                <div className='my-3 '>
                    <form onSubmit={handleToySearch}>
                        <input type="text" name='toy_name' placeholder="Search by Toy Name" className="input input-bordered input-primary w-[250px] md:w-full max-w-xs h-10 border-r-0 rounded-e-[0] focus:border-0 focus:h-10" required /><button className="h-10 px-5 rounded-s-[0] 
             rounded-md btn-success">Search</button>
                    </form>
                </div>
                <div className="overflow-x-auto">
                <table className="table  table-zebra w-full border border-gray-400 text-center">
                    <thead className='border-b-2 border-red-900'>
                        <tr>
                            <th className='md:text-2xl'>SL</th>
                            <th className='md:text-2xl'>Seller Name</th>
                            <th className='md:text-2xl'>Toy Name</th>
                            <th className='md:text-2xl'>Price</th>
                            <th className='md:text-2xl'>Quantity</th>
                            <th className='md:text-2xl'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.length === 0 ? 'No data this name' : toys.map((toy, index) =>
                            <tr key={toy._id} className={index %2 === 0? '': 'active'}  >
                                <th >{++index}</th>
                                <td >{toy.seller_name ? toy.seller_name : 'no name'}</td>
                                <td >{toy?.toy_name}</td>
                                <td >{toy?.price}</td>
                                <td >{toy.quantity}</td>
                                <td>
                                    <Link to={`/toy/${toy._id}`} >  <button onClick={handleDetails} className='btn '> <FaEye className='w-5 h-5 text-white' /> </button></Link>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>
                </div>
            </div>

        </div>
    );
};

export default AllToy;