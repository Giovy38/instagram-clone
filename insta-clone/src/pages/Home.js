import StoriesSlider from "../components/StoriesSlider";
import ProfileImg from "../components/ProfileImg";
import profileImg from "../img/tomHolland.jpg";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AllPosts from "../components/AllPosts";

const Home = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");

  const getPost = async () => {
    const response = await Axios.get(
      "https://insta-clone-42ea1-default-rtdb.firebaseio.com/post.json"
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getPost();
  }, []);

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
        <AllPosts data={data} />
      </div>
    </div>
  );
};

export default Home;
