import React, {useState} from "react";
import styled from "styled-components";

import {device} from "../media/media";

import {ButtonSelector} from "./Button/ButtonSelector.styled";

interface StyleProps {
  gap?: string;
  display?: string;
}

const ToggleWrapper = styled.div<StyleProps>`
  display: ${(p) => (p.display ? p.display : "flex")};
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;

  gap: ${(p) => (p.gap ? p.gap : "4px")};

  @media ${device.mobileS} {
    gap: 4px;
  }
`;

interface Props {
  labels: string[] | number[];
  selectButtonIndex?: number;
  gap?: string;
  padding?: string;
  h?: string;
  w?: string;
  display?: string;
  callback?: (index: number) => void;
}

const Index: React.FC<Props> = ({
  labels,
  selectButtonIndex,
  gap,
  padding,
  w,
  h,
  display,
  callback,
}) => {
  const [active, setActive] = useState<number>(selectButtonIndex ? selectButtonIndex : 0);

  const handleClick = (index: number) => {
    setActive(index);

    if (callback) {
      callback(index);
    }
  };

  return (
    <ToggleWrapper display={display} gap={gap}>
      {labels.map((label, index) => {
        return (
          <ButtonSelector
            key={index}
            h={h}
            isActive={index === active ? true : false}
            padding={padding}
            w={w}
            onClick={() => handleClick(index)}
          >
            <p>{label}</p>
          </ButtonSelector>
        );
      })}
    </ToggleWrapper>
  );
};

export default Index;
