
import { useContext } from "react";
import { Rating } from '@smastrom/react-rating';
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const singleToyCard = ({ data }) => {
    const { user } = useContext(AuthContext);
    useTitle("toy details")

    const handleDetails = () => {
        if(!user){
            Swal.fire({
                title: 'please Login first!',
                
                timer: 600,
            }
            )
        }
    };

    return (
        <div className="card mx-8 md:mx-0   glass bg-gradient-to-b duration-500 pt-5 from-red-200 to-red-500 hover:bg-gradient-to-t hover:from-red-200 hover:to-red-500 ">
            <figure><img className='h-[150px] md:h-[300px] w-10/12 rounded-lg' src={data?.toy_url} alt="car!" /></figure>
            <div className="card-body ">
                <div className="flex justify-between">
                    <h2 className="card-title">{data?.toy_name}</h2>
                    <Rating style={{ maxWidth: 150 }} value={data?.ratting} readOnly />
                </div>

                <p>price: ${data?.price}</p>
                <div className="card-actions justify-start">
                    
                    <Link to={`/toy/${data._id}`} className="btn btn-primary"> <button onClick={handleDetails}>Vew Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default singleToyCard;
