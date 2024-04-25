import Head from "next/head";
import FeaturedBooks from "@/components/home-page/featured-books";
import LandingComponent from "@/components/home-page/landing-component";
import { getFeaturedBooks } from "@/utils/api-utils";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Liber</title>
        <meta name="description" content="Your online library" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingComponent></LandingComponent>
      <FeaturedBooks books={props.books}></FeaturedBooks>
    </>
  );
}

export async function getStaticProps() {
  const featuredBooks = await getFeaturedBooks();

  return {
    props: {
      books: featuredBooks,
    },
    revalidate: 60,
  };
}
