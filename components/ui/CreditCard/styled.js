import styled from "styled-components";
//import CreditCardBG from '../../../assets/svg/credit-card-bg.svg'; 

export const CreditCardWrapper = styled.div`
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.darkGray};
  //background-image: url(${CreditCardBG});
  color: ${({ theme }) => theme.colors.white};
  aspect-ratio: 16 / 9;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props => props.customStyles && props.customStyles};
`;

export const CreditCardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreditCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreditCardTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
`;
export const CreditCardName = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
`;
export const CreditCardExpiry = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
`;