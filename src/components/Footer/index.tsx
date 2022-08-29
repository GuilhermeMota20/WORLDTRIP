import { Flex, Link } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Flex as='footer' align='center' justifyContent='center' pb='2rem'>
            <Link href="https://gmotalinks.vercel.app/">by: Guilherme Mota</Link>
        </Flex>
    )
}