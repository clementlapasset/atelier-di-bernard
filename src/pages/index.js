import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Text from "../components/Text";
import Image from "next/image";
import logo2 from "../../public/assets/logo2.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
`;

const Logo2 = styled(Image)`
  width: 77px;
  height: 90px;
`;

// const StyledText = styled(Text)`
//   text-align: center;
// `;

export default function LandingPage() {
  return (
    <>
      <Layout islanding="true">
        <Container>
          <Logo2 src={logo2} alt="Logo 1" />
          <Text type="h1">Un atelier partagé propulseur de créativité</Text>
          <Text type="h3">97 rue Jean de Bernardy, 13001 Marseille</Text>
        </Container>
      </Layout>
    </>
  );
}
