import styled from "styled-components";

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 100vw;
  min-height: inherit;
  padding: 1.5em;
  p {
    font-size: 4em;
    color: white;
    font-weight: 700;
  }
`;

export const StyledLink = styled.a`
  margin: 0;
  width: fit-content;
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

export const StyledTags = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    font-family: monospace;
    padding: 0px 1em 24px 0px;
    font-size: 2em;
  }
`;
