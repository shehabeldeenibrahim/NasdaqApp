import axios from "axios";
import { APIKEY } from "../Constants";

const customAxios = axios.create({
  baseURL: "https://api.polygon.io",
});
customAxios.defaults.params = {};
customAxios.interceptors.request.use(
  function (config) {
    config.params["apikey"] = APIKEY;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export const isAxiosError = axios.isAxiosError;
export default customAxios;
