import styled from "styled-components";

const styles = {
  h1: {
    fontSize: "30px",
    lineHeight: "33px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textShadow: "0px 2px 0px #1F4D9B",
    WebkitTextStroke: "1px #1F4D9B",
    color: "white",
  },
  h2: {
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.6px",
    textTransform: "uppercase",
  },
  h3: {
    fontSize: "14px",
    lineHeight: "15px",
    letterSpacing: "0.4px",
    textTransform: "uppercase",
  },
};

const Text = styled.div`
  font-size: ${({ type }) => styles[type].fontSize};
  line-height: ${({ type }) => styles[type].lineHeight};
  letter-spacing: ${({ type }) => styles[type].letterSpacing};
  text-transform: ${({ type }) => styles[type].textTransform || "none"};
  text-shadow: ${({ type }) => styles[type]?.textShadow || "none"};
  -webkit-text-stroke: ${({ type }) =>
    styles[type]?.WebkitTextStroke || "none"};
  color: ${({ type }) => styles[type]?.color || "inherit"};
`;

export default Text;
