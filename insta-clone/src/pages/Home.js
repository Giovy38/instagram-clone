import StoriesSlider from "../components/StoriesSlider";
import ProfileImg from "../components/ProfileImg";
import profileImage from "../img/tomHolland.jpg";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Post from "../components/Post";
import AllPosts from "../components/AllPosts";
import ErrorScreen from "../components/ErrorScreen";
import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPost = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await Axios.get(
        "https://insta-clone-42ea1-default-rtdb.firebaseio.com/post.json"
      );
      setData(response.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return error ? (
    <ErrorScreen />
  ) : loading ? (
    <LoadingScreen />
  ) : (
    <div>
      {!token ? <Navigate replace to="/signin" /> : null}
      {/* STORIES SLIDER AND PROFILE PICTURES */}
      <div className="flex items-center justify-center tablet-n:pl-40">
        <StoriesSlider />
        {/* PROFILE PICTURES */}
        <div className="hidden tablet-n:flex tablet-n:ml-10 ">
          <Link to="/profile">
            <ProfileImg
              profileImg={profileImage}
              width={"w-12"}
              heigh={"h-12"}
            />
          </Link>
          <div className="ml-2">
            <h3 className=" font-bold">TomHolland</h3>
            <p className=" text-slate-500">Tom</p>
          </div>
        </div>
      </div>
      {/* POST DIV */}

      <div className="flex flex-col items-center justify-center tablet-n:justify-start">
        <AllPosts data={data} />
        {/* fake post 1  */}
        <Post
          postImg={
            "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/MJU6TPYHOVAJFOQHKMZKYPUJXA.jpg"
          }
          description={"Me and my friend"}
          verified={true}
          userProfiles={"Mark Ruffalo"}
          profileImag={
            "https://www.themoviedb.org/t/p/w500/6LL1n6NvLpiEfu3trtsUI9VJcbV.jpg"
          }
        />
        {/* fake post 2  */}

        <Post
          postImg={
            "https://www.justnerd.it/wp-content/uploads/2019/06/thor-grasso-avengers-endgame.jpg"
          }
          description={"I'm not sure Mc Donald fell me good enough"}
          verified={false}
          userProfiles={"chris hemsworth"}
          profileImag={
            "https://cdn.bestmovie.it/wp-content/uploads/2021/02/GettyImages-1155332268-696x992.jpg"
          }
        />
        {/* fake post 3  */}

        <Post
          postImg={
            "https://i.pinimg.com/736x/0a/34/da/0a34da0c9ad04b68714d3d758ab36858.jpg"
          }
          description={"We look forward to seeing you at the movies"}
          verified={true}
          userProfiles={"elizabetholesn"}
          profileImag={
            "https://nationaltoday.com/wp-content/uploads/2022/10/456840961-min.jpg"
          }
        />
        {/* fake post 4  */}

        <Post
          postImg={
            "https://people.com/thmb/ulWD1v7Dr8rUNk4_RLQlTjezTA8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(731x379:733x381)/tom-hiddleston-chris-hemsworth-tout-830069ca94ad4c48a12d6f069fd40b95.jpg"
          }
          description={
            "This is so unlike you, brother. So clandestine. Are you sure you wouldn't rather just punch your way out?"
          }
          verified={true}
          userProfiles={"tom hiddleston"}
          profileImag={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg/1200px-Tom_Hiddleston_%2836109110291%29_%28cropped%29.jpg"
          }
        />
        {/* fake post 5  */}

        <Post
          postImg={
            "https://media.tenor.com/jLGgaovcz_MAAAAC/kledi-non-provare-a-imitare-billy-ballo.gif"
          }
          description={"Non provare ad imitare Billy Ballo, sii te stesso!"}
          verified={false}
          userProfiles={"NotImitateBillyBalloOfficial"}
          profileImag={
            "https://m.media-amazon.com/images/M/MV5BYWU4MmExMjctMGFiOC00ZjljLTk3OTItODdlMGJhM2Q0N2NmXkEyXkFqcGdeQXVyMzQ0NTk5NzU@._V1_UY1200_CR22,0,630,1200_AL_.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Home;
