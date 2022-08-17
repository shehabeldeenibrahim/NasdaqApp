import axios from "axios";
import { APIKEY, BASE_URL } from "@env";
/**
 * Intercept axios requests and add
 * api key as a param
 * @param none
 */
const customAxios = axios.create({
  baseURL: BASE_URL,
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
