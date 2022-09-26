import jwt_decode from "jwt-decode";

export const login = async (user) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    const userdata = {
      username: user.username,
    };
    if (!res.ok) throw new Error(data.msg);
    if (res.ok) localStorage.setItem("token", data);
    if (res.ok) localStorage.setItem("user", JSON.stringify(userdata));
  } catch (e) {
    throw e.message;
  }
};

export const register = async (user) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_SERVER}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
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

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const checkAuth = () => {
  let isAuth = localStorage.getItem("token") ? true : false;
  let user = localStorage.getItem("token")
    ? jwt_decode(localStorage.getItem("token"))
    : null;
  return { isAuth, user };
};

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/users`, {
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

export const getUser = async (id) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/users/${id}`, {
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

export const updateUser = async (user, id) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_SERVER}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(user),
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
