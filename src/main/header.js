import React from "react";
import logo from "../images/dr.management-logo2.png";

export const Header = () => {
  return (
    <div>
      {/* <div className="flex">
        <img
          className="logo w-28 xl:w-40 mt-20 md:mt-5 xl:mt-20 mx-auto"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex">
        <h1 className="text text-blue-900 mx-auto text-center p-2 md:w-3/6 break-words text-md lg:text-xl">
          Dr.Management is a system enabling clinic to manage information and
          data related to all aspects of healthcare – processes, providers,
          patients, and more, which in turn ensures that processes are completed
          swiftly and effectively.
        </h1>
      </div> */}
      <div className="flex flex-col md:flex-row justify-center items-center pt-28 xl:mt-24 space-x-4">
        <img className="logo w-32 " src={logo} alt="" />
        <div className="flex md:w-3/6">
          <h1 className="text text-blue-900 text-xl">
            Dr.Management is a system enabling clinic to manage information and
            data related to all aspects of healthcare – processes, providers,
            patients, and more, which in turn ensures that processes are
            completed swiftly and effectively.
          </h1>
        </div>
      </div>
      <a
        href="#section-1"
        className="text-cyan-700 mt-20 text-md md:text-xl more flex flex-col text-center animate-bounce"
      >
        Learn more <i class="fa-solid fa-chevron-down"></i>
      </a>
    </div>
  );
};
