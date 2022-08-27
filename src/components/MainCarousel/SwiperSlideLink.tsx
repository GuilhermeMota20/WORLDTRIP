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
                bgImage={bg}
                bgSize='cover'
                bgRepeat='no-repeat'
                gap='12px'
                cursor='pointer'
            >
                <Heading color='textColor.50' fontWeight='bold'>{title}</Heading>
                <Text color='info.50' fontSize='x-large' fontWeight='bold'>{legend}</Text>
            </Flex>
        </Link>
    )
}