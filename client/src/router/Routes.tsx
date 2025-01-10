import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../feature/home/HomePage";
import Catalog from "../feature/catalog/Catalog";
import ProductDetail from "../feature/catalog/ProductDetail";
import AboutPage from "../feature/about/AboutPage";
import ContactPage from "../feature/contact/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",element: <App/>,
        children: [
            {path:"",element: <HomePage/>},
            {path:"catalog",element: <Catalog/>},
            {path:"catalog/:id",element:<ProductDetail/>},
            {path:"about",element:<AboutPage/>},
            {path:"contact",element:<ContactPage/>}
        ]
    }
])