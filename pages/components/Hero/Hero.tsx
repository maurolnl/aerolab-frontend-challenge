import Image from "next/image";
import React from "react";
import styled from "styled-components";

import aerolab_hero_illustration from "../../../assets/illustrations/hero-desktop.png";
import {ArrowIcon} from "../layout/ArrowIcon.styled";
import {ButtonCTA} from "../layout/Button/ButtonCTA.styled";
import {Stack} from "../layout/Stack.styled";
import {TextDefault} from "../layout/Text/TextDefault.styled";
import {TitleL1} from "../layout/Title/TitleL1.styled";
import arrow_icon from "../../../assets/icons/arrow.svg";
import {Colors} from "../../../styles/Theme";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

const LeftHeroSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
`;

const RightHeroSection = styled.div`
  position: absolute;
  right: -86px;
  top: 45px;
  height: 795px;
  width: 897px;
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
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

const Hero = () => {
  return (
    <Wrapper>
      <LeftHeroSection>
        <Stack direction="column" gap="0px" width="590px">
          <Wrapper1>
            <TextDefault variant="AllCaps">explore the</TextDefault>
            <TitleL1 variant="gradient">Tech</TitleL1>
            <TitleL1 variant="solid">Zone</TitleL1>
          </Wrapper1>
          <TextDefault mt="24px">
            Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for
            cool tech.
          </TextDefault>
        </Stack>
        <ButtonCTA h="80px" mt="64px" textVariant="AllCaps" w="318px">
          View All Products <ArrowIcon rotation="0deg" src={arrow_icon.src} />
        </ButtonCTA>
      </LeftHeroSection>
      <RightHeroSection>
        <Image
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
