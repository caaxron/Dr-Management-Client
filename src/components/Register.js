import React, { useState } from "react";
import Logo from "../images/dr.management-logo2.png";
import { Link } from "react-router-dom";
import { register } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    company: "",
    code: "",
  });

  const mutation = useMutation(async (user) => register(user), {
    onSuccess: () => {
      navigate("/login");
      toast.success("Registered successfully", {
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
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(user);
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

              <div className="h-5/6 grid content-center">
                <div className="flex justify-center items-center">
                  <img className="w-48 " src={Logo} alt="" />
                </div>

                <h1 className="text-center text-white text-4xl my-5">
                  Welcome Back!
                </h1>

                <div className="text-white flex justify-center ">
                  <h2 className="w-72 text-center">
                    To keep connected with us please login with your personal
                    info
                  </h2>
                </div>

                <div className="flex justify-center my-5">
                  <Link
                    to="/login"
                    className="py-2.5 px-20 border border-white rounded-full text-white hover:bg-white hover:text-cyan-700"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 w-full h-screen">
          <div className="flex justify-start items-center h-screen">
            <div className="w-9xl h-5/6 shadow-2xl">
              <form className="lg:px-20 xl:px-40 py-20" method="POST">
                <h2 className="text-center text-cyan-700 text-3xl font-bold py-2">
                  Create Account
                </h2>
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                      placeholder=" "
                      required
                      onChange={onChangeHandler}
                    />
                    <label
                      for="name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                  <div class="relative z-0 mb-6 w-full group">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                      placeholder=" "
                      required
                      onChange={onChangeHandler}
                    />
                    <label
                      for="username"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Username
                    </label>
                  </div>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                    placeholder=" "
                    required
                    onChange={onChangeHandler}
                  />
                  <label
                    for="email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                    placeholder=" "
                    required
                    onChange={onChangeHandler}
                  />
                  <label
                    for="password"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                    placeholder=" "
                    required
                    onChange={onChangeHandler}
                  />
                  <label
                    for="company"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company
                  </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    type="password"
                    name="code"
                    id="code"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                    required
                    placeholder=" "
                    onChange={onChangeHandler}
                  />
                  <label
                    for="code"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Register Code#
                  </label>
                </div>
                <div className="grid content-center">
                  <button
                    onClick={onSubmitHandler}
                    class="text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 "
                  >
                    Submit
                  </button>
                </div>
                <h1 className="text-gray-400 text-xs py-2">
                  Required a company code to create an account, please subscribe
                  first to register your company.
                </h1>
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
            <div className="flex justify-center">
              <img src={Logo} alt="" className="w-32" />
            </div>

            <h1 className="text-center text-white text-4xl my-2">
              Welcome back!
            </h1>

            <div className="text-white flex justify-center ">
              <h2 className="w-72 text-center">
                To keep connected with us please login with your personal info
              </h2>
            </div>

            <div className="flex justify-center my-5">
              <Link
                to="/login"
                className="py-2.5 px-20 border border-white rounded-full text-white hover:bg-white hover:text-cyan-700"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>

        <div className="w-screen ">
          <div className="h-screen">
            <form className="px-8 sm:px-28 md:px-52 py-20">
              <h2 className="text-center text-cyan-700 text-3xl font-bold py-2">
                Create Account
              </h2>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                  onChange={onChangeHandler}
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-cyan-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                  onChange={onChangeHandler}
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-cyan-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  onChange={onChangeHandler}
                  required=""
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-cyan-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                  onChange={onChangeHandler}
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-cyan-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                  onChange={onChangeHandler}
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                  onChange={onChangeHandler}
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-cyan-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Register Code#
                </label>
              </div>
              <div className="grid content-center">
                <button
                  type="submit"
                  onClick={onSubmitHandler}
                  class="text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 "
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

export default Register;
