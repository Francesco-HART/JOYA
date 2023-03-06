import React from "react";
import { AppProps } from "next/app";

import {Refine} from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
  LoginPage,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-nextjs-router";

import "@pankod/refine-antd/dist/styles.min.css";
import { authProvider } from "src/authProvider";
import apiProvider from "../src/dataProvider";
import resources from "../src/resources";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Refine
      routerProvider={routerProvider}
      notificationProvider={notificationProvider}
      Layout={Layout}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      dataProvider={apiProvider}
      authProvider={authProvider}
      LoginPage={LoginPage}
      resources={resources}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
