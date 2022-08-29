import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ResumoDetail from "../../components/ResumoDetail";

export default function Continent() {
    const isWideVersio = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex userSelect='none' as='main' direction='column' h='100vh'>
            <Header />
            <Banner minH={isWideVersio ? '500px' : '250px'} bgImage="Foto-0.png" titleFirstLine='Europa' />

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
                <ResumoDetail />
                <Footer />
            </Flex>
        </Flex>
    )
} 