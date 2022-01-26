import { ToggleButtonSyled, ToggleButtonText } from "./styled";

export const ToggleButton = ({ children, isActive, onClick }) => {
  return (
    <ToggleButtonSyled
      type="button"
      isActive={isActive}
      onClick={onClick}
    >
      <ToggleButtonText isActive={isActive}>
        { children }
      </ToggleButtonText>
    </ToggleButtonSyled>
  );
};
