import { ButtonWrapper } from "./styled";

const Button = ({ children, disabled, fluid }) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      fluid={fluid}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
