import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { H3 } from "@/styles/textStyles";

const CarouselContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  padding: 30px 15px 15px;
  @media ${(props) => props.theme.minWidth.sm} {
    padding: 80px 170px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    padding: 50px;
    height: calc(100vh - 155px);
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35vh;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.darkBlue};
  @media ${(props) => props.theme.minWidth.lg} {
    height: 620px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 15px;
`;

const LoadingBar = styled.div`
  flex-grow: 1;
  height: 10px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.darkBlue};
  border-radius: 50px;
  box-shadow: 0px 2px 0px 0px ${(props) => props.theme.colors.darkBlue};
  margin: 0 10px;
`;

const Filler = styled.div`
  height: 100%;
  background-color: pink;
  border-radius: 50px;
`;

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentSlide(next + 1);
      setLoadingProgress(0);
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingProgress((prev) => {
        const nextProgress = prev + 1;
        if (nextProgress >= 100) {
          clearInterval(intervalId);
          sliderRef.current.slickNext();
        }
        return nextProgress;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [loadingProgress]);

  return (
    <CarouselContainer>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <StyledImage src={image.src} alt={image.alt} fill={true} />
          </ImageContainer>
        ))}
      </Slider>
      <ProgressContainer>
        <H3>0{currentSlide}</H3>
        <LoadingBar>
          <Filler style={{ width: `${loadingProgress}%` }} />
        </LoadingBar>
        <H3>0{images.length}</H3>
      </ProgressContainer>
    </CarouselContainer>
  );
};

export default Carousel;
