import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Flex, Heading } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperSlideLink from "./SwiperSlideLink";

export default function MainCarousel() {
    return (
        <Flex direction='column' gap='4rem'>
            <Flex direction='column' align='center' gap='4rem'>
                <Box w='90px' h='2px' bg='info.100'></Box>

                <Flex direction='column' align='center'>
                    <Heading fontWeight='medium'>Vamos nessa?</Heading>
                    <Heading fontWeight='medium'>Entao escolha seu continente</Heading>
                </Flex>
            </Flex>

            <Box>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SwiperSlideLink title="Europa" legend="O continente mais antigo" href="/continent" bg="ContinentImage.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSlideLink title="Europa" legend="O continente mais antigo" href="/continent" bg="ContinentImage.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSlideLink title="Europa" legend="O continente mais antigo" href="/continent" bg="ContinentImage.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSlideLink title="Europa" legend="O continente mais antigo" href="/continent" bg="ContinentImage.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSlideLink title="Europa" legend="O continente mais antigo" href="/continent" bg="ContinentImage.png" />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Flex>
    )
} 