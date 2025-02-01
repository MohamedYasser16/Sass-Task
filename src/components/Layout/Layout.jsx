import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import LeftNav from "../LeftNav/leftNav";

export default function Layout() {
  return (
    <>
    <div>
      <div className="flex justify-between">
        <div className="w-1-5 bg-white p-5 vh-100">
          <LeftNav />
        </div>
        <div className="w-2-3 mx-5 p-4 vh-100 column-center">
        <div >
          <Navbar />
          <Outlet />
        </div>
        </div>
     
      
      </div>
      <Footer />
      </div>
    </>
  );
}
