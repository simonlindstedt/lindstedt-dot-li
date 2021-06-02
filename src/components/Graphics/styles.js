import styled from "styled-components";

export const CanvasBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  backdrop-filter: blur(16px);
  background-color: rgba(0, 0, 0, 0.2);
  width: inherit;
  height: inherit;
`;

export const StyledCanvas = styled.canvas`
  animation: fade-in 7s linear 0s 1 normal both;
  z-index: -1;
  top: 0;
  left: 0;
  position: absolute;
`;
