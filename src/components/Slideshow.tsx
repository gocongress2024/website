import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/solid"

import "swiper/css"

import type { ParentComponent } from "solid-js"
import "swiper/css/pagination"

type SlotKey = `slot-${number}`

interface Props {
  count: number
  [key: SlotKey]: any
}

const SlideShow: ParentComponent<Props> = (props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {[...Array(props.count).keys()].map((i) => (
        <SwiperSlide>
          <div class="h-min w-full bg-black">
            <div class="relative mx-auto w-max">{props[`slot-${i}`]}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SlideShow
