import { SimpleGrid, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Indice from "./Indice";

export default function ResumoDetail() {
    return (
        <SimpleGrid
            minChildWidth='300px'
            spacing='70px'
            mt='74px'
        >
            <Text textAlign='justify' fontWeight='regular' fontSize='large'>
                A Europa é, por convenção, um dos seis continentes do mundo.
                Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da
                Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
                o Cáucaso, e o mar Negro a sudeste
            </Text>

            <SimpleGrid
                columns={3}
            >
                <Indice title="50" description="paises" />
                <Indice title="60" description="linguas" />
                <Indice title="27" description="cidades + 100" icon={AiOutlineInfoCircle} />
            </SimpleGrid>
        </SimpleGrid>
    )
}