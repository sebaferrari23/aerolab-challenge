import styled from "styled-components";

export const DropdownWrapper = styled.div`
 position: relative;
`;

export const DropdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadowMd};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: box-shadow .2s ease-in-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowLg};
  }
`;

export const DropdownButtonText = styled.span`
  display: block;
  font-size: 1.125rem;
  font-weight: 600;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 1.25rem 0 0.5rem;
`;

export const DropdownMenu = styled.div`
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: scale(${props => props.isOpen ? '1' : '0'});
  transform-origin: top right;
  position: absolute;
  top: calc(100% + ${props => props.isOpen ? '0.5rem' : '1.5rem'});
  right: 0;
  width: 19.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadowMd};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all .2s ease-in-out;
`;

export const DropdownMenuHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem 1.5rem;
  font-weight: 600;
  font-size: 1.125rem;
`;

export const DropdownMenuContent = styled.div`
  padding: 1.5rem;
`;

