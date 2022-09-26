import React from "react";
import logo from "../images/dr.management-logo2.png";

export const Header = () => {
  return (
    <div>
      <div className="flex">
        <img
          className="logo w-28 xl:w-40 mt-20 md:mt-5 xl:mt-20 mx-auto"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex">
        <h1 className="text text-blue-900 mx-auto text-center p-2 md:w-3/6 break-words text-md lg:text-xl">
          Dr.Management is a system enabling hospitals to manage information and
          data related to all aspects of healthcare – processes, providers,
          patients, and more, which in turn ensures that processes are completed
          swiftly and effectively.
        </h1>
      </div>
      <a
        href="#section-1"
        className="text-cyan-700 mt-28 text-md md:text-xl more flex flex-col text-center animate-bounce"
      >
        Learn more <i class="fa-solid fa-chevron-down"></i>
      </a>
    </div>
  );
};
