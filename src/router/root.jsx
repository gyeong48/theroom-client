import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/user/MainPage";
import AboutPage from "../pages/user/AboutPage";
import ServicesPage from "../pages/user/ServicesPage";
import PortfolioPage from "../pages/user/PortfolioPage";
import PortfolioDetailPage from "../pages/user/PortfolioDetailPage";
import ContactPage from "../pages/user/ContactPage";
import IndexPage from "../pages/admin/IndexPage";
import adminRouter from "./adminRouter";

const root = createBrowserRouter([
    {
        path: "",
        element: <MainPage />
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/services",
        element: <ServicesPage />
    },
    {
        path: "/portfolio",
        element: <PortfolioPage />
    },
    {
        path: "/portfolio/:id",
        element: <PortfolioDetailPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    },
    {
        path: "/admin",
        element: <IndexPage />,
        children: adminRouter()
    }
]);

export default root;