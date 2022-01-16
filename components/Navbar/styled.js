import styled from "styled-components";

export const Nav = styled.nav`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.primary};
`;
