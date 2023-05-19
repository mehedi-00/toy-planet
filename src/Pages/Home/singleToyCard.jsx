import { Rating } from '@smastrom/react-rating'
import { Link } from "react-router-dom";



const singleToyCard = ({ data }) => {
    console.log(data?.toy_name);

    return (
        <div className="card  glass bg-gradient-to-b transition-[0.7s] pt-5 from-red-200 to-red-500 hover:bg-gradient-to-t hover:from-red-200 hover:to-red-500 ">
            <figure><img className='h-[300px] w-10/12 rounded-lg' src={data?.toy_url} alt="car!" /></figure>
            <div className="card-body ">
                <div className="flex justify-between">
                <h2 className="card-title">{data?.toy_name}</h2> 
                <Rating style={{ maxWidth: 150 }} value={data?.ratting} readOnly />
                </div>
                
                <p>price: ${data?.price}</p>
                <div className="card-actions justify-start">
                    <Link to={`/toy/${data._id}`} className="btn btn-primary">Vew Details</Link>
                </div>
            </div>
        </div>
    );
};

export default singleToyCard;
