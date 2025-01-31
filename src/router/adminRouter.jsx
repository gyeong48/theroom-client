import { Navigate } from "react-router-dom";
import PortfolioPage from "../pages/admin/PortfolioPage";
import PortfolioDetailPage from "../pages/admin/PortfolioDetailPage";
import PortfolioAddPage from "../pages/admin/PortfolioAddPage";
import AccountPage from "../pages/admin/AccountPage";
import AccountAddPage from "../pages/admin/AccountAddPage";
import ContactPage from "../pages/admin/ContactPage";
import ContactDetailPage from "../pages/admin/ContactDetailPage";
import PortfolioModifyPage from "../pages/admin/PortfolioModifyPage";

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
            path: "portfolio/:id/modify",
            element: <PortfolioModifyPage />
        },
        {
            path: "account",
            element: <AccountPage />
        },
        {
            path: "account/add",
            element: <AccountAddPage />
        },
        {
            path: "contact",
            element: <ContactPage />
        },
        {
            path: "contact/:id",
            element: <ContactDetailPage />
        },
    ]
}

export default adminRouter;