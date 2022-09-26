import { useQuery } from "react-query";
import { CChart } from "@coreui/react-chartjs";
import { getAllUsers } from "../api/users";
import { getAllPatients } from "../api/patient";
import { getAllSchedules } from "../api/schedule";
import { FallingLines } from "react-loader-spinner";
import { getAllReports } from "../api/report";
import moment from "moment";
function Dashboard() {
  const { data: data1 } = useQuery("doctors", getAllUsers);
  const { data: data2 } = useQuery("patients", getAllPatients);
  const { data: data3, isLoading } = useQuery("schedules", getAllSchedules);
  const { data: data4 } = useQuery("reports", getAllReports);
  const today = moment().format("L");

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
  let total = 0;
  let dateCount = 0;

  if (!isLoading) {
    data4.map((a) => {
      total += a.length;
      return true;
    });

    data3.map((b) => {
      if (moment(today).isSame(moment(b.start).format("L"))) dateCount++;
      return true;
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <CChart
            className="shadow-2xl rounded-full shadow-cyan-700"
            type="doughnut"
            data={{
              labels: ["Doctor", "Patient", "Visit", "Schedule For Today"],
              datasets: [
                {
                  backgroundColor: ["#22577a", "#38a3a5", "#57cc99", "#1e3a8a"],
                  data: [data1.length, data2.length, total, dateCount],
                },
              ],
            }}
          />
        </div>

        <section class="antialiased font-ssans flex">
          <div class="mx-auto m-8 space-y-12">
            <div class="pl-1 w-64 sm:w-96 h-28 bg-sky-900 rounded-lg shadow-md hover:shadow-sky-900 transition duration-700 ease-in-out">
              <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                <div class="my-auto">
                  <p class="font-bold">DOCTOR</p>
                  <p class="text-lg">{data1.length}</p>
                </div>
                <div className="my-auto text-5xl text-sky-900">
                  <i class="fa-solid fa-user-doctor"></i>
                </div>
              </div>
            </div>

            <div class="pl-1 w-64 sm:w-96  h-28 bg-teal-700 rounded-lg shadow-md hover:shadow-teal-700 transition duration-700 ease-in-out">
              <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                <div class="my-auto">
                  <p class="font-bold">PATIENT</p>
                  <p class="text-lg">{data2.length}</p>
                </div>
                <div className="my-auto text-5xl text-teal-700">
                  <i class="fa-solid fa-hospital-user"></i>
                </div>
              </div>
            </div>

            <div class="pl-1 w-64 sm:w-96  h-28 bg-emerald-400 rounded-lg shadow-md hover:shadow-emerald-400 transition duration-700 ease-in-out">
              <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                <div class="my-auto">
                  <p class="font-bold">VISIT</p>
                  <p class="text-lg">{total}</p>
                </div>
                <div className="my-auto text-5xl text-emerald-400">
                  <i class="fa-solid fa-users"></i>
                </div>
              </div>
            </div>

            <div class="pl-1 w-64 sm:w-96  h-28 bg-blue-900 rounded-lg shadow-md hover:shadow-blue-900 transition duration-700 ease-in-out">
              <div class="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                <div class="my-auto">
                  <p class="font-bold">SCHEDULE FOR TODAY</p>
                  <p class="text-lg">{dateCount}</p>
                </div>
                <div className="my-auto text-5xl text-blue-900">
                  <i class="fa-solid fa-calendar-check"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
