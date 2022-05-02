import styled from "styled-components";

interface Props {
  height: string;
}

export const StyledNavbar = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.height};
  padding: 40px 0px;
  margin-bottom: 60px;
`;
