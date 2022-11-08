import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="nav-1 fixed md:static  w-full z-10">
        <div className=" sm:px-6 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center hidden md:block space-x-10 lg:space-x-16 ">
              <a class="link text-lg text-cyan-700 " href="/">
                Home
              </a>
              <a class="link text-lg text-cyan-700 " href="#section-1">
                About
              </a>
              <a class="link text-lg text-cyan-700 " href="#section-2">
                Features
              </a>
              <a class="link text-lg text-cyan-700 " href="#section-4">
                Subscribes
              </a>
              <a class="link text-lg text-cyan-700 " href="#section-3">
                Contact
              </a>
            </div>
            <div className="hidden md:block">
              <Link
                to="/login"
                className="button text-white px-7 py-2.5 bg-cyan-700 rounded-lg hover:bg-cyan-600 mr-3"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="button text-white px-7 py-2.5 bg-cyan-700 rounded-lg hover:bg-cyan-600"
              >
                Sign up
              </Link>
            </div>
            <div className=" flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="m-5 inline-flex items-center justify-center rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="text-blue-900 block px-3 py-2 text-2xl">
                  Home
                </a>

                <a
                  href="#section-1"
                  className="text-blue-900 block px-3 py-2 text-2xl"
                >
                  About
                </a>

                <a
                  href="#section-2"
                  className="text-blue-900 block px-3 py-2 text-2xl"
                >
                  Features
                </a>
                <a
                  href="#section-4"
                  className="text-blue-900 block px-3 py-2 text-2xl"
                >
                  Subscribes
                </a>
                <a
                  href="#section-3"
                  className="text-blue-900 block px-3 py-2 text-2xl"
                >
                  Contact
                </a>
                <div className="flex justify-center">
                  <Link
                    to="/login"
                    className="text-white px-5 py-2.5 bg-blue-900 rounded-full mr-2"
                  >
                    Sign in
                  </Link>
                  {/* <button className="text-white px-5 py-2.5 bg-blue-900 rounded-full mr-2">
                    Sign in
                  </button> */}
                  <button className="text-white px-5 py-2.5 bg-blue-900 rounded-full">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
