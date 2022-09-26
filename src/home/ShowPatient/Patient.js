import { useMutation, useQueryClient } from "react-query";
import { deletePatient } from "../../api/patient";
import { EditPatient } from "../EditPatient";
import { ViewPatient } from "../ViewPatient";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Patient({
  data: {
    name,
    gender,
    blood_group,
    genetic_disease,
    birthdate,
    contact,
    address,
    _id,
  },
}) {
  const queryClient = useQueryClient();

  const mutation = useMutation((_id) => deletePatient(_id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"]);
    },
  });

  const deleteHandler = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(_id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const tempData = {
    _id,
    name,
    birthdate,
    gender,
    blood_group,
    contact,
    address,
    genetic_disease,
  };
  return (
    <>
      <tbody>
        <tr class="bg-white border-b hover:bg-gray-200">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {name}
          </th>
          <td class="py-4 px-6">{gender}</td>
          <td class="py-4 px-6">
            <EditPatient data={tempData} />
          </td>
          <td class="py-4 px-6">
            <button
              onClick={() => deleteHandler(_id)}
              class="font-medium text-cyan-600 text-xl"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
          <td class="py-4 px-6">
            <Link
              to={`/viewreport/${_id}`}
              class="font-medium text-cyan-600 text-xl"
            >
              <i class="fa-solid fa-circle-plus"></i>
            </Link>
          </td>
          <td class="py-4 px-6">
            <ViewPatient data={tempData} />
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default Patient;
