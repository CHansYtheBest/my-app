import * as axios from "axios";

export default async function useCheckIsLoggedIn() {
  return axios
    .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.resultCode === 0) {
        return response.data;
      } else {
        return false;
      }
    });
}
