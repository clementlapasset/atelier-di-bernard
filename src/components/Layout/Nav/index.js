import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo1 from "../../../../public/assets/logo1.png";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: ${({ $islanding, theme }) =>
    $islanding ? "1px solid white" : `1px solid ${theme.colors.darkBlue}`};
  padding: 10px 20px;
`;

const Logo = styled(Image)`
  width: 32px;
  height: 46px;
  @media ${(props) => props.theme.minWidth.md} {
    width: 42px;
    height: 60px;
  }
`;

export default function Nav({ $islanding }) {
  return (
    <StyledNav $islanding={$islanding}>
      <Logo src={logo1} alt="Logo 1" />
    </StyledNav>
  );
}
