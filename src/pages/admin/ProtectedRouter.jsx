import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuth } from "../../api/accountApi";
import { logout, setUser } from "../../slices/loginSlice";

const ProtectedRouter = ({ children }) => {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginSlice);

    useEffect(() => {
        if (loginState.isAuthenticated === false && loginState.user === null) {
            getAuth()
                .then(res => {
                    console.log(res.data);
                    dispatch(setUser(res.data));
                })
                .catch(err => {
                    console.log(err);
                    dispatch(logout());
                })
        }
    }, [])

    if (!(loginState.isAuthenticated && loginState.user.roles === "ROLE_ADMIN")) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default ProtectedRouter;