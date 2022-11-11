import doctor from "../images/doctor.png";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { FallingLines } from "react-loader-spinner";
import { getUser } from "../api/users";
import jwt_decode from "jwt-decode";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EditUser } from "../home/EditUser";

function Profile() {
  const [code, setCode] = useState(false);
  let navigate = useNavigate();

  const user =
    localStorage.getItem("token") && jwt_decode(localStorage.getItem("token"));

  const { data, isLoading } = useQuery(["doctor", user.data._id], () =>
    getUser(user.data._id)
  );

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
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div class="p-6 max-w-xs w-full bg-white rounded-lg shadow-[0px_0px_10px_2px_rgba(0,0,0,0.3)] mx-auto">
          <h1 className="text-center text-2xl text-cyan-700 underline">
            Profile details
          </h1>
          <div>
            <img src={doctor} alt="" className="w-52 mx-auto" />
            <h1 className="text-center text-cyan-700 text-2xl py-2">
              {data.name}
            </h1>
          </div>
          <div className="">
            <div className="text-md md:text-2xl space-y-4 py-5 text-cyan-700">
              <div className="flex space-x-5 items-center">
                <i class="fa-regular fa-user"></i>
                <p>{data.username}</p>
              </div>
              <div className="flex space-x-5 items-center">
                <i class="fa-regular fa-envelope"></i>
                <p>{data.email}</p>
              </div>

              <div className="flex space-x-5 items-center">
                <i class="fa-regular fa-hospital"></i>
                <p>{data.company}</p>
              </div>
              <button
                onClick={() => setCode(!code)}
                className="flex space-x-5 items-center"
              >
                <i class="fa-solid fa-key"></i>
                <div className="border border-cyan-700 rounded-2xl flex justify-between p-2 md:p-3 w-36 md:w-52 items-center text-sm">
                  <p className="mr-2">{code ? data.code : "######"}</p>
                  {code ? (
                    <i class="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i class="fa-solid fa-eye"></i>
                  )}
                </div>
              </button>
            </div>
            <div className="py-5 flex flex-col space-y-5 text-white text-lg">
              <button
                className="py-2 px-6 rounded-xl bg-cyan-700 "
                data-bs-toggle="modal"
                data-bs-target="#resubscribe"
              >
                <i class="fa-regular fa-calendar-check"></i> Resubscribe
              </button>

              <div
                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="resubscribe"
                tabindex="-1"
                aria-labelledby="resubscribeLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog relative w-auto pointer-events-none">
                  <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h5
                        class="text-xl font-medium leading-normal text-gray-800"
                        id="exampleModalLabel"
                      >
                        Resubscribe
                      </h5>
                      <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body relative p-4 space-y-5">
                      <div class="flex items-center pl-4 rounded-lg shadow-lg transition duration-500 ease-in-out transform border-2 border-cyan-600 rounded-lg hover:border-cyan-400 ">
                        <input
                          id="bordered-radio-1"
                          type="radio"
                          value=""
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="bordered-radio-1"
                          class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <h1 className="text-xl flex justify-between p-5">
                            <p>Starter</p>
                            <p>
                              <span className="text-4xl text-cyan-700">
                                $50
                              </span>
                              <span className="font-thin">/month</span>
                            </p>
                          </h1>
                        </label>
                      </div>
                      <div class="flex items-center pl-4 rounded-lg shadow-lg transition duration-500 ease-in-out transform border-2 border-cyan-600 rounded-lg hover:border-cyan-400 ">
                        <input
                          id="bordered-radio-2"
                          type="radio"
                          value=""
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="bordered-radio-2"
                          class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <h1 className="text-xl flex justify-between p-5">
                            <p>Company</p>
                            <p>
                              <span className="text-4xl text-cyan-700">
                                $100
                              </span>
                              <span className="font-thin">/month</span>
                            </p>
                          </h1>
                        </label>
                      </div>
                      <div class="flex items-center pl-4 rounded-lg shadow-lg transition duration-500 ease-in-out transform border-2 border-cyan-600 rounded-lg hover:border-cyan-400 ">
                        <input
                          id="bordered-radio-3"
                          type="radio"
                          value=""
                          name="bordered-radio"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="bordered-radio-3"
                          class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <h1 className="text-xl flex justify-between p-5">
                            <p>Enterprise</p>
                            <p>
                              <span className="text-4xl text-cyan-700">
                                $200
                              </span>
                              <span className="font-thin">/month</span>
                            </p>
                          </h1>
                        </label>
                      </div>
                    </div>
                    <div class="modal-footer w-full items-center p-4 border-t border-gray-200">
                      <PayPalScriptProvider
                        options={{
                          "client-id":
                            "AYoUkn4s9kSCK0juHpadrD7H1zxQUQ7aGUkbh4q7oNr_WWocs9GGGhkRyWs2IGgtqYd7bpwCdSAYWl8n",
                        }}
                      >
                        <PayPalButtons
                          style={{ layout: "vertical" }}
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              purchase_units: [
                                {
                                  amount: {
                                    currency_code: "USD",
                                    value: "50.00",
                                  },
                                },
                              ],
                            });
                          }}
                          onApprove={(data, actions) => {
                            return actions.order
                              .capture()
                              .then(function (details) {
                                navigate("/resubscribe");
                                // alert(
                                //   "Transaction Completed by " +
                                //     details.payer.name.given_name
                                // );
                                toast.success(
                                  "Transaction Completed by " +
                                    details.payer.name.given_name,
                                  {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                  }
                                );
                              });
                          }}
                        />
                      </PayPalScriptProvider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.3)] p-8 rounded">
          <EditUser data={data} />
        </div>
      </div>
    </>
  );
}
export default Profile;
