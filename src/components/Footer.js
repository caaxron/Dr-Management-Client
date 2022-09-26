import React from "react";

function Footer() {
  return (
    <div className="" id="footer">
      <footer className="w-full h-64 bg-cyan-700 grid content-center">
        <div className="flex justify-center items-center text-white text-md md:text-2xl space-x-5 py-5">
          <h1>Singapore</h1>
          <span className="h-8 border-r-2 border-white"></span>
          <h1>Malaysia</h1>
          <span className="h-8 border-r-2 border-white"></span>
          <h1>Australia</h1>
        </div>
        <div className="flex justify-center space-x-2 md:space-x-10 py-5  text-white underline">
          <h1>Management</h1>
          <h1>Service</h1>
          <h1>Support</h1>
          <h1>Help</h1>
          <h1>FAQ</h1>
        </div>
        <div className="text-center py-5 text-xs md:text-sm">
          <h1>©Copyright 2022 Dr.Management. All rights reserved</h1>
          <h1>Privacy Policy</h1>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
