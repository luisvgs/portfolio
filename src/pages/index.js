import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Flex } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Head>
        <title>Luis Portfolio</title>
        <meta name="description" content="Luis portfolio" />
      </Head>

      <Flex direction="column">
        <Hero />
        <About />
      </Flex>
    </>
  );
}
