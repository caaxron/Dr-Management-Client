// AYoUkn4s9kSCK0juHpadrD7H1zxQUQ7aGUkbh4q7oNr_WWocs9GGGhkRyWs2IGgtqYd7bpwCdSAYWl8n

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
      className="bg-cyan-900 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
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

        <nav data-dev-hint="main navigation">
          <div className="space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-300">
            <a
              href="!#"
              className="flex items-center justify-center bg-white py-2 px-16 rounded-full text-lg"
            >
              <span className=" text-cyan-700">
                <i class="fa-solid fa-house-medical"></i> Home
              </span>
            </a>
          </div>
          <div className="space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-300">
            <a
              href="!#"
              className="flex items-center justify-center bg-white py-2 px-16 rounded-full text-lg"
            >
              <span className=" text-cyan-700">
                <i class="fa-solid fa-user-doctor"></i> Doctor
              </span>
            </a>
          </div>
          <div className="space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-300">
            <a
              href="!#"
              className="flex items-center justify-center bg-white py-2 px-16 rounded-full text-lg"
            >
              <span className=" text-cyan-700">
                <i class="fa-solid fa-hospital-user"></i> Patient
              </span>
            </a>
          </div>
          <div className="space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-300">
            <a
              href="!#"
              className="flex items-center justify-center bg-white py-2 px-16 rounded-full text-lg"
            >
              <span className=" text-cyan-700">
                <i class="fa-solid fa-file"></i> Report
              </span>
            </a>
          </div>
        </nav>
      </div>

      <nav data-dev-hint="second-main-navigation or footer navigation">
        <a
          href="!#"
          className="block py-2 px-4 transition duration-200 hover:bg-gray-300 text-lg hover:text-white"
        >
          <i class="fa-solid fa-user"></i> Username
        </a>
        <a
          href="!#"
          className="block py-2 px-4 transition duration-200 hover:bg-gray-300 text-lg hover:text-white"
        >
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
        </a>
      </nav>
    </aside>

    <main id="content" className="flex-1 p-6 lg:px-8 overflow-auto h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-6 sm:px-0"></div>
      </div>
    </main>
  </div>
</div>;

////////
<ul
  class="nav nav-pills flex flex-col flex-wrap list-none p-5"
  id="pills-tabVertical"
  role="tablist"
>
  <li class="nav-item flex-grow text-center mb-2" role="presentation">
    <a
      href="#pills-homeVertical"
      class="
nav-link
block
font-medium
text-xs
leading-tight
uppercase
rounded
px-6
py-3
focus:outline-none focus:ring-0
active
"
      id="pills-home-tabVertical"
      data-bs-toggle="pill"
      data-bs-target="#pills-homeVertical"
      role="tab"
      aria-controls="pills-homeVertical"
      aria-selected="true"
    >
      Home
    </a>
  </li>
  <li class="nav-item flex-grow text-center my-2" role="presentation">
    <a
      href="#pills-profileVertical"
      class="
nav-link
block
font-medium
text-xs
leading-tight
uppercase
rounded
px-6
py-3
focus:outline-none focus:ring-0
"
      id="pills-profile-tabVertical"
      data-bs-toggle="pill"
      data-bs-target="#pills-profileVertical"
      role="tab"
      aria-controls="pills-profileVertical"
      aria-selected="false"
    >
      Profile
    </a>
  </li>
  <li class="nav-item flex-grow text-center my-2" role="presentation">
    <a
      href="#pills-contactVertical"
      class="
nav-link
block
font-medium
text-xs
leading-tight
uppercase
rounded
px-6
py-3
focus:outline-none focus:ring-0
"
      id="pills-contact-tabVertical"
      data-bs-toggle="pill"
      data-bs-target="#pills-contactVertical"
      role="tab"
      aria-controls="pills-contactVertical"
      aria-selected="false"
    >
      Contact
    </a>
  </li>
</ul>;
