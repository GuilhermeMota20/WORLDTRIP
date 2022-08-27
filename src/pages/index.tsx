import { Box, Flex, Img } from "@chakra-ui/react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import MainCarousel from "../components/MainCarousel";
import MainInfo from "../components/MainInfo";

export default function Home() {
  return (
    <Flex userSelect='none' as='main' direction='column' h='100vh'>
      <Header />
      <MainBanner />

      <Box
        w='100%'
        h='100%'
        maxW={1480}
        px='6'
        mx='auto'
      >
        <MainInfo />
        <MainCarousel />
      </Box>
    </Flex>
  )
}