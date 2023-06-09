import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import Loader from '../Share/Loader';
import useTitle from '../../hooks/useTitle';
const AddToy = () => {
    useTitle("Add Toy");
    const { user, loading } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [selectValue, setSelectVaue] = useState('');
    const handleSelect = e => {
        setSelectVaue(e.target.value);
    };
    const onSubmit = data => {
        data.subcategory = selectValue;
        fetch('https://toy-planet-server.vercel.app/addtoy', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
               
                if(data.insertedId){
                    
                   return Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your toy has been added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            });
        console.log(data);
    };
    if (loading) {
        return <Loader/>;
    }
    return (
        <div className=' my-20 mx-5 border border-slate-500 md:border-none shadow-lg shadow-slate-300 p-2 py-5'>
            <div className='md:w-2/4 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" defaultValue={user?.displayName} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("seller_name")} />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" id="email" value={user?.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("email")} />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" id="toy_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("toy_name")}  required/>
                            <label htmlFor="toy_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Toy Name</label>

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <select value={selectValue} onChange={handleSelect} className='block py-2.5 px-0 w-10/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer' required>
                                <option value="">Select an option</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Football">Football</option>
                                <option value="Badminton">Badminton</option>
                                <option value="BasketBall">BasketBall</option>
                            </select>

                        </div>

                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" id="toy_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("price")} required/>
                            <label htmlFor="toy_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" id="toy_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("quantity")} required/>
                            <label htmlFor="toy_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer- peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available quantity</label>

                        </div>


                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text"  id="toy_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("ratting")}  required/>
                            <label htmlFor="toy_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ratting</label>

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" id="toy_url" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  {...register("toy_url")} required />
                            <label htmlFor="toy_url" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Picture URL of the toy</label>

                        </div>


                    </div>
                    <div className="grid my-5">

                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea id="message" {...register("description")} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>


                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddToy;