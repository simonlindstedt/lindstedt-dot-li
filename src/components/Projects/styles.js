import styled from "styled-components";

export const ProjectSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  /* overflow-x: scroll; */
  /* @media (min-width: 1000px) { */
  flex-direction: column;
  width: 100%;
  /* overflow-x: hidden; */
  /* } */
`;

export const IndicatorDiv = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  button {
    font-weight: 700;
    color: white;
    margin: 8px;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s 0s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(1);
    }
  }
`;
