import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
import './i18n';

export default function App() {
  return <RouterProvider router={router} />;
}
