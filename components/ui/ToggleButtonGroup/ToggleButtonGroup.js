import { useState } from "react";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { ToggleButtonGroupWrapper } from "./styled";

export const ToggleButtonGroup = ({ items, fluid, style }) => {

  const [toggledButtonId, setToggledButtonId] = useState(false);

  const toggleButton = (i) => {
    setToggledButtonId(i);
  }

  return (
    <ToggleButtonGroupWrapper fluid={fluid} customStyles={style}>
      {items && items.map((item, i) => {
        const isToggled = i === toggledButtonId;
        return (
          <ToggleButton 
            key={i}
            onClick={() => toggleButton(i)}
            isActive={isToggled ? true : false}
          >
            { item }
          </ToggleButton>
        )})
      }
    </ToggleButtonGroupWrapper>
  );
};
