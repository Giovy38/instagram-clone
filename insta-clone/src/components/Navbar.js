import logo from "../img/writeLogo.jpg";
import ProfileImg from "./ProfileImg";
import profileImg from "../img/tomHolland.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPlus,
  faHeart,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [homeClicked, setHomeClicked] = useState(true);
  const [likedClicked, setLikedClicked] = useState(false);
  const [savedClicked, setSavedClicked] = useState(false);

  const selectedPage = (selectedIcon) => {
    // setHomeClicked(true);
    selectedIcon === "home" ? setHomeClicked(true) : setHomeClicked(false);
    selectedIcon === "liked" ? setLikedClicked(true) : setLikedClicked(false);
    selectedIcon === "saved" ? setSavedClicked(true) : setSavedClicked(false);
  };

  return (
    // NAVBAR DIV
    <div className="items-center text-center flex justify-around border-b-2 border-slate-300 border-solid ">
      {/* INSTAGRAM LOGO IMG */}
      <img
        className="w-20 tablet-n:w-[8rem] cursor-pointer"
        src={logo}
        alt="logo-not-found"
      />
      {/* SEARCH INPUT */}
      <input
        className=" bg-slate-200 h-6 w-auto hidden mobile-m:block mobile-m:max-w-[8rem] mobile-l:max-w-[10rem] rounded-md text-center"
        type="text"
        placeholder="Cerca"
      />
      {/* ICON DIV */}
      <div className="flex w-40 justify-around items-center tablet-n:w-48">
        <Link to="/">
          <FontAwesomeIcon
            onClick={() => selectedPage("home")}
            className={
              homeClicked
                ? "cursor-pointer text-black w-7 "
                : "text-slate-300 w-7 cursor-pointer"
            }
            size="3x"
            icon={faHouse}
          />
        </Link>

        <FontAwesomeIcon
          className="text-white bg-slate-300 cursor-pointer rounded-md w-5 h-5  p-1"
          size="3x"
          icon={faPlus}
        />
        <Link to="/liked-post">
          <FontAwesomeIcon
            onClick={() => selectedPage("liked")}
            className={
              likedClicked
                ? "cursor-pointer text-black w-7"
                : "cursor-pointer text-slate-300 w-7"
            }
            size="3x"
            icon={faHeart}
          />
        </Link>

        <Link to="/saved-post">
          <FontAwesomeIcon
            onClick={() => selectedPage("saved")}
            className={
              savedClicked
                ? "cursor-pointer text-black w-5"
                : "cursor-pointer text-slate-300 w-5"
            }
            size="3x"
            icon={faBookmark}
          />
        </Link>

        <ProfileImg profileImg={profileImg} width={"w-7"} heigh={"h-7"} />
      </div>
    </div>
  );
};

export default Navbar;
