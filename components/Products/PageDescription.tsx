import React from "react";
import styled from "styled-components";

import {useMedia} from "../layout/hooks";
import {TextDefault} from "../layout/Text/TextDefault.styled";
import {device} from "../media/media";

import {useFilters} from "./context";
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

const Empty = styled.div<{display?: string}>`
  display: ${(p) => (p.display ? p.display : "")};
  width: 259px;
`;

interface Props {
  handleScroll: () => void;
}

const PageDescription: React.FC<Props> = ({handleScroll}) => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);
  const {page, handleNextPage, handlePreviousPage, totalPages, total, limit} = useFilters();

  return (
    <Wrapper>
      <Empty display={isDesktop ? "" : "none"} />
      <p>
        <TextDefault color="gradientSemiExtended">
          {limit > total ? total : limit} of {total}
        </TextDefault>
        <TextDefault> products</TextDefault>
      </p>
      <Pager
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleScroll={handleScroll}
        page={page}
        totalPages={totalPages}
      />
    </Wrapper>
  );
};

export default PageDescription;
