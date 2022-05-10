import React, {useState} from "react";
import styled from "styled-components";

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
`;

interface Props {
  labels: string[] | number[];
  selectButtonIndex?: number;
  gap?: string;
  padding?: string;
  h?: string;
  w?: string;
  display?: string;
}

const Index: React.FC<Props> = ({labels, selectButtonIndex, gap, padding, w, h, display}) => {
  const [active, setActive] = useState<number>(selectButtonIndex ? selectButtonIndex : 0);

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
            onClick={() => setActive(index)}
          >
            <p>{label}</p>
          </ButtonSelector>
        );
      })}
    </ToggleWrapper>
  );
};

export default Index;
