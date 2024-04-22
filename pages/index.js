import Head from "next/head";
import FeaturedBooks from "@/components/home-page/featured-books";
import LandingComponent from "@/components/home-page/landing-component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Liber</title>
        <meta name="description" content="Your online library" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingComponent></LandingComponent>
      <FeaturedBooks></FeaturedBooks>
    </>
  );
}
