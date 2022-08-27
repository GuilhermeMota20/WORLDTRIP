import { Box, Flex, Heading, Img, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";

export default function MainBanner() {
    const isWideVersio = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            as='section'
            w='100%'
            minH='325px'
            background='textColor.100'
            bgImage='Background.png'
            bgRepeat='no-repeat'
            bgSize='cover'
            mt='6rem'
        >
            <SimpleGrid
                spacing={2}
                columns={isWideVersio ? 2 : 1}
                maxW={1480}
                w='100%'
                h='100%'
                px='6'
                mx='auto'
            >
                <Flex direction='column' gap='24px' alignSelf='center' >
                    <Heading color='textColor.50' >
                        5 Continentes,
                        <br />
                        infinitas possibilidades.
                    </Heading>

                    <Text fontSize='lg' color='info.50'>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
                </Flex>

                {isWideVersio && (
                    <Box position='relative'>
                        <Img position='absolute' w='417.15px' bottom='-2.6rem' right={0} src="Airplane.svg" />
                    </Box>
                )}
            </SimpleGrid>
        </Flex>
    )
}