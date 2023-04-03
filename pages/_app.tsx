import type {AppProps} from "next/app";
import {Global} from "@emotion/react";
import {GlobalStyles} from "@/common/globalStyles";

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </>
  );
}
