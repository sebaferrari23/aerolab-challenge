import { Nav, NavContainer } from "./styled";
import LogoAerolab from "../../../assets/svg/logo-aerolab.svg";
import { Container, Dropdown } from "../../ui";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <NavContainer>
          <h1>
            <LogoAerolab width={126} height={48} />
          </h1>
          <Dropdown />
        </NavContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
