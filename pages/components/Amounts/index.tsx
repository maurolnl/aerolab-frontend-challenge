import React, {useState} from "react";
import styled from "styled-components";

import {ButtonSelector} from "../layout/Button/ButtonSelector.styled";

const AmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 4px;
`;

const Index = () => {
  const [active, setActive] = useState<number>(2);

  const AMOUNTS = [1000, 5000, 7000];

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <AmountWrapper>
      {AMOUNTS.map((amount, index) => {
        return (
          <ButtonSelector
            key={index}
            h={"35px"}
            isActive={index === active ? true : false}
            w={"100%"}
            onClick={() => handleClick(index)}
          >
            <p>{amount}</p>
          </ButtonSelector>
        );
      })}
    </AmountWrapper>
  );
};

export default Index;
