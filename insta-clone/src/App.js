import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SavedPost from "./pages/SavedPost";
import LikedPost from "./pages/LikedPost";
import CreateNewPost from "./pages/CreateNewPost";
import Signin from "./pages/Signin";
import Stories from "./pages/Stories";
import Signup from "./pages/Signup";
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
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </div>
  );
}

export default App;
