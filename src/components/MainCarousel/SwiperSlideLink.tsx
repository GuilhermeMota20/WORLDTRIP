import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SwiperSlideLinkProps {
    title: string;
    legend?: string;
    href: string;
    bg: string;
}

export default function SwiperSlideLink({ title, legend, href, bg }: SwiperSlideLinkProps) {
    return (
        <Link href={href}>
            <Flex
                w='100%'
                minH='450px'
                direction='column'
                align='center'
                justifyContent='center'
                bg={bg}
                bgSize='cover'
                bgRepeat='no-repeat'
            >
                <Heading>{title}</Heading>
                <Text>{legend}</Text>
            </Flex>
        </Link>
    )
}