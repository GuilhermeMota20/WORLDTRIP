import { Avatar, HStack, Img, Stack, Text } from "@chakra-ui/react";

interface CitiesCardProps {
    img: string;
    city: string;
    state: string;
    avatar: string;
}

export default function CitiesCard({ img, city, state, avatar }: CitiesCardProps) {
    return (
        <Stack borderRadius='4px' border='1px' borderColor='highlight.50'>
            <Img src={img} alt={img} />

            <HStack justifyContent='space-between' align='center' px='24px' py='12px'>
                <Stack>
                    <Text>{city}</Text>
                    <Text>{state}</Text>
                </Stack>

                <Avatar name={avatar} src={avatar} w='30px' h='30px' />
            </HStack>
        </Stack>
    )
} 