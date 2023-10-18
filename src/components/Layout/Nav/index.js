import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo1 from "../../../../public/assets/logo1.png";
import { H3 } from "@/styles/textStyles";
import Menu from "./Menu";

const StyledNav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: ${({ $islanding, theme }) =>
    $islanding ? "1px solid white" : `1px solid ${theme.colors.darkBlue}`};
`;

const Logo = styled(Image)`
  width: 32px;
  height: 46px;
  margin: 5px 10px 5px 15px;
  @media ${(props) => props.theme.minWidth.sm} {
    width: 42px;
    height: 60px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    margin: 15px 15px 15px 25px;
    width: 90px;
    height: 125px;
  }
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const StyledH4 = styled(H3)`
  text-transform: lowercase;
`;

export default function Nav({ $islanding }) {
  return (
    <StyledNav $islanding={$islanding}>
      <Logo src={logo1} alt="Logo 1" />
      {!$islanding && (
        <NavContent>
          <StyledH4>- atelier partagé -</StyledH4>
          <Menu />
        </NavContent>
      )}
    </StyledNav>
  );
}
