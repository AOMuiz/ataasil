// Function to save a token with a timestamp
export function saveToken(token) {
  const currentTime = new Date().getTime();
  const tokenData = {
    token: token,
    timestamp: currentTime,
  };
  localStorage.setItem("tokenData", JSON.stringify(tokenData));
}

// Function to get and check the token's expiration
export function getToken() {
  const tokenData = localStorage.getItem("tokenData");
  if (tokenData) {
    try {
      const parsedData = JSON.parse(tokenData);
      const currentTime = new Date().getTime();
      const tokenAgeInMilliseconds = currentTime - parsedData.timestamp;
      const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000; // Assuming a month has 30 days

      if (tokenAgeInMilliseconds >= oneMonthInMilliseconds) {
        // Token has expired, remove it
        logoutTask();
        // localStorage.removeItem("tokenData");
        return null;
      } else {
        // Token is still valid, return it
        return parsedData.token;
      }
    } catch (error) {
      console.error("Error parsing token data:", error);
      // Handle the error, e.g., remove the invalid data
      localStorage.removeItem("tokenData");
      return null;
    }
  } else {
    return null;
  }
}

export function saveUser(userObj) {
  localStorage.setItem("user", JSON.stringify(userObj));
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function isLoggedIn() {
  let token;
  let user;
  if (typeof window !== "undefined") {
    token = getToken();
    user = JSON.parse(localStorage.getItem("user"));
  }

  if (token && user) {
    return true;
  }
  return false;
}

export function logoutTask() {
  localStorage.removeItem("tokenData");
  localStorage.removeItem("user");
}
