import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/solid"

import "swiper/css"

import type { Component } from "solid-js"
import "swiper/css/pagination"

interface Slide {
  image?: ImageMetadata
  caption: string
}

interface Props {
  slides: Slide[]
}

const SlideShow: Component<Props> = (props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {props.slides.map((slide) => (
        <SwiperSlide>
          <div class="flex h-[500px] w-full items-center justify-center bg-black">
            <div class="relative mx-auto h-full w-full w-max">
              <img
                class="h-full w-full object-contain"
                src={slide.image?.src}
                alt={slide.caption}
              />
              <p
                class={`absolute bottom-0 w-full bg-black/50 px-2 pb-8 text-center text-white ${
                  !slide.caption && "hidden"
                }`}
              >
                {slide.caption}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SlideShow
