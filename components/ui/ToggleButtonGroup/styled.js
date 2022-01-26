import styled from "styled-components";

export const ToggleButtonGroupWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  width: ${props => props.fluid ? '100%' : 'auto' };
  ${props => props.customStyles && props.customStyles};
`;