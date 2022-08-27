import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";

export default function Header() {
    return (
        <Flex
            as='header'
            w='100%'
            maxWidth={1480}
            minH='100px'
            align='center'
            justifyContent='space-between'
            px='6'
            mx='auto'
        >
            <h1>Prevent</h1>
            <Logo />
            <span></span>
        </Flex>
    )
}