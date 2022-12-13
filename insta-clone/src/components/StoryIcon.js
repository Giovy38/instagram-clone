const StoryIcon = ({ storyImg }) => {
  return (
    <div class="bg-gradient-to-r from-[#f6a94b] to-[#d5337e] rounded-full w-24 h-24 flex justify-center items-center cursor-pointer">
      <img class="w-20 h-20 rounded-full" src={storyImg} alt="" />
    </div>
  );
};

export default StoryIcon;
