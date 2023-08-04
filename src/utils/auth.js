export function saveToken(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function saveUser(userObj) {
  localStorage.setItem("user", JSON.stringify(userObj));
}

export function getToken() {
  return JSON.parse(localStorage.getItem("token"));
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function isLoggedIn() {
  let token;
  let user;
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("token"));
    user = JSON.parse(localStorage.getItem("user"));
  }

  if (token && user) {
    return true;
  }
  return false;
}

export function logoutTask() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
