import Navbar from "./components/Navbar";
import Post from "./components/Post";
import StoriesSlider from "./components/StoriesSlider";
import ProfileImg from "./components/ProfileImg";
import profileImg from "./img/tomHolland.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="flex items-center justify-center">
        <StoriesSlider />
        <div className="ml-10 flex">
          <ProfileImg profileImg={profileImg} width={"w-20"} heigh={"h-20"} />
          <div className="ml-2">
            <h3 className=" font-bold">User Profile</h3>
            <p className=" text-slate-500">Name</p>
          </div>
        </div>
      </div> */}
      {/* <div className="flex items-center justify-center">
        <Post />
      </div> */}
    </div>
  );
}

export default App;
