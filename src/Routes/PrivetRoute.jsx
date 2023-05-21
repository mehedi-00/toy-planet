import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../Pages/Share/Loader';
const PrivetRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return <Loader/>
   }
   if (user) {
      return children;
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivetRoute;