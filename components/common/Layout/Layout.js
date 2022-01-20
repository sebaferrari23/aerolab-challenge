import { Container } from "../../ui";
import { Navbar } from "../../common";
import { Footer } from "../../common";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;