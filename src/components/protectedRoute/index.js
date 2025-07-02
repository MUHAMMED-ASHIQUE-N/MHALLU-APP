import { jsx as _jsx } from "react/jsx-runtime";
import { useUserAuth } from "../../context/user/userAuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../common/Loading";
const ProtectedRoute = () => {
    const { user, loading } = useUserAuth();
    const location = useLocation();
    if (loading) {
        return _jsx(Loading, {});
    }
    if (user === null) {
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    return _jsx(Outlet, {});
};
export default ProtectedRoute;
