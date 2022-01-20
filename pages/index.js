import Head from "next/head";
import { ProductsSection, ProductsList } from "../components/product";
import { Heading } from "../components/ui";
import { getProducts } from "../utils/api";

export const Home = ({ products }) => {
  return (
    <>
      <Head>
        <title>Aerolab Challenge</title>
        <meta name="description" content="Aerolab Challenge" />
      </Head>

      <Heading
        level={1}
        uppercase={true}
        strongGradient={true}
      >
        <strong>Tech</strong> Zone
      </Heading>

      <ProductsSection>
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
      </ProductsSection>
    </>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default Home;
