import React from "react";
import logo from "../images/dr.management-logo2.png";

export const Section1 = () => {
  return (
    <section
      id="section-1"
      className="h-screen flex justify-center items-center"
    >
      <div className="h-68 md:h-96 w-full bg-cyan-700 grid grid-cols-1 md:grid-cols-2">
        <h1 className="flex items-center mx-auto text-white text-2xl lg:text-5xl p-5">
          <img src={logo} alt="" className="w-28 md:w-40 mr-2" />
          Helping you focus on your patients
        </h1>
        <h2 className="flex text-center items-center mx-auto text-white text-md lg:text-2xl p-5">
          An excellent clinic management software plays an integral role in a
          clinic’s daily operations and is a must-have for doctors to provide
          high-quality treatment and care to their patients. Dr.Management is
          the ideal clinic software for you.
        </h2>
      </div>
    </section>
  );
};
