import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";

export default function Header() {
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
                justifyContent='space-between'
                maxWidth={1480}
                px='6'
                mx='auto'
                w='100%'
            >
                <h1>Prevent</h1>
                <Logo />
                <span></span>
            </Flex>
        </Flex>
    )
}