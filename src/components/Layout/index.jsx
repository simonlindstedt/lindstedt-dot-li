import styled from "styled-components";

const StyledMain = styled.main`
  font-size: 16px;
  color: white;
  background-color: black;
  @media (max-width: 800px) {
    font-size: 8px;
  }
`;

const Layout = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Layout;
