import { HeadingStyled } from "./styled";

const Heading = ({ 
  children, 
  level, 
  uppercase, 
  strongGradient,
  style 
}) => {
  const tag = level ? `h${level}` : 'p';
  return (
    <HeadingStyled 
      as={tag} 
      level={level}
      uppercase={uppercase}
      strongGradient={strongGradient}
      customStyles={style}
    >
      { children }
    </HeadingStyled>
  );
};

export default Heading;
