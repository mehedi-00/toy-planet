import logo from '../../assets/icon/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaYoutubeSquare, FaTwitter, FaDribbbleSquare, FaPhoneAlt, FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <>
        <footer className=" p-10 bg-slate-300 text-base-content mt-28 shadow-md  grid grid-cols-2  md:grid-cols-4 md:gap-8 gap-5   justify-items-center ">
            <div>
                <Link to='/'>
                    <img src={logo} alt="" />
                    <p>Toys Planet</p>
                </Link>
                <div className='flex space-x-3 mt-8'>
                    <FaFacebookSquare className='w-7 h-7 text-slate-800' />
                    <FaYoutubeSquare className='w-7 h-7 text-slate-800' />
                    <FaTwitter className='w-7 h-7 text-slate-800' />
                    <FaDribbbleSquare className='w-7 h-7 text-slate-800' />
                </div>

            </div>
            <div>
                <span className="footer-title">Menu</span>
                <Link to='/' className="block mt-2 link link-hover">Home</Link>
                <Link to='/allToy' className="block mt-2 link link-hover">All Toy</Link>
                <Link to='/blogs' className="block mt-2 link link-hover">Blog</Link>
               
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <div className='flex space-x-3 mt-3'><FaPhoneAlt className='w-4 h-4 text-slate-800' /> <span>009999999</span></div>
                <div className='flex space-x-3 mt-3'><FaMailBulk className='w-4 h-4 text-slate-800' /> <span>toyplanet@gmail.com</span></div>
                <div className='flex space-x-3 mt-3'><FaMapMarkerAlt className='w-4 h-4 text-slate-800' /> <span>Dhaka,Mirpur, 109</span></div>

                <p></p>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="block mt-2 link link-hover">Terms of use</a>
                <a className="block mt-2 link link-hover">Privacy policy</a>
                <a className="block mt-2 link link-hover">Cookie policy</a>
            </div>


            
        </footer>
        <div className='text-center text-white bg-gray-950 py-5 mb-10'>
        <p className='text-base-100 font-mono'>Copyright © 2023 - All right reserved</p>
        </div>
        </>
    );
};

export default Footer;