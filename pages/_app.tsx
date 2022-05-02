import type {AppProps} from "next/app";
import styled from "styled-components";

const AppEl = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppEl>
      <Component {...pageProps} />
    </AppEl>
  );
}

export default MyApp;
