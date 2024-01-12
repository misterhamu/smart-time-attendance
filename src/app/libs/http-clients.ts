import axios from "axios";
const baseUrl = "";
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "content-type": "application/json",
  },
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
