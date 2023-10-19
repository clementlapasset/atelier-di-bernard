import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { H3 } from "@/styles/textStyles";

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  border-left: 1px solid ${(props) => props.theme.colors.darkBlue};
  height: 100%;
  padding: 0 15px;
  &:nth-child(2) {
    background-color: ${(props) => props.theme.colors.darkBlue};
    & > ${H3} {
      color: white;
    }
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
      <MenuItem href="/homepage#events">
        <H3>Évènements</H3>
      </MenuItem>
      <MenuItem href="/homepage#residents">
        <H3>Résidents</H3>
      </MenuItem>
    </MenuContainer>
  );
}
