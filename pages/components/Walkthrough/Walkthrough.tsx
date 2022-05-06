import React from "react";
import styled from "styled-components";

import {Colors} from "../../../styles/Theme";
import aerolab_walkthrough1_desktop from "../../../assets/illustrations/walkthroug-1-desktop.png";
import aerolab_walkthrough3 from "../../../assets/icons/walkthrough-3.svg";
import aerolab_walkthrough2_desktop from "../../../assets/illustrations/walkthroug-2-desktop.png";
import aerolab_walkthrough2 from "../../../assets/icons/walkthrough-2.svg";
import aerolab_walkthrough3_desktop from "../../../assets/illustrations/walkthroug-3-desktop.png";
import aerolab_walkthrough1 from "../../../assets/icons/walkthrough-1.svg";

import WalkthroughCard, {ICard} from "./WalkthroughCard";

const card_source = [
  {
    id: "1",
    title: "1—browse",
    description: "Browse our tech catalog with more than 20 top tech products",
    titleIcon: aerolab_walkthrough1.src,
    headerImage: aerolab_walkthrough1_desktop,
  },
  {
    id: "2",
    title: "2—choose",
    description: "Exchange your hard earned AeroPoints for the item you want",
    titleIcon: aerolab_walkthrough3.src,
    headerImage: aerolab_walkthrough2_desktop,
  },
  {
    id: "3",
    title: "3—enjoy!",
    description: "All done, you can relax! We’ll take care of delivery of your tech item!",
    titleIcon: aerolab_walkthrough2.src,
    headerImage: aerolab_walkthrough3_desktop,
  },
] as ICard[];

const Container = styled.section`
  width: 100%;
  margin-top: 112px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  height: 721px;
  width: 100%;
  position: relative;
`;

const WalkthroughBG = styled.div`
  position: absolute;
  width: 100%;
  height: 528px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${Colors.Specials.IllustrationBG.Color};
  z-index: -1;
`;

const WalkthroughCards = styled.div`
  display: flex;
  flex-direction: row;
`;

const Walkthrough = () => {
  return (
    <Container>
      <Wrapper>
        <WalkthroughCards>
          {card_source.map((card) => {
            return (
              <WalkthroughCard
                key={card.id}
                description={card.description}
                headerImage={card.headerImage}
                id={card.id}
                title={card.title}
                titleIcon={card.titleIcon}
              />
            );
          })}
        </WalkthroughCards>
        <WalkthroughBG />
      </Wrapper>
    </Container>
  );
};

export default Walkthrough;
