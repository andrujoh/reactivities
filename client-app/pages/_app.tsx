import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

const Layout = (props: { children: JSX.Element }) => {
  return props.children;
};

function Index({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Index;
