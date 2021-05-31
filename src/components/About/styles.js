import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  padding: 32px;
  min-height: 100vh;
  min-width: 100vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h2 {
    color: white;
    font-size: 6em;
  }
  p {
    font-size: 1.5em;
    line-height: 1.5em;
    color: white;
  }
  img {
    margin: 16px;
    width: 18em;
    height: 18em;
    border-radius: 100%;
    object-fit: cover;
    object-position: 50% 25%;
  }
  a {
    text-decoration: underline;
    color: white;
    button {
      transition: transform 0.2s ease-in-out;
      cursor: pointer;
      background-color: white;
      color: black;
      border: none;
      padding: 8px;
      border-radius: 4px;
      &:hover {
        transform: scale(1.1);
      }
      &:active {
        transform: scale(1);
      }
    }
  }
`;
