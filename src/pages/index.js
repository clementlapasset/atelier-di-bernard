import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { H1, H2, H3 } from "../styles/textStyles";
import Button from "../components/global/Button";
import Image from "next/image";
import logo2 from "../../public/assets/logo2.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  padding: 25px;
  gap: 25px;
  @media ${(props) => props.theme.minWidth.sm} {
    gap: 35px;
  }
`;

const Logo2 = styled(Image)`
  width: 77px;
  height: 90px;
  @media ${(props) => props.theme.minWidth.sm} {
    width: 108px;
    height: 126px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    width: 165px;
    height: 193px;
  }
`;

const StyledH1 = styled(H1)`
  span {
    display: block;
  }
`;

export default function LandingPage() {
  return (
    <>
      <Layout $islanding="true">
        <Container>
          <Logo2 src={logo2} alt="Logo 1" />
          <StyledH1>
            L&#39;atelier di Bernard, <span>lieu de création partagé</span>
          </StyledH1>
          <H3>97 rue Jean de Bernardy, 13001 Marseille</H3>
          <Button href="/homepage">
            <H3>Entrer</H3>
          </Button>
        </Container>
      </Layout>
    </>
  );
}
