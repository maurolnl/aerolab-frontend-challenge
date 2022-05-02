import type {NextPage} from "next";
import Head from "next/head";

import {GlobalStyle} from "../styles/Global";

import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

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
    </>
  );
};

export default Home;
