import React, {useState} from "react";
import styled from "styled-components";
import {useRouter} from "next/router";

import {Colors, TextStyles} from "../../../styles/Theme";
import github_icon_default from "../../../assets/icons/github-default.svg";
import github_icon_active from "../../../assets/icons/github-active.svg";
import {Icon} from "../layout/AeroPayIcon.styled";
import {device} from "../media/media";

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

  ${TextStyles.Bundler(TextStyles.Texts.L1.Default)};

  color: ${Colors.Neutral[600]};

  &:active {
    ${Colors.Bundler(Colors.Brand.Default)};
  }
`;

const Footer = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Wrapper>
      <NavLink
        href="https://www.linkedin.com/in/maurolnl"
        target="_blank"
        onMouseDown={() => {
          setActive(true);
        }}
        onMouseUp={() => {
          setActive(false);
          window.open("https://www.linkedin.com/in/maurolnl", "_blank");
        }}
      >
        <Icon src={isActive ? github_icon_active.src : github_icon_default.src} variant="Desktop" />{" "}
        View this repository
      </NavLink>
    </Wrapper>
  );
};

export default Footer;
