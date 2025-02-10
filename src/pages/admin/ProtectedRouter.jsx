import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouter = ({ children }) => {
    const loginState = useSelector(state => state.loginSlice);

    if (!(loginState.username && loginState.roles === "ROLE_ADMIN")) {
        console.log(loginState);
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default ProtectedRouter;