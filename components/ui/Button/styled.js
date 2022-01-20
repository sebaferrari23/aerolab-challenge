import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 2.5rem;
  height: 3.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  width: ${props => props.fluid ? '100%' : 'auto'};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.gradients.secondary};
  }
  &:disabled {
    cursor: default;
    pointer-events: none;
    background: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.gray};
  }
`;