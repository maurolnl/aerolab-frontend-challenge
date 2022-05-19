import React from "react";

import ClientOnly from "./ClientOnly";
import Hero from "./Hero/Hero";
import {Container} from "./layout/Container.styled";
import {useMedia} from "./layout/hooks";
import {Stack} from "./layout/Stack.styled";
import Navbar from "./Navbar/Navbar";

interface Props {
  handleScroll: () => void;
}

const LandingPage: React.FC<Props> = ({handleScroll}) => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);

  return (
    <Container position="relative">
      <ClientOnly>
        <Stack direction="column" gap={isDesktop ? "112px" : "40px"}>
          <Navbar />
          <Hero handleScroll={handleScroll} />
        </Stack>
      </ClientOnly>
    </Container>
  );
};

export default LandingPage;
