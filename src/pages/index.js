import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Text from "../components/Text";
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
  gap: 25px;
  padding: 25px;
`;

const Logo2 = styled(Image)`
  width: 77px;
  height: 90px;
`;

export default function LandingPage() {
  return (
    <>
      <Layout $islanding="true">
        <Container>
          <Logo2 src={logo2} alt="Logo 1" />
          <Text type="h1">Un atelier partagé propulseur de créativité</Text>
          <Text type="h3">97 rue Jean de Bernardy, 13001 Marseille</Text>
          <Button href="/homepage">
            <Text type="h2">Entrer</Text>
          </Button>
        </Container>
      </Layout>
    </>
  );
}
