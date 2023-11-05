
const signUp = async (object) => {
  const response = await fetch(`http://localhost:3000/api/v1/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  let res = await response.json();
  let token = await res.authToken;
  if (token == undefined) {
    return res
  } else {
   await localStorage.setItem("authToken", token);
    return res
  }
};
const login = async (object) => {
  const response = await fetch(`http://localhost:3000/api/v1/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  let res = await response.json();
  let token = await res.authToken;
  if (token == undefined) {
    return res;
  } else {
   await localStorage.setItem("authToken", token);
    return res
  }
};
export { signUp, login };
