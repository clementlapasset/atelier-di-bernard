import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.button`
  padding: 15px 30px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  background-color: white;
  box-shadow: 0px 2px 0px 0px #1f4d9b;
`;

export default function Button({ href, external = false, children }) {
  if (external) {
    return (
      <StyledButton href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledButton>
    );
  } else {
    return (
      <Link href={href} passHref>
        <StyledButton>{children}</StyledButton>
      </Link>
    );
  }
}
