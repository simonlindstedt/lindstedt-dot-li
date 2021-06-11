import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  min-height: calc(100vh - 24px);
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  canvas {
    pointer-events: none;
    z-index: -1;
    animation: fade-in 15s ease-out 0s 1 normal both;
  }
  h1 {
    z-index: 1;
    animation: fade-in 2s ease-in 0.5s 1 normal both;
    color: white;
    font-size: 8em;
  }
  a {
    z-index: 1;
    animation: fade-in 4s ease-in 1.5s 1 normal both;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
    img {
      animation: rotate 60s linear 0s infinite normal both;
      width: 6em;
      height: 6em;
    }
  }
`;
