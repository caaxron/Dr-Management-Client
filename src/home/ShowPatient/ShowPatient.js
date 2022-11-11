import React from "react";
import { FallingLines } from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllPatients } from "../../api/patient";
import Patient from "./Patient";

export const ShowPatient = () => {
  const { data, isLoading } = useQuery("patients", getAllPatients);

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
      <div class="overflow-x-auto relative shadow-[0px_0px_10px_2px_rgba(0,0,0,0.3)]  sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-300">
            <tr>
              <th scope="col" class="py-3 px-6">
                Patient Name
              </th>
              <th scope="col" class="py-3 px-6">
                Gender
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
              <th scope="col" class="py-3 px-6">
                View
              </th>
            </tr>
          </thead>
          {data.length === 0 ? (
            <h2 className="text-center p-5">No patients to show </h2>
          ) : (
            data.map((patient) => <Patient data={patient} key={patient._id} />)
          )}
        </table>
      </div>
    </>
  );
};
