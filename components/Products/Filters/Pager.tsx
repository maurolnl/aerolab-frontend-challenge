import React, {useState} from "react";
import styled from "styled-components";

import {Colors} from "../../../styles/Theme";
import {PagerIcon} from "../../layout/PagerIcon.styled";
import arrow from "../../../assets/icons/chevron-default.svg";
import {TextDefault} from "../../layout/Text/TextDefault.styled";
import {useFilters} from "../context";

const Wrapper = styled.div<{display?: string}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: ${(p) => (p.display ? p.display : "")};

  gap: 24px;

  padding: 12px 16px;

  border: 1px solid;
  border-color: ${Colors.Neutral[300]};
  border-radius: 16px;
`;

interface ButtonProps {
  isDisabled?: boolean;
}

const PagerButton = styled.button<ButtonProps>`
  background-color: ${(p) => (p.isDisabled ? Colors.Neutral[200] : Colors.Brand.Light)};

  width: 40px;
  height: 40px;
  padding: 8px;

  border: none;
  border-radius: 8px;

  cursor: ${(p) => (p.isDisabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(p) => (p.isDisabled ? Colors.Neutral[200] : Colors.Brand.Light2)};
  }
`;

interface Props {
  display?: string;
  page: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const Pager: React.FC<Props> = ({
  display,
  page,
  totalPages,
  handleNextPage,
  handlePreviousPage,
}) => {
  const isDisabledRight = totalPages === 1 ? true : page < totalPages ? false : true;
  const isDisableLeft = totalPages === 1 ? true : page === 1 ? true : false;

  return (
    <Wrapper display={display}>
      <PagerButton isDisabled={isDisableLeft} onClick={handlePreviousPage}>
        <PagerIcon
          $isdisabled={isDisableLeft}
          rotation="180deg"
          src={arrow.src}
          variant="Desktop"
        />
      </PagerButton>
      <p>
        <TextDefault>Page </TextDefault>
        <TextDefault color="gradient">
          {page} of {totalPages}
        </TextDefault>
      </p>
      <PagerButton isDisabled={isDisabledRight} onClick={handleNextPage}>
        <PagerIcon
          $isdisabled={isDisabledRight}
          rotation="0deg"
          src={arrow.src}
          variant="Desktop"
        />
      </PagerButton>
    </Wrapper>
  );
};

export default Pager;
