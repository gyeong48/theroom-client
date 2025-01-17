import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/basic/MainPage";
import AboutPage from "../pages/basic/AboutPage";
import ServicesPage from "../pages/basic/ServicesPage";
import PortfolioPage from "../pages/basic/PortfolioPage";
import PortfolioDetailPage from "../pages/basic/PortfolioDetailPage";
import ContactPage from "../pages/basic/ContactPage";
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