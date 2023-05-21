import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className='mx-auto max-w-screen-xl mt-24 text-center  '>
            <img className='mx-auto ' src='https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=740&t=st=1684653041~exp=1684653641~hmac=34da33b3a015c4bbf518a9530e13f6ec8c922058beca07a2cfcb45e6891c3dfd' alt="" />
            <h1 className='text-center text-2xl text-orange-600'>{error?.error.message}</h1>
            <Link to='/'><button className='btn-primary mt-12 px-6 py-2 rounded-md text-white font-semibold'>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;