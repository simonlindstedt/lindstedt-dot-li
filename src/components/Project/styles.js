import styled from "styled-components";

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 100vw;
  min-height: inherit;
  padding: 32px;
  p {
    font-size: 4em;
    color: white;
    font-weight: 700;
  }
`;

export const StyledLink = styled.a`
  margin: 0;
  font-size: 6em;
  text-decoration: none;
  color: white;
  font-weight: 700;
  padding: 0.3em;
  border-radius: 8px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s 0s ease-in-out, box-shadow 0.2s 0s ease-in-out;
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(1);
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
  }
`;
