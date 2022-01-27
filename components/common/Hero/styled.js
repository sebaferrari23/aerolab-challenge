import styled from "styled-components";

export const HeroWrapper = styled.section`
  padding: 15rem 0;
`;

export const HeroLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeroContent = styled.div`
`;

export const HeroImage = styled.div`
  position: relative;
  background: ${({ theme }) => theme.gradients.primary};
  background: linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 104px;
  width: 722px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const HeroSubtitle = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 150%;
  letter-spacing: 0.24em;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
`;

export const HeroText = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 150%;
  margin-top: 0;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.gray};
`;