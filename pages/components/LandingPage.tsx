import React from "react";

import Hero from "./Hero/Hero";
import {Container} from "./layout/Container.styled";
import {Stack} from "./layout/Stack.styled";
import Navbar from "./Navbar/Navbar";

const LandingPage = () => {
  return (
    <Container position="relative">
      <Stack direction="column" gap="112px">
        <Navbar />
        <Hero />
      </Stack>
    </Container>
  );
};

export default LandingPage;
