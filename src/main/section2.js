import React from "react";

export const Section2 = () => {
  return (
    <section id="section-2" className="flex justify-center mb-20">
      <div className="text-cyan-700 text-lg ">
        <h1 className="text-center text-cyan-700 text-3xl font-bold mb-5">
          Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 text-2xl">
          <p className="w-72 h-72 shadow-2xl flex items-center p-5 border-t-4 border-l-4 border-cyan-700 hover:shadow-cyan-700">
            Inventory and Business Management
            <i class="fa-regular fa-circle-check"></i>
          </p>
          <p className="w-72 h-72 shadow-2xl flex items-center p-5 border-t-4 border-l-4 border-cyan-700 hover:shadow-cyan-700">
            Patient Management and Customer Care
            <i class="fa-regular fa-circle-check"></i>
          </p>
          <p className="w-72 h-72 shadow-2xl flex items-center p-5 border-t-4 border-l-4 border-cyan-700 hover:shadow-cyan-700">
            User friendly Interface
            <i class="fa-regular fa-circle-check"></i>
          </p>
          <p className="w-72 h-72 shadow-2xl flex items-center p-5 border-t-4 border-l-4 border-cyan-700 hover:shadow-cyan-700">
            Reasonable Price
            <i class="fa-regular fa-circle-check ml-2"></i>
          </p>
        </div>
      </div>
    </section>
  );
};
