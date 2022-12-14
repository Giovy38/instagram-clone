import ProfileImg from "./ProfileImg";
import profileImg from "../img/tomHolland.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

const Post = ({ userProfile, postImg, description }) => {
  let like = Math.floor(Math.random() * 100000);

  return (
    // CONTAINER DIV
    <div className="mt-6 mb-2 border-2 border-solid border-slate-400 rounded-md w-full max-w-[300px] max-h-[75vh] pb-2">
      {/* FLEX DIV TO ORIZZONTAL OBJ */}
      <div className="flex items-center justify-start pl-3 pt-1">
        <ProfileImg profileImg={profileImg} width={"w-10"} heigh={"h-10"} />
        <h3 className="ml-2 font-bold">{userProfile}</h3>
      </div>
      {/* IMG OF POST */}
      <div className="max-h-[222px]  overflow-hidden">
        <img className="mt-2" src={postImg} alt="Error 404 img not fount" />
      </div>
      {/* ICON DIV */}
      <div className="mt-2 ml-1 flex items-center justify-between px-2 gap-6">
        {/* 3 ICON DIV , LIKE, COMMENT, SEND*/}
        <div className="flex items-center justify-start gap-6">
          <FontAwesomeIcon
            className="w-6 h-6 text-slate-300"
            size="3x"
            icon={faHeart}
          />
          <FontAwesomeIcon
            className="w-6 h-6 text-slate-300"
            size="3x"
            icon={faComment}
          />
          <FontAwesomeIcon
            className="w-6 h-6 text-slate-300"
            size="3x"
            icon={faPaperPlane}
          />
        </div>

        {/* BOOKMARK ICON */}

        <FontAwesomeIcon
          className="w-6 h-6 text-slate-300"
          size="3x"
          icon={faBookmark}
        />
      </div>
      <p className="ml-3 mt-2">
        Piace a <span className="font-bold">{like}</span> persone{" "}
      </p>
      <p className="ml-3">
        <span className="font-bold">{userProfile}</span>:{" "}
        <span className="text-ellipsis line-clamp-5">{description}</span>
      </p>
      {/* DIV COMMENT */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <FontAwesomeIcon
          className="w-6 h-6 text-slate-300 "
          size="3x"
          icon={faFaceSmile}
        />
        <input
          className="outline-none decoration-slate-400 "
          type="text"
          placeholder="Aggiungi un commento..."
        />
        <p className="font-bold text-blue-200">Pubblica</p>
      </div>
    </div>
  );
};

export default Post;
