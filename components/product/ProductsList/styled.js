import styled from "styled-components";

export const ProductsListStyled = styled.div`
  display: grid;
  grid-gap: 5rem 1.5rem;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
`;
