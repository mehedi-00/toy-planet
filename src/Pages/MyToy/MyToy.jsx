
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import MyModal from './MyModal';
import Swal from 'sweetalert2';
const MyToy = () => {
    const [toys, setToys] = useState([]);
    const [isModal, setModal] = useState(false);
    const { user } = useContext(AuthContext);
    const [modalData, setModalData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [user]);
    const handleUpdate = e => {
        setModal(false);
        e.preventDefault();
        const form = e.target;
        const id = form.id.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateData = { price, quantity, description };

        fetch(`http://localhost:5000/toyUpdate/${id}`, {
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
                    const newToy = [updated,...remaining]
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
    const modal = (data) => {
        setModal(!isModal);
        setModalData(data);
    };
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
                        {toys.map((toy, index) =>
                            <tr key={toy._id}>
                                <th>{++index}</th>
                                <td><img src={toy?.toy_url} className='w-12 h-8 rounded-md' alt="" /></td>
                                <td>{toy?.toy_name}</td>
                                <td>{toy?.price}</td>
                                <td>{toy.quantity}</td>
                                <td>

                                    <button onClick={() => modal(toy)} className='btn btn-secondary'> <FaEdit className='w-4 h-4 text-white' /> </button>
                                    <button className=' ml-3 btn hover:bg-red-400 border-0 bg-red-400'> <FaTrashAlt className='w-4 h-4 text-white' /> </button>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>

            {/* <label htmlFor="my-modal" className="modal cursor-pointer"> */}
            <div className={isModal ? 'mymodal' : 'noModal'} htmlFor="">
                <MyModal handleUpdate={handleUpdate} modalData={modalData} />
            </div>


        </div>
    );
};

export default MyToy;