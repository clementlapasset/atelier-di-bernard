import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo1 from "../../../../public/assets/logo1.png";
import { H4 } from "@/styles/textStyles";
import Menu from "./Menu";

const StyledNav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: ${({ $islanding, theme }) =>
    $islanding ? "1px solid white" : `1px solid ${theme.colors.darkBlue}`};
  padding: 10px 20px;
  @media ${(props) => props.theme.minWidth.lg} {
    padding: 15px 25px;
  }
`;

const Logo = styled(Image)`
  width: 32px;
  height: 46px;
  @media ${(props) => props.theme.minWidth.sm} {
    width: 42px;
    height: 60px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
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

export default function Nav({ $islanding }) {
  return (
    <StyledNav $islanding={$islanding}>
      <Logo src={logo1} alt="Logo 1" />
      {!$islanding && (
        <NavContent>
          <H4>- atelier partagé -</H4>
          <Menu />
        </NavContent>
      )}
    </StyledNav>
  );
}
