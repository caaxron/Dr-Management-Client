import React from "react";
import { useQuery } from "react-query";
import { FallingLines } from "react-loader-spinner";
import { getAllUsers } from "../../api/users";
import Doctor from "./Doctor";

export const ShowDoctor = () => {
  const { data, isLoading } = useQuery("doctors", getAllUsers);

  if (isLoading) {
    return (
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    );
  }

  return (
    <>
      <h1 className="text-cyan-700 text-2xl my-5">Doctor</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.length === 0 ? (
          <h2 className="text-center p-5">No doctor to show </h2>
        ) : (
          data.map((doctor) => <Doctor data={doctor} key={doctor._id} />)
        )}
      </div>
    </>
  );
};
