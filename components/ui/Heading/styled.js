import styled from "styled-components";

const handleFontStyle = level => {
  switch (level) {
    case 1:
      return "12.5rem";
    case 2:
      return "3rem";
    case 3:
      return "2rem";
    default:
      return "1rem";
  }
};

const handleFontGradient = gradient => {
  return `
    strong {
      background: ${gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `
};

export const HeadingStyled = styled.div`
  text-transform: ${props => props.uppercase && 'uppercase'};
  font-size: ${props => props.level && handleFontStyle(props.level)};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 900;
  line-height: ${props => props.level < 3 && '80%'};
  ${props => props.strongGradient && ( ({ theme }) => handleFontGradient(theme.gradients.primary) ) }
`;