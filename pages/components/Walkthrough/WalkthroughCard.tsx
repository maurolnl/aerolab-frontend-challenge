import Image, {StaticImageData} from "next/image";
import React from "react";
import styled from "styled-components";

import {Colors, Shadows} from "../../../styles/Theme";
import {Icon} from "../layout/Icon.styled";
import {TitleL3} from "../layout/Title/TitleL3.styled";
import {TextDefault} from "../layout/Text/TextDefault.styled";

const Wrapper = styled.article`
  width: 532px;
  height: 676px;
  padding: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: ${Colors.Neutral[0]};
  box-shadow: ${Shadows.Elevation2};

  border: 1px solid;
  border-color: ${Colors.Neutral[300]};
  border-radius: 32px;

  ${(p) => {
    switch (p.id) {
      case "1":
        return `
          transform: translate(80px, 35px) rotate(-3deg);
        `;
      case "3":
        return `
          transform: translate(-80px, 35px) rotate(3deg);
    `;
    }
  }}

  z-index: 3;
`;

const Header = styled.div`
  position: relative;
  width: 508px;
  height: 498px;

  z-index: 3;
`;

const HeaderBG = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;

  border-color: ${Colors.Neutral[300]};
  border-radius: 24px 24px 0px 0px;

  background: ${Colors.Specials.IllustrationBG.Color};

  z-index: -1;
`;

const CardBody = styled.div`
  width: 508px;
  height: 154px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 12px;
  padding: 16px 24px 24px;

  border: 1px solid;
  border-color: ${Colors.Neutral[300]};
  border-radius: 0px 0px 24px 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 16px;
`;

const TextWrapper = styled.div`
  width: 372px;
`;

export interface ICard {
  id: string;
  headerImage: StaticImageData;
  title: string;
  titleIcon: string;
  description: string;
}

const WalkthroughCard: React.FC<ICard> = ({id, headerImage, title, titleIcon, description}) => {
  return (
    <Wrapper id={id}>
      <Header>
        <Image alt={"Sally-31"} layout="fill" objectFit="cover" src={headerImage} />
        <HeaderBG />
      </Header>
      <CardBody>
        <TitleWrapper>
          <Icon background="Light" rotation="0deg" src={titleIcon} variant="Desktop" />
          <TitleL3 variant="gradient">{title}</TitleL3>
        </TitleWrapper>
        <TextWrapper>
          <TextDefault>{description}</TextDefault>
        </TextWrapper>
      </CardBody>
    </Wrapper>
  );
};

export default WalkthroughCard;
