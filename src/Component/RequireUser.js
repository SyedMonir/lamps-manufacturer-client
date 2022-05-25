import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
import Spinner from './Spinner';

const RequireUser = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || adminLoading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
  }

  if (admin) {
    signOut(auth);
    localStorage.removeItem('accessToken');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireUser;
