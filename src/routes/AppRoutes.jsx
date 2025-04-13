import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import DataversePage from "../pages/DataversePage";
import DatasetDetail from "../components/dataverse/DatasetDetail";
import KMSPage from "../pages/KMSPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DataversePage />,
      },
      {
        path: "dataverse",
        element: <DataversePage />,
      },
      {
        path: "datasets/:datasets",
        element: <DatasetDetail />,
      },
      {
        path: "analysis",
        element: <KMSPage/>
      }
    ],
  },
]);

export default router;
