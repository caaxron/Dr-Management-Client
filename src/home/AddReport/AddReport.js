import { useState } from "react";
import { addReport } from "../../api/report";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

export const AddReport = () => {
  const { id } = useParams();
  const [report, setReport] = useState({
    date: "",
    patientId: id,
    prescription: "",
    details: "",
  });
  const queryClient = useQueryClient();
  const mutation = useMutation(({ report }) => addReport(report), {
    onSuccess: () => {
      queryClient.invalidateQueries(["patient"]);
    },
  });

  const onChangeHandler = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutation.mutate({ report });
  };
  return (
    <>
      <form className=" py-2 px-10" method="POST" onSubmit={onSubmitHandler}>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Date
            </label>
            <input
              type="date"
              name="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Prescription
            </label>
            <input
              type="text"
              name="prescription"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Details
          </label>
          <textarea
            onChange={onChangeHandler}
            name="details"
            rows="4"
            class="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className="">
          <button class="text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
