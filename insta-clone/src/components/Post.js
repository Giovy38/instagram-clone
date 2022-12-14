import ProfileImg from "./ProfileImg";
import profileImg from "../img/tomHolland.jpg";

const Post = () => {
  return (
    <div className="mt-6 border-2 border-solid border-slate-400 rounded-md w-auto max-w-[750px]">
      <div className="flex items-center justify-center">
        <ProfileImg profileImg={profileImg} width={"w-10"} heigh={"h-10"} />
        <h3 className="ml-2 font-bold">User Profile</h3>
      </div>
    </div>
  );
};

export default Post;
