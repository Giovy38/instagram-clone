const MyPost = ({ myPostImg }) => {
  return (
    <div className="mb-3 mt-3 w-[296px] h-[296px] overflow-hidden flex justify-center ">
      <img
        className="max-w-[296px] max-h-[296px]"
        src={myPostImg}
        alt="My post"
      />
    </div>
  );
};

export default MyPost;
