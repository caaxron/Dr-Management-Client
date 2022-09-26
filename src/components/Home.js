import React from "react";
import Schedule from "../home/schedule";
import Dashboard from "../home/dashboard";
import Logo from "../images/dr.management-logo2.png";
import { ShowDoctor } from "../home/ShowDoctor/";
import { ShowPatient } from "../home/ShowPatient/";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/users";
import { AddPatient } from "../home/AddPatient";
import Profile from "../home/profile";
import { getCompany } from "../api/subscribe";
import { useQuery } from "react-query";
import moment from "moment";
import { FallingLines } from "react-loader-spinner";

// import jwt_decode from "jwt-decode";
function Home() {
  let navigate = useNavigate();
  const user = localStorage.getItem("user");
  const { data, isLoading } = useQuery("company", getCompany);

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
  const expdate = data.exp_date;
  const today = moment();

  // const data =
  //   localStorage.getItem("token") && jwt_decode(localStorage.getItem("token"));

  // console.log(data.data);

  return (
    <div>
      <div className="relative min-h-screen md:flex" data-dev-hint="container">
        <input type="checkbox" id="menu-open" className="hidden" />

        <label
          for="menu-open"
          className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 text-gray-600 md:hidden"
          data-dev-hint="floating action button"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <header
          className="bg-cyan-700 text-gray-100 flex justify-between md:hidden"
          data-dev-hint="mobile menu bar"
        >
          <a
            href="!#"
            className="block p-4 text-white font-bold whitespace-nowrap truncate"
          >
            Dr.Management
          </a>

          <label
            for="menu-open"
            id="mobile-menu-button"
            className="m-2 p-2 focus:outline-none hover:text-white rounded-md"
          >
            <svg
              id="menu-open-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="menu-close-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </header>

        <aside
          id="sidebar"
          className="bg-cyan-700 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div
            className="flex flex-col space-y-6"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <a
              href="!#"
              className="text-white flex items-center justify-center space-x-2 px-4"
              title="Your App is cool"
            >
              <img src={Logo} alt="" className="w-32 h-32" />
            </a>
            <ul
              class="nav nav-pills flex flex-col flex-wrap list-none p-5"
              id="pills-tabVertical"
              role="tablist"
            >
              <li
                class="nav-item flex-grow text-center mb-2"
                role="presentation"
              >
                <a
                  href="#pills-home"
                  class="
                  nav-link
                  block
                  font-medium
                  text-md
                  leading-tight
                  uppercase
                  rounded-full
                  px-6
                  py-3
                  focus:outline-none focus:ring-0
                  active
                  transition duration-700 ease-in-out
                  "
                  id="pills-home-tabVertical"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Home
                </a>
              </li>
              <li
                class="nav-item flex-grow text-center my-2"
                role="presentation"
              >
                <a
                  href="#pills-doctor"
                  class="
                  nav-link
                  block
                  font-medium
                  text-md
                  leading-tight
                  uppercase
                  rounded-full
                  px-6
                  py-3
                  focus:outline-none focus:ring-0
                  transition duration-700 ease-in-out
                  "
                  id="pills-profile-tabVertical"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-doctor"
                  role="tab"
                  aria-controls="pills-doctor"
                  aria-selected="false"
                >
                  Doctor
                </a>
              </li>
              <li
                class="nav-item flex-grow text-center my-2"
                role="presentation"
              >
                <a
                  href="#pills-patient"
                  class="
                  nav-link
                  block
                  font-medium
                  text-md
                  leading-tight
                  uppercase
                  rounded-full
                  px-6
                  py-3
                  focus:outline-none focus:ring-0
                  transition duration-700 ease-in-out
                  "
                  id="pills-contact-tabVertical"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-patient"
                  role="tab"
                  aria-controls="pills-patient"
                  aria-selected="false"
                >
                  Patient
                </a>
              </li>
              <li
                class="nav-item flex-grow text-center my-2"
                role="presentation"
              >
                <a
                  href="#pills-schedule"
                  class="
                  nav-link
                  block
                  font-medium
                  text-md
                  leading-tight
                  uppercase
                  rounded-full
                  px-6
                  py-3
                  focus:outline-none focus:ring-0
                  transition duration-700 ease-in-out
                  "
                  id="pills-schedule-tabVertical"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-schedule"
                  role="tab"
                  aria-controls="pills-schedule"
                  aria-selected="false"
                >
                  Schedule
                </a>
              </li>
              <li
                class="nav-item flex-grow text-center my-2"
                role="presentation"
              >
                <a
                  href="#pills-profile"
                  class="
                  nav-link
                  block
                  font-medium
                  text-md
                  leading-tight
                  uppercase
                  rounded-full
                  px-6
                  py-3
                  focus:outline-none focus:ring-0
                  transition duration-700 ease-in-out
                  "
                  id="pills-profile-tabVertical"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>

          <nav data-dev-hint="second-main-navigation or footer navigation ">
            <p className="block py-2 px-4 text-xl hover:bg-cyan-600 transition duration-600 ease-in-out">
              <i class="fa-solid fa-user"></i> {JSON.parse(user).username}
            </p>
            <p className="hover:bg-cyan-600 transition duration-700 ease-in-out mb-5">
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="block py-2 px-4 text-xl "
              >
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
              </button>
            </p>
          </nav>
        </aside>

        <main
          id="content"
          className="flex-1 p-6 lg:px-0 overflow-auto h-screen"
        >
          <div className="max-w-7xl mx-auto">
            <div className="px-4 py-6 sm:px-5">
              <div class="tab-content" id="pills-tabContentVertical">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tabVertical"
                >
                  {today.isAfter(expdate) ? (
                    <h2 className="text-3xl text-center text-cyan-700">
                      Please resubscribe to access!
                    </h2>
                  ) : (
                    <Dashboard />
                  )}
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-doctor"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tabVertical"
                >
                  {today.isAfter(expdate) ? (
                    <h2 className="text-3xl text-center text-cyan-700">
                      Please resubscribe to access!
                    </h2>
                  ) : (
                    <ShowDoctor />
                  )}
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-patient"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tabVertical"
                >
                  {today.isAfter(expdate) ? (
                    <h2 className="text-3xl text-center text-cyan-700">
                      Please resubscribe to access!
                    </h2>
                  ) : (
                    <>
                      <AddPatient />
                      <ShowPatient />
                    </>
                  )}
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-schedule"
                  role="tabpanel"
                  aria-labelledby="pills-schedule-tabVertical"
                >
                  {today.isAfter(expdate) ? (
                    <h2 className="text-3xl text-center text-cyan-700">
                      Please resubscribe to access!
                    </h2>
                  ) : (
                    <Schedule />
                  )}
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tabVertical"
                >
                  <Profile />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
