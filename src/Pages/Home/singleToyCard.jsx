
import { useContext } from "react";
import { Rating } from '@smastrom/react-rating';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const singleToyCard = ({ data }) => {
    const { user } = useContext(AuthContext);

    const handleDetails = () => {
        if (!user) {
            let timerInterval;
            Swal.fire({
                title: 'please Login first!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector('b');
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft();
                    }, 10);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                }
            });
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
