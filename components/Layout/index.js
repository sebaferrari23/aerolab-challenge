import Container from "../Container";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
