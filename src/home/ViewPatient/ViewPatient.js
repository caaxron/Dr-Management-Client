import { useState } from "react";
import Profile from "../../images/profile.png";
import moment from "moment";

export const ViewPatient = ({ data }) => {
  const [patient] = useState({
    name: data.name,
    birthdate: data.birthdate,
    gender: data.gender,
    blood_group: data.blood_group,
    contact: data.contact,
    address: data.address,
    genetic_disease: data.genetic_disease,
  });
  const date = moment().format("YYYY");
  const birthdate = moment(patient.birthdate).format("YYYY");
  const age = parseInt(date) - parseInt(birthdate);

  return (
    <>
      <button
        type="button"
        class="font-medium text-cyan-600"
        data-bs-toggle="modal"
        data-bs-target={`#view-${data._id}`}
      >
        <i class="fa-solid fa-eye"></i>
      </button>

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id={`view-${data._id}`}
        tabindex="-1"
        aria-labelledby="editLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="editLabel"
              >
                ViewPatient
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div>
              <div class="modal-body relative p-4">
                <div className="flex justify-center">
                  <img src={Profile} alt="" className="rounded-full w-24" />
                </div>
                <div className="flex justify-center py-4">
                  <h1 className="text-3xl">{patient.name}</h1>
                </div>
                <hr />
                <div class="grid gap-6 mb-6 md:grid-cols-1 py-5">
                  <div>
                    <span className="font-bold text-xl text-cyan-700">
                      Gender:{" "}
                    </span>
                    <span className="text-2xl">{patient.gender}</span>
                  </div>
                  <div>
                    <span className="font-bold text-xl text-cyan-700">
                      Age:{" "}
                    </span>
                    <span className="text-2xl">{age}</span>{" "}
                  </div>
                  <div>
                    <span className="font-bold text-xl text-cyan-700">
                      Blood Group:{" "}
                    </span>
                    <span className="text-2xl">{patient.blood_group}</span>{" "}
                  </div>
                  <div>
                    <span className="font-bold text-xl text-cyan-700">
                      Genetic Disease:{" "}
                    </span>
                    <span className="text-2xl">{patient.genetic_disease}</span>{" "}
                  </div>
                  <div>
                    <span className="font-bold text-xl text-cyan-700">
                      Contact:{" "}
                    </span>
                    <span className="text-2xl">{patient.contact}</span>{" "}
                  </div>
                  <div>
                    <span className="font-bold text-xl text-cyan-700">
                      Address:{" "}
                    </span>
                    <span className="text-2xl">{patient.address}</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
