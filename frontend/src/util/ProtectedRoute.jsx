import { Outlet, Navigate } from 'react-router-dom';
const ProtectedRoute = () => {
  return localStorage.getItem('token') ? <Outlet /> : <Navigate to='signup' />;
};
export default ProtectedRoute;
