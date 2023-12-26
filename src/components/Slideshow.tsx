import { For } from "solid-js"
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/solid"

import "swiper/css"

import type { Component } from "solid-js"
import "swiper/css/pagination"

interface Slide {
  url: string
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
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      height={700}
      autoplay={{ delay: 5000 }}
    >
      <For each={props.slides}>
        {(slide) => (
          <SwiperSlide>
            <div class="h-min w-full bg-black">
              <div class="relative mx-auto w-max">
                <img
                  class="mx-auto h-[600px] lg:h-[700px]"
                  src={slide.url}
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
        )}
      </For>
    </Swiper>
  )
}

export default SlideShow
