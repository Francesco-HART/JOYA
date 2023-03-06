import axios, { AxiosError, AxiosResponse } from "axios";

export enum MethodApiEnum {
  get = "get",
  post = "post",
  update = "update",
  delete = "delete",
}

const instance = axios.create({
  baseURL: `http://localhost:5000/api/`,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});

const responseBody = (response: AxiosResponse<any>) => response.data;

const responseError = (err: any): string => {
  console.log(
    err.response && err.response.data && err.response.data.message
      ? err.response.data.message
      : err.message
  );
  return err.toString();
};

const requests = {
  get: (url: string) =>
    instance.get(url).then(responseBody).catch(responseError),
  post: (url: string, body: {}) =>
    instance.post(url, body).then(responseBody).catch(responseError),
  put: (url: string, body: {}) =>
    instance.put(url, body).then(responseBody).catch(responseError),
  delete: (url: string) =>
    instance.delete(url).then(responseBody).catch(responseError),
};

export default requests;
