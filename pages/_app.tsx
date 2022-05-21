import type {AppProps} from "next/app";
import styled from "styled-components";
import "../styles/styles.css";

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
      <Component {...pageProps} />
    </AppEl>
  );
}

export default MyApp;
