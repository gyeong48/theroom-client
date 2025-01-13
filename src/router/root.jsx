import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import PortfolioPage from "../pages/PortfolioPage";
import PortfolioDetailPage from "../pages/PortfolioDetailPage";

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
    }
]);

export default root;