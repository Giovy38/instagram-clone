import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SavedPost from "./pages/SavedPost";
import LikedPost from "./pages/LikedPost";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-post" element={<SavedPost />} />
        <Route path="/liked-post" element={<LikedPost />} />
      </Routes>
    </div>
  );
}

export default App;
