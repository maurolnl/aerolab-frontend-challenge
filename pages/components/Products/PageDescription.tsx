import React from "react";
import styled from "styled-components";

import {TextDefault} from "../layout/Text/TextDefault.styled";
import {device} from "../media/media";

import Pager from "./Filters/Pager";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  gap: 24px;

  width: 100%;

  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-between;
    height: 64px;
  }
`;

interface Props {
  display?: string;
}
const Empty = styled.div<Props>`
  display: ${(p) => (p.display ? p.display : "")};
  width: 259px;
`;

const PageDescription = () => {
  return (
    <Wrapper>
      <Empty display="none" />
      <p>
        <TextDefault color="gradientSemiExtended">16 of 32</TextDefault>
        <TextDefault> products</TextDefault>
      </p>
      <Pager />
    </Wrapper>
  );
};

export default PageDescription;
