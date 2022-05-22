import React from "react";
import styled from "styled-components";

import ClientOnly from "./ClientOnly";
import Hero from "./Hero/Hero";
import {Container} from "./layout/Container.styled";
import {useMedia} from "./layout/hooks";
import {Stack} from "./layout/Stack.styled";

const EmptyDiv = styled.div`
  height: 128px;
`;

interface Props {
  handleScroll: () => void;
}

const LandingPage: React.FC<Props> = ({handleScroll}) => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);

  return (
    <Container position="relative">
      <ClientOnly>
        <Stack direction="column" gap={isDesktop ? "112px" : "40px"}>
          <EmptyDiv />
          <Hero handleScroll={handleScroll} />
        </Stack>
      </ClientOnly>
    </Container>
  );
};

export default LandingPage;
