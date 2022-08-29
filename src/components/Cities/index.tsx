import { Avatar, color, Heading, HStack, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import CitiesCard from "./CitiesCard";

export default function Cities() {
    return (
        <Stack spacing='40px'>
            <Heading fontWeight='medium'>Cidades +100</Heading>

            <SimpleGrid minChildWidth='256px' spacing={10}>
                <CitiesCard img="Foto-4.png" city="Londres" state="Reino Unido" avatar="Ellipse-5.png" />
                <CitiesCard img="Foto-3.png" city="Paris" state="Franca" avatar="Ellipse-3.png" />
                <CitiesCard img="Foto-2.png" city="Roma" state="Italia" avatar="Ellipse-2.png" />
                <CitiesCard img="Foto-1.png" city="Praga" state="Republica Tcheca" avatar="Ellipse-1.png" />
                <CitiesCard img="Foto.png" city="Amisterda" state="Holanda" avatar="Ellipse-4.png" />
            </SimpleGrid>
        </Stack>
    )
}