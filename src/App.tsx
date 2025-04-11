import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";

export default function App() {
  return (
     
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route các trang khác sẽ thêm sau */}
      </Routes>
    </Router>
  );
}
