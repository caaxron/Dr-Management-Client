import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { updateUser } from "../../api/users";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import { Oval } from "react-loader-spinner";

export const EditUser = ({ data }) => {
  const [user, setUser] = useState({
    name: data.name,
    username: data.username,
    email: data.email,
    password: data.password,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(({ user, _id }) => updateUser(user, data._id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["doctor"]);
    },
  });

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      //   text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate({ user });
        Swal.fire("Your profile has been changed.", "", "success");
      }
    });
  };

  return (
    <>
      <form className="w-full " onSubmit={onSubmitHandler}>
        <h1 className="text-2xl pb-2 text-cyan-700 underline">
          Update Profile
        </h1>
        <div class="space-y-5 p-3">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={data.name}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required=""
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
              Username
            </label>
            <input
              type="text"
              name="username"
              defaultValue={data.username}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required=""
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={data.email}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required=""
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required=""
              onChange={onChangeHandler}
            />
          </div>
          <div className=" flex flex-col space-y-5 text-white text-lg">
            <button className="py-2 px-6 rounded-xl bg-cyan-700 ">
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
