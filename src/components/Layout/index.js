import React from "react";
import GlobalStyle from "../../styles/globalStyle";
import { styled, ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import Nav from "./Nav";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const Wrapper = styled.div`
  background-color: ${({ $islanding, theme }) =>
    $islanding ? theme.colors.pink : "white"};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function Layout({ children, $islanding }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper $islanding={$islanding}>
          <Nav $islanding={$islanding} />
          {children}
        </Wrapper>
      </ThemeProvider>
    </>
  );
}
