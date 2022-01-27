import { ButtonWrapper } from "./styled";

const Button = ({ children, disabled, fluid, type, cta }) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      fluid={fluid}
      cta={cta}
      type={type ? type : 'button'}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
