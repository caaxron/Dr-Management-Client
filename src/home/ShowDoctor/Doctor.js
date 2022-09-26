import React from "react";
import doctor from "../../images/doctor.png";
function Doctor({ data: { name, username, email } }) {
  return (
    <>
      <div>
        <div className="bg-cyan-700 h-10 rounded-t-3xl flex justify-end space-x-5 pr-6"></div>
        <div className="p-5 rounded-3xl shadow-2xl hover:shadow-cyan-700 ease-in-out duration-1000">
          <div className="flex space-x-5 items-center pb-2">
            <img src={doctor} alt="" className="w-20 rounded-full" />
            <h2 className="text-3xl text-cyan-700">{name}</h2>
          </div>
          <hr />
          <h2 className="text-cyan-700 py-2">
            <span className="font-bold">Username: </span>
            {username}
          </h2>
          <h2 className="text-cyan-700 py-2">
            <span className="font-bold">Email: </span>
            {email}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Doctor;
