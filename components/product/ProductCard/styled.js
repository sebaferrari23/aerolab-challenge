import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: 1rem;
`;

export const ProductImageWrapper = styled.div`
  padding: 4rem 2rem 4.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ProductContent = styled.div`
  padding: 1rem 1.5rem 1.5rem;
`;

export const ProductTitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 600;
  margin: 0;
  font-size: 1.125rem;
  line-height: 150%;
`;

export const ProductType = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 150%;
  letter-spacing: 0.05em;
`;
