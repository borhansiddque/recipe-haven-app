import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
     <Toaster position="top-right" />
      <Navbar></Navbar>
      <div className="min-h-[80vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;