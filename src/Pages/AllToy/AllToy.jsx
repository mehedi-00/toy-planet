import { useState } from 'react';
import { useLoaderData } from "react-router-dom";

const AllToy = () => {
    const [toys, setToys] = useState(useLoaderData());
    
    
    const handleToySearch = e => {
        e.preventDefault();
        const form = e.target;
        const toy_name = form.toy_name.value;
        console.log(toy_name);
        fetch(`http://localhost:5000/toy/${toy_name}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                form.reset();
            });

    };


    return (
        <div className='md:mx-20 mx-5'>

            <div className=" mt-10">
                <div className='my-3 '>
                    <form onSubmit={handleToySearch}>
                        <input type="text" name='toy_name' placeholder="Search by Toy Name" className="input input-bordered input-primary w-full max-w-xs h-10 border-r-0 rounded-e-[0] focus:border-0 focus:h-10" required /><button className="h-10 px-5 rounded-s-[0] 
             rounded-md btn-success">Search</button>
                    </form>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.length === 0 ? 'No data this name' : toys.slice(0, 20).map((toy, index) =>
                            <tr key={toy._id}>
                                <th>{++index}</th>
                                <td>{toy.seller_name ? toy.seller_name : 'no name'}</td>
                                <td>{toy?.toy_name}</td>
                                <td>{toy?.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <button className='btn btn-secondary'> view details </button>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToy;