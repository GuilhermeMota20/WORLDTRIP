import { Flex, Img, Text } from "@chakra-ui/react";

interface MainItemProps {
    title: string;
    alt?: string;
    imgUrl: string;
}

export default function MainItem({ title, alt, imgUrl }: MainItemProps) {
    return (
        <Flex direction='column' align='center' gap='24px'>
            <Img src={imgUrl} alt={ alt ? alt : 'Imagem carregando...' } />
            <Text fontSize='x-large' fontWeight='semibold'>{title}</Text>
        </Flex>
    )
}