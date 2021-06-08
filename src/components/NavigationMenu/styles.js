import styled from "styled-components";

export const StyledNavigatorDiv = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledMenuButton = styled.button`
  z-index: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  width: 64px;
  height: 64px;
  margin: 16px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s 0s ease-in-out,
    background-color 0.2s 0s ease-in-out;
  img {
    width: 50%;
    height: 50%;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;
