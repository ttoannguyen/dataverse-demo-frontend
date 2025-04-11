import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Dataverse from "../pages/DatasetSearch";
import Layout from "@/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "dataverse",
        element: <Dataverse />,
      },
    ],
  },
]);

export default router;
