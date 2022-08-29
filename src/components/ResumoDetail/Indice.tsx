import { Heading, HStack, Icon, Stack, Text, Tooltip } from "@chakra-ui/react";
import { ElementType } from "react";

interface IndiceProps {
    title: string;
    description: string;
    icon?: ElementType;
}

export default function Indice({ title, description, icon }: IndiceProps) {
    return (
        <Stack align='center'>
            <Heading color='highlight.100'>{title}</Heading>
            <HStack>
                <Text fontSize='large' fontWeight='semibold'>{description}</Text>
                {icon && (
                    <Tooltip hasArrow label='sei la...'>
                        <Icon color='info.100' as={icon} w={4} h={4} />
                    </Tooltip>
                )}
            </HStack>
        </Stack>
    )
}