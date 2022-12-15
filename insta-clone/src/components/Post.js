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
import { useState } from "react";

const Post = ({ userProfile, postImg, description }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isCommentEmpty, setIsCommentEmpty] = useState(true);
  const [like, setLike] = useState(Math.floor(Math.random() * 100000));

  const handleLike = () => {
    !isLiked ? setLike(like + 1) : setLike(like - 1);
    setIsLiked((current) => !current);
  };

  const handleSaved = () => {
    setIsSaved((current) => !current);
  };

  const handleCommentEmpty = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      setIsCommentEmpty(false);
    } else {
      setIsCommentEmpty(true);
    }
  };

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
            onClick={handleLike}
            className={
              isLiked ? "w-6 h-6 text-red-400" : "w-6 h-6 text-slate-300"
            }
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
          className={isSaved ? "w-6 h-6 text-black" : "w-6 h-6 text-slate-300"}
          onClick={handleSaved}
          size="3x"
          icon={faBookmark}
        />
      </div>
      <p className="ml-3 mt-2">
        Piace a <span className="font-bold">{like}</span> persone{" "}
      </p>
      <p className="ml-3 text-ellipsis line-clamp-5">
        <span className="font-bold">{userProfile}</span>:{" "}
        <span>{description}</span>
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
          onChange={handleCommentEmpty}
          type="text"
          placeholder="Aggiungi un commento..."
        />
        <p
          className={
            isCommentEmpty
              ? "font-bold text-blue-200"
              : "font-bold text-blue-400"
          }
        >
          Pubblica
        </p>
      </div>
    </div>
  );
};

export default Post;
