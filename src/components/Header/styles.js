import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  min-height: calc(100vh - 24px);
  min-width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    animation: fade-in 2s ease-in 0.5s 1 normal both;
    color: white;
    font-size: 8em;
  }
`;
