import { Flex, Heading, Img, Text, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface BannerProps {
    titleFirstLine: string;
    titleSecondLine?: string;
    description?: string;
    minH?: string | number;
    bgImage: string;
}

export default function Banner({ titleFirstLine, titleSecondLine, description, minH, bgImage }: BannerProps) {
    const isWideVersio = useBreakpointValue({
        base: false,
        lg: true,
    })

    const router = useRouter();
    const routerPath = router.asPath;

    return (
        <Flex
            as='section'
            w='100%'
            minH={minH}
            background='textColor.100'
            bgImage={bgImage}
            bgRepeat='no-repeat'
            bgSize='cover'
            mt='6rem'
        >
            <Flex
                maxW={1480}
                w='100%'
                h='100%'
                px='6'
                mx='auto'
                position='relative'
            >
                <Flex direction='column' gap='24px' alignSelf='center' >
                    <Heading color='textColor.50' >
                        {titleFirstLine}
                        <br />
                        {titleSecondLine}
                    </Heading>

                    <Text fontSize='lg' color='info.50'> {description} </Text>
                </Flex>

                {isWideVersio && routerPath == '/' && (
                    <Img position='absolute' w='417.15px' bottom='-2.6rem' right={0} src="Airplane.svg" />
                )}
            </Flex>
        </Flex>
    )
}