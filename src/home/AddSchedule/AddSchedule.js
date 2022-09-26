import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { addSchedule } from "../../api/schedule";

export const AddSchedule = () => {
  const [schedule, setSchedule] = React.useState({
    title: "",
    color: "",
    start: "",
    end: "",
    location: "",
    description: "",
  });
  const queryClient = useQueryClient();
  const mutation = useMutation(({ schedule }) => addSchedule(schedule), {
    onSuccess: () => {
      queryClient.invalidateQueries(["schedules"]);
    },
  });

  const onChangeHandler = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutation.mutate({ schedule });
  };
  return (
    <div className="flex justify-end">
      <button
        type="button"
        class="inline-block my-2 px-6 py-2.5 bg-cyan-700 text-white leading-tight rounded shadow-md  transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add event
      </button>

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-end p-4 border-b border-gray-200 rounded-t-md">
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form
              class="modal-body relative p-4"
              method="POST"
              onSubmit={onSubmitHandler}
            >
              <div className="flex justify-between pb-2">
                <button
                  type="button"
                  class="text-lg text-cyan-700 hover:text-cyan-500"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <h5
                  class="text-xl font-bold leading-normal text-gray-800 "
                  id="exampleModalLabel"
                >
                  New Event
                </h5>
                <button class="text-lg text-cyan-700 font-bold hover:text-cyan-500">
                  Add
                </button>
              </div>
              <div className="py-5 border-t border-b">
                <div class="mb-6">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={onChangeHandler}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="mb-6">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    onChange={onChangeHandler}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <div class="grid gap-6 mb-6 md:grid-cols-2 py-3">
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      onChange={onChangeHandler}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Select an option
                    </label>
                    <select
                      name="color"
                      onChange={onChangeHandler}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected="">Choose a colour</option>
                      <option value="#e52a2a" className="bg-red-500 text-white">
                        Red
                      </option>
                      <option
                        value="#3d3dd5"
                        className="bg-blue-500 text-white"
                      >
                        Blue
                      </option>
                      <option
                        value="#25a225"
                        className="bg-green-500 text-white"
                      >
                        Green
                      </option>
                      <option
                        value="#ffff18"
                        className="bg-yellow-500 text-white"
                      >
                        Yellow
                      </option>
                      <option
                        value="#ffa500"
                        className="bg-orange-500 text-white"
                      >
                        Orange
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Start date
                    </label>
                    <input
                      type="datetime-local"
                      name="start"
                      onChange={onChangeHandler}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      End date
                    </label>
                    <input
                      type="datetime-local"
                      name="end"
                      onChange={onChangeHandler}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
