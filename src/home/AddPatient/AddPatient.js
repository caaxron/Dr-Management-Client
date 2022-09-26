import { useState } from "react";
import { addPatient } from "../../api/patient";
import { useMutation, useQueryClient } from "react-query";
// import { useNavigate } from "react-router-dom";
// import { Oval } from "react-loader-spinner";

export const AddPatient = () => {
  // const navigate = useNavigate();
  const [patient, setPatient] = useState({
    name: "",
    birthdate: "",
    gender: "",
    blood_group: "",
    contact: "",
    address: "",
    genetic_disease: "",
  });
  const queryClient = useQueryClient();
  const mutation = useMutation(({ patient }) => addPatient(patient), {
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"]);
    },
  });

  const onChangeHandler = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutation.mutate({ patient });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl text-cyan-600">Patient Details</div>
      <button
        type="button"
        class="px-2
      py-1
      bg-cyan-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded-full
      hover:bg-cyan-800
      transition
      duration-150
      ease-in-out
      text-2xl
      mb-2
      shadow-2xl"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="fa-solid fa-plus"></i>
      </button>

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                AddPatient
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={onSubmitHandler}>
              <div class="modal-body relative p-4">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Birth Date
                    </label>
                    <input
                      type="date"
                      name="birthdate"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Select an option
                    </label>
                    <select
                      onChange={onChangeHandler}
                      name="gender"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected="">Choose a Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Select an option
                    </label>
                    <select
                      onChange={onChangeHandler}
                      name="blood_group"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected="">Choose a Blood Group</option>
                      <option value="Group O">Group O</option>
                      <option value="Group A">Group A</option>
                      <option value="Group B">Group B</option>
                      <option value="Group AB">Group AB</option>
                    </select>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Contact
                    </label>
                    <input
                      type="contact"
                      name="contact"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Address
                    </label>
                    <input
                      type="address"
                      name="address"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>

                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Genetic Disease / Others
                </label>
                <textarea
                  rows="4"
                  name="genetic_disease"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={onChangeHandler}
                ></textarea>
              </div>
              <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="submit"
                  class="px-6
      py-2.5
      bg-cyan-700
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      transition
      duration-150
      ease-in-out
      ml-1"
                  data-bs-dismiss="modal"
                >
                  Add patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
