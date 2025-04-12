import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import DataversePage from "../pages/DataversePage";
import DatasetDetail from "../components/dataverse/DatasetDetail";

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
    ],
  },
]);

export default router;
