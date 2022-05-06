import type {NextPage} from "next";
import Head from "next/head";

import {GlobalStyle} from "../styles/Global";

import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import {Stack} from "./components/layout/Stack.styled";
import Navbar from "./components/Navbar/Navbar";
import ProductSection from "./components/Products/ProductSection";
import Walkthrough from "./components/Walkthrough/Walkthrough";

const Home: NextPage = () => {
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
      <Navbar />
      <Hero />
      <Stack direction="column" gap="160px">
        <Walkthrough />
        <ProductSection />
        <Footer />
      </Stack>
    </>
  );
};

export default Home;
