import styled from "styled-components";

export const ToggleButtonSyled = styled.button`
  padding: 0.25rem 1.25rem;
  border-radius: 0.75rem;
  background: ${props => props.isActive ? 
    ({ theme }) => theme.gradients.primary 
  : ({ theme }) => theme.colors.lightGray };
  cursor: pointer;
`;

export const ToggleButtonText = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  background: ${props => !props.isActive && (({ theme }) => theme.gradients.primary)};
  -webkit-background-clip: ${props => !props.isActive && 'text'};
  -webkit-text-fill-color: ${props => !props.isActive && 'transparent'};
  color: ${props => props.isActive && (({ theme }) => theme.colors.white)};
`;
