import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SavedPost from "./pages/SavedPost";
import LikedPost from "./pages/LikedPost";
import CreateNewPost from "./pages/CreateNewPost";
import Signin from "./pages/Signin";
import StoriesPage from "./pages/StoriesPage";
import Signup from "./pages/Signup";
import ChangeProfilePhoto from "./pages/ChangeProfilePhoto";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-post" element={<SavedPost />} />
        <Route path="/liked-post" element={<LikedPost />} />
        <Route path="/create-new-post" element={<CreateNewPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/change-profile-photo" element={<ChangeProfilePhoto />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
