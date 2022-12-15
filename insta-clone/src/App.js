import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SavedPost from "./pages/SavedPost";
import LikedPost from "./pages/LikedPost";
import CreateNewPost from "./pages/CreateNewPost";
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
      </Routes>
    </div>
  );
}

export default App;
