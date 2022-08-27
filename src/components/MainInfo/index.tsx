import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import MainItem from "./MainItem";

export default function MainInfo() {
    return (
        <SimpleGrid w='100%' mt='90px' minChildWidth='220px' gap='4rem'>
            <MainItem imgUrl="cocktail 1.svg" title="vida noturna" alt="Cockitel" />
            <MainItem imgUrl="surf 1.svg" title="praia" alt="Praia" />
            <MainItem imgUrl="building 1.svg" title="moderno" alt="Predio" />
            <MainItem imgUrl="museum 1.svg" title="classico" alt="Museu" />
            <MainItem imgUrl="earth 1.svg" title="e mais..." alt="Globo terrestre" />
        </SimpleGrid>
    )
}