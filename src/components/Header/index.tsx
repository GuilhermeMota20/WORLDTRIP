import { Box, Flex, Icon, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";
import Logo from "./Logo";

export default function Header() {
    const router = useRouter();
    const routerPath = router.asPath;

    return (
        <Flex
            as='header'
            w='100%'
            minH='100px'
            boxShadow='lg'
            position='fixed'
            bg='white'
            top='0'
            left='0'
            zIndex={10}
        >
            <Flex
                align='center'
                justifyContent='center'
                maxWidth={1480}
                px='6'
                mx='auto'
                w='100%'
                position='relative'
            >
                {routerPath == '/continent' && (
                    <Box position='absolute' left={0} paddingLeft='6'>
                        <Link href="/">
                            <Icon as={FiChevronLeft} w={6} h={6} color='textColor.100' />
                        </Link>
                    </Box>
                )}
                <Logo />
            </Flex>
        </Flex>
    )
}