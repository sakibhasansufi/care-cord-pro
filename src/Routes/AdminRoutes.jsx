import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {

        return <div className="flex justify-center items-center"><span className="loading min-h-96 loading-spinner loading-lg"></span></div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to='/' ></Navigate>

};

export default AdminRoutes;