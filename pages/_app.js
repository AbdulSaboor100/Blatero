import React, { useEffect } from "react";
import { currentAuthState } from "../Api/api";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    currentAuthState();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
