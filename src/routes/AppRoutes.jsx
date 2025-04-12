import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import DataversePage from "../pages/DataversePage";
import KMSPage from "../pages/KMSPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/datasets",
                element : <DataversePage/>
            },
            {
                path: "/kms",
                element : <KMSPage/>
            }
        ]
    }

])

export default router;