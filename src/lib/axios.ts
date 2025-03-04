import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://adonicafterthought-us.backendless.app/api",
});