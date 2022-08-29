import { Box, Flex, Img, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MainCarousel from "../components/MainCarousel";
import MainInfo from "../components/MainInfo";

export default function Home() {
  const isWideVersio = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex userSelect='none' as='main' direction='column' h='100vh'>
      <Header />
      <Banner minH={isWideVersio ? '325px' : '250px'} bgImage='Background.png' titleFirstLine='5 Continentes,' titleSecondLine="infinitas possibilidades." description="Chegou a hora de tirar do papel a viagem que você sempre sonhou." />

      <Flex
        as="section"
        direction='column'
        gap='74px'
        w='100%'
        h='100%'
        maxW={1480}
        px='6'
        mx='auto'
      >
        <MainInfo />
        <MainCarousel />
        <Footer />
      </Flex>
    </Flex>
  )
}