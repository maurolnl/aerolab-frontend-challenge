import React from "react";

import Hero from "./Hero/Hero";
import {Container} from "./layout/Container.styled";
import useMedia from "./layout/hooks";
import {Stack} from "./layout/Stack.styled";
import Navbar from "./Navbar/Navbar";

const LandingPage = () => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);

  return (
    <Container position="relative">
      <Stack direction="column" gap={isDesktop ? "112px" : "40px"}>
        <Navbar />
        <Hero />
      </Stack>
    </Container>
  );
};

export default LandingPage;
