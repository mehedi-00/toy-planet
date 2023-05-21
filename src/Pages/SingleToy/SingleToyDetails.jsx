import { Rating } from '@smastrom/react-rating';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SingleToyDetails = () => {
    useTitle("Details");
    const toy = useLoaderData();
    
    return (
        <div className='md:mx-20 mt-10 md:mt-20'>
            <div className="bg-gradient-to-bl from-amber-200 to-amber-500 mx-auto md:w-3/4 bg-base-100 shadow-xl shadow-gray-300 flex flex-col md:flex-row items-center md:py-5">
                <div className='w-full md:w-2/4'>
                    <figure><img className='h-[400px]' src={toy?.toy_url} alt="Album" /></figure>
                </div>
                <div className="w-full card-body md:w-2/4">
                    <div className='grid grid-cols-2'>

                        <h2 className="card-title"> {toy?.toy_name} </h2>
                        <Rating style={{ maxWidth: 150 }} value={toy?.ratting} readOnly />
                    </div>
                    <div className='grid md:grid-cols-2  gap-4'>

                        <h3 className='text-lg font-medium'>
                             Name: {toy?.seller_name}
                        </h3>
                        <h3 className='text-lg font-medium'>
                            email: {toy?.email}
                        </h3>
                        <h3 className='text-lg font-medium'>
                            Price: ${toy?.price}
                        </h3>
                    </div>
                    <p>
                        {toy?.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;