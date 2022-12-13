import StoryIcon from "./StoryIcon";
import storyImg from "../img/tonyProfile.jpg";

const StoriesSlider = () => {
  return (
    <div className="flex items-center justify-center bg-red-200">
      <div className="border-2 border-black border-solid rounded-lg p-4 flex gap-4">
        <StoryIcon storyImg={storyImg} />
        <StoryIcon storyImg={storyImg} />
        <StoryIcon storyImg={storyImg} />
        <StoryIcon storyImg={storyImg} />
        <StoryIcon storyImg={storyImg} />
      </div>
    </div>
  );
};

export default StoriesSlider;
