import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  line-height: 33px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 0px 2px 0px #1f4d9b;
  -webkit-text-stroke: 1px #1f4d9b;
  color: white;
  @media ${(props) => props.theme.minWidth.sm} {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.2px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    font-size: 80px;
    line-height: 75px;
    letter-spacing: 2.4px;
    text-shadow: 0px 7px 0px #1f4d9b;
  }
`;

const H2 = styled.h2`
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  @media ${(props) => props.theme.minWidth.sm} {
    font-size: 24px;
    line-height: 25px;
    letter-spacing: 0.7px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    font-size: 50px;
    line-height: 50px;
    letter-spacing: 1.5px;
  }
`;

const H3 = styled.h3`
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  @media ${(props) => props.theme.minWidth.sm} {
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.5px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    font-size: 24px;
    line-height: 25px;
    letter-spacing: 0.7px;
  }
`;

const H4 = styled.h4`
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  @media ${(props) => props.theme.minWidth.sm} {
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 0.4px;
  }
  @media ${(props) => props.theme.minWidth.lg} {
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.6px;
  }
`;

const P = styled.p``;

export { H1, H2, H3, H4, P };
