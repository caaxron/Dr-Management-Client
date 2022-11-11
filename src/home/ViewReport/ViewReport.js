import { useQuery } from "react-query";
import { getPatient } from "../../api/patient";
import { useParams } from "react-router-dom";
import { FallingLines } from "react-loader-spinner";
import profile from "../../images/profile.png";
import { Link } from "react-router-dom";
import { AddReport } from "../AddReport";
import { ShowReport } from "../ShowReport";

export const ViewReport = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["patient", id], () => getPatient(id));
  // console.log(data.report);
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
    <div className="p-4">
      <Link
        to="/home"
        className="text-2xl m-5 text-white py-2 px-3 mt-20 bg-cyan-700 rounded-3xl"
      >
        <i class="fa-solid fa-chevron-left"></i> Go back
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* {!isLoading ? ( */}
        <div className="shadow-[0px_0px_10px_2px_rgba(0,0,0,0.3)] m-4 rounded-2xl mx-auto">
          <div className=" py-5 px-10 rounded-t-3xl">
            <div className="flex justify-center">
              <img src={profile} alt="" className="w-20 rounded-full" />
            </div>
            <div className="flex justify-center pb-2">
              <h1 className="text-cyan-700 font-medium">{data.name}</h1>
            </div>
            <div className="border-b py-2">
              <span className="text-sm">Birthdate: </span>
              <span className="text-cyan-700">{data.birthdate}</span>
            </div>
            <div className="border-b py-2">
              <span className="text-sm">Gender: </span>
              <span className="text-cyan-700">{data.gender}</span>
            </div>
            <div className="border-b py-2">
              <span className="text-sm">Contact: </span>
              <span className="text-cyan-700">{data.contact}</span>
            </div>
            <div className="border-b py-2">
              <span className="text-sm">Address: </span>
              <span className="text-cyan-700">{data.address}</span>
            </div>
            <div className="border-b py-2">
              <span className="text-sm">Blood Group: </span>
              <span className="text-cyan-700">{data.blood_group}</span>
            </div>
            <div className="border-b py-2">
              <span className="text-sm">Genetic Disease: </span>
              <span className="text-cyan-700">
                {data.genetic_disease.length === 0
                  ? "No record"
                  : data.genetic_disease}
              </span>
            </div>
          </div>
          <AddReport />
        </div>
        <ShowReport data={data} />
        {/* ) : (
        <h2>No reports to show</h2>
      )} */}
      </div>
    </div>
  );
};
