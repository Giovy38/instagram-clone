import Post from "../components/Post";
import StoriesSlider from "../components/StoriesSlider";
import ProfileImg from "../components/ProfileImg";
import profileImg from "../img/tomHolland.jpg";
import { Link } from "react-router-dom";
import postImg from "../img/tomAndRobert.jpg";
import postImg2 from "../img/tomAndZendaya.jpg";
import postImg3 from "../img/tomAndChrisPatt.jpg";
import postImg4 from "../img/tom.jpg";
import { Navigate } from "react-router-dom";

const Home = () => {
  const userProfile = "Tom Holland";
  const token = localStorage.getItem("token");

  return (
    <div>
      {!token ? <Navigate replace to="/signin" /> : null}
      {/* STORIES SLIDER AND PROFILE PICTURES */}
      <div className="flex items-center justify-center tablet-n:pl-40">
        <StoriesSlider />
        {/* PROFILE PICTURES */}
        <div className="hidden tablet-n:flex tablet-n:ml-10 ">
          <Link to="/profile">
            <ProfileImg profileImg={profileImg} width={"w-12"} heigh={"h-12"} />
          </Link>
          <div className="ml-2">
            <h3 className=" font-bold">User Profile</h3>
            <p className=" text-slate-500">Name</p>
          </div>
        </div>
      </div>
      {/* POST DIV */}
      <div className="flex flex-col items-center justify-center tablet-n:justify-start">
        <Post
          userProfile={userProfile}
          postImg={postImg}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel labore velit culpa nam explicabo ab alias quibusdam accusamus perspiciatis repudiandae quam nisi delectus, hic facilis? Nulla nihil numquam maxime soluta. Suscipit voluptatibus eveniet ex fuga eaque libero quis ea commodi quod, laboriosam porro, iure optio provident eum a perferendis nostrum?"
          }
          verified={true}
        />
        <Post
          userProfile={userProfile}
          postImg={postImg2}
          verified={true}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel labore velit culpa nam explicabo ab alias quibusdam accusamus perspiciatis repudiandae quam nisi delectus, hic facilis? Nulla nihil numquam maxime soluta. Suscipit voluptatibus eveniet ex fuga eaque libero quis ea commodi quod, laboriosam porro, iure optio provident eum a perferendis nostrum?"
          }
        />
        <Post
          userProfile={userProfile}
          postImg={postImg3}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora?"
          }
        />

        <Post
          userProfile={userProfile}
          postImg={postImg4}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempora?"
          }
        />
      </div>
    </div>
  );
};

export default Home;
