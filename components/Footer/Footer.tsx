import React, {useState} from "react";
import styled from "styled-components";

import {Colors, TextStyles} from "../../styles/Theme";
import github_icon_default from "../../../assets/icons/github-default.svg";
import github_icon_active from "../../../assets/icons/github-active.svg";
import {Icon} from "../layout/AeroPayIcon.styled";
import {device} from "../media/media";
import useMedia from "../layout/hooks";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 120px;

  @media ${device.desktop} {
    height: 200px;
  }
`;
const NavLink = styled.a`
  display: flex;
  align-items: flex-end;

  gap: 10px;
  color: ${Colors.Neutral[600]};

  ${TextStyles.Bundler(TextStyles.Texts.L1.Default)};

  @media ${device.mobileS} {
    ${TextStyles.Bundler(TextStyles.Texts.Mobile.L1.Default)};
  }

  &:active {
    ${Colors.Bundler(Colors.Brand.Default)};
  }
`;

const Footer = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const isMobile = useMedia(["(max-width: 1023px)"], [true]);

  return (
    <Wrapper>
      <NavLink
        href="https://github.com/maurolnl/aerolab-frontend-challenge"
        target="_blank"
        onMouseDown={() => {
          setActive(true);
        }}
        onMouseUp={() => {
          setActive(false);
          window.open("https://github.com/maurolnl/aerolab-frontend-challenge", "_blank");
        }}
      >
        <Icon
          src={isActive ? github_icon_active.src : github_icon_default.src}
          variant={!isMobile ? "Desktop" : "Mobile"}
        />{" "}
        View this repository
      </NavLink>
    </Wrapper>
  );
};

export default Footer;
