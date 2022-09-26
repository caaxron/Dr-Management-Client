export const getAllPatients = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/patient`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.msg);
    }
  } catch (e) {
    throw e.message;
  }
};

export const getPatient = async (id) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_SERVER}/patient/${id}`
    );
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.msg);
    }
  } catch (e) {
    throw e.message;
  }
};

export const addPatient = async (patient) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/patient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(patient),
    });
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.msg);
    }
  } catch (e) {
    throw e.message;
  }
};

export const deletePatient = async (id) => {
  try {
    let res = await fetch(`${process.env.REACT_APP_API_SERVER}/patient/${id}`, {
      method: "DELETE",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    let data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.msg);
    }
  } catch (e) {
    throw e.message;
  }
};

export const updatePatient = async (patient, id) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_SERVER}/patient/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(patient),
      }
    );
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.msg);
    }
  } catch (e) {
    throw e.message;
  }
};
