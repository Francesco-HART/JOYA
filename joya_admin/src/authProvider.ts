import { AuthProvider } from "@pankod/refine-core";
import nookies from "nookies";
import dataProvider from "./dataProvider";

export const authProvider: AuthProvider = {
  login: async ({ username, password, remember }) => {

    const { data } = await dataProvider.custom!({
      url: `${dataProvider.getApiUrl()}/auth`,
      method: 'post',
      payload: {
        email: username,
        password
      }
    })

    if (data) {
      return Promise.resolve();
    }

    return Promise.reject();
  },
  logout: () => {
    nookies.destroy(null, "auth");
    return Promise.resolve();
  },
  checkError: (error) => {
    if (error && error.statusCode === 401 || error.statusCode === 403) {
      return Promise.reject();
    }

    return Promise.resolve();
  },
  checkAuth: (ctx) => {
    const cookies = nookies.get(ctx);
    return cookies["access_token"] ? Promise.resolve() : Promise.reject();
  },
  getPermissions: async () => {
    const { data } = await dataProvider.custom!({
      url: `${dataProvider.getApiUrl()}/auth`,
      method: 'get',
    })
    if (data) {
      return Promise.resolve(data.type);
    }
    return Promise.reject();
  },
  getUserIdentity: async () => {
    const { data } = await dataProvider.custom!({
      url: `${dataProvider.getApiUrl()}/auth`,
      method: 'get',
    })
    if(data){
      return Promise.resolve(data);
    }
    return Promise.reject();
  },
};
