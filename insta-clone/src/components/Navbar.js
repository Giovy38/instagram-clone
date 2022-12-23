import logo from "../img/writeLogo.jpg";
import ProfileImg from "./ProfileImg";
import { useState, useEffect } from "react";
import profileImg from "../img/tomHolland.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPlus,
  faHeart,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [iconSetted, setIconSetted] = useState("home");

  useEffect(() => {
    setIconSetted(localStorage.getItem("selectedIcon"));
    if (localStorage.getItem("selectedIcon") === null) {
      setIconSetted("home");
    }
  }, []);

  const setPage = (selection) => {
    localStorage.setItem("selectedIcon", selection);
    setIconSetted(localStorage.getItem("selectedIcon"));
  };

  const token = localStorage.getItem("token");

  return (
    // NAVBAR DIV
    <div className="items-center text-center flex justify-around border-b-2 border-slate-300 border-solid ">
      {/* INSTAGRAM LOGO IMG */}
      <Link to="/">
        <img
          className="w-20 tablet-n:w-[8rem] cursor-pointer"
          src={logo}
          alt="logo-not-found"
          onClick={() => setPage("home")}
        />
      </Link>

      {/* SEARCH INPUT */}
      <input
        className=" bg-slate-200 h-6 w-full hidden mobile-m:block mobile-m:max-w-[8rem] mobile-l:max-w-[10rem] tablet-n:max-w-[20rem] rounded-md text-center"
        type="text"
        placeholder="Cerca"
      />
      {/* ICON DIV */}
      <div className="flex w-40 justify-around items-center tablet-n:w-48">
        <Link to="/">
          <FontAwesomeIcon
            onClick={() => setPage("home")}
            className={
              iconSetted === "home"
                ? "cursor-pointer text-black w-7 "
                : "text-slate-300 w-7 cursor-pointer"
            }
            size="3x"
            icon={faHouse}
          />
        </Link>
        <Link to="/create-new-post">
          <FontAwesomeIcon
            onClick={() => setPage("create")}
            className={
              iconSetted === "create"
                ? "text-white bg-black cursor-pointer rounded-md w-5 h-5  p-1"
                : "text-white bg-slate-300 cursor-pointer rounded-md w-5 h-5  p-1"
            }
            size="3x"
            icon={faPlus}
          />
        </Link>
        <Link to="/liked-post">
          <FontAwesomeIcon
            onClick={() => setPage("liked")}
            className={
              iconSetted === "liked"
                ? "cursor-pointer text-black w-7"
                : "cursor-pointer text-slate-300 w-7"
            }
            size="3x"
            icon={faHeart}
          />
        </Link>
        <Link to="/saved-post">
          <FontAwesomeIcon
            onClick={() => setPage("saved")}
            className={
              iconSetted === "saved"
                ? "cursor-pointer text-black w-5"
                : "cursor-pointer text-slate-300 w-5"
            }
            size="3x"
            icon={faBookmark}
          />
        </Link>
        {token ? (
          <Link onClick={() => setPage("profile")} to="/profile">
            <div
              className={
                iconSetted === "profile"
                  ? "border-2 border-solid border-black p-0.5 rounded-full"
                  : null
              }
            >
              <ProfileImg profileImg={profileImg} width={"w-7"} heigh={"h-7"} />
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
