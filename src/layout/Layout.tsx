import Header from "@/components/Header";
import Nav from "@/components/Nav";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
