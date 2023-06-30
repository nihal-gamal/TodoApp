import axios from "axios";

const BASE_URL = ``;

// const token = JSON.parse(sessionStorage.getItem("token"));
// console.log("Axiostoken", token);
export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer TOKEN_HERE`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});