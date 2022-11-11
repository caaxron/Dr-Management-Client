import { useMutation, useQueryClient } from "react-query";
import { deleteReport } from "../../api/report";
import { EditReport } from "../EditReport";

export const ShowReport = ({ data }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ patientId, reportId }) => deleteReport(patientId, reportId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["patient"]);
        // navigate("/home#pills-patient");
      },
    }
  );

  const deleteHandler = (patientId, reportId) => {
    mutation.mutate({ patientId, reportId });
  };

  return (
    <>
      <div class="overflow-x-auto relative max-w-3xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.3)]">
        <div className="h-96 overflow-auto ">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Details
                </th>
                <th scope="col" class="py-3 px-6">
                  Prescription
                </th>
                <th scope="col" class="py-3 px-6">
                  Date
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.report.length === 0 ? (
                <h2 className=" text-lg">No report to Show</h2>
              ) : (
                data.report.map((rep, i) => (
                  <tr
                    key={i}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rep.details}
                    </th>
                    <td class="py-4 px-6">{rep.prescription}</td>
                    <td class="py-4 px-6">{rep.date}</td>
                    <td class="py-4 px-6">
                      <EditReport
                        data={rep}
                        reportId={rep._id}
                        patientId={data._id}
                      />
                    </td>
                    <td class="py-4 px-6 text-cyan-700 text-lg">
                      <button onClick={() => deleteHandler(data._id, rep._id)}>
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
