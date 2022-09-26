import React, { useState } from "react";
import { Link } from "react-router-dom";
import { subscribe } from "../api/subscribe";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

function Subscribe() {
  let navigate = useNavigate();

  const [company, setCompany] = useState({
    company: "",
    code: "",
  });

  const mutation = useMutation((company) => subscribe(company), {
    onSuccess: () => {
      navigate("/register");
      toast.success("Company Create successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    onError: async () => {
      let x = await mutation.error;
      // // alert(x);
      toast.error(x, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  });

  const onChangeHandler = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = () => {
    mutation.mutate(company);
  };
  return (
    <>
      <div className=" flex flex-row hidden lg:flex">
        <div className=" w-1/3 bg-cyan-700 w-full h-screen">
          <div className="flex justify-end items-center h-screen">
            <div className="w-5/6 h-5/6 bg-cyan-700 shadow-2xl ">
              <div className="m-5">
                <Link
                  to="/"
                  className="text-cyan-700 rounded-full bg-white py-2.5 px-3 text-2xl hover:bg-gray-300"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                </Link>
              </div>
              <h1 className="text-center text-white text-5xl">
                Notice <i class="fa-solid fa-circle-exclamation"></i>
              </h1>
              <div className="mt-5">
                <div className="text-white flex justify-center ">
                  <div>
                    <h2 className="p-5 text-2xl">
                      Please create your company name and code before you leave
                      this page!
                    </h2>
                    <h2 className="p-5 text-2xl">
                      You are only able to access here for one time!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 w-full h-screen">
          <div className="flex justify-start items-center h-screen">
            <div className="w-9xl h-5/6 shadow-2xl">
              <form className="lg:px-20 xl:px-40 py-20">
                <h2 className="text-center text-cyan-700 text-3xl font-bold py-5">
                  Create Company
                </h2>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                    placeholder=" "
                    required=""
                    onChange={onChangeHandler}
                  />
                  <label
                    for="company"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company Name
                  </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    type="password"
                    name="code"
                    id="code"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                    placeholder=" "
                    required=""
                    onChange={onChangeHandler}
                  />
                  <label
                    for="code"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Code#
                  </label>
                </div>
                <div className="grid content-center">
                  <button
                    onClick={onSubmitHandler}
                    class="text-center text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:hidden">
        <div className=" w-screen bg-cyan-700">
          <div className="h-96">
            <div className="m-5">
              <a
                href="/"
                className="text-cyan-700 rounded-full bg-white py-2.5 px-3 text-2xl hover:bg-gray-300"
              >
                <i class="fa-solid fa-arrow-left"></i>
              </a>
            </div>
            <h1 className="text-center text-white text-5xl">
              Notice <i class="fa-solid fa-circle-exclamation"></i>
            </h1>
            <div className="mt-5">
              <div className="text-white flex justify-center ">
                <div>
                  <h2 className=" p-5 text-2xl">
                    Please create your company name and code before you leave
                    this page!
                  </h2>
                  <h2 className="p-5 text-2xl">
                    You are only able to access here for one time!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen ">
          <div className="h-screen">
            <form className="px-8 sm:px-28 md:px-52 py-20">
              <h2 className="text-center text-cyan-700 text-3xl font-bold py-5">
                Create Company
              </h2>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="company"
                  id="company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                  onChange={onChangeHandler}
                />
                <label
                  for="company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company Name
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="password"
                  name="code"
                  id="code"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                  onChange={onChangeHandler}
                />
                <label
                  for="code"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Code#
                </label>
              </div>
              <div className="grid content-center">
                <button
                  onClick={onSubmitHandler}
                  class="text-center text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
