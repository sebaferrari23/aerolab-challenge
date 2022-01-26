import { 
  CreditCardWrapper, 
  CreditCardTitle,
  CreditCardHeader,
  CreditCardFooter,
  CreditCardName,
  CreditCardExpiry
} from './styled';
import AeropayWhite from "../../../assets/svg/aeropay-white.svg";

const CreditCard = ({ name, style }) => {
  return (
    <CreditCardWrapper customStyles={style} >
      <CreditCardHeader>
        <CreditCardTitle>Aerocard</CreditCardTitle>
        <AeropayWhite width="24" />
      </CreditCardHeader>
      <CreditCardFooter>
        <CreditCardName>{name}</CreditCardName>
        <CreditCardExpiry>07/23</CreditCardExpiry>
      </CreditCardFooter>
    </CreditCardWrapper>
  );
};

export default CreditCard;
