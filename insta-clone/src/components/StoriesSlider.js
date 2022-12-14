import StoryIcon from "./StoryIcon";
import storyImg from "../img/tonyProfile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const StoriesSlider = () => {
  return (
    <div className=" flex items-center justify-center mt-5">
      {/* STORIES CONTAINER */}
      <div className="flex p-2 items-center justify-center border-solid border-2 border-slate-400 rounded-xl w-auto max-w-[300px] ">
        <Swiper spaceBetween={1} slidesPerView={4.4}>
          {/* SINGLE STORIES CIRCLE */}
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
