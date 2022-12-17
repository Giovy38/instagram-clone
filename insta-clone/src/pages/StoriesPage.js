import Stories from "react-insta-stories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StoriesPage = () => {
  // const stories = [
  //   "https://www.optimagazine.com/wp-content/uploads/2021/07/Robert-Downey-Jr.-e1626377309135.jpg",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8swdch_NcWn2kaDDvRzacDYQFKAatF3XpDg&usqp=CAU",
  //   "https://redcapes.it/wp-content/uploads/2019/03/image1.jpeg",
  //   "https://www.martinasfumetti.it/103145-large_default/DVD-Iron-Man-2-edizione-speciale-2-dvd-slip-case-Robert-Downey-Jr--NUOVO-Gd55.jpg",
  // ];

  const stories = [
    {
      url: "https://www.optimagazine.com/wp-content/uploads/2021/07/Robert-Downey-Jr.-e1626377309135.jpg",
      duration: 5000,
      header: {
        heading: "Robert Downey Jr",
        subheading: "Posted 4h ago",
        profileImage:
          "https://www.projectnerd.it/wp-content/uploads/2018/04/downeyjr_PJN.jpg",
      },
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8swdch_NcWn2kaDDvRzacDYQFKAatF3XpDg&usqp=CAU",
      duration: 5000,
      header: {
        heading: "Robert Downey Jr",
        subheading: "Posted 2h ago",
        profileImage:
          "https://www.projectnerd.it/wp-content/uploads/2018/04/downeyjr_PJN.jpg",
      },
    },
    {
      url: "https://redcapes.it/wp-content/uploads/2019/03/image1.jpeg",
      duration: 5000,
      header: {
        heading: "Robert Downey Jr",
        subheading: "Posted 1h ago",
        profileImage:
          "https://www.projectnerd.it/wp-content/uploads/2018/04/downeyjr_PJN.jpg",
      },
    },
    {
      url: "https://www.martinasfumetti.it/103145-large_default/DVD-Iron-Man-2-edizione-speciale-2-dvd-slip-case-Robert-Downey-Jr--NUOVO-Gd55.jpg",
      duration: 5000,
      header: {
        heading: "Robert Downey Jr",
        subheading: "Posted 30m ago",
        profileImage:
          "https://www.projectnerd.it/wp-content/uploads/2018/04/downeyjr_PJN.jpg",
      },
    },
  ];

  const [isLiked, setIsLiked] = useState(false);
  const like = () => {
    setIsLiked((current) => !current);
  };
  const navigate = useNavigate();

  const endStories = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-start flex-col mt-2 bg-[#111111] h-[100vh]">
      <div className=" w-full flex items-end justify-end pr-4 pt-2">
        <Link to="/">
          <FontAwesomeIcon
            className="text-white h-6 w-6"
            size="3x"
            icon={faXmark}
          />
        </Link>
      </div>
      <Stories
        stories={stories}
        defaultInterval={8000}
        width={300}
        keyboardNavigation={true}
        preventDefault
        onAllStoriesEnd={endStories}
        isPaused
        height={500}
      />
      <p className="text-white pb-3">
        *Usa i tasti freccia per muoverti tra le storie
      </p>
      <div className="w-[300px] flex items-center justify-start gap-2">
        <input
          placeholder="Scrivi qualcosa"
          className="p-3 h-10 w-full rounded-2xl outline-none"
          type="text"
        />
        <FontAwesomeIcon
          onClick={like}
          className={
            isLiked
              ? "w-6 h-6 text-red-400 cursor-pointer"
              : "w-6 h-6 text-white cursor-pointer"
          }
          size="3x"
          icon={faHeart}
        />
        <FontAwesomeIcon
          className={"w-6 h-6 text-white cursor-pointer"}
          size="3x"
          icon={faPaperPlane}
        />
      </div>
    </div>
  );
};

export default StoriesPage;
