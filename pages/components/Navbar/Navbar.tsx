import React from "react";
import Image from "next/image";

import aerolab_logo from "../../../assets/icons/aerolab-logo-1.svg";
import {Container} from "../layout/Container.styled";
import AeroCoins from "../AeroCoins";

import {StyledNavbar} from "./Navbar.styled";

const Navbar = () => {
  return (
    <Container>
      <StyledNavbar height={"128px"}>
        <Image
          alt="aerolab-logo"
          height={48}
          objectFit="cover"
          src={aerolab_logo.src}
          width={126}
        />
        <AeroCoins />
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;
