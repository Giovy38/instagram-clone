import { useEffect, useState } from "react";
import Axios from "axios";
import MyPost from "../components/MyPost";
import { v4 as uuidv4 } from "uuid";

const LikedPost = () => {
  const [data, setData] = useState("");

  const getPost = async () => {
    const response = await Axios.get(
      "https://insta-clone-42ea1-default-rtdb.firebaseio.com/likedPost.json"
    );
    setData(response);
  };

  const fetchLiked = () => {
    const myPosts = [];
    for (let key in data.data) {
      myPosts.push({
        postImg: data.data[key].postImage,
      });
    }

    const reversePost = [...myPosts].reverse();

    return reversePost.map((post) => {
      return (
        <div key={uuidv4()}>
          <MyPost className="flex-[50%]" myPostImg={post.postImg} />
        </div>
      );
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className=" flex items-center justify-center flex-col tablet-n:flex-row tablet-n:flex-wrap tablet-n:gap-3 laptop-n:justify-start laptop-n:ml-12 ">
      {fetchLiked()}
    </div>
  );
};

export default LikedPost;
