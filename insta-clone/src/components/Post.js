import ProfileImg from "./ProfileImg";
import profileImg from "../img/tomHolland.jpg";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import SingleComment from "./SingleComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faFaceSmile,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const userProfile = "Tom Holland";

const Post = ({
  postImg,
  description,
  verified = true,
  userProfiles = userProfile,
  profileImag = profileImg,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isCommentEmpty, setIsCommentEmpty] = useState(true);
  const [like, setLike] = useState(Math.floor(Math.random() * 100000));
  const [commentText, setCommentText] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleLike = () => {
    !isLiked ? setLike(like + 1) : setLike(like - 1);
    setIsLiked((current) => !current);
    fetchLikedPost();
  };

  const fetchLikedPost = () => {
    try {
      Axios.post(
        `https://insta-clone-42ea1-default-rtdb.firebaseio.com/likedPost.json`,
        { postImage: postImg }
      );
    } catch (error) {
      alert(error);
    }
  };

  const fetchSavedPost = () => {
    try {
      Axios.post(
        `https://insta-clone-42ea1-default-rtdb.firebaseio.com/savedPost.json`,
        { postImage: postImg }
      );
    } catch (error) {
      alert(error);
    }
  };

  const handleSaved = () => {
    setIsSaved((current) => !current);
    fetchSavedPost();
  };

  const handleCommentEmpty = (e) => {
    e.preventDefault();
    if (e.target.value.trim() !== "") {
      setIsCommentEmpty(false);
      setCommentText(e.target.value);
    } else {
      setIsCommentEmpty(true);
    }
  };

  const renderComments = () => {
    return commentList.map((comment, index) => {
      return <SingleComment textComment={comment.comment} key={index} />;
    });
  };

  const addComment = () => {
    if (commentText.trim() !== "") {
      setCommentList([...commentList, { id: uuidv4(), comment: commentText }]);
      setCommentText("");
    }
  };

  return (
    // CONTAINER DIV
    <div className="mt-6 mb-2 border-2 border-solid border-slate-400 rounded-md w-full max-w-[300px] max-h-[75vh] pb-2">
      {/* FLEX DIV TO ORIZZONTAL OBJ */}
      <div className="flex items-center justify-start pl-3 pt-1">
        <ProfileImg profileImg={profileImag} width={"w-10"} heigh={"h-10"} />
        <div className="flex items-center gap-1">
          <h3 className="ml-2 font-bold">{userProfiles}</h3>
          {verified ? (
            <FontAwesomeIcon
              className="text-blue-400"
              size="1x"
              icon={faCircleCheck}
            />
          ) : null}
        </div>
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
        <span className="font-bold">{userProfiles}</span>:{" "}
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
          value={commentText}
          className="outline-none decoration-slate-400 "
          onChange={handleCommentEmpty}
          type="text"
          placeholder="Aggiungi un commento..."
        />
        <p
          onClick={addComment}
          className={
            isCommentEmpty
              ? "font-bold text-blue-200"
              : "font-bold text-blue-400 cursor-pointer"
          }
        >
          Pubblica
        </p>
      </div>
      {/* comment div */}
      <div className="ml-2 mt-1 flex flex-col gap-2">{renderComments()}</div>
    </div>
  );
};

export default Post;
