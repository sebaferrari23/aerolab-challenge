import { ButtonWrapper } from "./styled";

const Button = ({ children, disabled, fluid, type }) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      fluid={fluid}
      type={type ? type : 'button'}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
