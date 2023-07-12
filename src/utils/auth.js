export function isLoggedIn() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
  if (token && user) {
    return true;
  }
  return false;
}
