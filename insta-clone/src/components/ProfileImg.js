const ProfileImg = ({ profileImg }) => {
  return (
    <div>
      <img
        className="w-7 h-7 cursor-pointer rounded-full flex-wrap object-cover"
        src={profileImg}
        alt=""
      />
    </div>
  );
};

export default ProfileImg;
