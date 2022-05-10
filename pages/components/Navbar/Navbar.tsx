import React from "react";
import Image from "next/image";

import aerolab_logo from "../../../assets/icons/aerolab-logo-1.svg";
import aerolab_logo_mobile from "../../../assets/icons/aerolab-logo-2.svg";
import AeroCoins from "../AeroCoins";
import useMedia from "../layout/hooks";

import {StyledNavbar} from "./Navbar.styled";

const Navbar = () => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);
  const isMobile = useMedia(["(max-width: 1023px)"], [true]);
  const isTablet = !isDesktop && !isMobile;

  return (
    <StyledNavbar height={"128px"}>
      <Image
        alt="aerolab-logo"
        height={isDesktop ? 48 : 36}
        objectFit="cover"
        src={isDesktop ? aerolab_logo.src : aerolab_logo_mobile.src}
        width={isDesktop ? 126 : 38.7}
      />
      <AeroCoins />
    </StyledNavbar>
  );
};

export default Navbar;
