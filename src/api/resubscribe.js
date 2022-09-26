export const resubscribe = async (resubscribe) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/resubscribe`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(resubscribe),
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
