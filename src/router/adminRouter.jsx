import { Navigate } from "react-router-dom";
import PortfolioPage from "../pages/admin/PortfolioPage";
import PortfolioDetailPage from "../pages/admin/PortfolioDetailPage";
import PortfolioAddPage from "../pages/admin/PortfolioAddPage";
import AccountPage from "../pages/admin/AccountPage";
import AccountAddPage from "../pages/admin/AccountAddPage";

const adminRouter = () => {
    return [
        {
            path: "portfolio",
            element: <PortfolioPage />
        },
        {
            path: "",
            element: <Navigate replace={true} to={"portfolio"} />
        },
        {
            path: "portfolio/add",
            element: <PortfolioAddPage />
        },
        {
            path: "portfolio/:id",
            element: <PortfolioDetailPage />
        },
        {
            path: "account",
            element: <AccountPage />
        },
        {
            path: "account/add",
            element: <AccountAddPage />
        },
    ]
}

export default adminRouter;