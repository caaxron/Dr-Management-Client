export const addReport = async (report) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/report`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(report),
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

export const deleteReport = async (patientId, reportId) => {
  console.log(patientId);
  try {
    let res = await fetch(
      `${process.env.REACT_APP_API_SERVER}/report/${patientId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ reportId }),
      }
    );
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

export const updateReport = async (report, patientId) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_SERVER}/report/${patientId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(report),
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

export const getAllReports = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/report`, {
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
