import { HeadingStyled } from "./styled";

const Heading = ({ children, level, uppercase, strongGradient }) => {
  const tag = level ? `h${level}` : 'p';
  return (
    <HeadingStyled 
      as={tag} 
      level={level}
      uppercase={uppercase}
      strongGradient={strongGradient}
    >
      { children }
    </HeadingStyled>
  );
};

export default Heading;
