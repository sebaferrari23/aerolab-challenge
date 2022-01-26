import { useState } from "react";
import { Button, CreditCard } from "..";
import ChevronUp from "../../../assets/svg/chevron-up.svg";
import ChevronDown from "../../../assets/svg/chevron-down.svg";
import AeropayGradient from "../../../assets/svg/aeropay-gradient.svg";
import AeropayWhiteGradient from "../../../assets/svg/aeropay-white-gradient.svg";
import { 
  DropdownWrapper, 
  DropdownButton, 
  DropdownButtonText, 
  DropdownMenu,
  DropdownMenuHeader,
  DropdownMenuContent
} from "./styled";
import { ToggleButtonGroup } from "../ToggleButtonGroup/ToggleButtonGroup";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const points = [1000, 5000, 7500];

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => handleClick()}>
        <AeropayGradient width={32} />
        <DropdownButtonText>10.000</DropdownButtonText>
        { isOpen ? (
          <ChevronDown />
        ) : (
          <ChevronUp />
        )}
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        <DropdownMenuHeader>
          Add Balance
        </DropdownMenuHeader>
        <DropdownMenuContent>
          <CreditCard name="John Kite" style={{ marginBottom: '1.875rem' }} />
          <ToggleButtonGroup 
            items={points} 
            fluid
            style={{ marginBottom: '1.5rem'  }} 
          />
          <Button 
            fluid
          >
            <AeropayWhiteGradient 
              width="24" 
              style={{ marginRight: '0.5rem' }}
            />
            Add Points
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </DropdownWrapper>
  );
};

export default Dropdown;
