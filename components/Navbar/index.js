import { Nav } from "./styled";
import LogoAerolab from "../../assets/svg/logo-aerolab.svg";
import Container from "../Container";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <h1>
          <LogoAerolab width={126} height={48} />
        </h1>
      </Container>
    </Nav>
  );
};

export default Navbar;
