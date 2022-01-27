import { useEffect, useState } from "react";
import { Nav, NavContainer } from "./styled";
import LogoAerolab from "../../../assets/svg/logo-aerolab.svg";
import { Container, Dropdown } from "../../ui";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeNavbarState = () => {
      if(window.scrollY >= 20){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', changeNavbarState);
    return () => {
      window.removeEventListener('scroll', changeNavbarState);
    }
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
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
