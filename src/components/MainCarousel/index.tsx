import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperSlideLink from "./SwiperSlideLink";

export default function MainCarousel() {
    return (
        <Box my='4rem'>
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
                    <SwiperSlideLink title="Europa" legend="O continente mais antigo" href="/" bg="info.100" />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperSlideLink title="Europa" href="/" bg="info.100" />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperSlideLink title="Europa" href="/" bg="info.100" />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperSlideLink title="Europa" href="/" bg="info.100" />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperSlideLink title="Europa" href="/" bg="info.100" />
                </SwiperSlide>
            </Swiper>
        </Box>
    )
} 