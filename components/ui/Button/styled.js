import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  width: ${props => props.fluid ? '100%' : 'auto'};
  height: ${props => props.cta ? '5rem' : '3.75rem'};
  text-transform: ${props => props.cta ? 'uppercase' : 'none'};
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