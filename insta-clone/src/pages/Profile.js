import ProfileImg from "../components/ProfileImg";
import profileImg from "../img/tomHolland.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCircleCheck,
  faPlusCircle,
  faSquare,
  faBookmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import MyPost from "../components/MyPost";
import myPostImg from "../img/tomAndChrisHemsw.jpg";
import myPostImg2 from "../img/tomAndElisabeth.jpg";
import myPostImg3 from "../img/tomAndAndrew.jpg";
import myPostImg4 from "../img/tom.jpg";

const Profile = () => {
  let userNick = "Tom Holland2013";
  let name = "Tom Holland";
  let post = 0,
    follow = Math.floor(Math.random() * 10000),
    followers = Math.floor(Math.random() * 10000);
  let description =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, accusantium?";

  return (
    <div className="mt-3 ml-3 mr-3 tablet-n:flex tablet-n:justify-center items-center flex-col">
      {/* DIV WITH IMG AND USER INFO  */}
      <div className="flex items-start justify-start">
        <ProfileImg profileImg={profileImg} width={"w-16"} heigh={"h-16"} />
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
              Post: <span className="font-bold">{post}</span>
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
        <MyPost className="flex-[50%]" myPostImg={myPostImg} />
        <MyPost className="flex-[50%]" myPostImg={myPostImg2} />
        <MyPost className="flex-[50%]" myPostImg={myPostImg3} />
        <MyPost className="flex-[50%]" myPostImg={myPostImg4} />
      </div>
    </div>
  );
};

export default Profile;
