import logo from "../img/writeLogo.jpg";
import ProfileImg from "./ProfileImg";
import profileImg from "../img/tomHolland.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPlus,
  faHeart,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="items-center text-center flex justify-around border-b-2 border-slate-300 border-solid">
      <img className="w-40 cursor-pointer" src={logo} alt="logo-not-found" />
      <input
        className=" bg-slate-200 h-6 rounded-md text-center"
        type="text"
        placeholder="Cerca"
      />

      <div className="flex w-48 justify-around items-center">
        <FontAwesomeIcon
          className="cursor-pointer text-slate-300 w-7"
          size="3x"
          icon={faHouse}
        />
        <FontAwesomeIcon
          className="text-white bg-slate-300 cursor-pointer rounded-md w-5 h-5  p-1"
          size="3x"
          icon={faPlus}
        />
        <FontAwesomeIcon
          className="cursor-pointer text-slate-300 w-7"
          size="3x"
          icon={faHeart}
        />
        <FontAwesomeIcon
          className="cursor-pointer text-slate-300 w-5"
          size="3x"
          icon={faBookmark}
        />
        <ProfileImg profileImg={profileImg} width={"w-7"} heigh={"h-7"} />
      </div>
    </div>
  );
};

export default Navbar;
