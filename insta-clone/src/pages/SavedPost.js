import { useEffect, useState } from "react";
import Axios from "axios";
import MyPost from "../components/MyPost";
import { v4 as uuidv4 } from "uuid";
import ErrorScreen from "../components/ErrorScreen";
import LoadingScreen from "../components/LoadingScreen";

const SavedPost = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPost = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await Axios.get(
        "https://insta-clone-42ea1-default-rtdb.firebaseio.com/savedPost.json"
      );
      setData(response);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
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

  return error ? (
    <ErrorScreen />
  ) : loading ? (
    <LoadingScreen />
  ) : (
    <div className=" flex items-center justify-center flex-col tablet-n:flex-row tablet-n:flex-wrap tablet-n:gap-3 laptop-n:justify-start laptop-n:ml-12 ">
      <h2 className="text-center w-full text-2xl font-bold">Post salvati:</h2>
      {fetchLiked()}
    </div>
  );
};

export default SavedPost;
