import img from '../../assets/loader.gif';
const Loader = () => {
    return (
        <div className='w-full h-screen bg-white flex justify-center '>
            <img src={img}  alt="" />
        </div>
    );
};

export default Loader;