import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Dataverse from "../pages/DatasetSearch";
import Layout from "@/layout/Layout";
import ErrorPage from "@/components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        errorElement: <ErrorPage />,
        element: <Home />,
      },
      {
        path: "dashboard",
        errorElement: <ErrorPage />,
        element: <Dashboard />,
      },
      {
        path: "dataverse",
        errorElement: <ErrorPage />,
        element: <Dataverse />,
      },
      {
        path: "*", // catch-all cho 404
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
