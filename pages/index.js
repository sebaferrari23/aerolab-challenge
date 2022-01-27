import Head from "next/head";
import { Hero } from "../components/common";
import { ProductsSection, ProductsList } from "../components/product";
import { Container, Heading } from "../components/ui";
import { getProducts } from "../utils/api";

export const Home = ({ products }) => {
  return (
    <>
      <Head>
        <title>Aerolab Challenge</title>
        <meta name="description" content="Aerolab Challenge" />
      </Head>

      <Hero />

      <ProductsSection>
        <Container>
          <Heading
            level={2}
            uppercase={true}
            strongGradient={true}
          >
            <strong>Tech</strong> Products
          </Heading>

          { products && products.length > 0 ? (
            <ProductsList list={products} columns={4} />
          ) : (
            <p>No products</p>
          )
          }
        </Container>
      </ProductsSection>
    </>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default Home;
