import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <Nav /> */}
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
