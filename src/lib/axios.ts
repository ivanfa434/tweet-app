import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fittingjump-us.backendless.app/api",
});