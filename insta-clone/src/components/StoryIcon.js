const StoryIcon = ({ storyImg }) => {
  return (
    <div className="bg-gradient-to-r from-[#f6a94b] to-[#d5337e] rounded-full w-[43px] h-[43px] flex justify-center items-center cursor-pointer">
      <img className="w-10 h-10 rounded-full" src={storyImg} alt="" />
    </div>
  );
};

export default StoryIcon;
