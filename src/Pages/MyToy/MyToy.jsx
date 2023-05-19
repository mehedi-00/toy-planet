
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEdit ,FaTrashAlt} from "react-icons/fa";
const MyToy = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [user]);
    console.log(toys);
    return (
        <div className='md:mx-20 mx-5'>

            <div className=" mt-10">

                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>toy img</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { toys.map((toy, index) =>
                            <tr key={toy._id}>
                                <th>{++index}</th>
                                <td><img src={toy?.toy_url} className='w-12 h-8 rounded-md' alt="" /></td>
                                <td>{toy?.toy_name}</td>
                                <td>{toy?.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <button className='btn btn-secondary'> <FaEdit className='w-4 h-4 text-white'/> </button>
                                    <button className=' ml-3 btn hover:bg-red-400 border-0 bg-red-400'> <FaTrashAlt className='w-4 h-4 text-white'/> </button>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToy;