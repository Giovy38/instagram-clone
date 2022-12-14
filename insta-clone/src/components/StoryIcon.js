const StoryIcon = ({ storyImg }) => {
  return (
    <div className="bg-gradient-to-r from-[#f6a94b] to-[#d5337e] rounded-full w-[88px] h-[88px] flex justify-center items-center cursor-pointer">
      <img className="w-20 h-20 rounded-full" src={storyImg} alt="" />
    </div>
  );
};

export default StoryIcon;
