import React from "react";
import styled from "styled-components";

import Divider_115 from "../../../../assets/icons/Divider_115.svg";
import ClientOnly from "../../ClientOnly";
import {Divider} from "../../layout/Divider.styled";
import useMedia from "../../layout/hooks";
import {Stack} from "../../layout/Stack.styled";
import ToggleGroup from "../../layout/ToggleGroup";
import {device} from "../../media/media";

import CategoryFilter from "./CategoryFilter";
import Pager from "./Pager";
import Sort from "./Sort";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const CategoryAndSortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0px;

  gap: 40px;

  @media ${device.mobileS} {
    width: 100%;
  }
`;

const Filters = () => {
  const isDesktop = useMedia(["(min-width: 1470px)"], [true]);
  const isMobile = useMedia(["(max-width: 1023px)"], [true]);
  const sortTypes = ["Most Recent", "Lowest Price", "Highest Price"];

  return (
    <ClientOnly>
      <Stack direction="column" gap="24px">
        <Wrapper>
          <CategoryAndSortWrapper>
            <CategoryFilter />
            <Divider display={isDesktop ? "" : "none"} src={Divider_115.src} variant="Desktop" />
            <Sort />
          </CategoryAndSortWrapper>
          <Pager display={isMobile ? "none" : "flex"} />
        </Wrapper>
        <ToggleGroup
          display={isDesktop ? "none" : "flex"}
          gap="12px"
          labels={sortTypes}
          padding="8px 24px"
        />
      </Stack>
    </ClientOnly>
  );
};

export default Filters;
