import Image, {StaticImageData} from "next/image";
import React from "react";
import styled from "styled-components";

import {Colors, Shadows} from "../../../styles/Theme";
import {Icon} from "../layout/Icon.styled";
import {TitleL3} from "../layout/Title/TitleL3.styled";
import {TextDefault} from "../layout/Text/TextDefault.styled";
import {device} from "../media/media";
import useMedia from "../layout/hooks";

const Wrapper = styled.article`
  height: 477px;
  width: 323px;
  padding: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background: ${Colors.Neutral[0]};
  box-shadow: ${Shadows.Elevation2};

  border: 1px solid;
  border-color: ${Colors.Neutral[300]};
  border-radius: 32px;

  @media ${device.desktop} {
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
  }

  @media ${device.desktop} {
    width: 532px;
    height: 676px;
  }

  z-index: 3;
`;

const Header = styled.div`
  position: relative;
  width: 299px;
  height: 290px;

  @media ${device.desktop} {
    width: 508px;
    height: 498px;
  }

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
  width: 299px;
  height: 164px;

  @media ${device.desktop} {
    width: 508px;
    height: 154px;
  }

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
  width: 251px;

  @media ${device.desktop} {
    width: 372px;
  }
`;

const IconBG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${Colors.Brand.Light2};
  border-radius: 8px;

  @media ${device.desktop} {
    width: 48px;
    height: 48px;
  }

  @media ${device.tablet} {
    width: 40px;
    height: 40px;
  }

  @media ${device.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export interface ICard {
  id: string;
  headerImage: StaticImageData;
  headerImageMobile: StaticImageData;
  title: string;
  titleIcon: string;
  description: string;
}

const WalkthroughCard: React.FC<ICard> = ({
  id,
  headerImage,
  headerImageMobile,
  title,
  titleIcon,
  description,
}) => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);

  return (
    <Wrapper id={id}>
      <Header>
        <Image
          alt={"Sally-31"}
          layout="fill"
          objectFit="cover"
          src={isDesktop ? headerImage : headerImageMobile}
        />
        <HeaderBG />
      </Header>
      <CardBody>
        <TitleWrapper>
          <IconBG>
            <Icon rotation="0deg" src={titleIcon} variant={isDesktop ? "Desktop" : "Mobile"} />
          </IconBG>
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
