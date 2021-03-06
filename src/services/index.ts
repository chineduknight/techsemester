import axios, { AxiosInstance, AxiosRequestConfig, } from "axios";
import { KEY_TOKEN } from "util/constant";
export const baseURL = "https://ortho-test-app.herokuapp.com";

export * from "./request";

const cancelTokenSource = axios.CancelToken.source();
const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
  },
  cancelToken: cancelTokenSource.token

});

//  This adds a token before all the requests.
// https://stackoverflow.com/questions/57251719/acquiring-a-new-token-with-axios-interceptors
const addTokenToRequest = (request: AxiosRequestConfig) => {
  if (request.headers) {
    request.headers.Authorization = `Bearer ${localStorage.getItem(KEY_TOKEN)}`;
  }
  return request;
};

axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;



