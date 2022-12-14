const ProfileImg = ({ profileImg, width, heigh }) => {
  return (
    <div>
      <img
        className={` ${width} ${heigh} cursor-pointer rounded-full flex-wrap object-cover`}
        src={profileImg}
        alt=""
      />
    </div>
  );
};

export default ProfileImg;
