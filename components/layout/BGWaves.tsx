import React from "react";
import styled from "styled-components";

import waveicon from "../../assets/illustrations/wave-large.svg";

import {useMedia} from "./hooks";
import {BGWave} from "./Wave.styled";

const WavesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

const BGWaves = () => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);
  const wavePatterns = Array(isDesktop ? 88 : 66).fill("");

  return (
    <WavesWrapper>
      {wavePatterns.map((_, index) => {
        return <BGWave key={index} index={index} src={waveicon.src} />;
      })}
    </WavesWrapper>
  );
};

export default BGWaves;
