export const subscribe = async (subscribe) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(subscribe),
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

export const getCompany = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/subscribe`, {
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
