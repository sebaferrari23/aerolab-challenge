import styled from "styled-components";

export const Nav = styled.nav`
  height: ${props => props.isScrolled ? '6rem' : '8rem' };
  background-color: ${props => props.isScrolled && (({ theme }) => theme.colors.white) };
  box-shadow: ${props => props.isScrolled && (({ theme }) => theme.boxShadowLg) };
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 900;
  display: flex;
  align-items: center;
  transition: all .3s ease-in-out;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
