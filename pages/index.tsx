import type {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import {useRef} from "react";
import {Toaster} from "react-hot-toast";
import styled from "styled-components";

import {GlobalStyle} from "../styles/Global";
import ClientOnly from "../components/ClientOnly";
import Footer from "../components/Footer/Footer";
import LandingPage from "../components/LandingPage";
import {useMedia} from "../components/layout/hooks";
import {Stack} from "../components/layout/Stack.styled";
import ProductSection from "../components/Products/ProductSection";
import Walkthrough from "../components/Walkthrough/Walkthrough";
import {ProvideUser} from "../components/User/context";
import api from "../components/Products/api";
import {ProvideFilters} from "../components/Products/context";
import {IProduct} from "../components/Products/types";
import BGWaves from "../components/layout/BGWaves";
import Navbar from "../components/Navbar/Navbar";

const NavbarWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

interface Props {
  products: IProduct[];
}

const Home: NextPage<Props> = ({products}) => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);
  const productSectionRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    if (productSectionRef.current) productSectionRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <ProvideUser>
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
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
        <Stack direction="column" gap={isDesktop ? "135px" : "19px"} zindex="0">
          <LandingPage handleScroll={handleScroll} />
          <Stack direction="column" gap="160px">
            <Walkthrough />
            <ProvideFilters>
              <ProductSection
                ref={productSectionRef}
                handleScroll={handleScroll}
                products={products}
              />
            </ProvideFilters>
            <Footer />
          </Stack>
        </Stack>
        <BGWaves />
        <Toaster />
      </ClientOnly>
    </ProvideUser>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.getAllProducts();

  return {
    props: {
      products,
    },
  };
};

export default Home;
