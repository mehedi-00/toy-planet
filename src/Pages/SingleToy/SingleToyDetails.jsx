import { Rating } from '@smastrom/react-rating';
import { useLoaderData } from 'react-router-dom';
const SingleToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy);
    return (
        <div className='md:mx-20 mt-20'>
            <div className="bg-gradient-to-bl from-amber-200 to-amber-500 mx-auto w-3/4 bg-base-100 shadow-xl shadow-gray-300 flex items-center py-5">
                <div className='md:w-2/4'>
                    <figure><img className='h-[400px]' src={toy?.toy_url} alt="Album" /></figure>
                </div>
                <div className="card-body md:w-2/4">
                    <div className='grid grid-cols-2'>

                        <h2 className="card-title"> {toy?.toy_name} </h2>
                        <Rating style={{ maxWidth: 150 }} value={toy?.ratting} readOnly />
                    </div>
                    <div className='grid grid-cols-2'>

                        <h3>
                            Seller Name: {toy?.seller_name}
                        </h3>
                        <h3>
                            Seller Name: {toy?.email}
                        </h3>
                        <h3>
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