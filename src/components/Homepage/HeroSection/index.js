import React from "react";
import styled from "styled-components";
import { H1, H3 } from "@/styles/textStyles";
import Carousel from "./Carousel";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media ${(props) => props.theme.minWidth.lg} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const images = [
  { src: "/assets/commode.jpg", alt: "Commode atelier" },
  { src: "/assets/mur.jpg", alt: "Mur atelier" },
];

const HeroTitleContainer = styled.div`
  background-color: ${(props) => props.theme.colors.pink};
  height: calc(50vh - 56px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  gap: 10px;
  @media ${(props) => props.theme.minWidth.lg} {
    height: calc(100vh - 155px);
  }
`;

export default function HeroSection() {
  return (
    <Container>
      <HeroTitleContainer>
        <H3>L&apos;Atelier di Bernard c&apos;est</H3>
        <H1>
          Un espace <br /> collectif de création
        </H1>
      </HeroTitleContainer>
      <Carousel images={images} />
    </Container>
  );
}
