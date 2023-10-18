import React from "react";
import styled from "styled-components";
import { H3 } from "@/styles/textStyles";

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const MenuItem = styled(H3)`
  display: flex;
  align-items: center;
  border-left: 1px solid ${(props) => props.theme.colors.darkBlue};
  height: 100%;
  padding: 0 15px;
  &:nth-child(2) {
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: white;
  }
  @media ${(props) => props.theme.minWidth.sm} {
    padding: 0 30px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    padding: 0 35px;
  }
`;

export default function Menu() {
  return (
    <MenuContainer>
      <MenuItem>Évènements</MenuItem>
      <MenuItem>Résidents</MenuItem>
    </MenuContainer>
  );
}
