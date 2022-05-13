import React from "react";
import styled from "styled-components";
import Image from "next/image";

import {Colors} from "../../styles/Theme";
import aerolab_walkthrough1_desktop from "../../assets/illustrations/walkthroug-1-desktop.png";
import aerolab_walkthrough1_mobile from "../../assets/illustrations/walkthroug-1-responsive.png";
import aerolab_walkthrough3 from "../../assets/icons/walkthrough-3.svg";
import aerolab_walkthrough2_desktop from "../../assets/illustrations/walkthroug-2-desktop.png";
import aerolab_walkthrough2_mobile from "../../assets/illustrations/walkthroug-2-responsive.png";
import aerolab_walkthrough2 from "../../assets/icons/walkthrough-2.svg";
import aerolab_walkthrough3_desktop from "../../assets/illustrations/walkthroug-3-desktop.png";
import aerolab_walkthrough3_mobile from "../../assets/illustrations/walkthroug-3-responsive.png";
import aerolab_walkthrough1 from "../../assets/icons/walkthrough-1.svg";
import {Container} from "../layout/Container.styled";
import {device} from "../media/media";
import aerolab_sally_responsive from "../../assets/illustrations/hero-responsive.png";
import ClientOnly from "../ClientOnly";

import WalkthroughCard, {ICard} from "./WalkthroughCard";

const card_source = [
  {
    id: "1",
    title: "1—browse",
    description: "Browse our tech catalog with more than 20 top tech products",
    descriptionMobile: "Browse our tech catalog with more than 20 top tech products",
    titleIcon: aerolab_walkthrough1.src,
    headerImage: aerolab_walkthrough1_desktop,
    headerImageMobile: aerolab_walkthrough1_mobile,
  },
  {
    id: "2",
    title: "2—choose",
    description: "Exchange your hard earned AeroPoints for the item you want",
    descriptionMobile: "Exchange your hard-earned AeroPoints for a cool tech item",
    titleIcon: aerolab_walkthrough3.src,
    headerImage: aerolab_walkthrough2_desktop,
    headerImageMobile: aerolab_walkthrough2_mobile,
  },
  {
    id: "3",
    title: "3—enjoy!",
    description: "All done, you can relax! We’ll take care of delivery of your tech item!",
    descriptionMobile: "All done We’ll take care of delivery of your tech item!",
    titleIcon: aerolab_walkthrough2.src,
    headerImage: aerolab_walkthrough3_desktop,
    headerImageMobile: aerolab_walkthrough3_mobile,
  },
] as ICard[];

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  height: 721px;
  width: 100%;
  position: relative;

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    height: 976px;
  }

  @media ${device.mobile} {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    height: 1809px;
  }
`;

const WalkthroughBG = styled.div`
  position: absolute;
  width: 100%;
  height: 528px;

  background: ${Colors.Specials.IllustrationBG.Color};
  z-index: -1;

  @media ${device.desktop} {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media ${device.tablet} {
    height: 656px;
    bottom: 0px;
    left: 0px;
  }

  @media ${device.mobile} {
    height: 1716.16px;
    bottom: 0px;
    left: 0px;
  }
`;

const WalkthroughCards = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  padding-bottom: 32px;

  gap: 0px;

  @media ${device.tablet} {
    gap: 8px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;

    gap: 24px;
  }
`;

const IllustrationWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  margin: 0 auto;

  width: fit-content;

  @media ${device.desktop} {
    display: none;
  }

  @media (max-width: 580px) {
    width: 580px;
    left: calc((100vw - 580px) / 2);
  }
`;

const Walkthrough = () => {
  return (
    <Wrapper>
      <Container>
        <ClientOnly>
          <WalkthroughCards>
            {card_source.map((card) => {
              return (
                <WalkthroughCard
                  key={card.id}
                  description={card.description}
                  descriptionMobile={card.descriptionMobile}
                  headerImage={card.headerImage}
                  headerImageMobile={card.headerImageMobile}
                  id={card.id}
                  title={card.title}
                  titleIcon={card.titleIcon}
                />
              );
            })}
          </WalkthroughCards>
        </ClientOnly>
        <IllustrationWrapper>
          <Image
            alt="sally-illustration"
            height={518.58}
            objectFit="cover"
            src={aerolab_sally_responsive.src}
            width={580}
          />
        </IllustrationWrapper>
      </Container>
      <WalkthroughBG />
    </Wrapper>
  );
};

export default Walkthrough;
