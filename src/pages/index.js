import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { useSelector } from "react-redux";

export default function Home(props) {
 
  return (
    <div className={darkmode && "dark"}>
      <div className="bg-white-100">
        <Head>
          <title>Amazon Clone</title>
        </Head>
        <Header />
        <main className="mx-auto max-w-screen-2xl">
          {/* Banner */}
          <Banner />
          <ProductFeed products={props.products} />
        </main>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products");
  const data = await products.json();
  console.log(data);
  return {
    props: {
      products: data,
    },
  };
}
