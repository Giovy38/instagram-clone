import ProfileImg from "../components/ProfileImg";
import profileImg from "../img/tomHolland.jpg";
import { useState, useEffect } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCircleCheck,
  faPlusCircle,
  faSquare,
  faBookmark,
  faHeart,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import MyPost from "../components/MyPost";
import ErrorScreen from "../components/ErrorScreen";
import LoadingScreen from "../components/LoadingScreen";

const Profile = () => {
  const [data, setData] = useState("");
  const [postN, setPostN] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPost = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await Axios.get(
        "https://insta-clone-42ea1-default-rtdb.firebaseio.com/post.json"
      );
      setData(response);
      setLoading(false);
      setError(false);
      if (response.data !== undefined && response.data !== null) {
        let numberPost = Object.values(response.data);
        setPostN(numberPost.length);
      }
    } catch (error) {
      setError(true);
    }
  };

  const fetchPost = () => {
    const myPosts = [];
    for (let key in data.data) {
      myPosts.push({
        postId: data.data[key].postId,
        postImg: data.data[key].postImgUrl,
        description: data.data[key].postDescription,
        verified: true,
      });
    }

    const reversePost = [...myPosts].reverse();

    return reversePost.map((post) => {
      return (
        <div key={post.postId}>
          <MyPost className="flex-[50%]" myPostImg={post.postImg} />
        </div>
      );
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  let userNick = "Tom Holland2013";
  let name = "Tom Holland";
  let follow = Math.floor(Math.random() * 10000);
  let followers = Math.floor(Math.random() * 10000);
  let description =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, accusantium?";

  return error ? (
    <ErrorScreen />
  ) : loading ? (
    <LoadingScreen />
  ) : (
    <div className="mt-3 ml-3 mr-3 tablet-n:flex tablet-n:justify-center items-center flex-col">
      {/* DIV WITH IMG AND USER INFO  */}
      <div className="flex items-start justify-start">
        {/* IMG AND LOGOUT */}

        <div>
          <ProfileImg profileImg={profileImg} width={"w-16"} heigh={"h-16"} />

          <div>
            <FontAwesomeIcon
              className="text-red-700"
              size="1x"
              icon={faCircleXmark}
            />{" "}
            <Link to="/logout">
              <span className="text-xs">Logout</span>
            </Link>
          </div>
        </div>

        {/* DIV WITH NICK AND USER INFO */}
        <div className="ml-2">
          <h6>
            {userNick}{" "}
            <FontAwesomeIcon
              className="text-blue-400"
              size="1x"
              icon={faCircleCheck}
            />
          </h6>
          <div className="mobile-m:flex mobile-m:gap-2">
            <p>
              {" "}
              Post: <span className="font-bold">{postN}</span>
            </p>
            <p>
              Followers: <span className="font-bold">{followers}</span>
            </p>
            <p>
              follow: <span className="font-bold">{follow}</span>
            </p>
          </div>
          {/* DESCRIPTION DIV */}
          <div className="mt-6 w-auto max-w-[13rem] mobile-m:max-w-[17rem] ">
            <h6 className="font-semibold">{name}</h6>
            <p>{description}</p>
          </div>
        </div>
      </div>
      {/* ADD NEW POST DIV */}
      <div className="mt-3 flex flex-col items-start border-b-2 border-slate-300 border-solid w-full pb-10 tablet-n:items-center">
        <FontAwesomeIcon
          className="text-white bg-slate-100 rounded-full border-2 border-solid border-slate-300 cursor-pointer"
          size="3x"
          icon={faPlusCircle}
        />
        <p className="font-semibold">Nuovo</p>
      </div>
      {/* ICON DIV */}
      <div className="flex items-center justify-center gap-4 w-full tablet-n:gap-16 laptop-n:gap-40">
        <Link to="/profile">
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon className="" size="1x" icon={faSquare} />
            <span>Post</span>
          </div>
        </Link>

        <Link to="/liked-post">
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon className="" size="1x" icon={faHeart} />
            <span>Liked Post</span>
          </div>
        </Link>

        <Link to="/saved-post">
          <div className="flex gap-1 items-center">
            {" "}
            <FontAwesomeIcon className="" size="1x" icon={faBookmark} />
            <span>Saved Post</span>
          </div>
        </Link>
      </div>
      <div className=" flex items-center justify-center flex-col tablet-n:flex-row tablet-n:flex-wrap tablet-n:gap-3 laptop-n:justify-start laptop-n:ml-12 ">
        {fetchPost()}
      </div>
    </div>
  );
};

export default Profile;
