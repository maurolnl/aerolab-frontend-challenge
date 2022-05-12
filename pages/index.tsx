import type {NextPage} from "next";
import Head from "next/head";

import {GlobalStyle} from "../styles/Global";

import ClientOnly from "./components/ClientOnly";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage";
import useMedia from "./components/layout/hooks";
import {Stack} from "./components/layout/Stack.styled";
import ProductSection from "./components/Products/ProductSection";
import Walkthrough from "./components/Walkthrough/Walkthrough";

const Home: NextPage = () => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Aerolab frontend challenge</title>
        <meta content="Frontend challenge for aerolab job application" name="description" />
        <link href="/favicon.ico" rel="icon" />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/Montserrat-VariableFont_wght.ttf"
          rel="preload"
          type="font/ttf"
        />
      </Head>
      <ClientOnly>
        <Stack direction="column" gap={isDesktop ? "135px" : "19px"}>
          <LandingPage />
          <Stack direction="column" gap="160px">
            <Walkthrough />
            <ProductSection />
            <Footer />
          </Stack>
        </Stack>
      </ClientOnly>
    </>
  );
};

export default Home;
