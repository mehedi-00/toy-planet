
import { useContext, useState } from "react";
import { FaGooglePlus,FaFacebookF } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";
const Login = () => {
    useTitle("Login")
    const [error, setError] = useState('');
    const { loginWithEmailAndPassword ,loginWithGoogle,setLoading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        loginWithEmailAndPassword(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
            });
    };
    const handleLoginGoogle = () => {
        loginWithGoogle()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            });
    };
    return (
        <div className='flex mt-20  ms-5 justify-evenly items-center'>

            <div className='w-full md:w-5/12 mr-10  shadow-black shadow-lg py-3 px-2'>
                <h2 className='text-center text-2xl'>Please Login</h2>
                <p className='my-3 text-red-500 ms-8'>{error} </p>
                <div className="px-10 mt-5">
                    <form onSubmit={handleLogin}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>

                        <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                    </form>
                    
                </div>
                <div className='text-3xl font-extrabold text-red-400  text-center my-5'>  OR Sign IN</div>
                <div className="text-center flex space-x-3 justify-center">
                    <FaGooglePlus onClick={handleLoginGoogle} className="w-8 h-8 text-lime-500 cursor-pointer" />
                    <FaFacebookF className="w-8 h-8 text-lime-500" />
                </div>
                <p className="my-3 ms-8 text-gray-500">New to Here <Link to='/register' className="text-indigo-600" >Register</Link></p>
            </div>
            
            <div className='hidden md:block md:w-7/12'>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-2578971-2147152.png" alt="" />
            </div>
        </div>
    );
};

export default Login;