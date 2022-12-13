import StoryIcon from "./StoryIcon";
import storyImg from "../img/tonyProfile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const StoriesSlider = () => {
  return (
    <div className=" flex items-center justify-center mt-6">
      <div className="flex p-2 items-center justify-center border-solid border-2 border-black rounded-xl  w-auto max-w-[450px] ">
        <Swiper spaceBetween={2} slidesPerView={3.6}>
          <SwiperSlide>
            <StoryIcon storyImg={storyImg} />
          </SwiperSlide>
          <SwiperSlide>
            <StoryIcon storyImg={storyImg} />
          </SwiperSlide>
          <SwiperSlide>
            <StoryIcon storyImg={storyImg} />
          </SwiperSlide>
          <SwiperSlide>
            <StoryIcon storyImg={storyImg} />
          </SwiperSlide>
          <SwiperSlide>
            <StoryIcon storyImg={storyImg} />
          </SwiperSlide>
          <SwiperSlide>
            <StoryIcon storyImg={storyImg} />
          </SwiperSlide>
          <SwiperSlide>
            <StoryIcon storyImg={storyImg} />
          </SwiperSlide>
          <SwiperSlide>
            <StoryIcon storyImg={storyImg} />
          </SwiperSlide>
          <SwiperSlide>
            <StoryIcon storyImg={storyImg} />
          </SwiperSlide>
          <SwiperSlide>
            <StoryIcon storyImg={storyImg} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default StoriesSlider;
