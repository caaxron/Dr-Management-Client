import React from "react";
import contactImage from "../images/5329559.jpg";

export const Section3 = () => {
  return (
    <section id="section-3" className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-200">
        <div className="lg:hidden bg-cyan-700 text-white text-center h-72 space-y-5 p-5">
          <h1 className="text-lg font-bold underline">Contact Information</h1>
          <h1>
            <i class="fa-solid fa-phone"></i> +6012 345 6789
          </h1>
          <h1>
            <i class="fa-solid fa-envelope"></i> drmanagement@drm.com.my
          </h1>
          <h1>
            <i class="fa-solid fa-location-dot"></i> 11, Beach Street George
            Town
          </h1>
          <div className="flex justify-center space-x-2">
            <h1 className=" bg-white text-cyan-700 rounded-full py-3 px-5 ">
              <i class="fa-brands fa-facebook-f"></i>
            </h1>
            <h1 className=" bg-white text-cyan-700 rounded-full py-3 px-4 ">
              <i class="fa-brands fa-twitter"></i>
            </h1>
            <h1 className=" bg-white text-cyan-700 rounded-full py-3 px-4 ">
              <i class="fa-brands fa-linkedin-in"></i>
            </h1>
          </div>
        </div>
        <div className="hidden flex justify-center p-20 lg:relative lg:block">
          <img src={contactImage} alt="" />
          <div className="absolute bg-cyan-700 text-white w-96 text-center h-56 space-y-5 top-32 p-5">
            <h1 className="text-lg font-bold underline">Contact Information</h1>
            <h1>
              <i class="fa-solid fa-phone"></i> +6012 345 6789
            </h1>
            <h1>
              <i class="fa-solid fa-envelope"></i> drmanagement@drm.com.my
            </h1>
            <h1>
              <i class="fa-solid fa-location-dot"></i> 11, Beach Street George
              Town
            </h1>
          </div>
          <h1 className="absolute text-white text-2xl bg-cyan-700 rounded-full py-3 px-5 right-96 bottom-28 hover:bg-cyan-600">
            <i class="fa-brands fa-facebook-f"></i>
          </h1>
          <h1 className="absolute text-white text-2xl bg-cyan-700 rounded-full py-3 px-4 right-64 bottom-28 hover:bg-cyan-600">
            <i class="fa-brands fa-twitter"></i>
          </h1>
          <h1 className="absolute text-white text-2xl bg-cyan-700 rounded-full py-3 px-4 right-32 bottom-28 hover:bg-cyan-600">
            <i class="fa-brands fa-linkedin-in"></i>
          </h1>
        </div>
        <div>
          <form
            className="p-10 md:p-20"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="5a332e79-cb77-4144-9291-231b1c601608"
            ></input>
            <h1 className="text-cyan-700 mb-5 underline text-center text-2xl font-bold">
              Drop us a message
            </h1>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="First Name"
                  id="First Name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="First Name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="Last Name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                  id="Last Name"
                />
                <label
                  for="Last Name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="tel"
                  id="tel"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="tel"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="Company"
                  id="Company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="Company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (name)
                </label>
              </div>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="Email"
                name="Email"
                id="Email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                placeholder=" "
                required=""
              />
              <label
                for="Email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                name="Message"
                id="Message"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-cyan-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-700 peer"
                placeholder=" "
                required=""
              />
              <label
                for="Message"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />
            <button
              type="submit"
              className="button text-white px-5 py-2.5 bg-cyan-700 rounded-full hover:bg-cyan-600 mr-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
