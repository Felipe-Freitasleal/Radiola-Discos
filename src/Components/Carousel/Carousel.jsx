import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Container } from "@chakra-ui/react";

export default function Carousel() {
  return (
    <Container maxWidth={"90%"}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          border: "solid red 1px",
          minHeight: "20rem",
          padding: "6rem 6rem",
        }}
      >
        <SwiperSlide style={{ border: "solid blue 1px" }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ border: "solid blue 1px" }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ border: "solid blue 1px" }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ border: "solid blue 1px" }}>Slide 4</SwiperSlide>
        <SwiperSlide style={{ border: "solid blue 1px" }}>Slide 5</SwiperSlide>
        <SwiperSlide style={{ border: "solid blue 1px" }}>Slide 6</SwiperSlide>
        <SwiperSlide style={{ border: "solid blue 1px" }}>Slide 7</SwiperSlide>
        <SwiperSlide style={{ border: "solid blue 1px" }}>Slide 8</SwiperSlide>
        <SwiperSlide style={{ border: "solid blue 1px" }}>Slide 9</SwiperSlide>
      </Swiper>
    </Container>
  );
}
