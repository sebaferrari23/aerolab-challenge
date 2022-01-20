import styled from "styled-components";

export const Nav = styled.nav`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 900;
`;
