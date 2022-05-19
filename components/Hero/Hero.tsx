import Image from "next/image";
import React from "react";
import styled from "styled-components";

import aerolab_hero_illustration from "../../assets/illustrations/hero-desktop.png";
import {ArrowIcon} from "../layout/ArrowIcon.styled";
import {ButtonCTA} from "../layout/Button/ButtonCTA.styled";
import {Stack} from "../layout/Stack.styled";
import {TextDefault} from "../layout/Text/TextDefault.styled";
import {TitleL1} from "../layout/Title/TitleL1.styled";
import arrow_icon from "../../assets/icons/arrow.svg";
import {Colors} from "../../styles/Theme";
import {device} from "../media/media";
import {useMedia} from "../layout/hooks";
import ClientOnly from "../ClientOnly";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;

  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
  }

  @media ${device.mobile} {
    justify-content: center;
    align-items: center;
  }
`;

const LeftHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;

  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
  }

  @media ${device.mobile} {
    justify-content: center;
    align-items: center;
  }
`;

const RightHeroSection = styled.div`
  position: absolute;
  right: -86px;
  top: 45px;
  height: 795px;
  width: 897px;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
  }

  @media ${device.mobile} {
    justify-content: center;
    align-items: center;
  }
`;

const IllustrationBackground = styled.div`
  position: absolute;
  top: 195px;
  left: 88px;
  width: 722px;
  height: 600px;
  background: ${Colors.Specials.IllustrationBG.Color};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  opacity: 0.5;
  border-radius: 104px;
  z-index: -1;
`;

interface Props {
  handleScroll: () => void;
}

const Hero: React.FC<Props> = ({handleScroll}) => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);

  return (
    <Wrapper>
      <ClientOnly>
        <LeftHeroSection>
          <Stack direction="column" gap={isDesktop ? "64px" : "40px"}>
            <Stack direction="column" gap="0px" width={isDesktop ? "590px" : "289px"}>
              <TitleWrapper>
                <TextDefault variant="AllCaps">explore the</TextDefault>
                <TitleL1 variant="gradient">Tech</TitleL1>
                <TitleL1 variant="solid">Zone</TitleL1>
              </TitleWrapper>
              <TextDefault
                alignText={!isDesktop ? "center" : ""}
                mt="24px"
                variant={isDesktop ? "" : "Small"}
              >
                Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them
                for cool tech.
              </TextDefault>
            </Stack>
            <ButtonCTA
              h={isDesktop ? "80px" : "64px"}
              textVariant="AllCaps"
              w={isDesktop ? "318px" : "303px"}
              onClick={handleScroll}
            >
              View All Products <ArrowIcon rotation="0deg" src={arrow_icon.src} />
            </ButtonCTA>
          </Stack>
        </LeftHeroSection>
      </ClientOnly>

      {/* Only shown on desktop media */}
      <RightHeroSection>
        <Image
          priority
          alt="hero-illustration"
          height={795}
          objectFit="cover"
          src={aerolab_hero_illustration.src}
          width={897}
        />
        <IllustrationBackground />
      </RightHeroSection>
    </Wrapper>
  );
};

export default Hero;
