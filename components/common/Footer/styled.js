import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 5rem 0;
  text-align: center;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
