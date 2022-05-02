import React from "react";
import styled from "styled-components";

import {Colors, Shadows} from "../../../styles/Theme";
import {Icon} from "../layout/AeroPayIcon.styled";
import {TextDefault} from "../layout/TextDefault.styled";
import {TextL2Default} from "../layout/TextL2Default.styled";
import aeroicon_2 from "../../../assets/icons/aeropay-2.svg";
import waveicon from "../../../assets/illustrations/single-wave-pattern.svg";
import {WaveIcon} from "../layout/Wave.styled";

const AeroCardBackground = styled.div`
  width: 264px;
  border-radius: 8px;
  height: 148px;
  background: ${Colors.Neutral[900]};
  drop-shadow: ${Shadows.Elevation1.Default};
  position: relative;
`;
const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 16px;
`;

const wavePatterns = Array(11).fill("");
const bottomPositionWave = (index: number): string => {
  return (-20 + index * 9).toString();
};

const AeroCard = () => {
  return (
    <AeroCardBackground>
      <Wrapper>
        <LineWrapper>
          <TextDefault>Aerocard</TextDefault>
          <Icon height={"24px"} src={aeroicon_2.src} width={"24px"} />
        </LineWrapper>
        <LineWrapper>
          <TextL2Default>John Kite</TextL2Default>
          <TextL2Default>07/23</TextL2Default>
        </LineWrapper>
      </Wrapper>
      {wavePatterns.map((wave, index) => {
        return (
          <WaveIcon
            key={index}
            bottom={bottomPositionWave(index)}
            index={index}
            src={waveicon.src}
          />
        );
      })}
    </AeroCardBackground>
  );
};

export default AeroCard;
