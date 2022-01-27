import { Container } from "../../ui";
import { Navbar } from "../../common";
import { Footer } from "../../common";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;