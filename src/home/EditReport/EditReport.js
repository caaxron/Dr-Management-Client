import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { updateReport } from "../../api/report";
// import { useNavigate } from "react-router-dom";
// import { Oval } from "react-loader-spinner";

export const EditReport = ({ data, reportId, patientId }) => {
  const [report, setReport] = useState({
    reportId,
    date: data.date,
    details: data.details,
    prescription: data.prescription,
  });
  console.log(report);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ report, patientId }) => updateReport(report, patientId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["patient"]);
      },
    }
  );

  const onChangeHandler = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutation.mutate({ report, patientId });
  };

  return (
    <>
      <button
        type="button"
        class="font-medium text-cyan-600 text-xl"
        data-bs-toggle="modal"
        data-bs-target={`#report-${reportId}`}
      >
        <i class="fa-solid fa-pen-to-square"></i>
      </button>

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id={`report-${reportId}`}
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
                EditReport
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form
              className=" py-2 px-10"
              method="POST"
              onSubmit={onSubmitHandler}
            >
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={report.date}
                    onChange={onChangeHandler}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Prescription
                  </label>
                  <input
                    value={report.prescription}
                    onChange={onChangeHandler}
                    type="text"
                    name="prescription"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Details
                </label>
                <textarea
                  value={report.details}
                  onChange={onChangeHandler}
                  name="details"
                  rows="4"
                  class="mb-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
              <button class="text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
