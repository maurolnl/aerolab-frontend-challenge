import type {AppProps} from "next/app";
import {DefaultSeo} from "next-seo";
import styled from "styled-components";

import "../styles/styles.css";
import SEO from "../next-seo.config";

const AppEl = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow-x: clip;
  position: relative;
`;

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppEl>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </AppEl>
  );
}

export default MyApp;
