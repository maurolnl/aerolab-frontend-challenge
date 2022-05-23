import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import styled from "styled-components";
import {useViewportScroll} from "framer-motion";

import aerolab_logo from "../../assets/icons/aerolab-logo-1.svg";
import aerolab_logo_mobile from "../../assets/icons/aerolab-logo-2.svg";
import AeroCoins from "../AeroPay/AeroCoins";
import {useMedia} from "../layout/hooks";
import ClientOnly from "../ClientOnly";
import {Container} from "../layout/Container.styled";

import {StyledNavbar} from "./Navbar.styled";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
`;

const Navbar = () => {
  const [isScrolled, setScrolled] = useState<boolean>(false);
  const {scrollY} = useViewportScroll();
  const isSetted = useRef<boolean>(false);

  scrollY.onChange((latest) => {
    if (latest > 0 && !isSetted.current) {
      setScrolled(true);
      isSetted.current = true;
    }
    if (latest === 0) {
      setScrolled(false);
      isSetted.current = false;
    }
  });

  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);

  return (
    <StyledNavbar height={"128px"} variant={isScrolled ? "BorderActive" : ""}>
      <Container>
        <Content>
          <ClientOnly>
            <ImageWrapper>
              <Image
                alt="aerolab-logo"
                height={isDesktop ? 48 : 36}
                objectFit="cover"
                src={isDesktop ? aerolab_logo.src : aerolab_logo_mobile.src}
                width={isDesktop ? 126 : 38.7}
                onClick={() => window.scroll({top: 0, behavior: "smooth"})}
              />
            </ImageWrapper>
          </ClientOnly>
          <AeroCoins />
        </Content>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
