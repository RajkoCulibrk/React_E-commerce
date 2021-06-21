import axios from "axios";
import https from "https";

const instance = axios.create({
  baseURL: "http://rajkoculibrk-001-site1.ctempurl.com/api/",
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});
/* if there is a token in local storage set authorization header Bearer token before each call to backend */
instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
