
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import MyModal from './MyModal';
import Swal from 'sweetalert2';

const MyToy = () => {
    useTitle("My Toy");
    const [toys, setToys] = useState([]);
    const [isModal, setModal] = useState(false);
    const { user } = useContext(AuthContext);
    const [modalData, setModalData] = useState({});
    const [select, setSelect] = useState('');
    useEffect(() => {
        fetch(`https://toy-planet-server.vercel.app/toys?email=${user?.email}&order=${select}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [user, select]);
    const handleUpdate = e => {
        setModal(false);
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateData = { price, quantity, description };

        fetch(`https://toy-planet-server.vercel.app/toyUpdate/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = toys.filter(toy => toy._id !== id);
                    const updated = toys.find(toy => toy._id === id);
                    updated.price = price;
                    updated.quantity = quantity;
                    updateData.description = description;
                    const newToy = [updated, ...remaining];
                    setToys(newToy);
                    Swal.fire({
                        position: 'top-right',
                        icon: 'success',
                        title: 'Your toy has been added',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    setModal(!isModal);
                }

            });
    };
    const handlePrice = e => {
        setSelect(e.target.value);
    };
    const modal = (data) => {
        setModal(!isModal);
        setModalData(data);
    };
    const handleToyDelete = id => {
        if (id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://toy-planet-server.vercel.app/toyDelete/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const filterToy = toys.filter(toy => toy._id !== id);
                                setToys(filterToy);
                                Swal.fire(
                                    'Deleted!',
                                    'Your Toy has been deleted.',
                                    'success'
                                );

                            }
                        });

                }
            });
        }

    };
    return (
        <div className='md:mx-20 mx-5'>

            <div className=" mt-10">
                <div className='my-5 flex justify-end'>
                    <select defaultValue={select} className="select select-info w-full max-w-xs" onChange={handlePrice}>
                        <option value="">price</option>
                        <option value={'highest'}>Highest to Lowest</option>
                        <option value={'lowest'}>Lowest to Highest</option>

                    </select>
                </div>
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
                        {toys.map((toy, index) =>
                            <tr key={toy._id}>
                                <th>{++index}</th>
                                <td><img src={toy?.toy_url} className='w-12 h-8 rounded-md' alt="" /></td>
                                <td>{toy?.toy_name}</td>
                                <td> ${toy?.price}</td>
                                <td>{toy.quantity}</td>
                                <td>

                                    <button onClick={() => modal(toy)} className='btn btn-secondary'> <FaEdit className='w-4 h-4 text-white' /> </button>
                                    <button onClick={() => handleToyDelete(toy._id)} className=' ml-3 btn hover:bg-red-400 border-0 bg-red-400'> <FaTrashAlt className='w-4 h-4 text-white' /> </button>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>

            {/* <label htmlFor="my-modal" className="modal cursor-pointer"> */}
            <div className={isModal ? 'mymodal' : 'noModal'} htmlFor="">
                <MyModal handleUpdate={handleUpdate} modalData={modalData} setModal={setModal} modal={modal} />
            </div>


        </div>
    );
};

export default MyToy;